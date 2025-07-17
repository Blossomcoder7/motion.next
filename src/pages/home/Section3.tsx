import Image from "next/image";
import React from "react";
import { FaArrowRight } from "react-icons/fa";

const Section3 = () => {
  return (
    <div className=" flex flex-col">
      <div className="w-full px-6">
        <div className="flex flex-col  w-full justify-between text-[clamp(30px,10.42rem,5rem)] font-bold uppercase">
          <div className="flex w-full justify-between">
            <p className="px-4">Work</p>
            <p>{"'"}25</p>
          </div>
          <div className="w-full flex flex-col lg:flex-row gap-3 px-4">
            <div className="w-full lg:w-[50%] bg-black  h-[clamp(300px,90vh,fit-content)] rounded-2xl group overflow-hidden">
              <div className="h-[clamp(400px,70vh,550px)] w-full p-5">
                <div className="relative h-full w-full rounded-2xl overflow-hidden">
                  <div className="h-full w-full object-cover rounded-2xl transition-all duration-500 ease-in-out group-hover:scale-105 group-hover:blur-xs group-hover:cursor-pointer">
                    <Image fill src={`/images/image3.webp`} alt="" />
                  </div>
                  <div className="absolute top-1/2 left-1/2 h-52 w-96  aspect-video transform -translate-x-1/2 -translate-y-1/2 rounded-2xl opacity-0 scale-0 group-hover:opacity-100 group-hover:scale-100 group-hover:cursor-pointer transition-all duration-500 ease-in-out shadow-lg">
                    <Image fill src={`/images/image4.webp`} className="object-center object-cover" alt="" />
                  </div>
                </div>
              </div>

              <div className="px-6  w-full py-4">
                <div className="w-full flex justify-between py-3">
                  <p className="text-sm text-white">Lorem Ipsum Behera</p>
                  <p className="text-sm text-white"> Portfolio 2025</p>
                </div>
                <div className="marquee-wrapper">
                  <div className="marquee text-[20px] text-white px-8">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Culpa, esse? Et animi ea repellat, quo modi quae quis
                  </div>
                </div>
              </div>
            </div>

            <div className="w-full lg:w-[50%] bg-black  h-[clamp(300px,90vh,fit-content)] rounded-2xl group overflow-hidden">
              <div className="h-[clamp(400px,70vh,550px)] w-full p-5">
                <div className="relative h-full w-full rounded-2xl overflow-hidden">
                  <div className="h-full w-full object-cover rounded-2xl transition-all duration-500 ease-in-out group-hover:scale-105 group-hover:blur-xs group-hover:cursor-pointer">
                    <Image fill src={`/images/image4.webp`} alt="" />
                  </div>
                  <div className="absolute top-1/2 left-1/2 h-52 w-96  aspect-video transform -translate-x-1/2 -translate-y-1/2 rounded-2xl opacity-0 scale-0 group-hover:opacity-100 group-hover:scale-100 group-hover:cursor-pointer transition-all duration-500 ease-in-out shadow-lg">
                    <Image fill src={`/images/image3.webp`} className="object-center object-cover" alt="" />
                  </div>
                </div>
              </div>

              <div className="px-6 py-4 w-full">
                <div className="w-full flex justify-between py-3">
                  <p className="text-sm text-white">Laxminarayan Behera</p>
                  <p className="text-sm text-white"> Portfolio 2025</p>
                </div>
                <div className="marquee-wrapper">
                  <div className="marquee text-[20px] text-white px-8">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Culpa, esse? Et animi ea repellat, quo modi quae quis
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="h-60">
        <div className="flex justify-center items-center h-full gap-2 ">
          <div className="flex justify-center items-center gap-2 hover:cursor-pointer">
            <p className="text-xl font-bold ">See all</p>
            <p>
              <FaArrowRight className="text-xl text-black" />
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Section3;
