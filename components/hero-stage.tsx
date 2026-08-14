"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef } from "react";
import { Star } from "lucide-react";
import { FIRM } from "@/lib/firm";

const POSTER = "/media/chicago-dispatch-poster.png";
const DESKTOP = "/media/chicago-dispatch-hero.mp4";
const MOBILE = "/media/chicago-dispatch-hero-mobile.mp4";

export function HeroStage() {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const mobileQuery = window.matchMedia("(max-width: 767px)");
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const MOBILE_SKIP_SECONDS = 3 / 30;
    let skipSeconds = 0;
    let cancelled = false;
    let idleId: number | undefined;
    let timeoutId: ReturnType<typeof setTimeout> | undefined;

    const applySource = () => {
      const nextSrc = mobileQuery.matches ? MOBILE : DESKTOP;
      skipSeconds = mobileQuery.matches ? MOBILE_SKIP_SECONDS : 0;
      const absoluteNext = new URL(nextSrc, window.location.origin).href;
      if (video.currentSrc !== absoluteNext && !video.src.endsWith(nextSrc)) {
        video.src = nextSrc;
        video.load();
      }
    };

    const ensureSkip = () => {
      if (skipSeconds > 0 && video.currentTime < skipSeconds) {
        video.currentTime = skipSeconds;
      }
    };

    const play = async () => {
      if (reduceMotion) {
        video.pause();
        video.removeAttribute("autoplay");
        return;
      }
      try {
        ensureSkip();
        await video.play();
      } catch {
        /* muted loop usually starts after interaction */
      }
    };

    const onLoadedMetadata = () => {
      video.playbackRate = 1;
      ensureSkip();
      play();
    };

    const onTimeUpdate = () => {
      if (skipSeconds > 0 && video.currentTime < skipSeconds) {
        video.currentTime = skipSeconds;
      }
    };

    video.addEventListener("loadedmetadata", onLoadedMetadata);
    video.addEventListener("timeupdate", onTimeUpdate);
    mobileQuery.addEventListener("change", applySource);

    const startVideo = () => {
      if (cancelled || reduceMotion) return;
      applySource();
    };

    if (reduceMotion) {
      video.pause();
      video.removeAttribute("autoplay");
    } else if (typeof window.requestIdleCallback === "function") {
      idleId = window.requestIdleCallback(startVideo, { timeout: 1800 });
    } else {
      timeoutId = setTimeout(startVideo, 400);
    }

    if (video.readyState >= 1) onLoadedMetadata();

    return () => {
      cancelled = true;
      if (idleId !== undefined && typeof window.cancelIdleCallback === "function") {
        window.cancelIdleCallback(idleId);
      }
      if (timeoutId !== undefined) clearTimeout(timeoutId);
      video.removeEventListener("loadedmetadata", onLoadedMetadata);
      video.removeEventListener("timeupdate", onTimeUpdate);
      mobileQuery.removeEventListener("change", applySource);
    };
  }, []);

  return (
    <section className="hero-section" id="emergency-water-damage-service">
      <Image
        className="hero-poster"
        src={POSTER}
        alt=""
        fill
        priority
        sizes="100vw"
        quality={70}
        aria-hidden="true"
      />
      <video
        ref={videoRef}
        className="hero-video"
        autoPlay
        loop
        muted
        playsInline
        preload="metadata"
        poster={POSTER}
        aria-hidden="true"
      />
      <div className="hero-copy hero-fade-in">
        <h1>
          Chicago water damage, <em>handled.</em>
        </h1>
        <div className="hero-actions">
          <a href={FIRM.phoneTel} className="button button-primary">
            Call {FIRM.phoneDisplay}
          </a>
          <Link href="/emergency" className="text-link">
            View Services <span aria-hidden="true">→</span>
          </Link>
        </div>
        <div className="hero-trust">
          <div className="hero-trust-rating">
            <span>4.9/5 Rating</span>
            <div className="hero-trust-stars" aria-hidden="true">
              {[0, 1, 2, 3, 4].map((i) => (
                <Star key={i} className="w-5 h-5 fill-[#FFD700] text-[#FFD700]" />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
