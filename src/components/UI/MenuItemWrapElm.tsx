"use client"
import { type HTMLAttributes } from "react";

const MenuItemWrapElm = (props: HTMLAttributes<HTMLDivElement>) => {
  const { children, className, ...rest } = props;
  return (
    <div
      {...rest}
      className={`w-full h-14 bg-white/20 hover:bg-white/10   transition-all duration-200 ease-in-out backdrop-blur-[2px]  min-h-14 rounded-lg shadow-md ${className}`}
    >
      {children}
    </div>
  );
};

export default MenuItemWrapElm;
