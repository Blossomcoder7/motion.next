"use client"

import React, { type HTMLAttributes } from "react";

interface AnimatedTextProps extends HTMLAttributes<HTMLSpanElement> {
  children: string;
  disabled?: boolean;
  speed?: number;
  className?: string;
}

const AnimatedText: React.FC<AnimatedTextProps> = ({
  children,
  disabled = false,
  speed = 5,
  className = "",
  ...rest
}) => {
  const animationDuration = `${speed}ms`;

  return (
    <span
      {...rest}
      className={`text-[#b5b5b5a4] bg-clip-text inline-block ${
        disabled ? "" : "animate-shine"
      } ${className}`}
      style={{
        backgroundImage:
          "linear-gradient(120deg, rgba(255, 255, 255, 0) 40%, rgba(255, 255, 255, 0.8) 50%, rgba(255, 255, 255, 0) 60%)",
        backgroundSize: "200% 100%",
        WebkitBackgroundClip: "text",
        animationDuration: animationDuration,
      }}
    >
      {children}
    </span>
  );
};

export default AnimatedText;
