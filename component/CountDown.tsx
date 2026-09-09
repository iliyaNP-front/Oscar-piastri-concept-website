"use client";

import { useEffect, useState } from "react";

type CountDownProps = {
  date: string;
  year: string;
  time: string;
};

export default function CountDown({ date, year, time }: CountDownProps) {
  const targetDate = new Date(`${date}, ${year} ${time}`).getTime();

  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
  });

  useEffect(() => {
    const updateTime = () => {
      const difference = targetDate - Date.now();

      if (difference <= 0) {
        setTimeLeft({
          days: 0,
          hours: 0,
          minutes: 0,
        });

        return;
      }

      const days = Math.floor(difference / (1000 * 60 * 60 * 24));

      const hours = Math.floor((difference / (1000 * 60 * 60)) % 24);

      const minutes = Math.floor((difference / (1000 * 60)) % 60);

      setTimeLeft({
        days,
        hours,
        minutes,
      });
    };

    updateTime();

    const interval = window.setInterval(updateTime, 60_000);

    return () => {
      window.clearInterval(interval);
    };
  }, [targetDate]);

  const values = [
    {
      value: timeLeft.days,
      label: "Days",
    },
    {
      value: timeLeft.hours,
      label: "Hours",
    },
    {
      value: timeLeft.minutes,
      label: "Minutes",
    },
  ];

  return (
    <div className="flex flex-wrap items-end gap-6 sm:gap-10">
      {values.map((item, index) => (
        <div key={item.label} className="flex items-end gap-2">
          <div>
            <p className="font-mono text-[clamp(36px,5vw,64px)] font-medium leading-none tracking-[-0.08em] text-[#EDEDED]">
              {item.value.toString().padStart(2, "0")}
            </p>

            <p className="mt-2 text-[9px] uppercase tracking-[0.25em] text-white/30">
              {item.label}
            </p>
          </div>

          {index < values.length - 1 && (
            <span className="mb-6 text-lg text-[#FF8000]/60">:</span>
          )}
        </div>
      ))}
    </div>
  );
}
