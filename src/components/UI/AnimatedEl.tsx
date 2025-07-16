"use client";

import { motion, type MotionStyle } from "framer-motion"; // not "motion/react"
import {
  useRef,
  forwardRef,
  useImperativeHandle,
  type ReactNode,
  type RefObject,
  useEffect,
} from "react";
import useFollowMouseLocation from "../useFollowMouseLocation";

interface AnimatedElProps {
  children?: ReactNode;
  motionProps?: MotionStyle;
  containerEl: RefObject<HTMLDivElement | null>;
  onChangeX?: (x: number) => void;
}

const AnimatedEl = forwardRef<HTMLDivElement, AnimatedElProps>(
  ({ children, containerEl, motionProps, onChangeX }, externalRef) => {
    const videoBoxRef = useRef<HTMLDivElement>(null);

    // Expose the inner ref to the parent
    useImperativeHandle(externalRef, () => videoBoxRef.current!, []);

    const { springX } = useFollowMouseLocation({
      container: containerEl,
      ref: videoBoxRef,
      shouldIncludePaddingInBounds: true,
      padding: 0,
      damping: 25,
    });
    useEffect(() => {
      onChangeX?.(springX.get());
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [springX]);

    return (
      <motion.div
        ref={videoBoxRef}
        style={{
          x: springX,
          borderRadius: "16px",
          maxWidth: "100%",
          maxHeight: "100%",
          ...motionProps,
        }}
        className="aspect-video absolute top-[20%] w-[250px] sm:w-[300px] md:w-[380px] lg:w-[410px] rounded-2xl bg-black overflow-hidden z-10"
      >
        {children}
      </motion.div>
    );
  }
);

AnimatedEl.displayName = "AnimatedEl";

export default AnimatedEl;
