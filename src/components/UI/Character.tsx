"use client";

import { motion, useScroll } from "framer-motion";
import React, { RefObject, useRef } from "react";

const Character = ({
  children,
  ref,
}: {
  children: string;
  ref?: RefObject<HTMLDivElement | null>;
}) => {
  const rootRef = useRef<HTMLDivElement>(null);
  return (
    <div
      ref={rootRef}
      className="text-[clamp(48px,14vw,250px)] font-bold tracking-tight leading-[0.85] overflow-hidden text-[#171717] flex"
    >
      <motion.span
        initial={{
          y: -300,
        }}
        animate={{
          color: "red",
          y: 0,
        }}
        transition={{
          type: "spring",
          duration: 0.5,
          stiffness: 160,
          damping: 24,
        }}
        viewport={{
          root: rootRef,
          amount: 0.1,
          once: false,
        }}
        className="letter relative inline-block"
      >
        <span>{children}</span>
        <span className="absolute bottom-full left-0">{children}</span>
      </motion.span>
    </div>
  );
};

export default Character;
