"use client"
/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect, useRef, type ReactNode, type RefObject } from "react";
import useFollowMouseLocation from "../useFollowMouseLocation";
import {
  motion,
  MotionValue,
  useMotionValue,
  useSpring,
  useTransform,
} from "motion/react";
import useDetectPointer from "../useDetectPointer";

const MeuItem = ({
  children,
  containerRef,
}: {
  children?: ReactNode;
  containerRef?: RefObject<HTMLDivElement | null>;
}) => {
  const boundRef = useRef<HTMLDivElement | null>(null);
  const elmRef = useRef<HTMLDivElement | null>(null);
  const { springX } = useFollowMouseLocation(
    {
      container: containerRef || boundRef,
      ref: elmRef,
    },
    containerRef ? "elm" : boundRef ? "elm" : "window"
  );
  const isHovered = useDetectPointer(boundRef);
  const hoverStrength = useMotionValue(0);
  const smoothedHover = useSpring(hoverStrength, {
    stiffness: 200,
    damping: 25,
  });
  const smoothX = useTransform<MotionValue<number>, any>(
    [springX, smoothedHover],
    ([xVal, hVal]: any) => {
      return xVal * hVal;
    }
  );
  useEffect(() => {
    hoverStrength.set(isHovered ? 1 : 0);
  }, [isHovered, hoverStrength]);

  return (
    <>
      <motion.div 
        style={{
          x: smoothX,
        }}
        ref={boundRef}
        className=" w-full h-full flex items-center justify-start "
      >
        <div
          ref={elmRef}
          className="cursor-pointer w-fit h-full px-5 flex items-center justify-center  rounded-lg"
        >
          {children}
        </div>
      </motion.div>
    </>
  );
};

export default MeuItem;
