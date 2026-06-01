import Image from "next/image";
import CountDown from "../CountDown";
import Link from "next/link";
import { FiArrowRight } from "react-icons/fi";

export default function NextRace() {
  return (
    <section
      className="NextRaceSection bg-no-repeat bg-cover bg-center"
      style={{
        backgroundImage: "url(./bg/NXback.webp)",
        boxShadow: "0px 0px 100px 50px inset #141414",
      }}
    >
      <div className="px-8 lg:px-20 py-40 w-full h-full NextRaceSec flex justify-between items-center bg-[#141414fa]">
        <div>
          <h1 className="text-[80px] text-[#EDEDED] tracking-tighter NextRaceTitle font-bold font-formula">
            NEXT RACE
          </h1>
          <h2 className="text-[50px] NextRaceCountry text-[#ff002b] font-medium">
            <span className="text-[#003cff]">Aust</span>ralia
          </h2>
          <p className="text-[#797979]">March 06 - 08, 2026</p>
          <div className="mt-10 flex flex-col gap-3">
            <CountDown date="March 6" year="2026" time="00:00:00" />
            <Link
              className="text-[#ff8000d7] font-formula text-md underline flex items-center gap-1"
              href="/calendar"
            >
              Calender <FiArrowRight />
            </Link>
          </div>
        </div>
        <div className="relative NextRaceImg w-180 h-180">
          <Image
            src="/NXtrack.png"
            className="w-full h-full"
            alt="Gp Image"
            fill
          />
        </div>
      </div>
    </section>
  );
}
