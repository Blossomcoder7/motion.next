"use client"

import { useEffect, useState, type RefObject } from "react";

function useDetectPointer(
  ref: RefObject<HTMLElement | null> | undefined
): boolean {
  const [isInside, setIsInside] = useState(false);

  useEffect(() => {
    if (!ref || !ref.current) {
      return;
    }
    const target = ref.current;
    if (!target) return;

    const handleEnter = () => setTimeout(() => setIsInside(true), 100);
    const handleLeave = () => setTimeout(() => setIsInside(false), 100);

    // Use pointer events for better consistency across devices
    target.addEventListener("pointerenter", handleEnter);
    target.addEventListener("pointerleave", handleLeave);

    return () => {
      target.removeEventListener("pointerenter", handleEnter);
      target.removeEventListener("pointerleave", handleLeave);
    };
  }, [ref]);

  return isInside;
}

export default useDetectPointer;
