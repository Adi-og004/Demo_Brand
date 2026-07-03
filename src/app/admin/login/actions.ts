'use server'

import { revalidatePath } from 'next/cache'
import { redirect } from 'next/navigation'
import { createClient } from '@/utils/supabase/server'

export async function login(formData: FormData) {
  const supabase = await createClient()

  const data = {
    email: formData.get('email') as string,
    password: formData.get('password') as string,
  }

  const { error } = await supabase.auth.signInWithPassword(data)

  if (error) {
    // We could return this error to show in the UI
    // For simplicity, we just redirect back with an error param
    redirect('/admin/login?error=Invalid credentials')
  }

  revalidatePath('/admin', 'layout')
  redirect('/admin')
}
