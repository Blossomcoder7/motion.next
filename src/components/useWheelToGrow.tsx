"use client";
import { useEffect,  } from "react";
import { useMotionValue, animate } from "framer-motion";

const useWheelToGrow = ({
  elm,
  target,
  container,
}: {
  elm: React.RefObject<HTMLDivElement | null>;
  target: React.RefObject<HTMLDivElement | null>;
  container: React.RefObject<HTMLDivElement | null>;
}) => {
  const scrollProgress = useMotionValue(0); // from 0 to 1

  useEffect(() => {
    const containerEl = container.current;
    const elmEl = elm.current;
    const targetEl = target.current;

    if (!containerEl || !elmEl || !targetEl) return;

    const initialRect = elmEl.getBoundingClientRect();
    const targetRect = targetEl.getBoundingClientRect();
    const containerRect = containerEl.getBoundingClientRect();

    const getInterpolatedValue = (
      start: number,
      end: number,
      progress: number
    ) => start + (end - start) * progress;

    const handleWheel = (e: WheelEvent) => {
      e.preventDefault();

      const delta = e.deltaY * 0.002; // smaller = slower
      const nextProgress = Math.min(Math.max(scrollProgress.get() + delta, 0), 1);
      scrollProgress.set(nextProgress);

      // Interpolate between start and target
      const width = getInterpolatedValue(
        initialRect.width,
        targetRect.width,
        nextProgress
      );
      const height = getInterpolatedValue(
        initialRect.height,
        targetRect.height,
        nextProgress
      );
      const x = getInterpolatedValue(
        0,
        targetRect.left - containerRect.left,
        nextProgress
      );
      const y = getInterpolatedValue(
        0,
        targetRect.top - containerRect.top,
        nextProgress
      );

      animate(
        elmEl,
        {
          width,
          height,
          x,
          y,
          borderRadius: "16px",
        },
        {
          type: "tween",
          ease: "easeOut",
          duration: 0.4,
        }
      );
    };

    containerEl.addEventListener("wheel", handleWheel, { passive: false });

    return () => {
      containerEl.removeEventListener("wheel", handleWheel);
    };
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [elm, target, container]);

  return { scrollProgress };
};

export default useWheelToGrow;
