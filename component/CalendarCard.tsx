"use client";

import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { FiArrowUpRight } from "react-icons/fi";

gsap.registerPlugin(ScrollTrigger);

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

interface CalendarCardProps {
  race: RaceType;
}

export default function CalendarCard({ race }: CalendarCardProps) {
  const container = useRef<HTMLDivElement | null>(null);

  useGSAP(
    () => {
      if (!container.current) return;

      const image = container.current.querySelector(".calendar-image");

      const content = container.current.querySelector(".calendar-content");

      if (!image || !content) return;

      const contentItems = Array.from(content.children);

      gsap.fromTo(
        image,
        {
          scale: 1.15,
        },
        {
          scale: 1,
          duration: 1.4,
          ease: "power3.out",
          scrollTrigger: {
            trigger: container.current,
            start: "top 85%",
            once: true,
          },
        },
      );

      gsap.fromTo(
        contentItems,
        {
          y: 40,
          opacity: 0,
        },
        {
          y: 0,
          opacity: 1,
          duration: 0.9,
          stagger: 0.08,
          ease: "power3.out",
          scrollTrigger: {
            trigger: container.current,
            start: "top 80%",
            once: true,
          },
        },
      );
    },
    {
      scope: container,
    },
  );

  return (
    <article ref={container} className="relative pl-12 lg:pl-0">
      {/* ==================== TIMELINE DOT ==================== */}

      <div className="absolute left-[12px] top-8 z-20 h-[15px] w-[15px] rounded-full border-2 border-[#0a0a0a] bg-[#FF8000] shadow-[0_0_0_4px_rgba(255,128,0,0.15)] lg:left-1/2 lg:-translate-x-1/2" />

      {/* ==================== CARD ==================== */}

      <div className="group relative overflow-hidden rounded-[2px] border border-white/10 bg-[#111111]">
        {/* ==================== IMAGE ==================== */}

        <div className="relative h-[500px] overflow-hidden sm:h-[600px] lg:h-[680px]">
          <Image
            src={race.image}
            alt={`${race.raceName} - ${race.circuitName}`}
            fill
            sizes="(max-width: 768px) 100vw, 1600px"
            className="calendar-image object-cover transition-transform duration-1000 ease-out group-hover:scale-[1.03]"
            priority={race.round <= 2}
          />

          {/* Dark overlay */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/5 to-black/90" />

          {/* Orange hover overlay */}
          <div className="absolute inset-0 bg-[#FF8000]/0 transition-colors duration-700 group-hover:bg-[#FF8000]/[0.04]" />

          {/* ==================== ROUND ==================== */}

          <div className="absolute left-6 top-6 sm:left-8 sm:top-8">
            <span className="text-[10px] uppercase tracking-[0.3em] text-white/50">
              Round
            </span>

            <p className="mt-1 font-black text-4xl leading-none tracking-[-0.06em] text-white sm:text-5xl">
              {String(race.round).padStart(2, "0")}
            </p>
          </div>

          {/* ==================== MAIN CONTENT ==================== */}

          <div className="absolute bottom-8 left-6 right-6 sm:bottom-10 sm:left-8 sm:right-8 lg:bottom-12 lg:left-12 lg:right-12">
            <div className="calendar-content">
              {/* Location */}

              <p className="mb-3 text-[10px] uppercase tracking-[0.35em] text-[#FF8000]">
                {race.city} · {race.country}
              </p>

              {/* Circuit */}

              <h2
                className="font-black text-[clamp(42px,7vw,105px)] uppercase leading-[0.8] tracking-[-0.07em] text-white"
                style={{
                  fontFamily: "var(--font-oxanium)",
                }}
              >
                {race.circuitName}
              </h2>

              {/* Bottom information */}

              <div className="mt-6 flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">
                <div>
                  <p className="text-xs uppercase tracking-[0.2em] text-white/40">
                    {race.raceName}
                  </p>

                  <p className="mt-2 font-formula text-xl font-bold text-white sm:text-2xl">
                    {race.dateFormatted}
                  </p>
                </div>

                {/* Details link */}

                <Link
                  href={`/calendar/${race.slug}`}
                  className="group/link flex w-fit items-center gap-3"
                >
                  <span className="text-[10px] uppercase tracking-[0.25em] text-white/60 transition-colors duration-300 group-hover/link:text-[#FF8000]">
                    Race details
                  </span>

                  <span className="flex h-10 w-10 items-center justify-center rounded-full border border-white/20 text-white transition-all duration-300 group-hover/link:border-[#FF8000] group-hover/link:bg-[#FF8000] group-hover/link:text-black">
                    <FiArrowUpRight />
                  </span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </article>
  );
}
