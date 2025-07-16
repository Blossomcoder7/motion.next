"use client";
import { motion } from "framer-motion";
import React, {
  HTMLAttributes,
  RefObject,
  useEffect,
  useRef,
  useState,
} from "react";

const FlipText = () => {
  return (
    <div className="flex flex-row flex-wrap max-w-lg gap-3 uppercase text-6xl font-semibold">
      {"Hello this is so good to learn animations".split(" ").map((a, i) => (
        <MotionSpan className="flip text-black" key={i}>
          {a}
        </MotionSpan>
      ))}
    </div>
  );
};

export default FlipText;

interface MotionSpanProps extends HTMLAttributes<HTMLDivElement> {
  animated?: boolean;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  parentEl?: RefObject<HTMLDivElement | any>;
}
const MotionSpan: React.FC<MotionSpanProps> = (props) => {
  const { children, className, parentEl, ...rest } = props;
  const elRef = useRef<HTMLDivElement>(null);
  const [bg, setBg] = useState<string>("white");
  useEffect(() => {
    if (parentEl && parentEl.current) {
      const bgColor = window.getComputedStyle(
        parentEl.current
      )?.backgroundColor;
      setBg(bgColor);
    }
  }, [parentEl]);

  return (
    <>
      <div className={` relative overflow-hidden   ${className}`} {...rest}>
        <>{children}</>
        <motion.div
          ref={elRef}
          style={{
            background: bg,
          }}
          whileInView={{  top: "100%" }}
          initial={{ position: "absolute", top: 0 }}
          viewport={{
            once: true,
            amount: 1,
          }}
          transition={{
            delay: 0.2,
            duration: 2.6,
            type: "spring",
            stiffness: 120,
            damping: 20,
          }}
          // initial={{ opacity: 1 }}
          className="w-full h-full absolute inset-0 z-[4] "
        ></motion.div>
      </div>
    </>
  );
};

export { MotionSpan };
