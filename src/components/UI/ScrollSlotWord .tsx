"use client";

import {
  motion,
  useScroll,
  useTransform,
  useMotionValue,
  useSpring,
} from "framer-motion";
import { useRef, useEffect, useState } from "react";

interface Props {
  word: string;
  textSize?: string;
}

const SlotWordScrollReveal = ({ word, textSize = "text-[clamp(60px,200px,100px)]" }: Props) => {
  const containerRef = useRef(null);
  const [hasScrolledEnough, setHasScrolledEnough] = useState(false);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  // We'll only switch to animated slot-mode after slight scroll
  useEffect(() => {
    const unsubscribe = scrollYProgress.on("change", (v) => {
      if (v > 0.23) setHasScrolledEnough(true);
    });
    return () => unsubscribe();
  }, [scrollYProgress]);

  // Each Char uses its own internal motion progress
  const Char = ({ children, i }: { children: string; i: number }) => {
    const localYProgress = useMotionValue(0);
    const direction = i % 2 === 0 ? 1 : -1;
    const variation = 100 + (i % 3) * 40;
    const rawY = useTransform(
      localYProgress,
      [0, 1],
      [variation * direction, 0]
    );

    // Add spring behavior
    const y = useSpring(rawY, {
      stiffness: 200, // adjust for spring feel
      damping: 20,
      mass: 1,
    });

    // Sync each char's scroll individually
    useEffect(() => {
      const unsub = scrollYProgress.on("change", (v) => {

        localYProgress.set(v);
      });
      return () => {
        unsub();
      };
    }, [localYProgress]);

    return (
      <div className={`relative overflow-hidden min-w-fit w-fit min-h-fit h-fit ${textSize}`}>
        <div className={`opacity-0 relative z-0  leading-none min-h-fit   ${textSize}`}>{children}</div>
        <motion.div
          style={{ y  }}
          viewport={{ amount: 1 }}
          className="absolute z-1 top-0 left-0 min-w-fit"
        >
          {Array.from({ length: word?.length }).map((_, idx) => (
            <span key={idx} className={`flex h-fit w-fit max-h-fit max-w-fit min-h-fit  leading-none -my-[0.1em] min-w-fit items-center ${textSize}`}>
              {children}
            </span>
          ))}
        </motion.div>
      </div>
    );
  };

  return (
    <div
      ref={containerRef}
      className=" inline-flex items-center  overflow-hidden h-fit max-h-fit  justify-center"
    >
      {/* Static base text (always underneath, fades out) */}
      <motion.div
        style={{
          opacity: useTransform(scrollYProgress, [0, 0.1], [1, 0]),
          position: hasScrolledEnough ? "absolute" : "relative",
        }}
        className={`inline-flex tracking-tight leading-none font-bold text-[#171717]  ${textSize}`}
      >
        {word.split("").map((char, i) => (
          <span key={`static-${i}`}>{char}</span>
        ))}
      </motion.div>

      {/* Slot-machine animation overlay */}
      {hasScrolledEnough && (
        <div
          className={`inline-flex h-fit max-h-fit overflow-hidden font-bold text-[#171717]  ${textSize}`}
        >
          {word.split("").map((char, i) => (
            <Char i={i} key={`slot-${i}`}>
              {char}
            </Char>
          ))}
        </div>
      )}
    </div>
  );
};

export default SlotWordScrollReveal;
