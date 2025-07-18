import Character from "@/components/UI/Character";
import React from "react";

const Section5 = () => {
  return (
    <>
      <div className="w-full h-[clamp(500px,80vh,800px)] min-h-fit flex justify-center items-center">
        <div className=" w-full text-center uppercase font-bold  text-[#171717]">
          <div className="flex items-center justify-center flex-col">
            <span className="flex items-center justify-center min-h-fit h-fit">
              {"MODERN"?.split("")?.map((a, idx) => (
                <Character key={idx} index={idx}>
                  {a}
                </Character>
              ))}
            </span>
          </div>
          <div className="flex w-full items-center justify-center gap-8">
            <span className="flex items-center justify-center min-h-fit h-fit">
              {"Tech"?.split("")?.map((a, idx) => (
                <Character key={idx} index={idx}>
                  {a}
                </Character>
              ))}
            </span>
            <span className="flex items-center justify-center min-h-fit h-fit">
              {"Stack"?.split("")?.map((a, idx) => (
                <Character key={idx} index={idx}>
                  {a}
                </Character>
              ))}
            </span>
          </div>
        </div>
      </div>
    </>
  );
};

export default Section5;
