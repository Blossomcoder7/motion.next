import one from "@/assets/logos/one.svg";
import two from "@/assets/logos/two.svg";
import three from "@/assets/logos/three.svg";
import four from "@/assets/logos/four.svg";
import five from "@/assets/logos/five.svg";
import six from "@/assets/logos/six.svg";
import seven from "@/assets/logos/seven.svg";
import eight from "@/assets/logos/eight.svg";
import nine from "@/assets/logos/nine.svg";
import ten from "@/assets/logos/ten.svg";
import Image from "next/image";

import { motion, AnimatePresence } from "framer-motion";
import { useState, useRef, useEffect } from "react";

const Section6 = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(1);
  const [overlayStyle, setOverlayStyle] = useState({
    top: 0,
    left: 0,
    width: 0,
    height: 0,
  });
  const gridRef = useRef<HTMLDivElement>(null);

  // We'll store refs for each cell to measure position/size
  const cellsRefs = useRef<(HTMLDivElement | null)[]>([]);

  // Update overlay position & size on hoveredIndex change

  useEffect(() => {
    if (hoveredIndex === null) return;

    const cell = cellsRefs.current[hoveredIndex];
    const grid = gridRef.current;
    if (cell && grid) {
      const gridRect = grid.getBoundingClientRect();
      const cellRect = cell.getBoundingClientRect();

      setOverlayStyle({
        top: cellRect.top - gridRect.top,
        left: cellRect.left - gridRect.left,
        width: cellRect.width,
        height: cellRect.height,
      });
    }
  }, [hoveredIndex]);
  // List of items for first grid (3 items)
  const firstGridItems = [
    { id: 0, alt: "one", src: one },
    { id: 1, alt: "two", src: two },
    { id: 2, alt: "three", src: three },
  ];

  // List of items for second grid (7 items)
  const secondGridItems = [
    { id: 3, alt: "four", src: four },
    { id: 4, alt: "five", src: five },
    { id: 5, alt: "six", src: six },
    { id: 6, alt: "seven", src: seven },
    { id: 7, alt: "eight", src: eight },
    { id: 8, alt: "nine", src: nine },
    { id: 9, alt: "ten", src: ten },
  ];

  return (
    <div className="w-full h-fit min-h-fit max-w-11/12 mx-auto flex flex-col justify-center">
      <p className="text-md uppercase font-semibold px-4 py-5">
        Professional at
      </p>

      <div ref={gridRef} className="relative" style={{ userSelect: "none" }}>
        {/* Animated overlay */}
        <AnimatePresence>
          {hoveredIndex !== null && (
            <motion.div
              key="overlay"
              initial={{ opacity: 0 }}
              animate={{
                opacity: 1,
                top: overlayStyle.top,
                left: overlayStyle.left,
                width: overlayStyle.width,
                height: overlayStyle.height,
              }}
              exit={{ opacity: 0 }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
              className="pointer-events-none absolute bg-[#171717] mix-blend-difference filter invert z-10 "
              style={{}}
            />
          )}
        </AnimatePresence>

        {/* First grid */}
        <div className="grid lg:grid-cols-3 place-items-center text-center  lg:h-60 border-b border-[#d4d4d4]">
          {firstGridItems.map(({ id, alt, src }, i) => (
            <div
              key={id}
              ref={(el) => {
                cellsRefs.current[i] = el;
              }}
              onMouseEnter={() => setHoveredIndex(i)}
              onMouseLeave={() => setHoveredIndex((p) => (p ? p : null))}
              className="flex justify-center items-center border-r p-4 border-[#d4d4d4] transition-all duration-200 ease-in-out w-full h-full cursor-pointer"
            >
              <div className="h-24 w-60 object-contain flex items-center justify-center relative">
                <Image
                  alt={alt}
                  src={src}
                  fill
                  className="group-hover:invert  aspect-3/2"
                />
              </div>
            </div>
          ))}
        </div>

        {/* Second grid */}
        <div className="grid  lg:grid-cols-7 place-items-center text-center lg:h-60 ">
          {secondGridItems.map(({ id, alt, src }, i) => (
            <div
              key={id}
              ref={(el) => {
                cellsRefs.current[i + firstGridItems.length] = el;
              }}
              onMouseEnter={() => setHoveredIndex(i + firstGridItems.length)}
              onMouseLeave={() => setHoveredIndex((p) => (p ? p : null))}
              className="flex justify-center items-center border-r border-[#d4d4d4] transition-all p-4 duration-200 ease-in-out w-full h-full cursor-pointer"
            >
              <div className="h-10 w-60  object-contain flex items-center justify-center relative">
                <Image
                  alt={alt}
                  src={src}
                  fill
                  className="group-hover:invert aspect-3/2"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Section6;
