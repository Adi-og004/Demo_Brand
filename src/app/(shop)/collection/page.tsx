"use client";

import Image from "next/image";
import { useCart } from "@/context/CartContext";

const products = [
  {
    id: "aura-over-ear",
    name: "Aura Over-Ear",
    tagline: "Flagship",
    price: 549,
    image: "/products/aura-overear.png",
    description:
      "Studio-grade fidelity engineered into an aerospace aluminum frame. Active noise cancellation that shapes the void, letting only the music exist.",
    specs: [
      { label: "Driver", value: "50mm Beryllium" },
      { label: "Frequency", value: "4 Hz – 40 kHz" },
      { label: "Impedance", value: "32 Ω" },
      { label: "ANC", value: "Adaptive Hybrid" },
      { label: "Battery", value: "60 hrs" },
      { label: "Codec", value: "LDAC / aptX HD" },
      { label: "Weight", value: "264 g" },
      { label: "Connectivity", value: "BT 5.4 + USB-C" },
    ],
    badge: "Best Seller",
  },
  {
    id: "aura-on-ear",
    name: "Aura On-Ear",
    tagline: "Commuter",
    price: 349,
    image: "/products/aura-onear.png",
    description:
      "Compact, foldable, and feather-light. Designed for the urban commute without compromising on detail or clarity.",
    specs: [
      { label: "Driver", value: "40mm Dynamic" },
      { label: "Frequency", value: "10 Hz – 30 kHz" },
      { label: "Impedance", value: "24 Ω" },
      { label: "ANC", value: "Active (3-mode)" },
      { label: "Battery", value: "45 hrs" },
      { label: "Codec", value: "AAC / aptX" },
      { label: "Weight", value: "198 g" },
      { label: "Connectivity", value: "BT 5.3 + 3.5mm" },
    ],
    badge: null,
  },
  {
    id: "aura-pods",
    name: "Aura Pods",
    tagline: "True Wireless",
    price: 249,
    image: "/products/aura-pods.png",
    description:
      "Ultra-low latency true wireless earbuds with IP55 sweat resistance. Bass-forward tuning engineered for movement.",
    specs: [
      { label: "Driver", value: "11mm Graphene" },
      { label: "Frequency", value: "20 Hz – 20 kHz" },
      { label: "ANC", value: "Hybrid (2-mic)" },
      { label: "Battery", value: "9 hrs + 32 hrs case" },
      { label: "Latency", value: "38 ms" },
      { label: "Codec", value: "LC3 / AAC" },
      { label: "Rating", value: "IP55" },
      { label: "Connectivity", value: "BT 5.4" },
    ],
    badge: "New",
  },
  {
    id: "aura-resonance",
    name: "Aura Resonance",
    tagline: "Spatial Speaker",
    price: 449,
    image: "/products/aura-speaker.png",
    description:
      "360° spatial audio rendered through aluminum and woven acoustics. Fills the room with immersive, room-corrected sound.",
    specs: [
      { label: "Drivers", value: "2 × woofer + 3 × tweeter" },
      { label: "Output", value: "80W RMS" },
      { label: "Spatial", value: "Dolby Atmos" },
      { label: "Battery", value: "18 hrs" },
      { label: "Connectivity", value: "Wi-Fi 6 + BT 5.3" },
      { label: "AirPlay", value: "AirPlay 2" },
      { label: "Rating", value: "IPX4" },
      { label: "Weight", value: "1.8 kg" },
    ],
    badge: null,
  },
];

const accessories = [
  {
    id: "aura-stand",
    name: "Aura Stand",
    tagline: "Charging Dock",
    price: 129,
    image: "/products/aura-stand.png",
    description: "Sculptural wireless charging dock. Qi2 compatible.",
    specs: [
      { label: "Charging", value: "15W Qi2" },
      { label: "Material", value: "Brushed Aluminum" },
      { label: "Cable", value: "USB-C (included)" },
    ],
  },
  {
    id: "aura-link",
    name: "Aura Link Cable",
    tagline: "USB-C Audio",
    price: 49,
    image: "/products/aura-cable.png",
    description: "Braided Hi-Res USB-C to USB-C audio cable. 1.5m.",
    specs: [
      { label: "Length", value: "1.5 m" },
      { label: "Shielding", value: "OFC + Silver" },
      { label: "Spec", value: "USB 3.2 / Hi-Res" },
    ],
  },
];

