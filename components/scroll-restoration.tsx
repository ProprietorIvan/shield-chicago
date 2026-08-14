"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const DESKTOP_VIDEO = "/media/chicago-water-damage-restoration-process-desktop.mp4";
const MOBILE_VIDEO = "/media/chicago-water-damage-restoration-process-mobile.mp4";

const stages = [
  {
    key: "extract",
    title: (
      <>
        Stop the damage <em>fast.</em>
      </>
    ),
    copy: (
      <>
        We extract standing water <em>immediately</em>, secure the area, and stabilize the loss
        before moisture spreads further.
      </>
    ),
  },
  {
    key: "dry",
    title: (
      <>
        Dry to a <em>standard.</em>
      </>
    ),
    copy: (
      <>
        Commercial air movers and dehumidifiers run until moisture readings hit{" "}
        <em>industry targets</em> — not until it merely looks dry.
      </>
    ),
  },
  {
    key: "document",
    title: (
      <>
        Rebuild and <em>finish.</em>
      </>
    ),
    copy: (
      <>
        You get a clear scope, drying logs, and <em>insurance-ready documentation</em>. When rebuild
        is needed, Shield handles restoration and home improvement through final walkthrough.
      </>
    ),
  },
];

export function ScrollRestoration() {
  const sectionRef = useRef<HTMLElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    const video = videoRef.current;
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (!section || !video) return undefined;

    if (reduceMotion) {
      section.classList.add("scroll-design-static");
      return undefined;
    }

    let context: gsap.Context | undefined;
    let seeking = false;
    let targetTime = 0;
    let disposed = false;

    const mobileQuery = window.matchMedia("(max-width: 1023px)");
    const isMobile = () => mobileQuery.matches;

    const onSeeked = () => {
      if (Math.abs(video.currentTime - targetTime) > 0.04) {
        video.currentTime = targetTime;
        return;
      }
      seeking = false;
    };

    const createSequence = async () => {
      if (disposed) return;

      context?.revert();
      context = undefined;
      seeking = false;
      targetTime = 0;

      try {
        await video.play();
        video.pause();
      } catch {
        /* Autoplay may be blocked; scrub can still work after user scroll */
      }

      if (disposed) return;

      const stageElements = gsap.utils.toArray<HTMLElement>(".scroll-stage", section);
      const videoState = { time: 0 };
      const mobile = isMobile();

      video.pause();
      video.currentTime = 0;
      video.addEventListener("seeked", onSeeked);

      context = gsap.context(() => {
        gsap.set(stageElements, { autoAlpha: 0, y: 16 });
        gsap.set(stageElements[0], { autoAlpha: 1, y: 0 });

        const pinDistance = mobile
          ? Math.max(video.duration * 300, 2800)
          : Math.max(video.duration * 1000, 9000);

        const timeline = gsap.timeline({
          scrollTrigger: {
            trigger: section,
            start: "top top",
            end: () => `+=${pinDistance}`,
            pin: true,
            scrub: mobile ? 1.1 : 1.2,
            anticipatePin: 1,
            invalidateOnRefresh: true,
            onRefresh: (self) => {
              const spacer = self.pin?.parentElement;
              if (spacer?.classList.contains("pin-spacer")) {
                spacer.style.width = "100%";
                spacer.style.maxWidth = "100%";
              }
            },
          },
        });

        timeline
          .to(
            videoState,
            {
              time: video.duration,
              duration: 1,
              ease: "none",
              onUpdate: () => {
                targetTime = videoState.time;
                if (!seeking) {
                  seeking = true;
                  video.currentTime = targetTime;
                }
              },
            },
            0,
          )
          .to(stageElements[0], { autoAlpha: 0, y: -16, duration: 0.22 }, 0.28)
          .to(stageElements[1], { autoAlpha: 1, y: 0, duration: 0.22 }, 0.28)
          .to(stageElements[1], { autoAlpha: 0, y: -16, duration: 0.22 }, 0.6)
          .to(stageElements[2], { autoAlpha: 1, y: 0, duration: 0.22 }, 0.6);
      }, section);

      ScrollTrigger.refresh();
    };

    const applySourceAndInit = () => {
      const nextSrc = isMobile() ? MOBILE_VIDEO : DESKTOP_VIDEO;
      const absoluteNext = new URL(nextSrc, window.location.origin).href;
      const current =
        video.currentSrc ||
        (video.getAttribute("src")
          ? new URL(video.getAttribute("src")!, window.location.origin).href
          : "");
      const needsLoad = current !== absoluteNext;

      if (needsLoad) {
        video.setAttribute("src", nextSrc);
        video.src = nextSrc;
        video.load();
        video.addEventListener("loadedmetadata", createSequence, { once: true });
        return;
      }

      if (video.readyState >= 1) {
        createSequence();
      } else {
        video.addEventListener("loadedmetadata", createSequence, { once: true });
      }
    };

    const observer = new IntersectionObserver(
      (entries) => {
        if (!entries.some((e) => e.isIntersecting)) return;
        observer.disconnect();
        applySourceAndInit();
        mobileQuery.addEventListener("change", applySourceAndInit);
      },
      { rootMargin: "280px 0px" },
    );
    observer.observe(section);

    return () => {
      disposed = true;
      observer.disconnect();
      mobileQuery.removeEventListener("change", applySourceAndInit);
      video.removeEventListener("loadedmetadata", createSequence);
      video.removeEventListener("seeked", onSeeked);
      context?.revert();
    };
  }, []);

  return (
    <section className="scroll-design" ref={sectionRef} aria-label="The Shield restoration method">
      <video
        ref={videoRef}
        className="scroll-design-video"
        muted
        playsInline
        preload="none"
        aria-hidden="true"
      />
      <div className="scroll-design-scrim" aria-hidden="true" />
      <div className="scroll-design-content">
        <p className="scroll-design-eyebrow">The Shield method</p>
        <div className="scroll-stages">
          {stages.map((stage, index) => (
            <article className="scroll-stage" key={stage.key}>
              <span>0{index + 1}</span>
              <h2>{stage.title}</h2>
              <p>{stage.copy}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
