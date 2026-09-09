"use client";

import Image from "next/image";
import { useRef, useState } from "react";
import { RiMenu4Line } from "react-icons/ri";
import { HiXMark } from "react-icons/hi2";
import Link from "next/link";
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
      const ctx = gsap.context(() => {
        gsap.set(overlay.current, {
          clipPath: "polygon(0 0, 100% 0, 100% 0, 0 0)",
        });

        gsap.set(items.current, {
          yPercent: 120,
          opacity: 0,
        });
      }, container);

      return () => ctx.revert();
    },
    { scope: container },
  );

  useGSAP(
    () => {
      if (!overlay.current) return;

      const tl = gsap.timeline({
        defaults: {
          ease: "power4.inOut",
        },
      });

      if (isOpen) {
        document.body.style.overflow = "hidden";

        tl.to(overlay.current, {
          clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)",
          duration: 1,
        }).to(
          items.current,
          {
            yPercent: 0,
            opacity: 1,
            duration: 0.9,
            stagger: 0.08,
            ease: "power4.out",
          },
          "-=0.6",
        );
      } else {
        document.body.style.overflow = "";

        tl.to(items.current, {
          yPercent: 120,
          opacity: 0,
          duration: 0.5,
          stagger: 0.03,
          ease: "power3.in",
        }).to(
          overlay.current,
          {
            clipPath: "polygon(0 0, 100% 0, 100% 0, 0 0)",
            duration: 0.8,
          },
          "-=0.2",
        );
      }

      return () => {
        tl.kill();
        document.body.style.overflow = "";
      };
    },
    {
      dependencies: [isOpen],
      scope: container,
    },
  );

  return (
    <header ref={container} className="fixed inset-x-0 top-0 z-50 text-white">
      {/* Top navigation */}
      <div className="flex items-center justify-between px-5 py-5 sm:px-8 lg:px-14">
        <Link href="/" className="relative z-10 block">
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
          className={`group relative z-10 flex h-12 w-12 items-center justify-center rounded-full border transition-all duration-300 sm:h-14 sm:w-14 ${
            isOpen
              ? "border-[#121212]/30 text-[#121212]"
              : "border-white/30 text-white hover:border-[#FF8000] hover:bg-[#FF8000]"
          }`}
        >
          {isOpen ? (
            <HiXMark className="text-2xl" />
          ) : (
            <RiMenu4Line className="text-xl" />
          )}
        </button>
      </div>

      {/* Fullscreen menu */}
      <div
        ref={overlay}
        className="fixed inset-0 z-0 flex min-h-screen flex-col bg-[#FF8000] px-5 sm:px-8 lg:px-14"
      >
        {/* Menu content */}
        <div className="flex flex-1 flex-col justify-center">
          <div className="mb-8 flex items-center gap-4">
            <span className="h-px w-10 bg-[#121212]/40" />

            <span className="text-[10px] uppercase tracking-[0.3em] text-[#121212]/50">
              Explore the world of
            </span>
          </div>

          <nav className="flex flex-col">
            {links.map((link, index) => (
              <div
                key={link.name}
                className="overflow-hidden border-b border-[#121212]/15"
              >
                <div ref={addItem}>
                  <Link
                    href={link.link}
                    onClick={() => setIsOpen(false)}
                    className="group flex items-center justify-between py-3 text-[clamp(48px,8vw,120px)] font-black uppercase leading-[0.85] tracking-[-0.07em] text-[#121212] transition-colors duration-300 hover:text-white sm:py-4"
                  >
                    <span>{link.name}</span>

                    <span className="mr-2 text-[18px] font-normal opacity-0 transition-all duration-300 group-hover:mr-0 group-hover:opacity-100 sm:text-2xl">
                      ↗
                    </span>
                  </Link>
                </div>
              </div>
            ))}
          </nav>
        </div>

        {/* Menu footer */}
        <div className="flex flex-col gap-6 border-t border-[#121212]/15 py-6 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="mb-2 text-[10px] uppercase tracking-[0.3em] text-[#121212]/50">
              Unofficial concept redesign
            </p>

            <p className="text-sm text-[#121212]/80">
              Designed & developed by{" "}
              <span className="font-formula">Iliya Naghipour</span>
            </p>
          </div>

          <div className="flex items-center gap-6 text-[10px] uppercase tracking-[0.25em] text-[#121212]/50">
            <span>© 2026</span>
            <span className="h-px w-8 bg-[#121212]/30" />
            <span>McLaren Racing</span>
          </div>
        </div>
      </div>
    </header>
  );
}
