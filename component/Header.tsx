"use client";
import Image from "next/image";
import { useState, useEffect, useRef, use } from "react";
import { RiMenu4Line } from "react-icons/ri";
import { HiXMark } from "react-icons/hi2";
import Link from "next/link";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

export default function Header() {
  const contanier = useRef<HTMLDivElement | null>(null);
  const [isOpen, setIsOpen] = useState(false);

  const tl = useRef<gsap.core.Timeline | null>(null);

  function handleMenu() {
    setIsOpen(!isOpen);
  }

  useGSAP(
    () => {
      gsap.set(".itemHolder", { y: 120 });

      tl.current = gsap
        .timeline({ paused: true })
        .to(".MenuOverley", {
          duration: 1.25,
          clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)",
          ease: "power4.inOut",
        })
        .to(".itemHolder", {
          y: 0,
          stagger: 0.1,
          duration: 1,
          ease: "power4.inOut",
          delay: -0.75,
        });
    },
    { scope: contanier },
  );

  useEffect(() => {
    if (isOpen) {
      tl.current.play();
    } else {
      tl.current.reverse();
    }
  }, [isOpen]);

  const Links = [
    { name: "HOME", link: "/" },
    { name: "CAREER", link: "/career" },
    { name: "CALENDAR", link: "/calendar" },
    { name: "NEWS", link: "/news" },
    { name: "PARTNERS", link: "/partners" },
  ];

  return (
    <header className="fixed top-0 w-full z-50" ref={contanier}>
      <div
        className={`flex justify-between HeaderDiv items-center px-8 lg:px-20`}
      >
        <div className="w-35 h-35">
          <Link href="/">
            <Image
              src={"/Logo.png"}
              className="w-full h-full"
              alt="Logo"
              width={1000}
              height={1000}
            />
          </Link>
        </div>
        <RiMenu4Line
          onClick={handleMenu}
          className="text-[#fff] text-6xl cursor-pointer border-2 p-2 rounded-xl"
        />
      </div>
      <div
        style={{ clipPath: "polygon(0 0, 100% 0, 100% 0, 0 0)" }}
        className={`w-full h-screen flex z-5 flex-col fixed top-0 MenuOverley bg-[#FF8000] px-8 lg:px-20`}
      >
        <div className="w-full flex justify-between items-center">
          <div className="w-35 h-35">
            <Link href="/">
              <Image
                src={"/Logo.png"}
                className="w-full h-full"
                alt="Logo"
                width={1000}
                height={1000}
              />
            </Link>
          </div>
          <HiXMark
            onClick={handleMenu}
            className="text-[#121212] text-6xl cursor-pointer border-2 p-2 rounded-xl"
          />
        </div>
        <div className="flex flex-col items-center">
          <div className="flex flex-col w-full lg:w-1/2">
            {Links.map((link, index) => (
              <div
                style={{ clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)" }}
                className="w-max text-left NavHolder -mb-15"
                key={index}
              >
                <div className="itemHolder relative">
                  <Link
                    onClick={handleMenu}
                    className="text-[100px] MenuNav font-formula hover:text-[#FFF1E6] text-[#121212] tracking-tighter"
                    href={link.link}
                  >
                    {link.name}
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="absolute text-[#141414] bottom-10 text-[20px]">
          <h2>
            Redesigned and developed by{" "}
            <span className="font-formula">Iliya Naghipour</span>
          </h2>
          <p className="underline">Unofficial Concept Redesign</p>
        </div>
      </div>
    </header>
  );
}
