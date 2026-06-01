import CalenderCard from "@/component/CalendarCard";

export default async function Calender() {
  const res = await fetch("http://localhost:3000/data/f1-2026-calendar.json", {
    cache: "no-store",
  });

  const races = await res.json();

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

  return (
    <div className="w-full min-h-screen bg-[#141414] text-white px-8 lg:px-20 flex flex-col justify-center py-50">
      <div className="w-full flex flex-col gap-20 ">
        {races.map((race: RaceType) => (
          <CalenderCard key={race.id} races={race} />
        ))}
      </div>
    </div>
  );
}
