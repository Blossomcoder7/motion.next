"use client"
import React, { useRef, useState, useEffect } from "react";
import { hslToRgba } from "../../utils/colorcodeConvertor";

interface Position {
  x: number;
  y: number;
}

interface HighlightCardProps extends React.PropsWithChildren {
  className?: string;
  hue?: number; // new prop, 0-360
  spotlightColor?: string; // optional override
  size?: number;
}

const HighlightCard: React.FC<HighlightCardProps> = ({
  children,
  className = "",
  hue,
  spotlightColor = "rgba(255, 255, 255, 0.25)",
  size = 50,
}) => {
  const divRef = useRef<HTMLDivElement>(null);
  const [isFocused, setIsFocused] = useState(false);
  const [position, setPosition] = useState<Position>({ x: 0, y: 0 });
  const [opacity, setOpacity] = useState(0);
  const [dynamicSpotlightColor, setDynamicSpotlightColor] =
    useState(spotlightColor);

  useEffect(() => {
    if (hue === undefined) return; // no dynamic color if no hue

    let isMounted = true;

    function updateColor() {
      if (!isMounted) return;

      // Random saturation between 60-100%
      const saturation = 60 + Math.random() * 40;
      // Random lightness between 50-80%
      const lightness = 50 + Math.random() * 30;
      // Random alpha between 0.15-0.35 for subtlety
      const alpha = 0.15 + Math.random() * 0.2;

      const color = hslToRgba(hue || 0, saturation, lightness, alpha);
      setDynamicSpotlightColor(color);

      // Next update in random 2 to 5 seconds
      const nextInterval = 2000 + Math.random() * 3000;
      setTimeout(updateColor, nextInterval);
    }

    updateColor();

    return () => {
      isMounted = false;
    };
  }, [hue]);

  const handleMouseMove: React.MouseEventHandler<HTMLDivElement> = (e) => {
    if (!divRef.current || isFocused) return;

    const rect = divRef.current.getBoundingClientRect();
    setPosition({ x: e.clientX - rect.left, y: e.clientY - rect.top });
  };

  const handleFocus = () => {
    setIsFocused(true);
    setOpacity(0.6);
  };

  const handleBlur = () => {
    setIsFocused(false);
    setOpacity(0);
  };

  const handleMouseEnter = () => {
    setOpacity(0.6);
  };

  const handleMouseLeave = () => {
    setOpacity(0);
  };

  return (
    <div
      ref={divRef}
      onMouseMove={handleMouseMove}
      onFocus={handleFocus}
      onBlur={handleBlur}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className={`relative overflow-hidden ${className}`}
    >
      <div
        className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 ease-in-out"
        style={{
          opacity,
          background: `radial-gradient(circle at ${position.x}px ${
            position.y
          }px, ${
            hue !== undefined ? dynamicSpotlightColor : spotlightColor
          }, transparent ${size}%)`,
        }}
      />
      {children}
    </div>
  );
};

HighlightCard.displayName = "HighlightCard";
export default HighlightCard;
