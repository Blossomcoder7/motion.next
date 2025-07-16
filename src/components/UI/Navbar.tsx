"use client";

import { useEffect, useRef, useState } from "react";
import { HiOutlineBars3 } from "react-icons/hi2";
import {
  motion,
  AnimatePresence,
  useSpring,
  useMotionValue,
} from "motion/react";
import MeuItem from "./MeuItem";
import useSmoothScroll from "../useSmoothScroll";
import ClickAwayListener from "@mui/material/ClickAwayListener";
import MenuItemWrapElm from "./MenuItemWrapElm";
import SparkOnClick from "./SparkOnClick";
import AnimatedText from "./AnimatedText";
import useWheelActivity from "../useWheelActivity";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const toggle = () => setOpen((p) => !p);
  const scrollableMenuBox = useRef<HTMLDivElement | null>(null);
  const wrapperRef = useRef<HTMLDivElement | null>(null);

  const { createInstance, removeInstance, refresh, isInitialized } =
    useSmoothScroll({
      shouldEnableLenis: true,
      lenisOptions: {
        duration: 1.5,
        easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      },
      autoInit: true,
    });

  useEffect(() => {
    if (scrollableMenuBox.current && isInitialized) {
      createInstance(scrollableMenuBox.current, "nested-scroll");
      refresh();
      return () => {
        refresh();
        removeInstance("nested-scroll");
      };
    }
  }, [createInstance, removeInstance, refresh, isInitialized]);

  const menu = ["Home", "About", "Projects", "Blogs", "Contact"];

  const isScrolling = useWheelActivity(800);


  return (
    <ClickAwayListener onClickAway={() => setOpen(false)}>
      <motion.div
        style={{
          y: isScrolling ? 100 : 0,
          opacity: isScrolling ? 0 : 1,
        }}
        transition={{
          duration: 0.6,
        }}
        ref={wrapperRef}
        className="w-[90%] z-[9999] md:w-[95%] max-w-[680px] mx-auto rounded-2xl text-white bg-black/80 hover:bg-black/90 transition-all duration-200 ease-in cursor-pointer  hover:backdrop-blur-[3px] backdrop-blur-[2px] overflow-hidden"
      >
        <AnimatePresence>
          {open && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{
                height: "auto",
                opacity: 1,
                transition: {
                  height: {
                    type: "spring",
                    stiffness: 300,
                    damping: 30,
                    duration: 0.4,
                  },
                  opacity: {
                    duration: 0.2,
                    delay: 0.1,
                  },
                },
              }}
              exit={{
                height: 0,
                opacity: 0,
                transition: {
                  height: {
                    type: "spring",
                    stiffness: 300,
                    damping: 30,
                    duration: 0.4,
                  },
                  opacity: {
                    duration: 0.2,
                  },
                },
              }}
              className="w-full bg-black/40  backdrop-blur-[2px] border-b border-black/60 overflow-hidden"
            >
              <div className="flex  py-4 px-6 flex-col  max-h-[40svh] w-full overflow-x-hidden ">
                <div
                  ref={scrollableMenuBox}
                  className="overflow-auto  overflow-x-hidden pr-3 flex flex-col nested-scroll  w-full  space-y-4 style-scroll style-scroll-thin style-scroll-no-bg style-scroll-thumb-green"
                >
                  {menu.map((a, i) => (
                    <MenuItemWrapElm
                      className="text-xl  font-semibold text-[white] uppercase "
                      key={i}
                    >
                      <MeuItem containerRef={scrollableMenuBox}>
                        <SparkOnClick
                          sparkSize={40}
                          sparkColor="#ff0000"
                          duration={200}
                          onClick={() => setTimeout(() => setOpen(false), 300)}
                        >
                          <span> {a}</span>
                        </SparkOnClick>
                      </MeuItem>
                    </MenuItemWrapElm>
                  ))}
                </div>
                <div className=" min-h-1 w-full border-b mt-2 border-white/40"></div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
        <div className="flex h-20 md:h-24 w-full justify-between px-4">
          <div
            className={`flex-col justify-center items-center py-1 px-2 ${
              open ? "hidden md:flex" : "flex"
            }`}
          >
            <div className="h-12 w-12 md:h-16 md:w-16 bg-gray-200 rounded-2xl shadow-inner"></div>
          </div>
          <div className={`flex-1 ${open ? "hidden sm:block" : "block"}`}>
            <div className="h-full flex flex-col justify-center pl-3">
              <p className="uppercase font-semibold text-lg md:text-xl hover:cursor-pointer select-none">
                WHOISRAHULMEHTA
              </p>
              <p className="hidden sm:inline font-semibold text-xs md:text-sm select-none text-gray-300">
                <AnimatedText speed={5000}>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae
                  ea.
                </AnimatedText>
              </p>
            </div>
          </div>
          <div
            className={`flex-1 md:hidden ${
              open ? "flex" : "hidden"
            } items-center justify-center`}
          >
            <p className="uppercase text-lg font-semibold">Menu</p>
          </div>
          <button
            type="button"
            onClick={toggle}
            aria-label="Toggle menu"
            className="cursor-pointer flex flex-col justify-center pl-4 text-white hover:text-gray-300 transition-colors duration-200"
          >
            <motion.div
              animate={{ rotate: open ? 90 : 0 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
            >
              <HiOutlineBars3 className="text-3xl md:text-4xl" />
            </motion.div>
          </button>
        </div>
      </motion.div>
    </ClickAwayListener>
  );
};

export default Navbar;
