"use client";

import Image from "next/image";
import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

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
  gsap.registerPlugin(ScrollTrigger);

  useGSAP(
    () => {
      gsap.set(".TimeLineTitle", { opacity: 0 });
      gsap.set(".TimeLineImage", { opacity: 0, x: 100, y: 100 });

      gsap.to(".TimeLineTitle", {
        opacity: 1,
        stagger: 0.1,
        duration: 1,
        ease: "power4.inOut",
        scrollTrigger: {
          trigger: container.current,
          start: "top 60%",
        },
      });
      gsap.to(".TimeLineImage", {
        opacity: 1,
        x: 0,
        y: 0,
        stagger: 0.1,
        duration: 1,
        ease: "power4.inOut",
        scrollTrigger: {
          trigger: container.current,
          start: "top 60%",
        },
      });
      gsap.to(".Circle", {
        backgroundColor: "#FF8000",
        stagger: 0.1,
        duration: 1,
        ease: "power4.inOut",
        scrollTrigger: {
          trigger: container.current,
          start: "top 70%",
        },
      });
    },
    { scope: container },
  );

  return (
    <div
      ref={container}
      key={stage.id}
      className="w-full flex justify-between items-center overflow-x-hidden TimeLineSection"
    >
      <div className="w-5/12 TimeLineTexts pt-20 flex flex-col gap-2 text-justify">
        <h2 className="text-[#EDEDED] TimeLineTitle text-3xl font-formula">
          {stage.title}
        </h2>
        <p className="text-[#9A9A9A]">{stage.description}</p>
      </div>
      <div className="w-1 h-[400px] TimelineLine h-full bg-[#080808] relative flex justify-center items-center">
        <div className="absolute w-5 h-5 rounded-full Circle border-2 border-[#FF8000]"></div>
      </div>
      <div className="w-5/12 h-full TimelineImg overflow-hidden flex justify-end py-5">
        <div className="w-full TimeLineImage h-[400px] relative">
          <Image
            src={stage.image}
            className="rounded-2xl"
            alt={stage.title}
            fill
          />
        </div>
      </div>
    </div>
  );
}
