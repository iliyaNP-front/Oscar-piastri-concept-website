import fs from "fs/promises";
import path from "path";
import CalendarCard from "@/component/CalendarCard";

interface RaceType {
  id: number;
  round: number;
  raceName: string;
  circuitName: string;
  country: string;
  city: string;
  date: string;
  dateFormatted: string;
  image: string;
  slug: string;
}

export default async function Calendar() {
  const filePath = path.join(
    process.cwd(),
    "public",
    "data",
    "f1-2026-calendar.json",
  );

  const file = await fs.readFile(filePath, "utf-8");

  const races: RaceType[] = JSON.parse(file);

  return (
    <main className="min-h-screen w-full overflow-hidden bg-[#0a0a0a] text-[#EDEDED]">
      <section className="relative px-5 pb-24 pt-40 sm:px-8 lg:px-14 lg:pb-32 lg:pt-52">
        <div className="pointer-events-none absolute left-1/2 top-1/2 h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#FF8000]/[0.025] blur-[150px]" />

        <div className="relative z-10 mx-auto max-w-[1600px]">
          <div className="mb-8 flex items-center gap-4">
            <span className="h-px w-12 bg-[#FF8000]" />

            <span className="text-[9px] uppercase tracking-[0.35em] text-white/30">
              Formula One · 2026 Season
            </span>
          </div>

          <div className="flex flex-col justify-between gap-10 lg:flex-row lg:items-end">
            <h1 className="font-black text-[clamp(70px,11vw,170px)] uppercase leading-[0.75] tracking-[-0.08em]">
              Race
              <br />
              <span className="text-[#FF8000]">Calendar</span>
            </h1>

            <div className="max-w-[320px] lg:pb-2">
              <p className="text-sm leading-6 text-white/35">
                Every round. Every circuit. Every opportunity to make history.
              </p>
            </div>
          </div>

          <div className="mt-16 flex items-center justify-between border-t border-white/10 pt-5">
            <span className="text-[9px] uppercase tracking-[0.3em] text-white/25">
              24 Rounds · 2026 Championship
            </span>

            <span className="text-[9px] uppercase tracking-[0.3em] text-white/25">
              Oscar Piastri · #81
            </span>
          </div>
        </div>
      </section>

      <section className="px-5 pb-32 sm:px-8 lg:px-14 lg:pb-48">
        <div className="mx-auto max-w-[1600px]">
          <div className="relative">
            <div className="absolute bottom-0 left-[19px] top-0 w-px bg-white/10 lg:left-1/2 lg:-translate-x-1/2" />

            <div className="flex flex-col gap-20 lg:gap-32">
              {races.map((race) => (
                <CalendarCard key={race.id} race={race} />
              ))}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
