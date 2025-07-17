"use client";
import ShakingText from "@/components/UI/ShakingText";
import React from "react";

const HomeSectionTwo = () => {
  return (
    <>
      <div className="w-full h-fit min-h-fit">
        <div className="flex flex-col lg:flex-row  w-full h-full justify-center items-center px-6">
          <div className="w-full lg:w-[60%] text-[3.3rem] max-h-fit px-4 leading-tight font-bold">
            <p className="text-base uppercase font-semibold">Myself</p>
            <ShakingText>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem,
              minus? Sint beatae ea laborum magnam eos temporibus amet eius
              rerum? Facere natus ut quas nobis, illum inventore tempora alias
              cum?
            </ShakingText>
          </div>
          <div className=" w-full aspect-video lg:aspect-auto lg:w-[40%] px-4">
            <div>
              <video
                src="/video/new.mp4"
                autoPlay
                loop
                muted
                playsInline
                className="h-full w-full object-cover rounded-2xl aspect-video"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HomeSectionTwo;
