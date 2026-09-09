"use client";

import Image from "next/image";
import Link from "next/link";
import { useRef, useState } from "react";
import { RiMenu4Line } from "react-icons/ri";
import { HiXMark } from "react-icons/hi2";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

const links = [
  { name: "HOME", link: "/" },
  { name: "CAREER", link: "/career" },
  { name: "CALENDAR", link: "/calendar" },
  { name: "NEWS", link: "/news" },
  { name: "PARTNERS", link: "/partners" },
];

export default function Header() {
  const container = useRef<HTMLDivElement>(null);
  const overlay = useRef<HTMLDivElement>(null);
  const items = useRef<HTMLDivElement[]>([]);
  const [isOpen, setIsOpen] = useState(false);

  const addItem = (el: HTMLDivElement | null) => {
    if (el && !items.current.includes(el)) {
      items.current.push(el);
    }
  };

  const toggleMenu = () => {
    setIsOpen((prev) => !prev);
  };

  useGSAP(
    () => {
      if (!overlay.current) return;

      gsap.set(overlay.current, {
        clipPath: "inset(0 0 100% 0)",
      });

      gsap.set(items.current, {
        yPercent: 120,
        opacity: 0,
      });
    },
    {
      scope: container,
    },
  );

  useGSAP(
    () => {
      if (!overlay.current) return;

      const timeline = gsap.timeline();

      if (isOpen) {
        document.body.style.overflow = "hidden";

        timeline
          .to(overlay.current, {
            clipPath: "inset(0 0 0% 0)",
            duration: 0.85,
            ease: "power4.inOut",
          })
          .to(
            items.current,
            {
              yPercent: 0,
              opacity: 1,
              duration: 0.75,
              stagger: 0.07,
              ease: "power4.out",
            },
            "-=0.45",
          );
      } else {
        document.body.style.overflow = "";

        timeline
          .to(items.current, {
            yPercent: 120,
            opacity: 0,
            duration: 0.35,
            stagger: 0.025,
            ease: "power3.in",
          })
          .to(
            overlay.current,
            {
              clipPath: "inset(0 0 100% 0)",
              duration: 0.7,
              ease: "power4.inOut",
            },
            "-=0.1",
          );
      }

      return () => {
        timeline.kill();
      };
    },
    {
      dependencies: [isOpen],
      scope: container,
    },
  );

  return (
    <header
      ref={container}
      className="fixed inset-x-0 top-0 z-50 w-full max-w-full overflow-hidden text-white"
    >
      <div className="relative z-50 flex w-full items-center justify-between px-5 py-5 sm:px-8 lg:px-14">
        <Link
          href="/"
          aria-label="Oscar Piastri home"
          className="relative z-50 block shrink-0"
        >
          <Image
            src="/Logo.png"
            alt="Oscar Piastri Concept"
            width={1000}
            height={1000}
            priority
            className="h-16 w-16 object-contain sm:h-20 sm:w-20"
          />
        </Link>

        <button
          type="button"
          onClick={toggleMenu}
          aria-label={isOpen ? "Close menu" : "Open menu"}
          aria-expanded={isOpen}
          className={`relative z-50 flex h-12 w-12 shrink-0 items-center justify-center rounded-full border transition-all duration-300 sm:h-14 sm:w-14 ${
            isOpen
              ? "border-[#121212]/30 bg-transparent text-[#121212]"
              : "border-white/30 text-white hover:border-[#FF8000] hover:bg-[#FF8000] hover:text-black"
          }`}
        >
          {isOpen ? (
            <HiXMark className="text-2xl cursor-pointer" />
          ) : (
            <RiMenu4Line className="text-xl cursor-pointer" />
          )}
        </button>
      </div>

      <div
        ref={overlay}
        className="fixed inset-0 z-40 flex h-dvh w-full max-w-full flex-col overflow-hidden bg-[#FF8000] px-5 sm:px-8 lg:px-14"
        style={{
          clipPath: "inset(0 0 100% 0)",
        }}
      >
        <div className="flex min-h-0 flex-1 flex-col justify-center pt-20">
          <div className="mb-6 flex shrink-0 items-center gap-4 sm:mb-8">
            <span className="h-px w-8 bg-[#121212]/40 sm:w-10" />

            <span className="text-[9px] uppercase tracking-[0.3em] text-[#121212]/50 sm:text-[10px]">
              Explore the world of
            </span>
          </div>

          <nav className="flex min-h-0 flex-col">
            {links.map((link) => (
              <div
                key={link.name}
                className="min-w-0 overflow-hidden border-b border-[#121212]/15"
              >
                <div ref={addItem}>
                  <Link
                    href={link.link}
                    onClick={() => setIsOpen(false)}
                    className="group flex min-w-0  items-center justify-between gap-4 py-2.5 text-[clamp(42px,8vw,120px)] font-black uppercase leading-[0.85] tracking-[-0.07em] text-[#121212] transition-colors duration-300 hover:text-white sm:py-3 lg:py-4"
                  >
                    <span className="min-w-0 truncate w-full">{link.name}</span>
                  </Link>
                </div>
              </div>
            ))}
          </nav>
        </div>

        <div className="shrink-0 border-t border-[#121212]/15 py-5 sm:py-6">
          <div className="flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between sm:gap-6">
            <div className="min-w-0">
              <p className="mb-2 text-[9px] uppercase tracking-[0.3em] text-[#121212]/50 sm:text-[10px]">
                Unofficial concept redesign
              </p>

              <p className="text-xs text-[#121212]/80 sm:text-sm">
                Designed & developed by{" "}
                <span className="font-formula">Iliya Naghipour</span>
              </p>
            </div>

            <div className="flex shrink-0 items-center gap-4 text-[9px] uppercase tracking-[0.25em] text-[#121212]/50 sm:gap-6 sm:text-[10px]">
              <span>© 2026</span>

              <span className="h-px w-6 bg-[#121212]/30 sm:w-8" />

              <span>McLaren Racing</span>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
