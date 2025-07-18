"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import React, { useRef } from "react";

const Character = ({
  children,
  index = Math.max(Math.random() * 10, 10),
}: {
  children: string;
  index?: number;
}) => {
  const rootRef = useRef<HTMLDivElement>(null);
  const containerEl = useRef<HTMLSpanElement>(null);
  const directionDown = index % 2 === 0;

  useGSAP(
    () => {
      if (!rootRef.current || !containerEl.current) return;

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: rootRef.current,
          start: "top-=160px top",
          end: "bottom+=160px center",
          scrub: 1.5,
          // markers: true,
        },
      });

      tl.to(containerEl.current, {
        y: directionDown ? "100%" : "-100%",
        transform: "translate3d(0px, 0px, 0px)",
        ease: "power1.out",
      });
    },
    { scope: rootRef, dependencies: [index] }
  );

  return (
    <div
      ref={rootRef}
      className="text-[clamp(48px,14vw,250px)] font-bold tracking-tight leading-[0.85] overflow-hidden text-[#171717] flex"
    >
      <span
        ref={containerEl}
        className="relative inline-block will-change-transform"
        style={{
          display: "inline-block",
        }}
      >
        <span>{children}</span>
        {/* Dummy character placed either above or below */}
        <span
          className="absolute left-0"
          style={{
            bottom: directionDown ? "100%" : undefined,
            top: !directionDown ? "100%" : undefined,
          }}
        >
          {children}
        </span>
      </span>
    </div>
  );
};

const GrovySpan = ({
  children,
  index = Math.floor(Math.random() * 100),
}: {
  children: string;
  index?: number;
}) => {
  const rootRef = useRef<HTMLDivElement>(null);
  const containerEl = useRef<HTMLSpanElement>(null);

  // Random side and value
  const padLeft = Math.random() > 0.5;
  const paddingSide = padLeft ? "paddingLeft" : "paddingRight";
  const paddingAmount = Math.floor(Math.random() * 12) + 4; // 4–15px

  useGSAP(
    () => {
      if (!rootRef.current || !containerEl.current) return;

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: rootRef.current,
          start: "top-=200px top",
          end: "top top+=200px",
          scrub: 1.5,
          // markers: true,
        },
      });

      // Animate from 0 to random padding and back
      tl.fromTo(
        containerEl.current,
        { [paddingSide]: "0px" },
        { [paddingSide]: `${paddingAmount}px`, ease: "power2.out" }
      );
    },
    { scope: rootRef, dependencies: [index] }
  );

  return (
    <div
      ref={rootRef}
      className="text-[clamp(20px,4vw,32px)] font-bold tracking-tight leading-[0.85] overflow-hidden text-[#171717] flex"
    >
      <span
        ref={containerEl}
        className="relative inline-block will-change-[padding]"
        style={{
          display: "inline-block",
        }}
      >
        <span>{children}</span>
        <span className="absolute left-0 bottom-full">{children}</span>
      </span>
    </div>
  );
};

export { GrovySpan };
export default Character;
