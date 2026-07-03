export default function Concierge() {
  return (
    <div className="flex-grow pt-[120px] pb-12 px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto w-full flex flex-col gap-12">
      {/* Header Section */}
      <header className="text-center md:text-left max-w-3xl">
        <h1 className="font-display-lg text-display-lg text-primary mb-4">Concierge Services.</h1>
        <p className="font-body-md text-body-md text-on-surface-variant">We are here to ensure your auditory experience remains uninterrupted. Reach out for bespoke support, technical inquiries, or global partnerships.</p>
      </header>

      {/* Bento Layout */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-gutter">
        {/* Support Form (Left Col - 7/12) */}
        <section className="md:col-span-7 bg-[rgba(32,31,31,0.6)] backdrop-blur-[20px] border border-outline-variant rounded-xl p-8 shadow-[0px_20px_40px_rgba(0,0,0,0.4)]">
          <h2 className="font-headline-lg-mobile text-headline-lg-mobile text-on-surface mb-8">Technical Support Request</h2>
          <form action="#" className="flex flex-col gap-6" method="POST">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="flex flex-col">
                <label className="font-label-mono text-label-mono text-on-surface-variant uppercase tracking-widest mb-2" htmlFor="name">Full Name</label>
                <input className="bg-surface-container-high border border-outline-variant focus:outline-none focus:border-primary focus:shadow-[0_0_12px_rgba(152,203,255,0.4)] p-3 rounded text-on-surface font-body-md text-body-md w-full transition-all duration-300" id="name" name="name" required type="text" />
              </div>
              <div className="flex flex-col">
                <label className="font-label-mono text-label-mono text-on-surface-variant uppercase tracking-widest mb-2" htmlFor="order_number">Order Number (Optional)</label>
                <input className="bg-surface-container-high border border-outline-variant focus:outline-none focus:border-primary focus:shadow-[0_0_12px_rgba(152,203,255,0.4)] p-3 rounded text-on-surface font-body-md text-body-md w-full transition-all duration-300" id="order_number" name="order_number" type="text" />
              </div>
            </div>
            <div className="flex flex-col">
              <label className="font-label-mono text-label-mono text-on-surface-variant uppercase tracking-widest mb-2" htmlFor="email">Email Address</label>
              <input className="bg-surface-container-high border border-outline-variant focus:outline-none focus:border-primary focus:shadow-[0_0_12px_rgba(152,203,255,0.4)] p-3 rounded text-on-surface font-body-md text-body-md w-full transition-all duration-300" id="email" name="email" required type="email" />
            </div>
            <div className="flex flex-col">
              <label className="font-label-mono text-label-mono text-on-surface-variant uppercase tracking-widest mb-2" htmlFor="issue">Describe Your Inquiry</label>
              <textarea className="bg-surface-container-high border border-outline-variant focus:outline-none focus:border-primary focus:shadow-[0_0_12px_rgba(152,203,255,0.4)] p-3 rounded text-on-surface font-body-md text-body-md w-full resize-none transition-all duration-300" id="issue" name="issue" required rows={4}></textarea>
            </div>
            <div className="pt-4">
              <button className="bg-primary text-on-primary font-label-mono text-label-mono uppercase tracking-widest px-8 py-4 rounded hover:bg-primary-fixed-dim transition-colors duration-300 w-full md:w-auto" type="submit">Submit Request</button>
            </div>
          </form>
        </section>

        {/* Right Column Stack (5/12) */}
        <div className="md:col-span-5 flex flex-col gap-gutter">
          {/* Partnerships Card */}
          <section className="bg-surface-container rounded-xl p-8 shadow-[0px_20px_40px_rgba(0,0,0,0.4)] border border-outline-variant hover:shadow-lg transition-shadow duration-300">
            <div className="flex items-center gap-3 mb-4">
              <span className="material-symbols-outlined text-primary">campaign</span>
              <h3 className="font-headline-lg-mobile text-headline-lg-mobile text-on-surface">Partnerships &amp; Press</h3>
            </div>
            <p className="font-body-md text-body-md text-on-surface-variant mb-6">Want to collaborate? Reach out to our PR team to discuss product reviews, editorial features, or brand alignments.</p>
            <a className="inline-flex items-center gap-2 border border-outline-variant text-on-surface font-label-mono text-label-mono px-6 py-3 rounded hover:bg-surface-container-high transition-colors" href="mailto:pr@aura.com">
              Contact PR <span className="material-symbols-outlined" style={{ fontSize: '18px' }}>arrow_forward</span>
            </a>
          </section>

          {/* Retail Locations Map Card */}
          <section className="bg-surface-container-high border border-outline-variant rounded-xl overflow-hidden relative shadow-[0px_20px_40px_rgba(0,0,0,0.4)] group min-h-[300px] flex flex-col">
            <div className="absolute inset-0 z-0">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img alt="Global Locations Map" className="w-full h-full object-cover filter brightness-80 contrast-125 grayscale-[20%] opacity-50 group-hover:opacity-70 transition-opacity duration-700" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBbVpg3qzpvgiTI41M6cHJrTOlSAKxcwgvtCCOC-rRqmKGq5BsW8lutG50t4-iSgASbbfc-55dN04coP-vvNctm-4PgVAP_8srG-oy2RaYFFxCoMc_jwHqB5XGq6MIX1W5q-PjISqUVKiOSFDvIQFtSboy_jy_wMgJoBFd5RSQqaZ39tWcDIdk-5iQFxS3JCbhPUXjAapunIg_UJepvDLGxYjZuQ23Zmna1uo0d8XVo2zMZWugFRuRgbQ" />
              <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/40 to-transparent"></div>
            </div>
            <div className="relative z-10 p-8 flex flex-col h-full justify-between">
              <div>
                <h3 className="font-headline-lg-mobile text-headline-lg-mobile text-primary mb-2">Global Boutiques</h3>
                <p className="font-body-md text-body-md text-on-surface-variant">Experience Aura hardware in person.</p>
              </div>
              <ul className="flex flex-col gap-2 mt-auto">
                <li className="flex justify-between items-center border-b border-outline-variant pb-2">
                  <span className="font-label-mono text-label-mono text-on-surface">London</span>
                  <span className="font-body-sm text-body-sm text-on-surface-variant">Mayfair</span>
                </li>
                <li className="flex justify-between items-center border-b border-outline-variant pb-2">
                  <span className="font-label-mono text-label-mono text-on-surface">Tokyo</span>
                  <span className="font-body-sm text-body-sm text-on-surface-variant">Ginza</span>
                </li>
                <li className="flex justify-between items-center pb-2">
                  <span className="font-label-mono text-label-mono text-on-surface">New York</span>
                  <span className="font-body-sm text-body-sm text-on-surface-variant">SoHo</span>
                </li>
              </ul>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
