"use client";
import { useEffect, useRef, useState } from "react";

/**
 * A custom hook that detects wheel activity and determines if scrolling is occurring.
 *
 * @param {number} [threshold=200] - The duration in milliseconds to wait before considering the scroll to have stopped.
 * @param {number} [skip=1] - The minimum deltaY value to consider a wheel event significant.
 *
 * @returns {boolean} - A boolean indicating whether the user is currently scrolling.
 *
 * This hook listens for wheel events on the window and uses a timeout to determine
 * when scrolling has stopped based on the provided threshold. If the wheel event's
 * deltaY is below the skip value, it is ignored. The hook returns a boolean value
 * indicating the scrolling state.
 */

export default function useWheelActivity(threshold = 200, skip = 1) {
  const [isScrolling, setIsScrolling] = useState(false);
  const scrollTimeout = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    const onScroll = (e: WheelEvent) => {
      const deltaY = e.deltaY;
      if (deltaY < skip) {
        return;
      }
      if (!isScrolling) {
        setIsScrolling(true); // ✅ Start scroll
        console.log("🟢 Scroll Started");
      }

      if (scrollTimeout.current) clearTimeout(scrollTimeout.current);

      scrollTimeout.current = setTimeout(() => {
        setIsScrolling(false); // ✅ Scroll stopped
        console.log("🔴 Scroll Stopped");
      }, threshold);
    };

    window.addEventListener("wheel", onScroll, { passive: true });

    return () => {
      window.removeEventListener("wheel", onScroll);
    };
  }, [isScrolling, threshold]);

  return isScrolling;
}
