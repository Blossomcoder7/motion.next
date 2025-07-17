"use client";
import CountUp from "../counters/Counter";

const Loader = () => {
  return (
    <div className="flex w-full fixed inset-0 top-0 left-0 z-[999999] h-screen bg-[#171717] items-center justify-center min-h-screen">
      <CountUp
        className="text-6xl text-white"
        from={0}
        to={99}
        direction="up"
      />
    </div>
  );
};

export default Loader;
