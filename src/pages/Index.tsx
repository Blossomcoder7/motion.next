"use client"
import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function PinUntilAnother() {
  const box1Ref = useRef(null);
  const box2Ref = useRef(null); // This will be pinned
  const box3Ref = useRef(null); // Stop pinning when this arrives

  useGSAP(() => {
    ScrollTrigger.create({
      trigger: box2Ref.current,
      start: "top top",
      endTrigger: box3Ref.current,
      end: "top bottom", // when top of box3 hits bottom of viewport
      pin: true,
      scrub: true,
      markers: true,
    });
  }, []);

  return (
    <div style={{ height: "3000px", padding: "100px" }}>
      <div ref={box1Ref} style={{ height: "300px", background: "#f88" }}>
        Box 1
      </div>

      <div ref={box2Ref} style={{ height: "300px", background: "#8cf" }}>
        📌 Box 2 (Pinned until Box 3 reaches it)
      </div>

      <div style={{ height: "1000px" }} /> {/* Just filler space */}

      <div ref={box3Ref} style={{ height: "300px", background: "#8f8" }}>
        🎯 Box 3 (End pin when it reaches Box 2)
      </div>
    </div>
  );
}
