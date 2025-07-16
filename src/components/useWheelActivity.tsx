import { useEffect, useRef, useState } from "react";

export default function useWheelActivity(threshold = 200) {
  const [isScrolling, setIsScrolling] = useState(false);
  const scrollTimeout = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    const onScroll = () => {
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
