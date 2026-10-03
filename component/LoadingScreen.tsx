"use client";

import { useEffect, useState } from "react";

export default function LoadingScreen() {
  const [progress, setProgress] = useState(0);
  const [isComplete, setIsComplete] = useState(false);

  useEffect(() => {
    let mounted = true;

    const updateProgress = () => {
      if (!mounted) return;

      const images = Array.from(document.images);

      const loadedImages = images.filter(
        (image) => image.complete && image.naturalWidth > 0,
      ).length;

      const imageProgress =
        images.length > 0 ? loadedImages / images.length : 1;

      const videos = Array.from(document.querySelectorAll("video"));

      const readyVideos = videos.filter(
        (video) => video.readyState >= HTMLMediaElement.HAVE_CURRENT_DATA,
      ).length;

      const videoProgress = videos.length > 0 ? readyVideos / videos.length : 1;

      const fontProgress = document.fonts
        ? document.fonts.status === "loaded"
          ? 1
          : 0
        : 1;

      const documentProgress = document.readyState === "complete" ? 1 : 0;

      /*
       * Weight:
       *
       * Hero video: 50%
       * Images:     25%
       * Fonts:      15%
       * Document:   10%
       */

      const totalProgress =
        videoProgress * 0.5 +
        imageProgress * 0.25 +
        fontProgress * 0.15 +
        documentProgress * 0.1;

      const percentage = Math.min(100, Math.round(totalProgress * 100));

      setProgress(percentage);

      if (percentage >= 100) {
        setTimeout(() => {
          if (mounted) {
            setIsComplete(true);
          }
        }, 250);
      }
    };

    const handleResourceLoaded = () => {
      updateProgress();
    };

    const images = Array.from(document.images);

    images.forEach((image) => {
      image.addEventListener("load", handleResourceLoaded);
      image.addEventListener("error", handleResourceLoaded);
    });

    const videos = Array.from(document.querySelectorAll("video"));

    videos.forEach((video) => {
      video.addEventListener("loadeddata", handleResourceLoaded);
      video.addEventListener("canplay", handleResourceLoaded);
      video.addEventListener("error", handleResourceLoaded);
    });

    const checkFonts = async () => {
      try {
        await document.fonts.ready;
      } catch {
        // Ignore font loading errors.
      }

      updateProgress();
    };

    const interval = window.setInterval(updateProgress, 100);

    window.addEventListener("load", updateProgress);

    updateProgress();
    checkFonts();

    return () => {
      mounted = false;

      clearInterval(interval);

      window.removeEventListener("load", updateProgress);

      images.forEach((image) => {
        image.removeEventListener("load", handleResourceLoaded);
        image.removeEventListener("error", handleResourceLoaded);
      });

      videos.forEach((video) => {
        video.removeEventListener("loadeddata", handleResourceLoaded);
        video.removeEventListener("canplay", handleResourceLoaded);
        video.removeEventListener("error", handleResourceLoaded);
      });
    };
  }, []);

  return (
    <div
      className={`fixed inset-0 z-[99999] overflow-hidden bg-[#080808] text-white transition-transform duration-700 ease-[cubic-bezier(0.76,0,0.24,1)] ${
        isComplete ? "-translate-y-full" : "translate-y-0"
      }`}
    >
      <div className="pointer-events-none absolute inset-0 opacity-[0.035]">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `
              linear-gradient(to right, #ffffff 1px, transparent 1px),
              linear-gradient(to bottom, #ffffff 1px, transparent 1px)
            `,
            backgroundSize: "80px 80px",
          }}
        />
      </div>

      <div className="pointer-events-none absolute left-1/2 top-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#ff8000]/10 blur-[150px]" />

      <div className="absolute left-6 top-6 flex items-center gap-4 sm:left-10 sm:top-10">
        <span className="text-[9px] uppercase tracking-[0.35em] text-white/40">
          OP81
        </span>

        <span className="h-px w-8 bg-white/20" />

        <span className="text-[9px] uppercase tracking-[0.35em] text-white/30">
          Formula 1
        </span>
      </div>

      <div className="absolute right-6 top-6 text-right sm:right-10 sm:top-10">
        <p className="text-[9px] uppercase tracking-[0.3em] text-white/30">
          System
        </p>

        <p className="mt-1 text-[9px] uppercase tracking-[0.3em] text-[#ff8000]">
          {progress >= 100 ? "Ready" : "Loading"}
        </p>
      </div>

      <div className="absolute inset-0 flex items-center justify-center">
        <div className="relative flex flex-col items-center">
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

      <div className="absolute bottom-6 left-6 right-6 sm:bottom-10 sm:left-10 sm:right-10">
        <div className="flex items-end justify-between">
          <div className="space-y-2">
            <div className="flex gap-5 text-[8px] uppercase tracking-[0.25em]">
              <span className="text-white/25">Car</span>

              <span className="text-white/50">MCL39</span>
            </div>

            <div className="flex gap-5 text-[8px] uppercase tracking-[0.25em]">
              <span className="text-white/25">Video</span>

              <span className="text-white/50">
                {progress >= 100 ? "READY" : "BUFFERING"}
              </span>
            </div>
          </div>

          <div className="text-right">
            <div className="mb-3 flex items-baseline justify-end gap-1">
              <span className="text-4xl font-light tracking-[-0.05em]">
                {progress}
              </span>

              <span className="text-xs text-white/30">%</span>
            </div>

            <div className="h-[2px] w-32 overflow-hidden bg-white/10 sm:w-48">
              <div
                className="h-full bg-[#ff8000] transition-[width] duration-150 ease-out"
                style={{
                  width: `${progress}%`,
                  boxShadow: "0 0 12px rgba(255,128,0,0.7)",
                }}
              />
            </div>
          </div>
        </div>
      </div>

      <div className="pointer-events-none absolute left-0 top-1/2 h-px w-[15vw] bg-gradient-to-r from-transparent to-white/10" />

      <div className="pointer-events-none absolute right-0 top-1/2 h-px w-[15vw] bg-gradient-to-l from-transparent to-white/10" />
    </div>
  );
}
