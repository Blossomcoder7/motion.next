"use client";
import React, { ReactNode, useEffect, useRef, useState } from "react";

import BottomNavbar from "./UI/Navbar";
import useSmoothScroll from "./useSmoothScroll";
import { AnimatePresence, motion } from "framer-motion";
import useWheelActivity from "./useWheelActivity";
import Footer from "./UI/Footer";

const Layout = ({ children }: { children: ReactNode }) => {
  useSmoothScroll({ autoInit: true });
  const navEl = useRef<HTMLDivElement>(null);
  const [minHeight, setMinHeight] = useState<number>(0);
  useEffect(() => {
    if (navEl && navEl.current) {
      setMinHeight(navEl.current?.clientHeight);
    }
  }, [navEl]);

  const isScrolling = useWheelActivity(800);
  return (
    <>
      <div className="w-full h-22"></div>
      {/* <div className=" fixed top-0 w-full h-22 min-h-22 bg  z-[9999]"> */}
      <AnimatePresence>
        <motion.div
          initial={{ y: 0 }}
          animate={{ y: isScrolling ? -200 : 0 }}
          transition={{
            type: "spring",
            stiffness: 120,
            damping: 20,
            mass: 0.9,
          }}
          exit={{ y: -200 }}
          className="w-full h-22 fixed top-0 z-[9999] flex items-center justify-center  min-h-fit"
        >
          <nav className="flex items-center w-full h-fit top-nav-bar min-h-22">
            <div
              style={{
                minHeight: `${minHeight}px`,
              }}
              className=" relative h-full min-h-full  w-full px-6 bg-white md:px-10 flex items-center justify-center"
            >
              <div
                ref={navEl}
                className="relative  flex  flex-wrap w-full justify-between py-5 gap-4  text-sm md:text-base"
              >
                <div>
                  <p className="font-semibold text-black">US Based</p>
                  <p className="font-semibold text-black/35">
                    Working globally
                  </p>
                </div>
                <div className="hidden sm:inline-flex flex-col">
                  <p className="font-semibold text-black">Building at</p>
                  <p className="font-semibold text-black/35">TrackStack</p>
                </div>
                <div className="hidden sm:inline-flex flex-col">
                  <p className="font-semibold text-black">
                    Freelance availability
                  </p>
                  <p className="font-semibold text-black/35">July 4, 2025</p>
                </div>
                <a
                  href="mailto:blossomcoder@gmail.com"
                  className="bg-black/90 text-white flex justify-center items-center px-6 rounded-full font-bold py-3 cursor-pointer"
                >
                  Get in touch
                </a>
              </div>
            </div>
          </nav>
        </motion.div>
      </AnimatePresence>
      {/* </div> */}
      <main className="mt-4 mb-10">{children}</main>
      {/* <footer className="fixed w-full bottom-4 z-[9999]"> */}
      <BottomNavbar />
      <Footer />
      <div className="w-full h-24 mt-5">
        <div className="text-[#171717] uppercase font-semibold  w-full text-center text-8xl">Powered By Next.JS </div>
      </div>
    </>
  );
};

export default Layout;
