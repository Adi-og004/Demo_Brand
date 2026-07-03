import Image from "next/image";
import TransitionLink from "@/components/TransitionLink";

export default function Materials() {
  return (
    <div className="pt-24 md:pt-32 pb-margin-desktop w-full">
      {/* Hero Section */}
      <section className="w-full max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop py-12 text-center">
        <span className="font-label-mono text-secondary uppercase tracking-widest mb-6 border border-secondary/30 bg-secondary/10 px-4 py-2 rounded-full inline-block drop-shadow-[0_0_12px_rgba(236,178,255,0.4)]">
          Material Science
        </span>
        <h1 className="font-display-lg text-primary mb-6 drop-shadow-[0_0_12px_rgba(152,203,255,0.4)]">
          The Elements of Sound
        </h1>
        <p className="font-body-md text-on-surface-variant max-w-2xl mx-auto mb-12">
          True acoustic perfection starts at the molecular level. We scoured the globe for materials that combine uncompromising rigidity with feather-weight lightness, crafting enclosures and components that vanish, leaving only the music.
        </p>
      </section>

      {/* Materials List */}
      <section className="w-full max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop space-y-24">
        
        {/* Aerospace Aluminum */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="order-2 lg:order-1">
            <div className="flex items-center gap-4 mb-4">
              <span className="font-label-mono text-xl text-primary font-bold">01</span>
              <div className="h-[1px] bg-outline-variant w-12"></div>
              <h2 className="font-headline-lg text-on-surface">Aerospace-Grade Aluminum</h2>
            </div>
            <p className="font-body-md text-on-surface-variant mb-6">
              Milled from a single block of aerospace-grade aluminum, the chassis of Aura headphones is incredibly rigid, eliminating internal resonance and distortion. This extreme structural integrity prevents acoustic energy from being absorbed by the enclosure, ensuring every frequency is directed precisely into the ear canal.
            </p>
            <ul className="space-y-3 font-body-sm text-on-surface-variant">
              <li className="flex items-start gap-3">
                <span className="material-symbols-outlined text-primary text-sm mt-0.5">check_circle</span>
                <span>Anodized finish for extreme scratch resistance.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="material-symbols-outlined text-primary text-sm mt-0.5">check_circle</span>
                <span>Zero internal acoustic resonance.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="material-symbols-outlined text-primary text-sm mt-0.5">check_circle</span>
                <span>100% infinitely recyclable material.</span>
              </li>
            </ul>
          </div>
          <div className="order-1 lg:order-2 w-full aspect-square rounded-2xl overflow-hidden shadow-[0px_20px_40px_rgba(0,0,0,0.5)] border border-outline-variant group relative">
            <Image 
              src="/materials/aluminum.png" 
              alt="Macro brushed aluminum texture" 
              fill
              className="object-cover transition-transform duration-1000 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent pointer-events-none"></div>
          </div>
        </div>

        {/* Beryllium Diaphragms */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="order-1 lg:order-1 w-full aspect-square rounded-2xl overflow-hidden shadow-[0px_20px_40px_rgba(0,0,0,0.5)] border border-outline-variant group relative">
            <Image 
              src="/materials/beryllium.png" 
              alt="Beryllium driver diaphragm" 
              fill
              className="object-cover transition-transform duration-1000 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent pointer-events-none"></div>
          </div>
          <div className="order-2 lg:order-2">
            <div className="flex items-center gap-4 mb-4">
              <span className="font-label-mono text-xl text-secondary font-bold">02</span>
              <div className="h-[1px] bg-outline-variant w-12"></div>
              <h2 className="font-headline-lg text-on-surface">Beryllium Drivers</h2>
            </div>
            <p className="font-body-md text-on-surface-variant mb-6">
              Beryllium is lighter than aluminum, stiffer than steel, and possesses unparalleled damping properties. It allows our driver diaphragms to move with blistering speed and halt instantaneously, resulting in transient response that reveals micro-details previously hidden in your favorite recordings.
            </p>
            <ul className="space-y-3 font-body-sm text-on-surface-variant">
              <li className="flex items-start gap-3">
                <span className="material-symbols-outlined text-secondary text-sm mt-0.5">speed</span>
                <span>Lightning-fast transient response.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="material-symbols-outlined text-secondary text-sm mt-0.5">graphic_eq</span>
                <span>Near-perfect pistonic motion up to 40kHz.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="material-symbols-outlined text-secondary text-sm mt-0.5">precision_manufacturing</span>
                <span>Vapor-deposited precision manufacturing.</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Acoustic Foam */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="order-2 lg:order-1">
            <div className="flex items-center gap-4 mb-4">
              <span className="font-label-mono text-xl text-primary font-bold">03</span>
              <div className="h-[1px] bg-outline-variant w-12"></div>
              <h2 className="font-headline-lg text-on-surface">Acoustic Memory Foam</h2>
            </div>
            <p className="font-body-md text-on-surface-variant mb-6">
              Active noise cancellation is only half the equation. Our proprietary high-density, slow-recovery memory foam creates a bespoke seal around any ear shape. This passive isolation layer acts as an acoustic fortress, blocking mid-to-high frequency intrusion before our algorithms even touch the sound.
            </p>
            <ul className="space-y-3 font-body-sm text-on-surface-variant">
              <li className="flex items-start gap-3">
                <span className="material-symbols-outlined text-primary text-sm mt-0.5">earbuds</span>
                <span>Heat-activated bespoke sealing.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="material-symbols-outlined text-primary text-sm mt-0.5">volume_off</span>
                <span>Superior passive attenuation (up to 25dB).</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="material-symbols-outlined text-primary text-sm mt-0.5">favorite</span>
                <span>Wrapped in breathable, cruelty-free synthetic leather.</span>
              </li>
            </ul>
          </div>
          <div className="order-1 lg:order-2 w-full aspect-square rounded-2xl overflow-hidden shadow-[0px_20px_40px_rgba(0,0,0,0.5)] border border-outline-variant group relative">
            <Image 
              src="/materials/foam.png" 
              alt="High-density acoustic memory foam" 
              fill
              className="object-cover transition-transform duration-1000 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent pointer-events-none"></div>
          </div>
        </div>

      </section>

      {/* Back to Lab */}
      <section className="w-full max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop py-24 text-center">
        <TransitionLink 
          href="/lab" 
          className="inline-flex items-center gap-3 px-8 py-4 bg-surface border border-outline rounded-full hover:border-primary hover:text-primary transition-colors text-on-surface font-label-mono uppercase tracking-widest shadow-[0_0_20px_rgba(0,0,0,0.4)]"
        >
          <span className="material-symbols-outlined">arrow_back</span>
          Return to Lab
        </TransitionLink>
      </section>
    </div>
  );
}
