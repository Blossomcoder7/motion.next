"use client";
import React, { ReactNode, useEffect, useRef, useState } from "react";

import BottomNavbar from "./UI/Navbar";
import useSmoothScroll from "./useSmoothScroll";
import MagicScrollWrapper from "./wrappers/HideOnScroll";

const Layout = ({ children }: { children: ReactNode }) => {
  useSmoothScroll({ autoInit: true });
  const navEl = useRef<HTMLDivElement>(null);
  const [minHeight, setMinHeight] = useState<number>(0);
  useEffect(() => {
    if (navEl && navEl.current) {
      setMinHeight(navEl.current?.clientHeight);
    }
  }, [navEl]);

  return (
    <>
      <nav className="flex items-center w-full h-fit top-nav-bar">
        <MagicScrollWrapper>
          <div
            style={{
              minHeight: `${minHeight}px`,
            }}
            className=" relative h-full min-h-full  w-full px-6 bg-white md:px-10 flex items-center justify-center"
          >
            <div
              ref={navEl}
              className="relative bg-white flex  flex-wrap w-full justify-between py-5 gap-4  text-sm md:text-base"
            >
              <div>
                <p className="font-semibold text-black">US Based</p>
                <p className="font-semibold text-black/35">Working globally</p>
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
        </MagicScrollWrapper>
      </nav>
      <main className="mt-4">{children}</main>
      <footer className="fixed w-full bottom-4 z-[9999]">
        <BottomNavbar />
      </footer>
    </>
  );
};

export default Layout;
