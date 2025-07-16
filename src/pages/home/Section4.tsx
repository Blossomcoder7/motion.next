import { MotionSpan } from "@/components/UI/FlipText";
import Image from "next/image";
import React, { useRef } from "react";

const Section4 = () => {
  const parentEl = useRef<HTMLDivElement>(null);
  const parentEl2 = useRef<HTMLDivElement>(null);
  return (
    <>
      <div
        ref={parentEl2}
        className="bg-[#171717] relative  w-full h-auto px-4 rounded-2xl text-white"
      >
        <div className="min-h-fit py-24 w-full px-10  mx-auto max-w-9/12">
          <div className="h-full w-full flex flex-col justify-center  px-5 ">
            <p className="uppercase font-bold opacity-50 ">Services</p>
            <MotionSpan parentEl={parentEl2} className=" text-5xl">
              Evolving with every brief and built for impact, my process spans
              design, development, and brand strategy—aligning vision with
              execution to bring clarity and edge to every project.
            </MotionSpan>
          </div>
        </div>
        <div ref={parentEl} className="bg-[#262626]  w-full rounded-2xl">
          <div className="flex flex-col justify-between gap-4  p-6">
            {/* one  */}
            <div className="flex  border-b-1 border-white pb-8 py-3">
              <MotionSpan parentEl={parentEl} className="py-1">
                <p>01</p>
              </MotionSpan>
              <div className="flex-2/3 text-center">
                <MotionSpan
                  parentEl={parentEl}
                  className="text-4xl font-semibold"
                >
                  Brand Strategy
                </MotionSpan>
              </div>

              <div className="flex flex-col gap-4 flex-3/5 py-1">
                <MotionSpan parentEl={parentEl} className="px-5 pb-2">
                  Helping others uncover their {"brand's"} purpose and
                  uniqueness – and the game plan to deliver it to win their{" "}
                  {"customers'"}
                  devotion.
                </MotionSpan>
                <div className="flex flex-wrap gap-1 px-5 font-semibold">
                  <p className="bg-[#171717] w-fit px-3 py-1 rounded-md">
                    Research & Insights
                  </p>
                  <p className="bg-[#171717] w-fit px-3 py-1 rounded-md">
                    Brand Strategy
                  </p>
                  <p className="bg-[#171717] w-fit px-3 py-1 rounded-md">
                    Competitive Study
                  </p>
                  <p className="bg-[#171717] w-fit px-3 py-1 rounded-md">
                    Voice & Tone
                  </p>
                  <p className="bg-[#171717] w-fit px-3 py-1 rounded-md">
                    Naming & Copywriting
                  </p>
                  <p className="bg-[#171717] w-fit px-3 py-1 rounded-md">
                    Workshops
                  </p>
                </div>
              </div>

              <div className="flex flex-3/6 relative justify-center items-center py-3">
                <MotionSpan
                  parentEl={parentEl}
                  className="h-52 w-72 object-cover rounded-2xl"
                >
                  <Image fill src={"/images/image4.webp"} alt="" priority />
                </MotionSpan>
              </div>
            </div>
            {/* two */}
            <div className="flex  border-b-1 border-white pb-8 py-3">
              <MotionSpan parentEl={parentEl} className="py-1">
                <p>02</p>
              </MotionSpan>
              <div className="flex-2/3 text-center">
                <MotionSpan
                  parentEl={parentEl}
                  className="text-4xl font-semibold"
                >
                  Digital Design
                </MotionSpan>
              </div>

              <div className="flex flex-col gap-4 flex-3/5 py-1">
                <MotionSpan parentEl={parentEl} className="px-5 pb-2">
                  Designing engaging digital experiences that combine brand
                  strategy and creativity with UX insights to deliver
                  functionality and ease of use.
                </MotionSpan>
                <div className="flex flex-wrap gap-1 px-5 font-semibold">
                  <p className="bg-[#171717] w-fit px-3 py-1 rounded-md">
                    Identity Design
                  </p>
                  <p className="bg-[#171717] w-fit px-3 py-1 rounded-md">
                    Wireframing
                  </p>
                  <p className="bg-[#171717] w-fit px-3 py-1 rounded-md">UI</p>
                  <p className="bg-[#171717] w-fit px-3 py-1 rounded-md">UX</p>
                  <p className="bg-[#171717] w-fit px-3 py-1 rounded-md">
                    Web Design
                  </p>
                  <p className="bg-[#171717] w-fit px-3 py-1 rounded-md">
                    Product Design
                  </p>
                </div>
              </div>

              <div className="flex flex-3/6 relative justify-center items-center py-3">
                <MotionSpan
                  parentEl={parentEl}
                  className="h-52 w-72 object-cover rounded-2xl"
                >
                  <Image fill src={"/images/image3.webp"} alt="" priority />
                </MotionSpan>
              </div>
            </div>
            {/* three */}
            <div className="flex pb-8 py-3">
              <MotionSpan parentEl={parentEl} className="py-1">
                <p>03</p>
              </MotionSpan>
              <div className="flex-2/3 text-center">
                <MotionSpan
                  parentEl={parentEl}
                  className="text-4xl font-semibold"
                >
                  Development
                </MotionSpan>
              </div>

              <div className="flex flex-col gap-4 flex-3/5 py-1">
                <MotionSpan parentEl={parentEl} className="px-5 pb-2">
                  Building digital products that combine design, technology, and
                  business strategy to deliver seamless user experiences.
                </MotionSpan>
                <div className="flex  flex-wrap gap-1 px-5 font-semibold">
                  <p className="bg-[#171717] w-fit px-3 py-1 rounded-md">
                    Frontend Development
                  </p>
                  <p className="bg-[#171717] w-fit px-3 py-1 rounded-md">SEO</p>
                  <p className="bg-[#171717] w-fit px-3 py-1 rounded-md">
                    Motion
                  </p>
                  <p className="bg-[#171717] w-fit px-3 py-1 rounded-md">
                    Animation
                  </p>
                  <p className="bg-[#171717] w-fit px-3 py-1 rounded-md">
                    WebGL
                  </p>
                  <p className="bg-[#171717] w-fit px-3 py-1 rounded-md">
                    CMS Development
                  </p>
                  <p className="bg-[#171717] w-fit px-3 py-1 rounded-md">
                    Databases
                  </p>
                </div>
              </div>

              <div className="flex flex-3/6 relative justify-center items-center py-3">
                <MotionSpan
                  parentEl={parentEl}
                  className="h-52 w-72 object-cover rounded-2xl"
                >
                  <Image fill src={"/images/image4.webp"} alt="" priority />
                </MotionSpan>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Section4;
