import Link from "next/link";
import CountUp from "../CountUp";
import { FiArrowUpRight } from "react-icons/fi";

const stats = [
  {
    value: 0,
    label: "World Championships",
    shortLabel: "World Champions",
  },
  {
    value: 70,
    label: "Formula One Race Starts",
    shortLabel: "Race Starts",
  },
  {
    value: 26,
    label: "Podium Finishes",
    shortLabel: "Podiums",
  },
  {
    value: 9,
    label: "Formula One Race Wins",
    shortLabel: "Race Wins",
  },
];

export default function Stats() {
  return (
    <section className="relative isolate w-full overflow-hidden bg-[#0a0a0a] text-white">
      {/* Background */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-25"
        style={{
          backgroundImage: "url('/bg/StatsBack.jpg')",
        }}
      />

      <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a0a] via-[#0a0a0acc] to-[#0a0a0a]" />

      {/* Orange glow */}
      <div className="pointer-events-none absolute -right-40 top-1/2 h-[500px] w-[500px] -translate-y-1/2 rounded-full bg-[#FF8000]/10 blur-[150px]" />

      <div className="relative z-10 mx-auto max-w-[1600px] px-5 py-24 sm:px-8 sm:py-32 lg:px-14 lg:py-44">
        {/* Section heading */}
        <div className="mb-16 flex flex-col gap-6 lg:mb-24 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <div className="mb-6 flex items-center gap-4">
              <span className="h-px w-12 bg-[#FF8000]" />

              <span className="text-[10px] uppercase tracking-[0.35em] text-white/40">
                The numbers behind the driver
              </span>
            </div>

            <h2 className="max-w-[700px] text-[clamp(42px,6vw,90px)] font-black uppercase leading-[0.9] tracking-[-0.07em]">
              Built for
              <br />
              <span className="text-[#FF8000]">performance.</span>
            </h2>
          </div>

          <p className="max-w-[300px] text-sm leading-6 text-white/40 lg:pb-2">
            A career defined by consistency, speed and the pursuit of something
            bigger.
          </p>
        </div>

        {/* Stats grid */}
        <div className="grid grid-cols-1 border-t border-white/15 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat, index) => (
            <div
              key={stat.label}
              className={`group relative border-b border-white/15 py-10 sm:px-6 lg:border-b-0 lg:py-12 ${
                index !== 0 ? "lg:border-l lg:border-white/15" : ""
              }`}
            >
              {/* Top accent */}
              <div className="absolute left-0 top-0 h-px w-0 bg-[#FF8000] transition-all duration-500 group-hover:w-full" />

              {/* Index */}
              <div className="mb-10 flex items-center justify-between">
                <span className="text-[10px] uppercase tracking-[0.3em] text-white/30">
                  0{index + 1}
                </span>

                <span className="text-[10px] uppercase tracking-[0.25em] text-white/20">
                  Statistics
                </span>
              </div>

              {/* Number */}
              <div className="mb-5 flex items-start">
                <span className="font-black text-[clamp(72px,8vw,120px)] leading-[0.8] tracking-[-0.1em] text-[#FF8000]">
                  <CountUp end={stat.value} />
                </span>
              </div>

              {/* Label */}
              <div className="flex items-center gap-3">
                <span className="h-px w-5 bg-[#FF8000]" />

                <span className="text-[11px] font-medium uppercase tracking-[0.2em] text-white/65">
                  {stat.shortLabel}
                </span>
              </div>

              <p className="mt-4 text-xs text-white/25">{stat.label}</p>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-14 flex flex-col gap-6 border-t border-white/15 pt-8 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="text-[10px] uppercase tracking-[0.3em] text-white/30">
              Continue exploring
            </p>

            <p className="mt-2 text-sm text-white/55">
              From junior racing to Formula One.
            </p>
          </div>

          <Link
            href="/career"
            className="group flex w-fit items-center gap-4 text-[11px] uppercase tracking-[0.25em] text-white transition-colors hover:text-[#FF8000]"
          >
            <span>Oscar's career</span>

            <span className="flex h-10 w-10 items-center justify-center rounded-full border border-white/20 transition-all duration-300 group-hover:border-[#FF8000] group-hover:bg-[#FF8000] group-hover:text-black">
              <FiArrowUpRight className="text-base transition-transform duration-300 group-hover:rotate-45" />
            </span>
          </Link>
        </div>
      </div>
    </section>
  );
}
