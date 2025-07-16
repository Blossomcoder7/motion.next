"use client";
import { useEffect, useRef, useState } from "react";
import { motion } from "motion/react";
import useFollowScroll from "@/components/useFollowScroll";
import AnimatedEl from "@/components/UI/AnimatedEl";
import Image from "next/image";
import design from "@/assets/image/design.png";
import engineer from "@/assets/image/engineer.png";
import HomeSectionTwo from "./HomeSectionTwo";
import Section3 from "./Section3";
import Section4 from "./Section4";

const NewIndex = () => {
  const animationContainer = useRef<HTMLDivElement>(null);
  const videoBoxContainer = useRef<HTMLDivElement>(null);
  const videoEndPositionRef = useRef<HTMLDivElement>(null);
  const videoBoxRef = useRef<HTMLDivElement>(null);
  const topNavRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const [jumpTime, setJumpTime] = useState<number>(0);
  useEffect(() => {
    const interval = setInterval(() => {
      if (videoRef.current) {
        const currentTime = videoRef.current.currentTime;
        setJumpTime(currentTime);
      }
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const { hasReachedTargetEl, progress } = useFollowScroll({
    container: animationContainer,
    elm: videoBoxRef,
    target: videoEndPositionRef,
  });

  useEffect(() => {
    const handleSizeChange = () => {
      if (videoBoxRef.current && videoBoxContainer.current && topNavRef) {
        const rect = videoBoxRef.current.getBoundingClientRect();
        const top = rect.top;
        const height = rect.height;
        const totalHeight = top + height;
        const topNav = document.querySelector(".top-nav-bar");
        const topNavRefHeight = topNav?.clientHeight || 0;
        console.log({ height, top, totalHeight, topNavRefHeight });
        videoBoxContainer.current.style.minHeight = `${
          totalHeight - topNavRefHeight
        }px`;
      }
    };

    handleSizeChange();
    window.addEventListener("resize", handleSizeChange);
    return () => {
      window.removeEventListener("resize", handleSizeChange);
    };
  }, [videoBoxRef, videoBoxContainer, topNavRef]);

  return (
    <div className="flex flex-col min-h-[600vh] space-y-20 w-full">
      <div className="w-full min-h-fit relative flex flex-col justify-start items-center px-6 md:px-10    bg-white">
        <div
          ref={animationContainer}
          className="flex relative  flex-col w-full max-w-full h-auto min-h-fit"
        >
          <div
            ref={videoBoxContainer}
            className=" h-fit min-h-[250px] w-full flex items-center justify-start "
          >
            <AnimatedEl
              motionProps={{
                display: hasReachedTargetEl ? "none" : "block",
              }}
              containerEl={animationContainer}
              ref={videoBoxRef}
            >
              <video
                autoPlay
                loop
                muted
                playsInline
                className=" w-full h-full max-h-full aspect-video  object-cover rounded-2xl"
                ref={videoRef}
              >
                <source src={`/video/new.mp4`} />
              </video>
            </AnimatedEl>
          </div>
          <div className="w-full relative flex flex-col min-h-fit ">
            <div className="h-fit w-full flex items-center justify-between  min-h-fit absolute top-0 -translate-y-12/12 font-bold text-xl sm:text-2xl md:text-4xl uppercase text-black/90">
              <span>A</span>
              <span>Seriously</span>
              <span>Good</span>
            </div>
            <div className="relative w-full py-6  flex flex-col flex-wrap lg:flex-row md:items-start md:justify-between gap-2 md:gap-4">
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
            ref={videoEndPositionRef}
            className="w-full   min-h-[350px]  rounded-2xl black-section  flex justify-center items-center"
          >
            {/* Final landed video box */}
            <motion.div
              className="w-full h-full"
              initial={{ opacity: 0 }}
              animate={{
                opacity: hasReachedTargetEl || progress >= 0.97 ? 1 : 0,
              }}
              transition={{ duration: 0 }}
            >
              <div className="w-full max-w-full h-full bg-black  rounded-2xl overflow-hidden">
                <video
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="h-full w-full object-cover max-w-full"
                  onPlay={(e) => {
                    e.currentTarget.currentTime = jumpTime;
                  }}
                >
                  <source src={`/video/new.mp4`} />
                </video>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
      <HomeSectionTwo />
      <Section3 />
      <Section4 />
    </div>
  );
};

export default NewIndex;
