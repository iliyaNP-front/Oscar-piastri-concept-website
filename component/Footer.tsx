"use client";

import Link from "next/link";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useRef } from "react";
import { FaInstagram, FaFacebookF, FaXTwitter } from "react-icons/fa6";
import Copy from "./Copy";

gsap.registerPlugin(ScrollTrigger);

export default function Footer() {
  const container = useRef<HTMLDivElement | null>(null);

  useGSAP(
    () => {
      gsap.set(".LinkHolder", { y: 120 });

      gsap.to(".LinkHolder", {
        y: 0,
        stagger: 0.1,
        duration: 1,
        ease: "power4.inOut",
        scrollTrigger: {
          trigger: container.current,
          start: "top 90%",
          once: true,
        },
      });
    },
    { scope: container },
  );

  return (
    <footer
      ref={container}
      className="w-full h-150 FooterCon bg-bottom bg-no-repeat bg-cover"
      style={{ backgroundImage: "url(./bg/FooterImg.webp)" }}
    >
      <div className="w-full relative h-full bg-linear-to-b from-[#141414] to-transparent FooterSection px-8 lg:px-20 flex justify-between flex-col py-10 items-center">
        <div className="w-full">
          <Copy blockColor="#FF8000">
            <h1 className="text-[70px] text-[#EDEDED] tracking-tighter footerLogo font-bold">
              Oscar <span className="text-[#FF8000]">Piastri</span>
            </h1>
          </Copy>
        </div>

        <Link
          href="/"
          className="bg-[#FF8000] StoreBtn font-formula hover:scale-105 transition-all duration-200 px-15 py-3 text-[#121212] font-medium text-[20px] rounded-sm"
        >
          Official Store
        </Link>
        <nav className="absolute FooterNav top-20 right-8 lg:right-20">
          <ul className="text-[50px] tracking-tighter font-light text-[#EDEDED]">
            {["HOME", "CAREER", "CALENDAR", "PARTNERS", "NEWS"].map((item) => (
              <li key={item} className="-mb-5 overflow-hidden">
                <div className="LinkHolder">
                  <Link
                    className="hover:text-[#FF8000]"
                    href={`/${item === "HOME" ? "" : item.toLowerCase()}`}
                  >
                    {item}
                  </Link>
                </div>
              </li>
            ))}
          </ul>
        </nav>
        <div className="w-full flex justify-between items-center">
          <p className="text-[#EDEDED]">
            <span className="text-[#FF8000]">©</span> 2026 Oscar Piastri —
            Concept Site (Unofficial)
          </p>
          <div className="text-[#EDEDED] flex gap-6 text-[30px]">
            <FaInstagram className="hover:rotate-360 hover:text-[#FF8000] transition-all duration-200 cursor-pointer ease-out" />
            <FaFacebookF className="hover:rotate-360 hover:text-[#FF8000] transition-all duration-200 cursor-pointer ease-in" />
            <FaXTwitter className="hover:rotate-360 hover:text-[#FF8000] transition-all duration-200 cursor-pointer ease-in" />
          </div>
        </div>
      </div>
    </footer>
  );
}
