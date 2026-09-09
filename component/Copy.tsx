"use client";

import React, { useRef } from "react";
import gsap from "gsap";
import { SplitText } from "gsap/SplitText";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

interface CopyProps {
  children: React.ReactNode;
  animatedOnScroll?: boolean;
  delay?: number;
  blockColor?: string;
  stagger?: number;
  duration?: number;
}

gsap.registerPlugin(SplitText, ScrollTrigger);

export default function Copy({
  children,
  animatedOnScroll = true,
  delay = 0,
  blockColor = "#fff",
  stagger = 0.15,
  duration = 0.75,
}: CopyProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const container = containerRef.current;

      if (!container) return;

      gsap.set(container, { visibility: "visible" });

      const elements = container.hasAttribute("data-copy-wrapper")
        ? Array.from(container.children)
        : [container];

      const splits: SplitText[] = [];
      const lines: HTMLElement[] = [];
      const blocks: HTMLElement[] = [];
      const triggers: ScrollTrigger[] = [];

      elements.forEach((element) => {
        const split = SplitText.create(element, {
          type: "lines",
          linesClass: "block-line",
          lineThreshold: 0.1,
        });

        splits.push(split);

        split.lines.forEach((line) => {
          const wrapper = document.createElement("div");
          wrapper.className = "block-line-wrapper";

          line.parentNode?.insertBefore(wrapper, line);
          wrapper.appendChild(line);

          const block = document.createElement("div");
          block.className = "block-revealer";
          block.style.backgroundColor = blockColor;

          wrapper.appendChild(block);

          lines.push(line as HTMLElement);
          blocks.push(block);
        });
      });

      gsap.set(lines, { opacity: 0 });
      gsap.set(blocks, {
        scaleX: 0,
        transformOrigin: "left center",
      });

      const createReveal = (block: HTMLElement, line: HTMLElement) => {
        const timeline = gsap.timeline({ paused: true });

        timeline
          .to(block, {
            scaleX: 1,
            duration,
            ease: "power4.inOut",
          })
          .set(line, { opacity: 1 })
          .set(block, { transformOrigin: "right center" })
          .to(block, {
            scaleX: 0,
            duration,
            ease: "power4.inOut",
          });

        return timeline;
      };

      blocks.forEach((block, index) => {
        const timeline = createReveal(block, lines[index]);

        if (animatedOnScroll) {
          const trigger = ScrollTrigger.create({
            trigger: container,
            start: "top 90%",
            once: true,
            onEnter: () => {
              timeline.delay(delay + index * stagger).play();
            },
          });

          triggers.push(trigger);
        } else {
          timeline.delay(delay + index * stagger).play();
        }
      });

      return () => {
        triggers.forEach((trigger) => trigger.kill());

        splits.forEach((split) => split.revert());

        container.querySelectorAll(".block-line-wrapper").forEach((wrapper) => {
          if (wrapper.parentNode && wrapper.firstChild) {
            wrapper.parentNode.insertBefore(wrapper.firstChild, wrapper);
            wrapper.remove();
          }
        });
      };
    },
    {
      scope: containerRef,
      dependencies: [animatedOnScroll, delay, blockColor, stagger, duration],
    },
  );

  return (
    <div
      ref={containerRef}
      data-copy-wrapper="true"
      style={{ visibility: "hidden" }}
    >
      {children}
    </div>
  );
}
