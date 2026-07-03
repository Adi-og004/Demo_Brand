import TransitionLink from "@/components/TransitionLink";

export default function Lab() {
  return (
    <div className="pt-32 pb-24 flex flex-col items-center w-full">
      {/* Hero Section */}
      <section className="w-full max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop py-12 flex flex-col items-center text-center">
        <span className="font-label-mono text-secondary uppercase tracking-widest mb-6 border border-secondary/30 bg-secondary/10 px-4 py-2 rounded-full drop-shadow-[0_0_12px_rgba(236,178,255,0.4)]">Engineering Silence</span>
        <h1 className="font-headline-lg md:font-display-lg text-primary mb-6 drop-shadow-[0_0_12px_rgba(152,203,255,0.4)]">Active Noise Cancellation</h1>
        <p className="font-body-md text-on-surface-variant max-w-2xl mx-auto">
          Precision acoustics meet algorithmic silence. An unparalleled deep dive into the engineering behind Aura&apos;s proprietary acoustic drivers and sensor arrays.
        </p>
      </section>

      {/* Technical Breakdown Image Section */}
      <section className="w-full max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop py-12">
        <div className="relative w-full rounded-xl overflow-hidden backdrop-blur-[20px] shadow-[0px_20px_40px_rgba(0,0,0,0.5)] shadow-[inset_0_0_0_1px_rgba(152,203,255,0.3),_0_0_20px_rgba(152,203,255,0.1)] group bg-surface-container">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img alt="Technical breakdown" className="w-full h-auto object-cover transition-transform duration-700 ease-in-out group-hover:scale-105 opacity-80 mix-blend-screen" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCy4YmKC46r1ygrw_-ZJManFV5yat8KG1EMjH0DZOpRX2_ORvF0kTLZqmSpI77v9kGDtL4_Y6_nRMpsWrEnBOjBxu3piI-Dc1h_EVNQgxGUogN8tgbz4QEFOQToIGb6sv_AdKVi7khPWy8hnUhc4JEK5ZnVgJ_EZPw2HV20Me0O4PDg9EfFqwxDUeZI1q_0uTvCrIE52aMN2daqJJJUjX4JGcjkDcewCg0_7tqoeyYc6NYigUkXKvsBZA" />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent flex flex-col justify-end p-margin-mobile md:p-12">
            <h3 className="font-headline-lg-mobile text-primary mb-2 drop-shadow-[0_0_12px_rgba(152,203,255,0.4)]">Acoustic Architecture</h3>
            <p className="font-body-md text-on-surface-variant max-w-md">Exploded view detailing the neodymium magnets, bio-cellulose diaphragm, and the precise placement of feed-forward and feed-back microphones.</p>
          </div>
        </div>
      </section>

      {/* Engineering Details Grid */}
      <section className="w-full max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-margin-desktop">
          {/* Detail Card 1 */}
          <div className="flex flex-col gap-4 p-8 rounded-xl bg-surface-container shadow-[0px_20px_40px_rgba(0,0,0,0.5)] border border-outline-variant hover:border-primary/50 transition-colors duration-500 group">
            <div className="w-12 h-12 flex items-center justify-center rounded-full bg-primary/10 text-primary mb-2 group-hover:bg-primary/20 transition-colors">
              <span className="material-symbols-outlined text-2xl" style={{ fontVariationSettings: "'FILL' 0" }}>memory</span>
            </div>
            <h4 className="font-headline-lg-mobile text-on-surface group-hover:text-primary transition-colors">Algorithmic Precision</h4>
            <p className="font-body-md text-on-surface-variant">
              Our proprietary chipset processes external soundscapes at 100,000 times per second. By generating an exact inverse anti-noise signal, it effectively neutralizes ambient frequencies before they reach the auditory canal.
            </p>
          </div>
          {/* Detail Card 2 */}
          <div className="flex flex-col gap-4 p-8 rounded-xl bg-surface-container shadow-[0px_20px_40px_rgba(0,0,0,0.5)] border border-outline-variant hover:border-secondary/50 transition-colors duration-500 group">
            <div className="w-12 h-12 flex items-center justify-center rounded-full bg-secondary/10 text-secondary mb-2 group-hover:bg-secondary/20 transition-colors">
              <span className="material-symbols-outlined text-2xl" style={{ fontVariationSettings: "'FILL' 0" }}>sensors</span>
            </div>
            <h4 className="font-headline-lg-mobile text-on-surface group-hover:text-secondary transition-colors">Dual-Sensor Array</h4>
            <p className="font-body-md text-on-surface-variant">
              Each earcup houses a sophisticated dual-microphone array. The external microphone captures broad environmental noise, while the internal microphone monitors what you actually hear, allowing the algorithm to adjust continuously for perfect silence.
            </p>
          </div>
        </div>
      </section>

      {/* Material Focus */}
      <section className="w-full max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop py-12">
        <div className="flex flex-col md:flex-row gap-margin-desktop items-center bg-surface-container rounded-xl p-margin-mobile md:p-12 shadow-[0px_20px_40px_rgba(0,0,0,0.5)] border border-outline-variant">
          <div className="flex-1 order-2 md:order-1">
            <h3 className="font-headline-lg text-primary mb-6 drop-shadow-[0_0_12px_rgba(152,203,255,0.4)]">Acoustic Isolation Materials</h3>
            <p className="font-body-md text-on-surface-variant mb-8">
              Beyond algorithmic cancellation, physical isolation is paramount. The ear cushions are crafted from a high-density, slow-recovery acoustic memory foam, encased in premium synthetic leather. This creates a near-perfect seal, enhancing passive noise reduction and providing a foundation for the active systems to excel.
            </p>
            <TransitionLink href="/lab/materials" className="inline-block px-6 py-3 bg-primary text-on-primary font-label-mono uppercase tracking-widest rounded-full hover:bg-primary-fixed transition-colors duration-300 shadow-[0_0_15px_rgba(152,203,255,0.4)]">
              Explore Materials
            </TransitionLink>
          </div>
          <div className="flex-1 order-1 md:order-2 w-full">
            <div className="relative w-full aspect-square md:aspect-auto md:h-96 rounded-xl overflow-hidden backdrop-blur-[20px] border-outline-variant bg-center bg-cover" style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuDDYUzMy91omwGxxHhazM6NNIuUSlBYkS-PiyHRPtjNYVYP3MXBNSeJLm_dfXOihNU8E-3j6HwZ2IwAVbUvDluY4l8AqVzcMaQcHp8EdaAz656TfxE-LWRZYmuIAyH5X8ZMMQ4vzR5mUiJ4vpAbD5dU-tF3butRWkGr3bIYiMPPW1zQqlWIEvE4iZ97JPc89VvfqizoZ319FmDlPsLjo8DqCaulKIoB1yoLSly9mMi7JWn2gQJCZedYPQ')" }}>
              <div className="absolute inset-0 bg-background/20 mix-blend-overlay"></div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
