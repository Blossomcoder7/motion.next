import React, { ReactNode, RefObject } from "react";
import useWheelActivity from "../useWheelActivity";
import { motion } from "framer-motion";

const HideOnScroll = ({ children }: { children: ReactNode }) => {
  const isScrolling = useWheelActivity(800);

  return (
    <div className="fixed top-0 left-0 inset-0 z-[9999] flex w-full items-center justify-center min-h-fit">
      <motion.div
        style={{
          y: isScrolling ? -100 : 0,
          opacity: isScrolling ? 0 : 1,
        }}
        transition={{
          duration: 1,
        }}
        className="w-full h-full flex items-center justify-center"
      >
        {children}
      </motion.div>
    </div>
  );
};

export default HideOnScroll;
