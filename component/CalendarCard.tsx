"use client";

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
interface CalenderCardProps {
  races: RaceType;
}

import { useEffect, useRef, useState } from "react";

export default function CalenderCard({ races }: CalenderCardProps) {
  const Ref = useRef<HTMLDivElement | null>(null);
  const [active, setAtive] = useState(false);

  useEffect(() => {
    if (!Ref.current) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        setAtive(entry.isIntersecting);
      },
      { threshold: 0.9 },
    );
    observer.observe(Ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      className="w-full bg-center bg-cover bg-no-repeat rounded-md"
      style={{ backgroundImage: `url(${races.image})` }}
    >
      <div
        ref={Ref}
        className={`w-full flex flex-col justify-between CalenderCard relative min-h-120 transition-all duration-300 ${active ? "bg-[#141414b4]" : "bg-[#141414ee]"}  p-10`}
      >
        <div>
          <p className="inline-block px-3 py-1 text-sm  font-semibold bg-white/10 rounded-full">
            Round <span>{races.round}</span>
          </p>
          <h1
            className="text-[#ffffff89] text-[75px] font-extrabold RaceName tracking-tighter"
            style={{ fontFamily: "var(--font-oxanium)" }}
          >
            {races.circuitName.toUpperCase()}
          </h1>
          <p className="text-[50px] RaceCountry text-[#E10600] font-bold tracking-tight -mt-6">
            {races.country.toUpperCase()}
          </p>
        </div>
        <p className="text-[#EDEDED] RaceDate font-formula font-black text-[30px]">
          {races.dateFormatted}
        </p>
      </div>
    </div>
  );
}
