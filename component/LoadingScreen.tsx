"use client";

import { useEffect, useState } from "react";

export default function LoadingScreen() {
  const [loading, setLoading] = useState(true);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const handleLoad = () => {
      setProgress(100);

      setTimeout(() => {
        setLoading(false);
      }, 500);
    };

    if (document.readyState === "complete") {
      handleLoad();
      return;
    }

    window.addEventListener("load", handleLoad);

    return () => {
      window.removeEventListener("load", handleLoad);
    };
  }, []);

  if (!loading) {
    return null;
  }

  return (
    <div className="fixed inset-0 z-[99999] flex min-h-screen items-center justify-center overflow-hidden bg-[#080808] text-white">
      <div className="absolute inset-0 opacity-[0.035]">
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

      <div className="absolute left-1/2 top-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#ff8000]/10 blur-[140px]" />

      <div className="absolute left-6 top-6 flex items-center gap-4 sm:left-10 sm:top-10">
        <span className="text-[9px] uppercase tracking-[0.35em] text-white/40">
          OP81
        </span>

        <span className="h-px w-8 bg-white/20" />

        <span className="text-[9px] uppercase tracking-[0.35em] text-white/30">
          Formula 1
        </span>
      </div>

      <div className="absolute right-6 top-6 text-right sm:right-10 sm:top-10">
        <p className="text-[9px] uppercase tracking-[0.3em] text-white/30">
          System
        </p>

        <p className="mt-1 text-[9px] uppercase tracking-[0.3em] text-[#ff8000]">
          Loading
        </p>
      </div>

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

      <div className="absolute bottom-6 left-6 right-6 flex items-end justify-between sm:bottom-10 sm:left-10 sm:right-10">
        <div className="space-y-2 text-[8px] uppercase tracking-[0.25em]">
          <div className="flex gap-5">
            <span className="text-white/25">Car</span>
            <span className="text-white/50">MCL39</span>
          </div>

          <div className="flex gap-5">
            <span className="text-white/25">Status</span>
            <span className="text-[#ff8000]">Loading</span>
          </div>
        </div>

        <div className="text-right">
          <div className="mb-3 flex items-baseline justify-end gap-1">
            <span className="text-4xl font-light tracking-[-0.05em]">
              {progress}
            </span>

            <span className="text-xs text-white/30">%</span>
          </div>

          <div className="relative h-[2px] w-32 overflow-hidden bg-white/10 sm:w-48">
            <div
              className="absolute inset-y-10 left-0 bg-[#ff8000] shadow-[0_0_12px_rgba(255,128,0,0.7)] transition-all duration-300"
              style={{ width: `${progress}%` }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
