"use client";

import React, { useEffect, useState, useRef } from "react";
import { motion, useAnimation } from "framer-motion";

function getRandomMargin() {
  const amount = (Math.random() * 2.4).toFixed(2);
  const direction = Math.random() > 0.5 ? "marginLeft" : "marginRight";
  return { [direction]: `${amount}rem` };
}

interface ShakingTextProps {
  children: string;
  activeCount?: number; // how many words animate simultaneously
}

const ShakingText = ({ children, activeCount = 3 }: ShakingTextProps) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const words = children.split(" ");
  const [activeIndex, setActiveIndex] = useState(0);
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const controlsArray = useRef(words.map(() => useAnimation()));

  useEffect(() => {
    const onScroll = () => {
      if (!containerRef.current) return;

      const rect = containerRef.current.getBoundingClientRect();
      const viewportHeight = window.innerHeight;

      const totalDistance = rect.height + viewportHeight;
      let progress = (viewportHeight - rect.top) / totalDistance;
      progress = Math.min(Math.max(progress, 0), 1);

      const index = Math.floor(progress * words.length);
      setActiveIndex(Math.min(index, words.length - 1));
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();

    return () => window.removeEventListener("scroll", onScroll);
  }, [words.length]);

  useEffect(() => {
    let interval: NodeJS.Timeout | null = null;

    // Animate all active words every 300ms
    const animateActiveWords = async () => {
      for (
        let i = activeIndex;
        i < activeIndex + activeCount && i < words.length;
        i++
      ) {
        await controlsArray.current[i]?.start(getRandomMargin());
      }
    };

    animateActiveWords();

    interval = setInterval(() => {
      animateActiveWords();
    }, 300);

    // Reset other words
    controlsArray.current.forEach((ctrl, idx) => {
      if (idx < activeIndex || idx >= activeIndex + activeCount) {
        ctrl.start({
          marginLeft: 0,
          marginRight: 0,
          transition: { type: "spring", stiffness: 200, damping: 18 },
        });
      }
    });

    return () => {
      if (interval) clearInterval(interval);
    };
  }, [activeIndex, activeCount, words]);

  return (
    <div ref={containerRef} style={{ overflow: "hidden" }}>
      <motion.div className="flex flex-wrap">
        {words.map((word, i) => (
          <motion.span
            key={`${word}-${i}`}
            className="inline-block"
            animate={controlsArray.current[i]}
            transition={{
              type: "spring",
              stiffness: 200,
              damping: 18,
              mass: 0.9,
            }}
          >
            {word}&nbsp;
          </motion.span>
        ))}
      </motion.div>
    </div>
  );
};

export default ShakingText;
