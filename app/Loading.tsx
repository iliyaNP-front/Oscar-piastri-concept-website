export default function Loading() {
  return (
    <main className="fixed inset-0 z-[99999] flex items-center justify-center overflow-hidden bg-[#080808] text-white">
      {/* Background */}
      <div className="pointer-events-none absolute inset-0 opacity-[0.035]">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `
              linear-gradient(to right, #ffffff 1px, transparent 1px),
              linear-gradient(to bottom, #ffffff 1px, transparent 1px)
            `,
            backgroundSize: "80px 80px",
          }}
        />
      </div>

      {/* Orange glow */}
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#ff8000]/10 blur-[140px]" />

      {/* Top */}
      <div className="absolute left-6 top-6 flex items-center gap-4 sm:left-10 sm:top-10">
        <span className="text-[9px] uppercase tracking-[0.35em] text-white/40">
          OP81
        </span>

        <span className="h-px w-8 bg-white/20" />

        <span className="text-[9px] uppercase tracking-[0.35em] text-white/30">
          Formula 1
        </span>
      </div>

      {/* Center */}
      <div className="relative flex flex-col items-center">
        <span className="mb-3 text-[10px] uppercase tracking-[0.5em] text-white/40">
          Oscar Piastri
        </span>

        <div className="relative">
          <span className="block select-none text-[clamp(160px,25vw,360px)] font-black leading-[0.8] tracking-[-0.09em]">
            81
          </span>

          <div className="absolute left-[-15%] right-[-15%] top-1/2 h-[2px] bg-[#ff8000] shadow-[0_0_20px_rgba(255,128,0,0.8)]" />
        </div>

        <div className="mt-8 flex items-center gap-4">
          <span className="h-px w-8 bg-[#ff8000]" />

          <span className="text-[10px] uppercase tracking-[0.5em] text-white/60">
            Piastri
          </span>

          <span className="h-px w-8 bg-[#ff8000]" />
        </div>
      </div>

      {/* Bottom */}
      <div className="absolute bottom-6 left-6 right-6 flex items-end justify-between sm:bottom-10 sm:left-10 sm:right-10">
        <div className="space-y-2 text-[8px] uppercase tracking-[0.25em]">
          <div className="flex gap-5">
            <span className="text-white/25">CAR</span>
            <span className="text-white/50">MCL39</span>
          </div>

          <div className="flex gap-5">
            <span className="text-white/25">STATUS</span>
            <span className="text-[#ff8000]">LOADING</span>
          </div>
        </div>

        <div className="text-right">
          <span className="text-4xl font-light tracking-[-0.05em]">81</span>

          <div className="mt-3 h-[2px] w-32 overflow-hidden bg-white/10 sm:w-48">
            <div className="h-full w-[70%] animate-[loading_1.4s_ease-in-out_infinite] bg-[#ff8000]" />
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes loading {
          0% {
            transform: translateX(-100%);
          }

          50% {
            transform: translateX(0%);
          }

          100% {
            transform: translateX(100%);
          }
        }
      `}</style>
    </main>
  );
}
