import Copy from "../Copy";

export default function OscarPara() {
  return (
    <section className="relative w-full overflow-hidden bg-[#0a0a0a] px-5 py-32 text-white sm:px-8 sm:py-40 lg:px-14 lg:py-56">
      <div className="pointer-events-none absolute -right-10 top-1/2 -translate-y-1/2 select-none">
        <span className="font-black text-[35vw] leading-none tracking-[-0.12em] text-white/[0.025]">
          81
        </span>
      </div>

      <div className="relative z-10 mx-auto max-w-[1500px]">
        <div className="mb-12 flex items-center gap-4 sm:mb-16">
          <span className="h-px w-12 bg-[#FF8000]" />

          <span className="text-[10px] uppercase tracking-[0.35em] text-white/35">
            The mindset
          </span>
        </div>

        <Copy duration={1} stagger={0.08} delay={0.1} blockColor="#FF8000">
          <p className="max-w-[1450px] text-center text-[clamp(38px,6.5vw,105px)] font-black uppercase leading-[0.92] tracking-[-0.065em] text-[#EDEDED] sm:text-left">
            Beyond the numbers,
            <br className="hidden sm:block" /> consistency and composure define{" "}
            <span className="text-[#FF8000]">Oscar&apos;s</span> approach on
            track.
          </p>
        </Copy>

        <div className="mt-16 flex flex-col gap-8 border-t border-white/10 pt-6 sm:mt-24 sm:flex-row sm:items-start sm:justify-between">
          <p className="max-w-[340px] text-xs leading-6 text-white/35">
            Speed is only part of the equation. Precision, discipline and
            composure separate a driver from the rest of the grid.
          </p>

          <div className="flex items-center gap-4">
            <span className="text-[10px] uppercase tracking-[0.3em] text-white/30">
              81
            </span>

            <span className="h-px w-12 bg-[#FF8000]" />

            <span className="text-[10px] uppercase tracking-[0.3em] text-white/30">
              Oscar Piastri
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
