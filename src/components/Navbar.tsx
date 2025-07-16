
import React  from "react";

const Navbar = () => {

  return (
    <>
      <div className="relative bg-white flex top-nav-bar flex-wrap w-full justify-between py-5 gap-4  text-sm md:text-base">
        <div>
          <p className="font-semibold">US Based</p>
          <p className="font-semibold text-black/35">Working globally</p>
        </div>
        <div className="hidden sm:inline-flex flex-col">
          <p className="font-semibold">Building at</p>
          <p className="font-semibold text-black/35">TrackStack</p>
        </div>
        <div className="hidden sm:inline-flex flex-col">
          <p className="font-semibold">Freelance availability</p>
          <p className="font-semibold text-black/35">July 4, 2025</p>
        </div>
        <div className="bg-black/90 text-white flex justify-center items-center px-6 rounded-full font-bold py-3 cursor-pointer">
          Get in touch
        </div>
      </div>
    </>
  );
};

export default Navbar;
