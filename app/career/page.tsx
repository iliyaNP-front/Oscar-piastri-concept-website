import Copy from "@/component/Copy";
import CountUp from "@/component/CountUp";
import Media from "@/component/Sections/Media";
import Timeline from "@/component/TimelineSec";

interface CareerStage {
  id: number;
  title: string;
  description: string;
  image: string;
}

const careerTimeline: CareerStage[] = [
  {
    id: 1,
    title: "Formula Renault",
    description:
      "Oscar Piastri's 2019 Formula Renault Eurocup season marked the first clear signal of his long-term potential. Competing in a highly competitive grid, he combined consistency with precise race execution, securing multiple victories and podiums on the way to the championship. Rather than relying on raw aggression, Piastri built results through measured decision-making and adaptability across varying circuits and conditions. The title confirmed his ability to learn quickly and deliver under pressure, setting the foundation for his rapid rise through the junior categories.",
    image: "/careerImage/RenaultImg.jpg",
  },
  {
    id: 2,
    title: "FIA Formula 3",
    description:
      "Oscar Piastri's 2020 Formula 3 season confirmed his rapid adaptability at the highest level of junior competition. In his rookie year, he combined consistency with intelligent race management to secure the championship, reinforcing his reputation as a driver who delivers results through control rather than excess risk.",
    image: "/careerImage/F3Img.jpeg",
  },
  {
    id: 3,
    title: "FIA Formula 2",
    description:
      "In his 2021 Formula 2 rookie season, Oscar Piastri demonstrated complete race management across a highly competitive grid. He combined strong qualifying performance with controlled tyre usage and situational awareness in wheel-to-wheel battles, securing multiple victories and consistently scoring points. The championship completed a rare run of consecutive rookie titles and confirmed his readiness for the demands of Formula 1.",
    image: "/careerImage/F2Img.jpg",
  },
  {
    id: 4,
    title: "FIA Formula 1",
    description:
      "Oscar Piastri entered Formula 1 with McLaren in 2023 and adapted quickly to the demands of the category. In his rookie season, he showed strong qualifying pace, controlled racecraft, and a low error rate. By his second season, he was consistently competing at the front and establishing himself as one of the sport's most promising young drivers.",
    image: "/careerImage/F1Img.jpg",
  },
];

const championshipResults = [
  {
    year: "2025",
    position: "03",
    points: 410,
  },
  {
    year: "2024",
    position: "04",
    points: 292,
  },
  {
    year: "2023",
    position: "09",
    points: 97,
  },
];

const stats = [
  {
    value: 70,
    label: "Race Starts",
  },
  {
    value: 6,
    label: "Pole Positions",
  },
  {
    value: 9,
    label: "Race Wins",
  },
  {
    value: 4,
    label: "DNFs",
  },
];

