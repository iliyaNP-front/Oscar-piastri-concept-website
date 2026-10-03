"use client";

import { useEffect, useState } from "react";

export default function LoadingScreen() {
  const [isVisible, setIsVisible] = useState(true);
  const [isLeaving, setIsLeaving] = useState(false);

  useEffect(() => {
    const leaveTimer = setTimeout(() => {
      setIsLeaving(true);
    }, 1100);

    const hideTimer = setTimeout(() => {
      setIsVisible(false);
    }, 1650);

    return () => {
      clearTimeout(leaveTimer);
      clearTimeout(hideTimer);
    };
  }, []);

  if (!isVisible) return null;

  return (
    <div
      className={`fixed inset-0 z-[9999] overflow-hidden bg-[#080808] text-white ${
        isLeaving ? "loader-exit" : ""
      }`}
    >
      {/* Background grid */}
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

      {/* Top telemetry */}
      <div className="absolute left-6 top-6 flex items-center gap-4 text-[9px] font-medium uppercase tracking-[0.3em] text-white/35 sm:left-10 sm:top-10">
        <span>OP81</span>
        <span className="h-px w-8 bg-white/20" />
        <span>FORMULA 1</span>
      </div>

      {/* Top right */}
      <div className="absolute right-6 top-6 text-right text-[9px] uppercase tracking-[0.25em] text-white/25 sm:right-10 sm:top-10">
        <div>LOADING SYSTEM</div>
        <div className="mt-1 text-[#ff8000]/70">ACTIVE</div>
      </div>

      {/* Main content */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="relative flex flex-col items-center">
          {/* Small label */}
          <div className="mb-2 translate-y-2 animate-[fadeUp_0.7s_ease-out_forwards] text-[10px] font-medium uppercase tracking-[0.45em] text-white/40 opacity-0">
            Oscar Piastri
          </div>

          {/* Number */}
          <div className="relative overflow-hidden">
            <span className="loader-number block select-none text-[clamp(150px,25vw,360px)] font-black leading-[0.78] tracking-[-0.09em] text-white">
              81
            </span>

            {/* Orange scanning line */}
            <div className="absolute left-[-20%] right-[-20%] top-1/2 h-[2px] bg-[#ff8000] shadow-[0_0_20px_rgba(255,128,0,0.8)] animate-[scan_1.1s_ease-in-out_infinite]" />
          </div>

          {/* Name */}
          <div className="mt-8 flex items-center gap-4 opacity-0 animate-[fadeUp_0.7s_0.25s_ease-out_forwards]">
            <span className="h-px w-8 bg-[#ff8000]" />

            <span className="text-[11px] font-medium uppercase tracking-[0.5em] text-white/70">
              Piastri
            </span>

            <span className="h-px w-8 bg-[#ff8000]" />
          </div>
        </div>
      </div>

      {/* Bottom telemetry */}
      <div className="absolute bottom-6 left-6 right-6 flex items-end justify-between sm:bottom-10 sm:left-10 sm:right-10">
        <div className="space-y-2 text-[8px] uppercase tracking-[0.25em] text-white/25">
          <div className="flex gap-5">
            <span>SESSION</span>
            <span className="text-white/50">INITIALIZING</span>
          </div>

          <div className="flex gap-5">
            <span>CAR</span>
            <span className="text-white/50">MCL39</span>
          </div>
        </div>

        {/* Progress */}
        <div className="flex items-center gap-4">
          <span className="text-[9px] tracking-[0.3em] text-white/30">081</span>

          <div className="h-px w-20 overflow-hidden bg-white/10 sm:w-32">
            <div className="h-full w-full origin-left bg-[#ff8000] animate-[progress_1.15s_cubic-bezier(0.65,0,0.35,1)_forwards]" />
          </div>
        </div>
      </div>

      {/* Edge speed lines */}
      <div className="pointer-events-none absolute left-0 top-1/2 h-px w-[15vw] bg-gradient-to-r from-transparent to-white/10" />
      <div className="pointer-events-none absolute right-0 top-1/2 h-px w-[15vw] bg-gradient-to-l from-transparent to-white/10" />

      <style jsx>{`
        @keyframes scan {
          0% {
            transform: translateX(-100%);
            opacity: 0;
          }

          20% {
            opacity: 1;
          }

          80% {
            opacity: 1;
          }

          100% {
            transform: translateX(100%);
            opacity: 0;
          }
        }

        @keyframes fadeUp {
          from {
            opacity: 0;
            transform: translateY(12px);
          }

          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes progress {
          from {
            transform: scaleX(0);
          }

          to {
            transform: scaleX(1);
          }
        }

        .loader-exit {
          animation: loaderExit 0.55s cubic-bezier(0.76, 0, 0.24, 1) forwards;
        }

        @keyframes loaderExit {
          0% {
            transform: translateY(0);
          }

          100% {
            transform: translateY(-100%);
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .loader-exit {
            animation-duration: 0.01s;
          }

          .loader-number,
          .loader-exit *,
          [class*="animate-"] {
            animation-duration: 0.01s !important;
            animation-iteration-count: 1 !important;
          }
        }
      `}</style>
    </div>
  );
}
