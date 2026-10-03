"use client";

import { useEffect, useState } from "react";

export default function LoadingScreen() {
  const [progress, setProgress] = useState(0);
  const [isComplete, setIsComplete] = useState(false);

  useEffect(() => {
    let mounted = true;

    const checkResources = () => {
      if (!mounted) return;

      const images = Array.from(document.images);

      const videos = Array.from(document.querySelectorAll("video"));

      const imageReady =
        images.length === 0 ||
        images.every((image) => image.complete && image.naturalWidth > 0);

      const videoReady =
        videos.length === 0 ||
        videos.every(
          (video) => video.readyState >= HTMLMediaElement.HAVE_CURRENT_DATA,
        );

      const fontsReady = !document.fonts || document.fonts.status === "loaded";

      const documentReady = document.readyState === "complete";

      /*
       * Four loading stages.
       *
       * DOM       10%
       * Fonts     15%
       * Images    25%
       * Video     50%
       */

      let nextProgress = 0;

      if (documentReady) {
        nextProgress += 10;
      }

      if (fontsReady) {
        nextProgress += 15;
      }

      if (imageReady) {
        nextProgress += 25;
      }

      if (videoReady) {
        nextProgress += 50;
      }

      setProgress(nextProgress);

      if (documentReady && fontsReady && imageReady && videoReady) {
        setTimeout(() => {
          if (mounted) {
            setIsComplete(true);
          }
        }, 300);
      }
    };

    const handleReady = () => {
      checkResources();
    };

    const images = Array.from(document.images);

    images.forEach((image) => {
      image.addEventListener("load", handleReady);
      image.addEventListener("error", handleReady);
    });

    const videos = Array.from(document.querySelectorAll("video"));

    videos.forEach((video) => {
      video.addEventListener("loadeddata", handleReady);
      video.addEventListener("canplay", handleReady);
      video.addEventListener("playing", handleReady);
      video.addEventListener("error", handleReady);
    });

    const handleFonts = async () => {
      try {
        await document.fonts.ready;
      } catch {
        // Ignore font errors.
      }

      checkResources();
    };

    const interval = window.setInterval(checkResources, 100);

    window.addEventListener("load", checkResources);

    checkResources();
    handleFonts();

    return () => {
      mounted = false;

      clearInterval(interval);

      window.removeEventListener("load", checkResources);

      images.forEach((image) => {
        image.removeEventListener("load", handleReady);
        image.removeEventListener("error", handleReady);
      });

      videos.forEach((video) => {
        video.removeEventListener("loadeddata", handleReady);

        video.removeEventListener("canplay", handleReady);

        video.removeEventListener("playing", handleReady);

        video.removeEventListener("error", handleReady);
      });
    };
  }, []);

  return (
    <div
      className={`fixed inset-0 z-[99999] overflow-hidden bg-[#080808] text-white transition-transform duration-700 ease-[cubic-bezier(0.76,0,0.24,1)] ${
        isComplete ? "-translate-y-full" : "translate-y-0"
      }`}
    >
      {/* Grid */}
      <div className="pointer-events-none absolute inset-0 opacity-[0.035]">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `
              linear-gradient(
                to right,
                #ffffff 1px,
                transparent 1px
              ),
              linear-gradient(
                to bottom,
                #ffffff 1px,
                transparent 1px
              )
            `,
            backgroundSize: "80px 80px",
          }}
        />
      </div>

      {/* Glow */}
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#ff8000]/10 blur-[150px]" />

      {/* Top left */}
      <div className="absolute left-6 top-6 flex items-center gap-4 sm:left-10 sm:top-10">
        <span className="text-[9px] uppercase tracking-[0.35em] text-white/40">
          OP81
        </span>

        <span className="h-px w-8 bg-white/20" />

        <span className="text-[9px] uppercase tracking-[0.35em] text-white/30">
          Formula 1
        </span>
      </div>

      {/* Top right */}
      <div className="absolute right-6 top-6 text-right sm:right-10 sm:top-10">
        <p className="text-[9px] uppercase tracking-[0.3em] text-white/30">
          System
        </p>

        <p className="mt-1 text-[9px] uppercase tracking-[0.3em] text-[#ff8000]">
          {progress >= 100 ? "Ready" : "Loading"}
        </p>
      </div>

      {/* Center */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="flex flex-col items-center">
          <p className="mb-3 text-[10px] uppercase tracking-[0.5em] text-white/40">
            Oscar Piastri
          </p>

          <div className="relative">
            <span className="block select-none text-[clamp(160px,25vw,360px)] font-black leading-[0.8] tracking-[-0.09em] text-white">
              81
            </span>

            <div
              className="absolute left-[-15%] right-[-15%] top-1/2 h-[2px] bg-[#ff8000]"
              style={{
                boxShadow: "0 0 20px rgba(255,128,0,0.8)",
              }}
            />
          </div>

          <div className="mt-8 flex items-center gap-4">
            <span className="h-px w-8 bg-[#ff8000]" />

            <span className="text-[10px] uppercase tracking-[0.5em] text-white/60">
              Piastri
            </span>

            <span className="h-px w-8 bg-[#ff8000]" />
          </div>
        </div>
      </div>

      {/* Bottom */}
      <div className="absolute bottom-6 left-6 right-6 sm:bottom-10 sm:left-10 sm:right-10">
        <div className="flex items-end justify-between">
          <div className="space-y-2">
            <div className="flex gap-5 text-[8px] uppercase tracking-[0.25em]">
              <span className="text-white/25">Car</span>

              <span className="text-white/50">MCL39</span>
            </div>

            <div className="flex gap-5 text-[8px] uppercase tracking-[0.25em]">
              <span className="text-white/25">Video</span>

              <span className="text-[#ff8000]">
                {progress >= 100 ? "READY" : "BUFFERING"}
              </span>
            </div>
          </div>

          {/* Progress */}
          <div className="text-right">
            <div className="mb-3 flex items-baseline justify-end gap-1">
              <span className="text-4xl font-light tracking-[-0.05em]">
                {progress}
              </span>

              <span className="text-xs text-white/30">%</span>
            </div>

            <div className="h-[2px] w-32 overflow-hidden bg-white/10 sm:w-48">
              <div
                className="h-full bg-[#ff8000] transition-[width] duration-300 ease-out"
                style={{
                  width: `${progress}%`,
                  boxShadow: "0 0 12px rgba(255,128,0,0.7)",
                }}
              />
            </div>
          </div>
        </div>
      </div>

      {/* Side lines */}
      <div className="pointer-events-none absolute left-0 top-1/2 h-px w-[15vw] bg-gradient-to-r from-transparent to-white/10" />

      <div className="pointer-events-none absolute right-0 top-1/2 h-px w-[15vw] bg-gradient-to-l from-transparent to-white/10" />
    </div>
  );
}
