import Image from "next/image";
import TransitionLink from "@/components/TransitionLink";

export default function Home() {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-20 px-margin-mobile md:px-margin-desktop overflow-hidden bg-background">
      <div className="absolute inset-0 z-0 flex items-center justify-center pointer-events-none opacity-40 blur-[120px]">
        <div className="w-[600px] h-[600px] bg-primary-container rounded-full mix-blend-screen filter absolute translate-x-1/4"></div>
        <div className="w-[500px] h-[500px] bg-secondary-container rounded-full mix-blend-screen filter absolute -translate-x-1/4"></div>
      </div>
      <div className="max-w-container-max mx-auto grid grid-cols-1 md:grid-cols-12 gap-gutter items-center relative z-10 w-full">
        <div className="md:col-span-6 flex flex-col items-start justify-center order-2 md:order-1 mt-12 md:mt-0">
          <span className="inline-flex items-center px-3 py-1 rounded-full border border-secondary text-secondary font-label-mono text-label-mono mb-8">
            <span className="material-symbols-outlined text-[14px] mr-2">eco</span>
            Carbon Neutral
          </span>
          <h1 className="font-fancy italic text-6xl md:text-8xl tracking-tighter font-bold mb-8 bg-clip-text text-transparent bg-gradient-to-br from-primary via-white to-secondary drop-shadow-sm">
            Sound,<br/>Sculpted.
          </h1>
          <p className="font-body-md text-xl md:text-2xl text-on-surface-variant max-w-lg mb-12 font-light leading-relaxed">
            Experience pure spatial audio wrapped in sustainable aerospace-grade aluminum.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
            <TransitionLink href="/collection" className="bg-primary-container text-on-primary-container font-label-mono text-label-mono uppercase tracking-widest px-8 py-4 rounded-DEFAULT hover:opacity-90 transition-opacity duration-300 flex items-center justify-center w-full sm:w-auto shadow-[0_0_20px_rgba(0,163,255,0.4)]">
              Shop the Series
            </TransitionLink>
            <button className="bg-surface border border-outline text-on-surface font-label-mono text-label-mono uppercase tracking-widest px-8 py-4 rounded-DEFAULT hover:bg-surface-container-high hover:border-secondary hover:text-secondary transition-colors duration-300 flex items-center justify-center w-full sm:w-auto">
              <span className="material-symbols-outlined mr-2">play_circle</span>
              Watch the Film
            </button>
          </div>
        </div>
        <div className="md:col-span-6 relative order-1 md:order-2 flex justify-center items-center h-[50vh] md:h-[80vh]">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            alt="Aura Headphones"
            className="w-full h-full object-contain max-h-[800px] transition-transform-opacity duration-1000 transform hover:scale-105 z-10 drop-shadow-[0_0_40px_rgba(0,163,255,0.15)]"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuA68xd78nPsGnYRNSr5JQYHV-dRyWG7N4QiRVZRCgVqQeq9iSzUVI9eTdp397_-S7192NSkemOUCYb6th4FTyQvf_4NgVMzp9rxQilNTTceMZ0Ot9Ae-cNXjkhjRB8I_kgCMtH-oFr5uEhMnAGc-3ihPBLImozhYTTajmw8HWinCvjQw2OG7WP-2J-6229f-vyNDPT2J2jgML-BXIZceWA7lI9LZvzA42SKH0Q3KYocwXZJiNoX3Sh2gEfEQtac77XSUTU"
          />
        </div>
      </div>
    </section>
  );
}
