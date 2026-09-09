const mediaItems = [
  {
    image: "/mediaImg/Media1.jpg",
    number: "01",
    title: "Race Day",
    rotate: "-rotate-[12deg]",
    translate: "lg:-translate-x-16 lg:translate-y-8",
    z: "z-[1]",
  },
  {
    image: "/mediaImg/Media2.webp",
    number: "02",
    title: "The Grid",
    rotate: "-rotate-[6deg]",
    translate: "lg:-translate-x-8 lg:-translate-y-2",
    z: "z-[2]",
  },
  {
    image: "/mediaImg/Media3.webp",
    number: "03",
    title: "On Track",
    rotate: "rotate-0",
    translate: "lg:translate-y-[-40px]",
    z: "z-[5]",
  },
  {
    image: "/mediaImg/Media4.png",
    number: "04",
    title: "Focus",
    rotate: "rotate-[6deg]",
    translate: "lg:translate-x-8 lg:-translate-y-2",
    z: "z-[2]",
  },
  {
    image: "/mediaImg/Media5.webp",
    number: "05",
    title: "Full Speed",
    rotate: "rotate-[12deg]",
    translate: "lg:translate-x-16 lg:translate-y-8",
    z: "z-[1]",
  },
];

export default function Media() {
  return (
    <section className="relative w-full overflow-hidden bg-[#0a0a0a] px-5 py-32 text-white sm:px-8 sm:py-40 lg:px-14 lg:py-52">
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-[700px] w-[700px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#FF8000]/[0.035] blur-[140px]" />

      <div className="relative z-10 mx-auto max-w-[1600px]">
        <div className="mb-20 flex flex-col gap-8 sm:mb-28 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <div className="mb-7 flex items-center gap-4">
              <span className="h-px w-12 bg-[#FF8000]" />

              <span className="text-[10px] uppercase tracking-[0.35em] text-white/35">
                Visual archive
              </span>
            </div>

            <h1 className="font-black text-[clamp(58px,9vw,140px)] uppercase leading-[0.8] tracking-[-0.08em] text-[#EDEDED]">
              On
              <br />
              <span className="text-[#FF8000]">Track</span>
            </h1>
          </div>

          <div className="max-w-[300px] lg:pb-3">
            <p className="text-sm leading-6 text-white/40">
              Moments from the grid, the garage and everything in between.
            </p>
          </div>
        </div>

        <div className="hidden h-[650px] items-center justify-center lg:flex">
          <div className="relative flex items-center justify-center">
            {mediaItems.map((item) => (
              <div
                key={item.number}
                className={`group relative h-[520px] w-[310px] cursor-pointer overflow-hidden rounded-[24px] border border-white/10 bg-[#141414] shadow-2xl transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] hover:z-20 hover:-translate-y-10 hover:rotate-0 hover:scale-105 ${item.rotate} ${item.translate} ${item.z}`}
                style={{
                  backgroundImage: `url(${item.image})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  marginLeft: "-70px",
                }}
              >
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/10 to-transparent opacity-80 transition-opacity duration-500 group-hover:opacity-90" />

                <div className="absolute inset-0 bg-[#FF8000]/0 transition-colors duration-500 group-hover:bg-[#FF8000]/10" />

                <div className="absolute left-6 top-6">
                  <span className="text-[10px] font-medium tracking-[0.25em] text-white/60">
                    {item.number}
                  </span>
                </div>

                <div className="absolute bottom-6 left-6 right-6 flex items-end justify-between">
                  <div>
                    <p className="mb-1 text-[9px] uppercase tracking-[0.3em] text-[#FF8000]">
                      Oscar Piastri
                    </p>

                    <h2 className="text-xl font-bold uppercase tracking-tight text-white">
                      {item.title}
                    </h2>
                  </div>

                  <span className="flex h-9 w-9 items-center justify-center rounded-full border border-white/20 text-sm text-white transition-all duration-500 group-hover:border-[#FF8000] group-hover:bg-[#FF8000] group-hover:text-black">
                    ↗
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:hidden">
          {mediaItems.map((item, index) => (
            <div
              key={item.number}
              className={`group relative aspect-[3/4] overflow-hidden rounded-2xl border border-white/10 bg-[#141414] ${
                index === 0 ? "col-span-2 sm:col-span-2" : ""
              }`}
              style={{
                backgroundImage: `url(${item.image})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            >
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />

              <div className="absolute left-4 top-4">
                <span className="text-[9px] tracking-[0.25em] text-white/50">
                  {item.number}
                </span>
              </div>

              <div className="absolute bottom-4 left-4">
                <p className="mb-1 text-[8px] uppercase tracking-[0.25em] text-[#FF8000]">
                  Oscar Piastri
                </p>

                <h2 className="font-bold uppercase tracking-tight text-white">
                  {item.title}
                </h2>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-14 flex items-center justify-between border-t border-white/10 pt-6">
          <span className="text-[9px] uppercase tracking-[0.3em] text-white/25">
            05 moments
          </span>

          <span className="text-[9px] uppercase tracking-[0.3em] text-white/25">
            Oscar Piastri · #81
          </span>
        </div>
      </div>
    </section>
  );
}
