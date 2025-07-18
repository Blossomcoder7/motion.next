"use client";
import design from "@/assets/image/design.png";
import engineer from "@/assets/image/engineer.png";
import { useEffect, useRef, useState } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import useSmoothScroll from "@/components/useSmoothScroll";
import { motion } from "framer-motion";
import useFollowMouseLocation from "@/components/useFollowMouseLocation";
import Image from "next/image";
import { FaArrowDown } from "react-icons/fa";
import HomeSectionTwo from "./HomeSectionTwo";
import Section3 from "./Section3";
import Section4 from "./Section4";
import Section5 from "./Section5";
import Section6 from "./Section6";

gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin(useGSAP);

export default function PinUntilAnother() {
  const { lenisInstance } = useSmoothScroll({ autoInit: true });
  const xBoxAnimationContainerRef = useRef<HTMLDivElement>(null);
  const xBoxContainerRef = useRef<HTMLDivElement>(null);
  const xBoxReceiverRef = useRef<HTMLDivElement>(null);
  const xBox = useRef<HTMLDivElement>(null);
  const [allowXFollow, setAllowXFollow] = useState(true);

  const { springX } = useFollowMouseLocation({
    container: xBoxContainerRef,
    ref: xBox,
    padding: 0,
    damping: 20,
    stiffness: 120,
    shouldIncludePaddingInBounds: true,
  });

  useGSAP(
    () => {
      if (!lenisInstance) {
        return;
      }
      ScrollTrigger.scrollerProxy(xBoxAnimationContainerRef.current, {
        scrollTop(value) {
          if (arguments.length) {
            lenisInstance?.scrollTo(value!);
          }
          return lenisInstance?.scroll;
        },
        getBoundingClientRect() {
          return {
            top: 0,
            left: 0,
            width: window.innerWidth,
            height: window.innerHeight,
          };
        },
        pinType: xBoxAnimationContainerRef.current?.style.transform
          ? "transform"
          : "fixed",
      });
      ScrollTrigger.refresh();
      if (
        !xBox?.current ||
        !xBoxContainerRef?.current ||
        !xBoxReceiverRef?.current
      ) {
        return;
      }
      const tl = gsap.timeline({
        scrollTrigger: {
          markers: false,
          trigger: xBoxContainerRef.current,
          start: "top top",
          pin: ".pinMe",
          endTrigger: xBoxReceiverRef.current,
          end: "bottom center",
          scrub: 1.8,
          onUpdate: (self) => {
            console.log({ selfProgress: self.progress });
            const progress = self.progress;

            if (progress >= 0.85) {
              setAllowXFollow(false);
            } else {
              setAllowXFollow(true);
            }
          },
        },
      });
      tl.to(xBoxContainerRef?.current, {
        minHeight: "500px",
        margin: "50px 0",
      })
        .to(
          ".pinMe",
          {
            minHeight: "500px",
          },
          "<"
        )
        .to(xBox.current, { width: "100%", height: "100%" }, "<")
        .to(xBox.current, {
          position: "absolute",
          top: "0%",
          left: "0%",
        })
        .to(
          xBoxReceiverRef.current,
          {
            minHeight: "fit-content",
            marginBottom: "50px",
          },
          "<"
        );
    },
    {
      scope: xBoxAnimationContainerRef,
      dependencies: [
        xBoxAnimationContainerRef,
        xBoxContainerRef,
        xBoxReceiverRef,
        xBox,
        lenisInstance,
      ],
    }
  );

  useEffect(() => {
    window?.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  return (
    <div
      ref={xBoxAnimationContainerRef}
      className="w-full relative mx-auto overflow-hidden  px-5  flex flex-col"
    >
      <div className="w-full h-[58px]  text-center"></div>
      <div className="pinMe w-full min-h-fit h-[200px] z-[10]">
        <div
          ref={xBoxContainerRef}
          className="w-full h-[200px] min-h-fit  relative  z-[10] rounded-[12px] overflow-hidden  "
        >
          <motion.div
            ref={xBox}
            style={{
              x: allowXFollow ? springX : 0,
            }}
            className="text-center w-full sm:w-1/4 h-full bg-[#171717] rounded-[12px] overflow-hidden"
          >
            <video
              src="/video/new.mp4"
              autoPlay
              muted
              loop
              controls={false}
              className="w-full h-full object-cover"
            ></video>
          </motion.div>
        </div>
      </div>
      <div className="w-full relative  z-[8] flex items-center justify-center ">
        <div className="h-fit w-full flex items-center justify-between z-[1]  min-h-fit absolute  top-0 -translate-y-12/12 font-bold text-xl sm:text-2xl md:text-4xl uppercase text-[rgba(23,23,23,1)]">
          <span>A</span>
          <span>Seriously</span>
          <span>Good</span>
        </div>
        <div className="relative w-full z-[1]  flex flex-col flex-wrap lg:flex-row md:items-start md:justify-between gap-2 md:gap-4">
          {[design, engineer].map((a, i) => (
            <div
              key={i}
              className="flex-1 min-w-fit w-full max-w-full not-sm:justify-center flex"
            >
              <Image
                src={a}
                alt={`Image of Text -${a}`}
                quality={100}
                className="h-12 sm:h-24 md:h-28 lg:h-28 max-h-24 md:max-h-28 lg:max-h-28 mx-auto sm:m-0 w-fit  sm:w-auto  object-contain "
              />
            </div>
          ))}
        </div>
      </div>
      <div
        ref={xBoxReceiverRef}
        className="w-full h-[clamp(450px,85vh,1000px)]"
      >
        <div className="w-full pt-10 text-[40px,8vw,80px] font-semibold flex items-center justify-between">
          <span className="flex items-center justify-center  gap-4">
            Scroll <FaArrowDown />
          </span>
          <span className="flex items-center justify-center  gap-4">
            Scroll <FaArrowDown />
          </span>
        </div>
      </div>
      <div className="min-h-screen h-auto mt-20 md:mt-32 lg:mt-40 py-20">
        <HomeSectionTwo />
        <Section3 />
        <Section4 />
        <Section5 />
        <Section6 />
      </div>
    </div>
  );
}
