"use client";
import React, { ReactNode } from "react";
import Navbar from "./Navbar";
import BottomNavbar from "./UI/Navbar";
import useSmoothScroll from "./useSmoothScroll";

const Layout = ({ children }: { children: ReactNode }) => {
  useSmoothScroll({ autoInit: true });
  return (
    <>
      <div className="w-full px-6 bg-white md:px-10">
        <Navbar></Navbar>
      </div>
      <main>{children}</main>
      <div className="fixed bottom-4 w-full">
        <BottomNavbar />
      </div>
    </>
  );
};

export default Layout;
