import React, { ReactNode,  } from "react";
import useWheelActivity from "../useWheelActivity";
import { AnimatePresence, motion } from "framer-motion";

const HideOnScroll = ({ children }: { children: ReactNode }) => {
  const isScrolling = useWheelActivity(800);

  return (
    <div className="fixed top-0 left-0 inset-0 z-[9999] bg-transparent flex w-full items-center justify-center h-22">
      <AnimatePresence>
        <motion.div
          style={{
            y: isScrolling ? -100 : 0,
            // opacity: isScrolling ? 0 : 1,
          }}
          transition={{
            duration:0.6,
          }}
          className="w-full h-full flex items-center justify-center bg-white min-h-fit"
        >
          {children}
        </motion.div>
      </AnimatePresence>
    </div>
  );
};

export default HideOnScroll;
