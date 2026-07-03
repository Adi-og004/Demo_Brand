export default function Ethos() {
  return (
    <div className="flex-grow pt-[120px] pb-[48px]">
      {/* Hero Section */}
      <section className="px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto mb-[48px] md:mb-[120px]">
        <div className="flex flex-col items-center text-center space-y-8 max-w-3xl mx-auto">
          <h1 className="font-display-lg text-display-lg text-on-surface tracking-tighter">
            Engineering Silence.
          </h1>
          <p className="font-body-md text-body-md text-on-surface-variant max-w-2xl">
            We believe technology shouldn&apos;t distract from the world; it should enhance it. Our pursuit is not just perfect sound, but the perfect space to experience it.
          </p>
        </div>
      </section>

      {/* Ethos / Lifestyle Section */}
      <section className="px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto mb-[48px] md:mb-[160px]">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-gutter items-center">
          <div className="lg:col-span-7 rounded-2xl overflow-hidden shadow-[0px_20px_40px_rgba(0,0,0,0.5)] border border-outline-variant/30">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img alt="" className="w-full h-auto object-cover aspect-[1.49]" src="https://lh3.googleusercontent.com/aida-public/AB6AXuASrJasz1sQVbWzT96-J7cUT6OdUBZIuGxWWeZ1Gn4MwnRpU2k7udOR1chCBPbBsRagK06Z1mqQdGRIot5nc-q4llrRkcxejyZuBgcYsN27_TnCBXTNpCNPyNzj4ObIjwAaLV6KL8tt4orY4NVfN9-rX-dpl6nql9AFZxqWDOPMAYxvzmN_B8JEtLflwBr3_G7X3aPCIT3qJC6djMWDBg7lTbL6kB7gmxGZoC_drgG4jqY_jI5qr43Avw" />
          </div>
          <div className="lg:col-span-4 lg:col-start-9 space-y-8 pt-8 lg:pt-0">
            <div className="inline-flex items-center space-x-2 px-3 py-1 bg-surface-container-high rounded-full border border-primary-container/30">
              <span className="material-symbols-outlined text-sm text-primary-container">graphic_eq</span>
              <span className="font-label-mono text-label-mono text-primary-container uppercase tracking-widest">Our Ethos</span>
            </div>
            <h2 className="font-headline-lg text-headline-lg-mobile md:text-headline-lg text-on-surface">
              Design that disappears.
            </h2>
            <p className="font-body-md text-body-md text-on-surface-variant">
              Every material, every curve, every millimeter is considered. We strip away the unnecessary, leaving only what connects you directly to the audio. It is a philosophy of reduction, where true luxury is found in simplicity and precision.
            </p>
          </div>
        </div>
      </section>

      {/* Engineering & Craftsmanship Bento Grid */}
      <section className="px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto mb-[48px] md:mb-[160px]">
        <div className="mb-8">
          <h2 className="font-headline-lg text-headline-lg-mobile md:text-headline-lg text-on-surface mb-2">The Lab</h2>
          <p className="font-body-md text-body-md text-on-surface-variant">Where precision meets acoustics.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-gutter auto-rows-[320px]">
          {/* Bento Item 1: Craftsmanship */}
          <div className="bg-surface-container rounded-2xl p-8 flex flex-col justify-between hover:-translate-y-[2px] hover:shadow-[0px_20px_40px_rgba(0,163,255,0.1)] transition-all duration-400 border border-outline-variant/30 lg:col-span-2 group">
            <div>
              <span className="material-symbols-outlined text-primary-container mb-4 text-3xl group-hover:scale-110 transition-transform">precision_manufacturing</span>
              <h3 className="font-headline-lg-mobile text-headline-lg-mobile text-on-surface mb-2">Precision Machined</h3>
              <p className="font-body-md text-body-md text-on-surface-variant max-w-md">
                Milled from solid aerospace-grade aluminum. Tolerances measured in microns, ensuring acoustic chambers that remain rigid under intense pressure.
              </p>
            </div>
          </div>
          {/* Bento Item 2: Tuning */}
          <div className="bg-surface-container rounded-2xl p-8 flex flex-col justify-between hover:-translate-y-[2px] hover:shadow-[0px_20px_40px_rgba(0,163,255,0.1)] transition-all duration-400 border border-outline-variant/30 relative overflow-hidden group">
            <div className="relative z-10">
              <span className="material-symbols-outlined text-primary-container mb-4 text-3xl group-hover:scale-110 transition-transform">tune</span>
              <h3 className="font-headline-lg-mobile text-headline-lg-mobile text-on-surface mb-2">Acoustic Tuning</h3>
              <p className="font-body-md text-body-md text-on-surface-variant">
                Calibrated by master sound engineers to deliver a flat, true-to-life frequency response.
              </p>
            </div>
            {/* Minimal abstract visual for tuning */}
            <div className="absolute -bottom-10 -right-10 w-48 h-48 border-[1px] border-primary-container/20 rounded-full group-hover:scale-110 transition-transform duration-700"></div>
            <div className="absolute -bottom-20 -right-20 w-64 h-64 border-[1px] border-primary-container/10 rounded-full group-hover:scale-110 transition-transform duration-700 delay-75"></div>
          </div>
        </div>
      </section>

      {/* Sustainability Section */}
      <section className="bg-surface-container-low py-[48px] md:py-[120px] border-t border-outline-variant/30">
        <div className="px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-[48px]">
            <div className="inline-flex items-center space-x-2 px-3 py-1 bg-surface-container-high rounded-full border border-secondary-container/30 mb-6 shadow-sm">
              <span className="material-symbols-outlined text-sm text-secondary-container" style={{ fontVariationSettings: "'FILL' 1" }}>eco</span>
              <span className="font-label-mono text-label-mono text-secondary-container uppercase tracking-widest">Sustainability</span>
            </div>
            <h2 className="font-headline-lg text-headline-lg-mobile md:text-headline-lg text-on-surface mb-4">
              Leaving no trace.
            </h2>
            <p className="font-body-md text-body-md text-on-surface-variant">
              Our commitment to minimal impact extends beyond design. We engineer our supply chain with the same rigor we apply to our audio hardware.
            </p>
          </div>
          <div className="max-w-4xl mx-auto bg-surface-container rounded-3xl p-4 md:p-8 shadow-[0px_20px_40px_rgba(0,0,0,0.5)] border border-outline-variant/30">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img alt="" className="w-full h-auto rounded-xl object-cover aspect-[1.79] mix-blend-luminosity opacity-80" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBbVkZfZfhNI5R9GdgDNNtloqnfWDhatXj1ZcKERlogFQInLHRfkwXAEVpFdgh9_h8qXxuojuXRXF8nDlNjwJmM5JaV-9xd6Cf0Dk4CNhVaXuE1S5idf9D9jVs4mumA-29ojxzERXTA6AOXG-oAW1d9Lkow4qhltfESLj-gPpQihRgAWXSqLPhqP0ydekg3UYzsvkVSYpoLoehLKBsNQC6qvBnqmViAnCuE8I1XDe8SGRQ7eIHBQfl9HQ" />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-gutter max-w-4xl mx-auto mt-8">
            <div className="flex items-start space-x-4 p-6 bg-[rgba(42,42,42,0.4)] backdrop-blur-[20px] border border-[rgba(136,145,157,0.2)] rounded-xl">
              <div className="p-3 bg-surface-container-high rounded-full">
                <span className="material-symbols-outlined text-secondary-container">recycling</span>
              </div>
              <div>
                <h4 className="font-body-sm text-body-sm text-on-surface mb-1 font-bold">100% Recycled Packaging</h4>
                <p className="font-body-sm text-body-sm text-on-surface-variant">Molded pulp and unbleached card. Zero single-use plastics in our unboxing experience.</p>
              </div>
            </div>
            <div className="flex items-start space-x-4 p-6 bg-[rgba(42,42,42,0.4)] backdrop-blur-[20px] border border-[rgba(136,145,157,0.2)] rounded-xl">
              <div className="p-3 bg-surface-container-high rounded-full">
                <span className="material-symbols-outlined text-secondary-container">local_shipping</span>
              </div>
              <div>
                <h4 className="font-body-sm text-body-sm text-on-surface mb-1 font-bold">Carbon-Neutral Shipping</h4>
                <p className="font-body-sm text-body-sm text-on-surface-variant">All outbound logistics emissions are measured, reduced, and offset entirely.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
