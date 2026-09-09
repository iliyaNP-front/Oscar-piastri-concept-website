"use client";

import Image from "next/image";
import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

interface CareerStage {
  id: number;
  title: string;
  description: string;
  image: string;
}

interface CareerStageProps {
  stage: CareerStage;
}

export default function Timeline({ stage }: CareerStageProps) {
  const container = useRef<HTMLDivElement | null>(null);

  useGSAP(
    () => {
      const title = container.current?.querySelector(".timeline-title");
      const description = container.current?.querySelector(
        ".timeline-description",
      );
      const image = container.current?.querySelector(".timeline-image");
      const circle = container.current?.querySelector(".timeline-circle");

      if (!title || !description || !image || !circle) return;

      gsap.set([title, description], {
        opacity: 0,
        y: 30,
      });

      gsap.set(image, {
        opacity: 0,
        x: 80,
        scale: 1.05,
      });

      gsap.set(circle, {
        backgroundColor: "#0a0a0a",
        scale: 0.7,
      });

      const timeline = gsap.timeline({
        scrollTrigger: {
          trigger: container.current,
          start: "top 72%",
          once: true,
        },
      });

      timeline
        .to(circle, {
          backgroundColor: "#FF8000",
          scale: 1,
          duration: 0.6,
          ease: "back.out(1.7)",
        })
        .to(
          title,
          {
            opacity: 1,
            y: 0,
            duration: 0.7,
            ease: "power4.out",
          },
          "-=0.35",
        )
        .to(
          description,
          {
            opacity: 1,
            y: 0,
            duration: 0.8,
            ease: "power3.out",
          },
          "-=0.45",
        )
        .to(
          image,
          {
            opacity: 1,
            x: 0,
            scale: 1,
            duration: 1.1,
            ease: "power4.out",
          },
          "-=0.65",
        );
    },
    {
      scope: container,
    },
  );

  return (
    <article
      ref={container}
      className="relative grid w-full grid-cols-1 gap-8 overflow-hidden lg:grid-cols-[1fr_40px_1fr] lg:items-center lg:gap-10"
    >
      <div className="absolute left-[7px] top-0 h-full w-px bg-white/10 lg:hidden">
        <div className="timeline-circle absolute left-1/2 top-8 h-4 w-4 -translate-x-1/2 rounded-full border-2 border-[#FF8000]" />
      </div>

      <div className="relative pl-8 pt-8 lg:order-1 lg:pl-0 lg:pt-0 lg:pr-10">
        <div className="mb-5 flex items-center gap-4">
          <span className="text-[9px] uppercase tracking-[0.35em] text-[#FF8000]">
            Chapter {String(stage.id).padStart(2, "0")}
          </span>

          <span className="h-px w-8 bg-white/10" />
        </div>

        <h2 className="timeline-title font-display text-[clamp(38px,5vw,72px)] font-black uppercase leading-[0.85] tracking-[-0.07em] text-[#EDEDED]">
          {stage.title}
        </h2>

        <p className="timeline-description mt-7 max-w-[650px] text-sm leading-7 text-white/40 sm:text-base sm:leading-8">
          {stage.description}
        </p>
      </div>

      <div className="relative hidden h-full min-h-[500px] lg:order-2 lg:flex lg:items-center lg:justify-center">
        {/* Vertical line */}

        <div className="absolute left-1/2 top-0 h-full w-px -translate-x-1/2 bg-white/10" />

        <div className="timeline-circle relative z-10 h-5 w-5 rounded-full border-2 border-[#FF8000] bg-[#0a0a0a]" />
      </div>

      <div className="relative pl-8 lg:order-3 lg:pl-0">
        <div className="timeline-image group relative h-[350px] w-full overflow-hidden rounded-sm border border-white/10 bg-[#111] sm:h-[450px] lg:h-[520px]">
          <Image
            src={stage.image}
            alt={stage.title}
            fill
            sizes="(max-width: 1024px) 100vw, 50vw"
            className="object-cover transition-transform duration-[1.2s] ease-out group-hover:scale-[1.04]"
          />

          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/10" />

          <div className="absolute bottom-5 left-5 sm:bottom-7 sm:left-7">
            <span className="font-formula text-5xl font-black leading-none text-white/20 sm:text-6xl">
              {String(stage.id).padStart(2, "0")}
            </span>
          </div>

          <div className="absolute right-5 top-5 sm:right-7 sm:top-7">
            <span className="border border-white/15 bg-black/20 px-3 py-2 text-[8px] uppercase tracking-[0.3em] text-white/50 backdrop-blur-sm">
              Career Archive
            </span>
          </div>
        </div>
      </div>
    </article>
  );
}
