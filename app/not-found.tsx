"use client";

import Link from "next/link";

export default function NotFound() {
  return (
    <main className="relative min-h-screen w-full overflow-hidden bg-[#080808] text-[#EDEDED] flex items-center justify-center px-5">
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#FF8000]/10 blur-[140px]" />

      <div className="relative z-10 flex w-full max-w-3xl flex-col items-center text-center">
        <div className="mb-7 flex items-center gap-3 text-xs font-medium uppercase tracking-[0.35em] text-[#777]">
          <span className="h-px w-8 bg-[#FF8000]" />
          Error 404
          <span className="h-px w-8 bg-[#FF8000]" />
        </div>

        <h1 className="font-formula select-none text-[clamp(120px,24vw,260px)] leading-[0.75] tracking-[-0.08em]">
          <span className="text-[#FF8000]">4</span>
          <span className="text-[#EDEDED]">0</span>
          <span className="text-[#FF8000]">4</span>
        </h1>

        <h2 className="mt-12 text-3xl font-bold tracking-tight sm:text-5xl">
          Lost in the grid?
        </h2>

        <p className="mt-5 max-w-xl text-sm leading-7 text-[#8A8A8A] sm:text-base">
          The page you’re looking for doesn’t exist anymore. It might have been
          moved, removed, or simply taken off the grid.
        </p>

        <div className="mt-9 flex flex-col gap-3 sm:flex-row">
          <Link
            href="/"
            className="group inline-flex h-12 items-center justify-center gap-3 rounded-full bg-[#FF8000] px-7 text-sm font-semibold text-black transition-all duration-300 hover:bg-[#ff922b] hover:shadow-[0_0_35px_rgba(255,128,0,0.25)]"
          >
            Back to home
          </Link>

          <button
            type="button"
            onClick={() => window.history.back()}
            className="h-12 rounded-full border border-white/10 px-7 text-sm font-medium text-[#BDBDBD] transition-all duration-300 hover:border-white/20 hover:bg-white/[0.04] hover:text-white"
          >
            Go back
          </button>
        </div>

        <div className="mt-16 flex items-center gap-3 text-[10px] uppercase tracking-[0.3em] text-[#444]">
          Nothing here
        </div>
      </div>
    </main>
  );
}
