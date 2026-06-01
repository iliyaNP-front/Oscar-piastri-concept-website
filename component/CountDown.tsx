"use client";
import { useEffect, useState } from "react";

export default function CountDown({
  date,
  year,
  time,
}: {
  date: string;
  year: string;
  time: string;
}) {
  const targetDate = new Date(`${date}, ${year} ${time}`).getTime();

  const [days, setDays] = useState("00");
  const [hours, setHours] = useState("00");
  const [minutes, setMinutes] = useState("00");

  useEffect(() => {
    const updateTime = () => {
      const now = new Date().getTime();
      const diff = targetDate - now;

      if (diff <= 0) {
        setDays("00");
        setHours("00");
        setMinutes("00");
        return;
      }

      setDays(
        Math.floor(diff / (1000 * 60 * 60 * 24))
          .toString()
          .padStart(2, "0"),
      );

      setHours(
        Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
          .toString()
          .padStart(2, "0"),
      );

      setMinutes(
        Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60))
          .toString()
          .padStart(2, "0"),
      );
    };

    updateTime();
    const interval = setInterval(updateTime, 60000);

    return () => clearInterval(interval);
  }, [targetDate]);

  return (
    <span className="text-[#EDEDED] NextRaceCount text-2xl font-mono">
      {days} DAYS : {hours} HOURS : {minutes} MINUTES
    </span>
  );
}
