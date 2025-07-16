"use client";
import useWheelActivity from "@/components/useWheelActivity";
import { motion } from "framer-motion";
import { useAnimation } from "framer-motion";
import React, { HTMLAttributes, useEffect, useRef, useState } from "react";

const FlipText = () => {
  return (
    <div className="flex flex-row flex-wrap max-w-lg gap-3 uppercase text-6xl font-semibold">
      {"Hello this is so good to learn animations".split(" ").map((a, i) => (
        <MotionSpan className="flip text-white" key={i}>
          {a}
        </MotionSpan>
      ))}
    </div>
  );
};

export default FlipText;

interface MotionSpanProps extends HTMLAttributes<HTMLDivElement> {
  animated?: boolean;
}
const MotionSpan: React.FC<MotionSpanProps> = (props) => {
  interface ClientDimenssion {
    height: number;
    width: number;
  }

  const { animated, children, className, ...rest } = props;
  const elRef = useRef<HTMLDivElement>(null);
  const [_clientDimenssions, setClientDimenssions] = useState<
    ClientDimenssion | undefined
  >(undefined);
  useEffect(() => {
    if (!animated || !elRef || !elRef.current) {
      return;
    }
    const height = elRef.current.clientHeight || elRef.current.scrollHeight;
    const width = elRef.current.clientWidth || elRef.current.scrollWidth;
    setClientDimenssions({
      height: height,
      width: width,
    });
  }, [animated, elRef]);

  const isScrolling = useWheelActivity(200);

  const control = useAnimation();

  useEffect(() => {
    console.log({
      isScrolling,
    });
    // control.start({ y: isScrolling ? 0 : 100 });
  }, [isScrolling]);

  return (
    <>
      <div className={`flip ${className}`} {...rest}>
        <motion.div
          ref={elRef}
          whileInView={{ opacity: 1, }}
          initial={{ opacity: 0, }}
          viewport={{
            once: true,
            amount: 0.4,
          }}
          transition={{
            delay: 0.1,
            duration: 2.4,
            type: "spring",
            stiffness: 120,
            damping: 20,
          }}
          // initial={{ opacity: 1 }}
        >
          {children}
        </motion.div>
      </div>
    </>
  );
};