export default function Collection() {
  const { addToCart } = useCart();

  return (
    <div className="pt-24 md:pt-32 pb-margin-desktop px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto w-full">

      {/* ─── Page Header ─── */}
      <section className="mb-16 text-center">
        <span className="font-label-mono text-label-mono text-primary uppercase tracking-widest mb-4 block">
          The Collection
        </span>
        <h1 className="font-display-lg text-display-lg text-on-surface mb-4">
          Engineered for Silence.
        </h1>
        <p className="font-body-md text-body-md text-on-surface-variant max-w-xl mx-auto">
          Every Aura product is precision-milled from aerospace-grade aluminum and tuned by Grammy-winning engineers.
        </p>
      </section>

      {/* ─── Featured Flagship ─── */}
      <section className="mb-20 relative rounded-2xl overflow-hidden shadow-[0px_20px_60px_rgba(0,0,0,0.6)] bg-surface-container-lowest border border-outline-variant group">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
          <div className="relative h-[400px] lg:h-[560px] bg-surface-container-low flex items-center justify-center overflow-hidden">
            <Image
              src="/products/aura-overear.png"
              alt="Aura Over-Ear"
              fill
              className="object-contain p-8 transition-transform duration-700 group-hover:scale-105"
              priority
            />
          </div>
          <div className="p-8 lg:p-12 flex flex-col justify-center">
            <div className="flex items-center gap-3 mb-4">
              <span className="font-label-mono text-label-mono text-primary uppercase tracking-widest">
                Flagship Model
              </span>
              <span className="font-label-mono text-[10px] uppercase tracking-widest bg-primary/10 text-primary border border-primary/30 px-2 py-0.5 rounded-full">
                Best Seller
              </span>
            </div>
            <h2 className="font-display-lg text-display-lg text-on-surface mb-2">
              Aura Over-Ear
            </h2>
            <p className="font-headline-lg text-headline-lg text-primary mb-6">$549</p>
            <p className="font-body-md text-on-surface-variant mb-8 max-w-md">
              Studio-grade fidelity engineered into an aerospace aluminum frame. Active noise cancellation that shapes the void, letting only the music exist.
            </p>

            {/* Spec chips */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-8">
              {[
                { icon: "graphic_eq", label: "50mm Beryllium" },
                { icon: "noise_aware", label: "Adaptive ANC" },
                { icon: "battery_full", label: "60 hrs" },
                { icon: "bluetooth", label: "BT 5.4 + LDAC" },
              ].map((chip) => (
                <div key={chip.label} className="flex flex-col items-center gap-1.5 p-3 rounded-lg bg-surface-container border border-outline-variant/50 text-center">
                  <span className="material-symbols-outlined text-primary text-lg">{chip.icon}</span>
                  <span className="font-label-mono text-[10px] text-on-surface-variant uppercase tracking-wider">{chip.label}</span>
                </div>
              ))}
            </div>

            <div className="flex gap-4">
              <button 
                onClick={() => addToCart({ id: "aura-over-ear", name: "Aura Over-Ear", price: 549, quantity: 1, image: "/products/aura-overear.png" })}
                className="bg-primary text-on-primary font-label-mono text-label-mono px-8 py-4 rounded-full hover:bg-opacity-90 transition-all flex items-center gap-2 shadow-[0_0_15px_rgba(152,203,255,0.4)]"
              >
                Add to Cart
                <span className="material-symbols-outlined text-sm">shopping_bag</span>
              </button>
              <button className="bg-surface border border-outline text-on-surface font-label-mono text-label-mono px-8 py-4 rounded-full hover:border-primary hover:text-primary transition-colors">
                Full Specs
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* ─── Product Grid ─── */}
      <section className="mb-20">
        <div className="flex items-center justify-between mb-8">
          <h2 className="font-headline-lg text-headline-lg text-on-surface">All Products</h2>
          <span className="font-label-mono text-label-mono text-on-surface-variant uppercase tracking-widest">
            {products.length} products
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {products.map((product) => (
            <div
              key={product.id}
              className="group rounded-2xl overflow-hidden bg-surface-container-lowest border border-outline-variant shadow-[0px_10px_30px_rgba(0,0,0,0.4)] hover:-translate-y-1 hover:shadow-[0px_20px_50px_rgba(0,0,0,0.5)] transition-all duration-400 ease-out"
            >
              {/* Image */}
              <div className="relative h-[320px] bg-surface-container-low overflow-hidden">
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  className="object-contain p-6 transition-transform duration-700 group-hover:scale-105"
                />
                {product.badge && (
                  <span className="absolute top-4 left-4 font-label-mono text-[10px] uppercase tracking-widest bg-primary/10 text-primary border border-primary/30 px-3 py-1 rounded-full backdrop-blur-sm">
                    {product.badge}
                  </span>
                )}
              </div>

              {/* Info */}
              <div className="p-6">
                <div className="flex justify-between items-start mb-3">
                  <div>
                    <span className="font-label-mono text-[10px] text-primary uppercase tracking-widest block mb-1">
                      {product.tagline}
                    </span>
                    <h3 className="font-headline-lg-mobile text-headline-lg-mobile text-on-surface">
                      {product.name}
                    </h3>
                  </div>
                  <span className="font-headline-lg-mobile text-headline-lg-mobile text-primary">
                    ${product.price}
                  </span>
                </div>

                <p className="font-body-sm text-body-sm text-on-surface-variant mb-5">
                  {product.description}
                </p>

                {/* Specs Table */}
                <div className="bg-surface-container rounded-lg border border-outline-variant/50 overflow-hidden mb-5">
                  <div className="grid grid-cols-2 divide-x divide-outline-variant/30">
                    {product.specs.map((spec, idx) => (
                      <div
                        key={spec.label}
                        className={`px-4 py-2.5 ${
                          idx >= 2 ? "border-t border-outline-variant/30" : ""
                        }`}
                      >
                        <span className="font-label-mono text-[10px] text-on-surface-variant uppercase tracking-wider block">
                          {spec.label}
                        </span>
                        <span className="font-body-sm text-body-sm text-on-surface font-medium">
                          {spec.value}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* CTA */}
                <div className="flex gap-3">
                  <button 
                    onClick={() => addToCart({ id: product.id, name: product.name, price: product.price, quantity: 1, image: product.image })}
                    className="flex-1 bg-primary text-on-primary font-label-mono text-label-mono py-3 rounded-full hover:bg-opacity-90 transition-all flex items-center justify-center gap-2 shadow-[0_0_10px_rgba(152,203,255,0.3)]"
                  >
                    Add to Cart
                    <span className="material-symbols-outlined text-sm">add_shopping_cart</span>
                  </button>
                  <button className="px-4 py-3 bg-surface border border-outline rounded-full hover:border-primary hover:text-primary transition-colors text-on-surface-variant">
                    <span className="material-symbols-outlined text-sm">favorite_border</span>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ─── Accessories ─── */}
      <section className="mb-20">
        <div className="flex items-center justify-between mb-8">
          <h2 className="font-headline-lg text-headline-lg text-on-surface">Accessories</h2>
          <span className="font-label-mono text-label-mono text-on-surface-variant uppercase tracking-widest">
            {accessories.length} items
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {accessories.map((item) => (
            <div
              key={item.id}
              className="group rounded-2xl overflow-hidden bg-surface-container-lowest border border-outline-variant shadow-[0px_10px_30px_rgba(0,0,0,0.4)] hover:-translate-y-1 hover:shadow-[0px_20px_50px_rgba(0,0,0,0.5)] transition-all duration-400 ease-out flex flex-col sm:flex-row"
            >
              {/* Image */}
              <div className="relative h-[240px] sm:h-auto sm:w-[240px] sm:min-h-[240px] bg-surface-container-low overflow-hidden flex-shrink-0">
                <Image
                  src={item.image}
                  alt={item.name}
                  fill
                  className="object-contain p-6 transition-transform duration-700 group-hover:scale-105"
                />
              </div>

              {/* Info */}
              <div className="p-6 flex flex-col justify-between flex-1">
                <div>
                  <span className="font-label-mono text-[10px] text-primary uppercase tracking-widest block mb-1">
                    {item.tagline}
                  </span>
                  <h3 className="font-headline-lg-mobile text-headline-lg-mobile text-on-surface mb-1">
                    {item.name}
                  </h3>
                  <span className="font-headline-lg-mobile text-headline-lg-mobile text-primary block mb-3">
                    ${item.price}
                  </span>
                  <p className="font-body-sm text-body-sm text-on-surface-variant mb-4">
                    {item.description}
                  </p>

                  {/* Inline specs */}
                  <div className="flex flex-wrap gap-2 mb-5">
                    {item.specs.map((spec) => (
                      <span
                        key={spec.label}
                        className="font-label-mono text-[10px] uppercase tracking-wider bg-surface-container border border-outline-variant/50 text-on-surface-variant px-2.5 py-1 rounded-full"
                      >
                        {spec.label}: <span className="text-on-surface">{spec.value}</span>
                      </span>
                    ))}
                  </div>
                </div>

                <button 
                  onClick={() => addToCart({ id: item.id, name: item.name, price: item.price, quantity: 1, image: item.image })}
                  className="w-full bg-primary text-on-primary font-label-mono text-label-mono py-3 rounded-full hover:bg-opacity-90 transition-all flex items-center justify-center gap-2 shadow-[0_0_10px_rgba(152,203,255,0.3)]"
                >
                  Add to Cart
                  <span className="material-symbols-outlined text-sm">add_shopping_cart</span>
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ─── Comparison Table ─── */}
      <section className="mb-20">
        <h2 className="font-headline-lg text-headline-lg text-on-surface mb-8 text-center">
          Compare Models
        </h2>
        <div className="overflow-x-auto rounded-2xl border border-outline-variant bg-surface-container-lowest shadow-[0px_10px_30px_rgba(0,0,0,0.4)]">
          <table className="w-full min-w-[700px]">
            <thead>
              <tr className="border-b border-outline-variant">
                <th className="p-4 text-left font-label-mono text-label-mono text-on-surface-variant uppercase tracking-widest">Spec</th>
                {products.map((p) => (
                  <th key={p.id} className="p-4 text-center">
                    <span className="font-headline-lg-mobile text-on-surface block">{p.name.replace("Aura ", "")}</span>
                    <span className="font-label-mono text-label-mono text-primary">${p.price}</span>
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {["Driver", "Frequency", "ANC", "Battery", "Codec", "Connectivity", "Weight", "Rating"].map(
                (specLabel, rowIdx) => (
                  <tr key={specLabel} className={rowIdx % 2 === 0 ? "bg-surface-container/50" : ""}>
                    <td className="px-4 py-3 font-label-mono text-[11px] text-on-surface-variant uppercase tracking-wider">
                      {specLabel}
                    </td>
                    {products.map((p) => {
                      const spec = p.specs.find((s) => s.label === specLabel || s.label === "Drivers" && specLabel === "Driver");
                      return (
                        <td key={p.id} className="px-4 py-3 text-center font-body-sm text-body-sm text-on-surface">
                          {spec?.value ?? "—"}
                        </td>
                      );
                    })}
                  </tr>
                )
              )}
            </tbody>
          </table>
        </div>
      </section>

    </div>
  );
}
