"use client";
import { type HTMLAttributes } from "react";

const MenuItemWrapElm = (props: HTMLAttributes<HTMLDivElement>) => {
  const { children, className, ...rest } = props;
  return (
    <div
      {...rest}
      className={`w-full min-h-fit   transition-all duration-200 ease-in-out  rounded-lg ${className}`}
    >
      {children}
    </div>
  );
};

export default MenuItemWrapElm;
