"use client";

import Link from "next/link";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useRef } from "react";
import { FaInstagram, FaFacebookF, FaXTwitter } from "react-icons/fa6";
import { FiArrowUpRight } from "react-icons/fi";
import Copy from "./Copy";

gsap.registerPlugin(ScrollTrigger);

const links = [
  { name: "HOME", href: "/" },
  { name: "CAREER", href: "/career" },
  { name: "CALENDAR", href: "/calendar" },
  { name: "PARTNERS", href: "/partners" },
  { name: "NEWS", href: "/news" },
];

export default function Footer() {
  const container = useRef<HTMLDivElement | null>(null);

  useGSAP(
    () => {
      gsap.from(".footer-link", {
        y: 100,
        opacity: 0,
        stagger: 0.08,
        duration: 1,
        ease: "power4.out",
        scrollTrigger: {
          trigger: container.current,
          start: "top 85%",
          once: true,
        },
      });

      gsap.from(".footer-meta", {
        y: 30,
        opacity: 0,
        duration: 1,
        delay: 0.3,
        ease: "power3.out",
        scrollTrigger: {
          trigger: container.current,
          start: "top 85%",
          once: true,
        },
      });
    },
    { scope: container },
  );

  return (
    <footer
      ref={container}
      className="relative w-full overflow-hidden bg-[#080808] text-[#EDEDED]"
    >
      <div
        className="absolute inset-0 bg-bottom bg-cover bg-no-repeat opacity-35"
        style={{
          backgroundImage: "url(/bg/FooterImg.webp)",
        }}
      />

      <div className="absolute inset-0 bg-gradient-to-b from-[#080808] via-[#080808]/80 to-[#080808]" />

      <div className="pointer-events-none absolute bottom-0 left-1/2 h-[500px] w-[700px] -translate-x-1/2 rounded-full bg-[#FF8000]/[0.035] blur-[140px]" />

      <div className="relative z-10 mx-auto flex min-h-[850px] max-w-[1600px] flex-col justify-between px-5 py-10 sm:px-8 lg:px-14 lg:py-12">
        <div className="flex items-start justify-between">
          <div className="flex items-center gap-3">
            <span className="h-px w-10 bg-[#FF8000]" />

            <span className="text-[9px] uppercase tracking-[0.35em] text-white/30">
              Oscar Piastri · #81
            </span>
          </div>

          <span className="hidden text-[9px] uppercase tracking-[0.35em] text-white/20 sm:block">
            Unofficial concept
          </span>
        </div>

        <div className="grid grid-cols-1 gap-20 lg:grid-cols-[1.4fr_0.6fr] lg:gap-10">
          <div className="self-end">
            <div className="mb-8">
              <span className="text-[10px] uppercase tracking-[0.35em] text-[#FF8000]">
                Formula One Driver
              </span>
            </div>

            <Copy blockColor="#FF8000" duration={0.9}>
              <h1 className="font-black uppercase text-[clamp(64px,11vw,180px)] leading-[0.75] tracking-[-0.085em] text-[#EDEDED]">
                Oscar
                <br />
                <span className="text-[#FF8000]">Piastri</span>
              </h1>
            </Copy>

            <div className="mt-10 max-w-[420px]">
              <p className="text-sm leading-6 text-white/35">
                Precision. Composure. Speed.
                <br />
                The next chapter is already moving.
              </p>
            </div>
          </div>

          <nav className="lg:self-end">
            <div className="mb-6 flex items-center gap-3">
              <span className="text-[9px] uppercase tracking-[0.35em] text-white/25">
                Navigation
              </span>

              <span className="h-px w-8 bg-white/10" />
            </div>

            <ul>
              {links.map((link, index) => (
                <li
                  key={link.name}
                  className="footer-link group overflow-hidden border-b border-white/10"
                >
                  <Link
                    href={link.href}
                    className="flex items-center justify-between py-3 transition-all duration-300 hover:px-3"
                  >
                    <span className="text-[clamp(28px,3vw,48px)] font-medium uppercase leading-none tracking-[-0.05em] transition-colors duration-300 group-hover:text-[#FF8000]">
                      {link.name}
                    </span>

                    <span className="flex h-8 w-8 items-center justify-center rounded-full border border-white/10 text-white/30 transition-all duration-300 group-hover:border-[#FF8000] group-hover:bg-[#FF8000] group-hover:text-black">
                      <FiArrowUpRight />
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        <div className="footer-meta border-t border-white/10 pt-6">
          <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
            <div className="flex flex-col gap-2">
              <p className="text-[10px] uppercase tracking-[0.25em] text-white/30">
                © 2026 Oscar Piastri
              </p>

              <p className="text-[10px] uppercase tracking-[0.2em] text-white/15">
                Fan-made concept website · Unofficial
              </p>
            </div>

            <div className="flex items-center gap-3">
              <a
                href="#"
                aria-label="Instagram"
                className="group flex h-11 w-11 items-center justify-center rounded-full border border-white/10 transition-all duration-300 hover:border-[#FF8000] hover:bg-[#FF8000] hover:text-black"
              >
                <FaInstagram className="text-sm transition-transform duration-300 group-hover:scale-110" />
              </a>

              <a
                href="#"
                aria-label="Facebook"
                className="group flex h-11 w-11 items-center justify-center rounded-full border border-white/10 transition-all duration-300 hover:border-[#FF8000] hover:bg-[#FF8000] hover:text-black"
              >
                <FaFacebookF className="text-sm transition-transform duration-300 group-hover:scale-110" />
              </a>

              <a
                href="#"
                aria-label="X"
                className="group flex h-11 w-11 items-center justify-center rounded-full border border-white/10 transition-all duration-300 hover:border-[#FF8000] hover:bg-[#FF8000] hover:text-black"
              >
                <FaXTwitter className="text-sm transition-transform duration-300 group-hover:scale-110" />
              </a>

              <button
                type="button"
                onClick={() =>
                  window.scrollTo({
                    top: 0,
                    behavior: "smooth",
                  })
                }
                aria-label="Back to top"
                className="ml-3 flex h-11 w-11 items-center justify-center rounded-full bg-[#FF8000] text-black transition-transform duration-300 hover:scale-110"
              >
                ↑
              </button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
