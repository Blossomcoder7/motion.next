"use client";
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
  open,
}: {
  children?: ReactNode;
  containerRef?: RefObject<HTMLDivElement | null>;
  open?: boolean;
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
        className=" w-full h-full flex items-center justify-between min-h-fit "
      >
        <div
          ref={elmRef}
          className="cursor-pointer w-fit h-full min-fit px-4 flex items-center justify-center  rounded-lg"
        >
          <div
            className={`flex-col justify-center items-center py-1 px-2 ${
              open ? "hidden md:flex" : "flex"
            }`}
          >
            <div className="h-12 w-12 md:h-16 md:w-16 bg-gray-200 rounded-2xl shadow-inner"></div>
          </div>
          {children}
        </div>
      </motion.div>
    </>
  );
};

export default MeuItem;
