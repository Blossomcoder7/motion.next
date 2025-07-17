import ScrollSlotWord from "@/components/UI/ScrollSlotWord ";
import React from "react";

const Section5 = () => {
  return (
    <>
      <div className="w-full h-fit min-h-fit flex justify-center items-center">
        <div className=" w-full text-center uppercase font-bold  text-[#171717]">
          <div className="flex items-center justify-center flex-col">
            <ScrollSlotWord word="MODERN" />
          </div>
          <div className="flex w-full items-center justify-center">
            <ScrollSlotWord word="Tech" /> <ScrollSlotWord word="Stack" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Section5;
