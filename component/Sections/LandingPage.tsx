import Copy from "../Copy";
import HeroVideo from "../HeroVideo";

export default function LandingPage() {
  return (
    <section className="relative isolate min-h-screen w-full overflow-hidden bg-[#080808] text-white">
      {/* Background */}
      <HeroVideo />

      {/* Cinematic overlays */}
      <div className="absolute inset-0 bg-black/35" />
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-transparent to-black" />
      <div className="absolute inset-0 bg-gradient-to-r from-black/65 via-transparent to-black/20" />

      {/* Subtle orange glow */}
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#FF8000]/10 blur-[140px]" />

      <div className="relative z-10 flex min-h-screen flex-col px-5 sm:px-8 lg:px-14">
        {/* Navbar */}

        {/* Main hero */}
        <main className="flex flex-1 flex-col justify-center pb-16 pt-20 lg:pb-24">
          <div className="grid grid-cols-1 items-end gap-12 lg:grid-cols-[1fr_auto]">
            {/* Left content */}
            <div>
              <div className="mb-8 flex items-center gap-4">
                <span className="h-px w-12 bg-[#FF8000]" />

                <span className="text-[10px] uppercase tracking-[0.35em] text-white/60">
                  The future of Formula One
                </span>
              </div>

              <div className="relative">
                {/* Number */}
                <div className="pointer-events-none absolute -top-20 left-0 select-none sm:-top-28 lg:-top-36">
                  <span className="font-black text-[clamp(140px,22vw,340px)] leading-none tracking-[-0.12em] text-white/[0.045]">
                    81
                  </span>
                </div>

                <Copy blockColor="#FF8000" delay={0.2} stagger={0.12}>
                  <h1 className="relative max-w-[1100px] font-black uppercase leading-[0.82] tracking-[-0.075em] text-[clamp(58px,10vw,150px)]">
                    Oscar
                    <br />
                    <span className="text-[#FF8000]">Piastri</span>
                  </h1>
                </Copy>
              </div>

              <div className="mt-10 flex flex-col gap-6 sm:flex-row sm:items-center">
                <p className="max-w-[360px] text-sm leading-6 text-white/55">
                  Precision. Patience. Performance.
                  <br />
                  The next generation of Formula One.
                </p>

                <div className="hidden h-px w-16 bg-white/20 sm:block" />

                <span className="text-[10px] uppercase tracking-[0.3em] text-white/40">
                  McLaren Formula 1 Driver
                </span>
              </div>
            </div>

            {/* Right information */}
            <div className="flex flex-row items-end justify-between gap-8 lg:flex-col lg:items-end lg:gap-14">
              <div className="text-right">
                <p className="mb-2 text-[10px] uppercase tracking-[0.3em] text-white/40">
                  Driver number
                </p>

                <p className="font-black text-5xl tracking-[-0.08em] text-[#FF8000] sm:text-7xl">
                  81
                </p>
              </div>

              <div className="text-right">
                <p className="mb-2 text-[10px] uppercase tracking-[0.3em] text-white/40">
                  Based in
                </p>

                <p className="text-sm text-white/80">Melbourne, Australia</p>
              </div>
            </div>
          </div>
        </main>

        {/* Bottom bar */}
        <footer className="flex flex-col gap-6 border-t border-white/15 py-6 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex items-center gap-4">
            <span className="text-[10px] uppercase tracking-[0.3em] text-white/40">
              Scroll to explore
            </span>

            <span className="h-px w-10 bg-[#FF8000]" />
          </div>

          <div className="flex items-center gap-6 text-[10px] uppercase tracking-[0.25em] text-white/40">
            <span>01</span>
            <span className="h-px w-8 bg-white/20" />
            <span>04</span>
          </div>

          <span className="text-[10px] uppercase tracking-[0.3em] text-white/40">
            © 2026
          </span>
        </footer>
      </div>
    </section>
  );
}