export default function Career() {
  return (
    <main className="w-full overflow-hidden bg-[#0a0a0a] text-[#EDEDED]">
      <section className="relative h-screen min-h-[700px] w-full">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: "url(/bg/CareerBg.jpg)",
          }}
        />

        <div className="absolute inset-0 bg-black/55" />

        <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a0a]/30 via-transparent to-[#0a0a0a]" />

        <div className="pointer-events-none absolute bottom-0 left-1/2 h-[450px] w-[650px] -translate-x-1/2 rounded-full bg-[#FF8000]/[0.035] blur-[140px]" />

        <div className="relative z-10 flex h-full flex-col justify-between px-5 py-10 sm:px-8 lg:px-14 lg:py-12">
          <div className="mx-auto w-full max-w-[1600px] mt-15">
            <div className="mb-7">
              <span className="text-[10px] uppercase tracking-[0.4em] text-[#FF8000]">
                From karting to Formula One
              </span>
            </div>

            <Copy blockColor="#FF8000" duration={1}>
              <h1 className="font-black uppercase text-[clamp(64px,11vw,180px)] leading-[0.76] tracking-[-0.085em]">
                Career
                <br />
                <span className="text-[#FF8000]">Journey</span>
              </h1>
            </Copy>
          </div>

          <div className="flex items-end justify-between">
            <div>
              <p className="max-w-[300px] text-xs leading-5 text-white/35">
                Four championships. One path. A career built on consistency,
                precision and relentless progression.
              </p>
            </div>

            <div className="flex flex-col items-end gap-3">
              <span className="text-[8px] uppercase tracking-[0.35em] text-white/25">
                Scroll to explore
              </span>

              <div className="h-12 w-px bg-gradient-to-b from-[#FF8000] to-transparent" />
            </div>
          </div>
        </div>
      </section>

      <section className="relative bg-[#0a0a0a] px-5 py-32 sm:px-8 sm:py-40 lg:px-14 lg:py-48">
        <div className="mx-auto max-w-[1600px]">
          <div className="mb-20 flex flex-col justify-between gap-8 lg:mb-28 lg:flex-row lg:items-end">
            <div>
              <div className="mb-6 flex items-center gap-4">
                <span className="h-px w-12 bg-[#FF8000]" />

                <span className="text-[9px] uppercase tracking-[0.35em] text-white/30">
                  01 · The progression
                </span>
              </div>

              <h2 className="font-black text-[clamp(52px,8vw,120px)] uppercase leading-[0.8] tracking-[-0.075em]">
                The road
                <br />
                <span className="text-[#FF8000]">to F1</span>
              </h2>
            </div>

            <p className="max-w-[360px] text-sm leading-6 text-white/35 lg:pb-2">
              Before Formula One came four consecutive years of development,
              pressure and championship-winning performances.
            </p>
          </div>

          <div className="relative">
            <div className="pointer-events-none absolute bottom-0 left-[18px] top-0 w-px bg-white/10 lg:left-1/2 lg:-translate-x-1/2" />

            <div className="flex flex-col gap-20 lg:gap-32">
              {careerTimeline.map((stage) => (
                <Timeline key={stage.id} stage={stage} />
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="relative border-y border-white/10 bg-[#0d0d0d] px-5 py-32 sm:px-8 sm:py-40 lg:px-14 lg:py-48">
        <div className="pointer-events-none absolute right-[-200px] top-1/2 h-[500px] w-[500px] -translate-y-1/2 rounded-full bg-[#FF8000]/[0.025] blur-[130px]" />

        <div className="relative z-10 mx-auto max-w-[1600px]">
          <div className="mb-16 flex flex-col justify-between gap-8 lg:mb-20 lg:flex-row lg:items-end">
            <div>
              <div className="mb-6 flex items-center gap-4">
                <span className="h-px w-12 bg-[#FF8000]" />

                <span className="text-[9px] uppercase tracking-[0.35em] text-white/30">
                  02 · Formula One
                </span>
              </div>

              <h2 className="font-black text-[clamp(48px,7vw,110px)] uppercase leading-[0.8] tracking-[-0.075em]">
                Championship
                <br />
                <span className="text-[#FF8000]">Standings</span>
              </h2>
            </div>

            <span className="text-[9px] uppercase tracking-[0.3em] text-white/20">
              2023 — 2025
            </span>
          </div>

          <div className="overflow-hidden border-y border-white/10">
            <div className="grid grid-cols-[1fr_1fr_1fr] border-b border-white/10 px-4 py-5 sm:px-8">
              <span className="text-[9px] uppercase tracking-[0.3em] text-white/25">
                Season
              </span>

              <span className="text-[9px] uppercase tracking-[0.3em] text-white/25">
                Position
              </span>

              <span className="text-right text-[9px] uppercase tracking-[0.3em] text-white/25">
                Points
              </span>
            </div>

            {championshipResults.map((result, index) => (
              <div
                key={result.year}
                className="group grid grid-cols-[1fr_1fr_1fr] items-center border-b border-white/[0.07] px-4 py-7 transition-colors duration-300 last:border-b-0 hover:bg-white/[0.025] sm:px-8 sm:py-9"
              >
                <div>
                  <span className="font-formula text-[clamp(30px,4vw,58px)] font-black tracking-[-0.05em]">
                    {result.year}
                  </span>

                  {index === 0 && (
                    <span className="ml-3 text-[8px] uppercase tracking-[0.25em] text-[#FF8000]">
                      Latest
                    </span>
                  )}
                </div>

                <div>
                  <span className="font-formula text-[clamp(30px,4vw,58px)] font-black tracking-[-0.05em]">
                    {result.position}
                    <sup className="ml-1 text-[12px] text-[#FF8000]">
                      {result.position === "01"
                        ? "ST"
                        : result.position === "02"
                          ? "ND"
                          : result.position === "03"
                            ? "RD"
                            : "TH"}
                    </sup>
                  </span>
                </div>

                <div className="text-right">
                  <span className="font-formula text-[clamp(30px,4vw,58px)] font-black tracking-[-0.05em] text-[#FF8000]">
                    <CountUp end={result.points} />
                  </span>

                  <span className="ml-2 text-[8px] uppercase tracking-[0.2em] text-white/20">
                    pts
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="relative px-5 py-32 sm:px-8 sm:py-40 lg:px-14 lg:py-48">
        <div className="mx-auto max-w-[1600px]">
          <div className="mb-20 flex flex-col justify-between gap-8 lg:mb-28 lg:flex-row lg:items-end">
            <div>
              <div className="mb-6 flex items-center gap-4">
                <span className="h-px w-12 bg-[#FF8000]" />

                <span className="text-[9px] uppercase tracking-[0.35em] text-white/30">
                  03 · By the numbers
                </span>
              </div>

              <h2 className="font-black text-[clamp(52px,8vw,120px)] uppercase leading-[0.78] tracking-[-0.08em]">
                Oscar&apos;s
                <br />
                <span className="text-[#FF8000]">Stats</span>
              </h2>
            </div>

            <p className="max-w-[320px] text-sm leading-6 text-white/35 lg:pb-2">
              Numbers only tell part of the story. These are the milestones
              behind the progression.
            </p>
          </div>

          <div className="grid grid-cols-1 border-y border-white/10 sm:grid-cols-2 lg:grid-cols-4">
            {stats.map((stat) => (
              <div
                key={stat.label}
                className="group border-b border-white/10 px-5 py-10 sm:px-8 sm:py-12 lg:border-b-0 lg:border-r lg:px-10 lg:py-14 lg:last:border-r-0"
              >
                <div className="mb-8 flex items-center justify-between">
                  <span className="text-[9px] uppercase tracking-[0.3em] text-white/25">
                    Metric
                  </span>

                  <span className="h-2 w-2 rounded-full bg-[#FF8000] opacity-40 transition-opacity duration-300 group-hover:opacity-100" />
                </div>

                <div className="font-formula text-[clamp(64px,7vw,105px)] font-black leading-none tracking-[-0.08em] text-[#FF8000]">
                  <CountUp end={stat.value} />
                </div>

                <p className="mt-5 text-[10px] uppercase tracking-[0.25em] text-white/40">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>

          <div className="relative mt-8 h-[420px] overflow-hidden sm:h-[520px] lg:h-[680px]">
            <div
              className="absolute inset-0 bg-cover bg-center transition-transform duration-[1.5s] hover:scale-[1.02]"
              style={{
                backgroundImage: "url(/careerImage/StatsImg.jpg)",
              }}
            />

            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent" />

            <div className="absolute bottom-6 left-6 sm:bottom-8 sm:left-8 lg:bottom-10 lg:left-10">
              <span className="text-[9px] uppercase tracking-[0.35em] text-[#FF8000]">
                Numbers behind the driver
              </span>

              <p className="mt-2 max-w-[400px] text-xs leading-5 text-white/45">
                Every start, every podium and every mistake contributes to the
                driver Oscar Piastri is becoming.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="relative border-t border-white/10 bg-[#0d0d0d] px-5 py-32 sm:px-8 sm:py-40 lg:px-14 lg:py-48">
        <div className="mx-auto max-w-[1600px]">
          <div className="grid grid-cols-1 gap-20 lg:grid-cols-[0.75fr_1.25fr] lg:gap-28">
            <div>
              <div className="mb-6 flex items-center gap-4">
                <span className="h-px w-12 bg-[#FF8000]" />

                <span className="text-[9px] uppercase tracking-[0.35em] text-white/30">
                  04 · The driver
                </span>
              </div>

              <h2 className="font-black text-[clamp(52px,7vw,105px)] uppercase leading-[0.78] tracking-[-0.075em]">
                The
                <br />
                <span className="text-[#FF8000]">Story</span>
              </h2>

              <div className="mt-16 grid grid-cols-1 gap-8 border-t border-white/10 pt-8 sm:grid-cols-2 lg:grid-cols-1">
                <div>
                  <p className="text-[9px] uppercase tracking-[0.3em] text-white/25">
                    Date of Birth
                  </p>

                  <p className="mt-2 font-formula text-3xl font-bold">
                    06 / 04 / 2001
                  </p>
                </div>

                <div>
                  <p className="text-[9px] uppercase tracking-[0.3em] text-white/25">
                    Place of Birth
                  </p>

                  <p className="mt-2 font-formula text-3xl font-bold">
                    Melbourne, Australia
                  </p>
                </div>
              </div>
            </div>

            <div className="lg:pt-20">
              <div className="border-t-2 border-[#FF8000] pt-7">
                <p className="max-w-[850px] text-justify text-base leading-8 text-white/45 sm:text-lg sm:leading-9">
                  Born in Melbourne, just a stone&apos;s throw from the
                  Australian Grand Prix venue, Oscar Piastri&apos;s dreams of
                  Formula 1 were ignited by the sport&apos;s stars racing around
                  Albert Park.
                  <br />
                  <br />
                  Using success on the Australian karting scene as a
                  springboard, Piastri moved to Europe to compete against the
                  best young drivers in the world. His first taste of
                  single-seater racing came in F4 UAE, where two podium finishes
                  hinted at what was coming.
                  <br />
                  <br />
                  From there, success followed. British F4 runner-up. Formula
                  Renault champion. FIA Formula 3 champion. FIA Formula 2
                  champion.
                  <br />
                  <br />
                  Piastri did not simply climb the junior single-seater ladder.
                  He accelerated through it. By 2023, two Formula 1 teams were
                  fighting for his services, with McLaren ultimately winning the
                  battle.
                  <br />
                  <br />
                  His rookie campaign delivered two podiums. In 2024, he became
                  a Grand Prix winner and played a key role in McLaren&apos;s
                  Constructors&apos; Championship success. In 2025, he emerged
                  as a genuine championship contender, establishing himself as
                  one of the defining young talents of the modern Formula 1
                  grid.
                </p>
              </div>

              <div className="mt-12 flex items-center justify-between border-t border-white/10 pt-5">
                <span className="text-[9px] uppercase tracking-[0.3em] text-white/20">
                  Melbourne · Australia
                </span>

                <span className="text-[9px] uppercase tracking-[0.3em] text-white/20">
                  Oscar Piastri · #81
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Media />
    </main>
  );
}
