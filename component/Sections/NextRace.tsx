import Image from "next/image";
import Link from "next/link";
import CountDown from "../CountDown";
import { FiArrowUpRight } from "react-icons/fi";

export default function NextRace() {
  return (
    <section className="relative isolate w-full overflow-hidden bg-[#0a0a0a] text-white">
      {/* Background */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-20"
        style={{
          backgroundImage: "url('/bg/NXback.webp')",
        }}
      />

      <div className="absolute inset-0 bg-gradient-to-r from-[#0a0a0a] via-[#0a0a0ae8] to-[#0a0a0acc]" />

      {/* Orange glow */}
      <div className="pointer-events-none absolute -right-40 top-1/2 h-[600px] w-[600px] -translate-y-1/2 rounded-full bg-[#FF8000]/10 blur-[160px]" />

      <div className="relative z-10 mx-auto max-w-[1600px] px-5 py-24 sm:px-8 sm:py-32 lg:px-14 lg:py-40">
        {/* Top metadata */}
        <div className="mb-16 flex items-center justify-between border-b border-white/10 pb-6">
          <div className="flex items-center gap-4">
            <span className="h-px w-12 bg-[#FF8000]" />

            <span className="text-[10px] uppercase tracking-[0.35em] text-white/40">
              Formula One
            </span>
          </div>

          <span className="text-[10px] uppercase tracking-[0.3em] text-white/25">
            2026 Season
          </span>
        </div>

        {/* Main content */}
        <div className="grid grid-cols-1 items-center gap-16 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20">
          {/* Left */}
          <div>
            <p className="mb-5 text-[10px] uppercase tracking-[0.35em] text-[#FF8000]">
              Round 01
            </p>

            <h1 className="font-black text-[clamp(64px,9vw,140px)] uppercase leading-[0.78] tracking-[-0.08em] text-[#EDEDED]">
              Next
              <br />
              <span className="text-[#FF8000]">Race</span>
            </h1>

            {/* Location */}
            <div className="mt-12">
              <p className="mb-2 text-[10px] uppercase tracking-[0.3em] text-white/30">
                Grand Prix
              </p>

              <h2 className="font-black text-[clamp(40px,5vw,72px)] uppercase leading-none tracking-[-0.06em]">
                Australia
              </h2>

              <p className="mt-4 text-sm uppercase tracking-[0.2em] text-white/40">
                Albert Park Circuit · Melbourne
              </p>

              <p className="mt-2 text-xs text-white/30">March 06 — 08, 2026</p>
            </div>

            {/* Countdown */}
            <div className="mt-12">
              <p className="mb-4 text-[10px] uppercase tracking-[0.3em] text-white/30">
                Lights out in
              </p>

              <div className="border-y border-white/10 py-5">
                <CountDown date="March 6" year="2026" time="00:00:00" />
              </div>
            </div>

            {/* CTA */}
            <Link
              href="/calendar"
              className="group mt-8 flex w-fit items-center gap-4 text-[10px] uppercase tracking-[0.3em] text-white transition-colors hover:text-[#FF8000]"
            >
              <span>View full calendar</span>

              <span className="flex h-10 w-10 items-center justify-center rounded-full border border-white/20 transition-all duration-300 group-hover:border-[#FF8000] group-hover:bg-[#FF8000] group-hover:text-black">
                <FiArrowUpRight className="transition-transform duration-300 group-hover:rotate-45" />
              </span>
            </Link>
          </div>

          {/* Right */}
          <div className="relative flex min-h-[400px] items-center justify-center lg:min-h-[650px]">
            {/* Huge round number */}
            <span className="pointer-events-none absolute select-none font-black text-[clamp(220px,32vw,520px)] leading-none tracking-[-0.12em] text-white/[0.025]">
              01
            </span>

            {/* Track */}
            <div className="relative z-10 h-[min(70vw,620px)] w-[min(70vw,620px)]">
              <Image
                src="/NXtrack.png"
                alt="Albert Park Circuit"
                fill
                priority
                className="object-contain"
              />
            </div>

            {/* Track label */}
            <div className="absolute bottom-0 right-0 z-20 hidden border-l border-white/15 pl-5 sm:block">
              <p className="text-[9px] uppercase tracking-[0.3em] text-white/30">
                Circuit
              </p>

              <p className="mt-1 text-xs uppercase tracking-[0.2em] text-white/60">
                Albert Park
              </p>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-20 flex items-center justify-between border-t border-white/10 pt-6">
          <span className="text-[9px] uppercase tracking-[0.3em] text-white/25">
            Oscar Piastri · #81
          </span>

          <span className="text-[9px] uppercase tracking-[0.3em] text-white/25">
            Melbourne · Australia
          </span>
        </div>
      </div>
    </section>
  );
}
