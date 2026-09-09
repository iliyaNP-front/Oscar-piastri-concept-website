import Image from "next/image";

const partners = [
  {
    name: "Google",
    image: "/GoogleLogo.png",
  },
  {
    name: "Monster Energy",
    image: "/MonsterLogo.png",
  },
  {
    name: "Quad Lock",
    image: "/QuadLogo.png",
  },
  {
    name: "Grill'd",
    image: "/Grill'dLogo.png",
  },
];

export default function Sponsers() {
  return (
    <section className="relative w-full overflow-hidden bg-[#0a0a0a] py-32 sm:py-40 lg:py-48">
      {/* Ambient glow */}
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#FF8000]/[0.025] blur-[140px]" />

      <div className="relative z-10">
        {/* Header */}
        <div className="mx-auto mb-16 flex max-w-[1600px] flex-col justify-between gap-8 px-5 sm:px-8 lg:mb-20 lg:flex-row lg:items-end lg:px-14">
          <div>
            <div className="mb-6 flex items-center gap-4">
              <span className="h-px w-12 bg-[#FF8000]" />

              <span className="text-[9px] uppercase tracking-[0.35em] text-white/30">
                Official partners
              </span>
            </div>

            <h1 className="font-black text-[clamp(56px,8vw,120px)] uppercase leading-[0.8] tracking-[-0.07em] text-[#EDEDED]">
              The
              <br />
              <span className="text-[#FF8000]">Partners</span>
            </h1>
          </div>

          <div className="max-w-[320px] lg:pb-2">
            <p className="text-sm leading-6 text-white/35">
              The brands behind the journey, supporting Oscar on and off the
              track.
            </p>
          </div>
        </div>

        {/* Marquee */}
        <div className="relative w-full border-y border-white/10 bg-white/[0.015]">
          {/* Left fade */}
          <div className="pointer-events-none absolute left-0 top-0 z-10 h-full w-24 bg-gradient-to-r from-[#0a0a0a] to-transparent sm:w-40 lg:w-64" />

          {/* Right fade */}
          <div className="pointer-events-none absolute right-0 top-0 z-10 h-full w-24 bg-gradient-to-l from-[#0a0a0a] to-transparent sm:w-40 lg:w-64" />

          <div className="partner-marquee flex w-max items-center py-10 sm:py-14">
            {/* First set */}
            {[...partners, ...partners, ...partners].map((partner, index) => (
              <div
                key={`${partner.name}-${index}`}
                className="group flex h-24 w-52 shrink-0 items-center justify-center border-r border-white/[0.06] px-10 transition-opacity duration-300 hover:opacity-100 sm:h-32 sm:w-64 lg:h-36 lg:w-72"
              >
                <div className="relative h-16 w-40 opacity-35 grayscale transition-all duration-500 group-hover:opacity-100 group-hover:grayscale-0 sm:h-20 sm:w-48 lg:h-24 lg:w-52">
                  <Image
                    src={partner.image}
                    alt={partner.name}
                    fill
                    sizes="220px"
                    className="object-contain"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom info */}
        <div className="mx-auto mt-8 flex max-w-[1600px] items-center justify-between px-5 sm:px-8 lg:px-14">
          <span className="text-[9px] uppercase tracking-[0.3em] text-white/20">
            04 partners
          </span>

          <span className="text-[9px] uppercase tracking-[0.3em] text-white/20">
            Oscar Piastri · #81
          </span>
        </div>
      </div>
    </section>
  );
}
