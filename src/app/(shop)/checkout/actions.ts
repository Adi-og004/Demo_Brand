"use server";

import { createClient } from "@/utils/supabase/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);
const ownerEmail = process.env.OWNER_EMAIL || "admin@example.com";

export async function processCheckout(formData: FormData, cartItems: any[], totalAmount: number) {
  const supabase = await createClient();

  const name = formData.get("name") as string;
  const email = formData.get("email") as string;
  const phone = formData.get("phone") as string;
  const address = formData.get("address") as string;

  try {
    // 1. Upsert Customer
    let customerId;
    const { data: existingCustomer } = await supabase
      .from("customers")
      .select("id")
      .eq("email", email)
      .single();

    if (existingCustomer) {
      customerId = existingCustomer.id;
      // Update phone just in case
      await supabase.from("customers").update({ name, phone }).eq("id", customerId);
    } else {
      const { data: newCustomer, error: customerError } = await supabase
        .from("customers")
        .insert({ name, email, phone })
        .select()
        .single();
      
      if (customerError) throw new Error("Failed to create customer: " + customerError.message);
      customerId = newCustomer.id;
    }

    // 2. Create Order
    const { data: newOrder, error: orderError } = await supabase
      .from("orders")
      .insert({
        customer_id: customerId,
        total_amount: totalAmount,
        shipping_address: address,
        status: "pending"
      })
      .select()
      .single();

    if (orderError) throw new Error("Failed to create order: " + orderError.message);
    const orderId = newOrder.id;

    // 3. Create Order Items
    // Note: We need to find the product UUIDs by name, because the cart currently uses string IDs like 'aura-over-ear'
    // Let's fetch the actual products from the DB to map them correctly.
    const { data: dbProducts } = await supabase.from("products").select("id, name");
    
    const orderItems = cartItems.map(item => {
      // Try to find the exact DB product ID by matching the name
      const dbProduct = dbProducts?.find(p => p.name === item.name);
      
      return {
        order_id: orderId,
        product_id: dbProduct ? dbProduct.id : null, 
        quantity: item.quantity,
        price_at_time: item.price
      };
    }).filter(item => item.product_id !== null); // Only insert if we found the product

    if (orderItems.length > 0) {
      const { error: itemsError } = await supabase
        .from("order_items")
        .insert(orderItems);
      
      if (itemsError) throw new Error("Failed to add items to order: " + itemsError.message);
    }

    // Send Emails
    try {
      if (process.env.RESEND_API_KEY) {
        // Customer Email
        await resend.emails.send({
          from: "Aura Audio <onboarding@resend.dev>",
          to: email,
          subject: "Your Aura Audio Order Confirmation",
          html: `<h1>Thank you for your order, ${name}!</h1><p>We have successfully received your order for $${totalAmount.toFixed(2)}. We will process it shortly.</p>`
        });
        
        // Owner Email
        await resend.emails.send({
          from: "Aura Audio Alerts <onboarding@resend.dev>",
          to: ownerEmail,
          subject: `New Order Received - $${totalAmount.toFixed(2)}`,
          html: `<h1>New Order Alert</h1><p><strong>Customer:</strong> ${name} (${email})</p><p><strong>Phone:</strong> ${phone}</p><p><strong>Address:</strong> ${address}</p><p><strong>Total:</strong> $${totalAmount.toFixed(2)}</p>`
        });
      } else {
        console.warn("RESEND_API_KEY is not set. Emails were not sent.");
      }
    } catch (emailError) {
      console.error("Failed to send emails:", emailError);
      // We don't fail the whole checkout if emails fail.
    }

    return { success: true };

  } catch (error: any) {
    console.error("Checkout Error:", error);
    return { success: false, error: error.message };
  }
}
