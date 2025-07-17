"use client";
export default function Footer() {
  return (
    <footer className="relative  w-full max-w-11/12 mx-auto grid grid-cols-3 gap-2 lg:gap-4 pb-6">
      <div className="absolute w-fit left-1/2 top-1/2 -translate-1/2 h-fit  flex items-center justify-center inset-0">
        <span className="lowercase text-center text-[clamp(100px,14vw,250px)] text-[#171717] font-bold ">
          {"Motion.next"}
        </span>
      </div>
      {/* WORK: col 0-2, row-span 2 */}
      <div className="relative min-h-[200px] lg:min-h-[300px] col-span-3 lg:col-span-2 row-span-2 flex items-end p-4 lg:p-6 bg-neutral-300/50 h-full backdrop-blur-sm   rounded-lg lg:rounded-xl text-[clamp(16px,1.4vw,24px)] font-medium leading-tight cursor-pointer hover:backdrop-blur-md transition-all duration-500">
        <p className="relative z-10">Work</p>
      </div>

      {/* LAB: col 2-3, row-span 2 */}
      <div className="relative col-span-3 lg:col-span-1 row-span-2 flex items-end p-4 lg:p-6 bg-neutral-300/50 h-full backdrop-blur-sm   rounded-lg lg:rounded-xl text-[clamp(16px,1.4vw,24px)] font-medium leading-tight cursor-pointer hover:backdrop-blur-md transition-all duration-500">
        <p className="relative z-10">Lab</p>
      </div>

      {/* CONTACT: 1 row, 1 col (bottom left cell) */}
      <div className="relative col-span-1 row-span-1 flex items-end p-4 lg:p-6 bg-neutral-300/50 h-full backdrop-blur-sm  rounded-lg lg:rounded-xl text-[clamp(16px,1.4vw,24px)] font-medium leading-tight cursor-pointer hover:backdrop-blur-md transition-all duration-500">
        <p className="relative z-10">Contact</p>
      </div>

      {/* INSTAGRAM: 2 rows, 1 col */}
      <div className="relative min-h-[200px] lg:min-h-[300px] col-span-1 row-span-2 flex items-end p-4 lg:p-6 bg-neutral-300/50 h-full backdrop-blur-sm  rounded-lg lg:rounded-xl text-[clamp(16px,1.4vw,24px)] font-medium leading-tight cursor-pointer hover:backdrop-blur-md transition-all duration-500">
        <p className="relative z-10">Instagram</p>
      </div>

      {/* LINKEDIN: 2 rows, 1 col */}
      <div className="relative  col-span-1 row-span-2 flex items-end p-4 lg:p-6 bg-neutral-300/50 h-full backdrop-blur-sm  rounded-lg lg:rounded-xl text-[clamp(16px,1.4vw,24px)] font-medium leading-tight cursor-pointer hover:backdrop-blur-md transition-all duration-500">
        <p className="relative z-10">LinkedIn</p>
      </div>

      {/* GITHUB: 1 row, 1 col at bottom left of 3rd row */}
      <div className="relative  col-span-1 row-span-1 flex items-end p-4 lg:p-6 bg-neutral-300/50 h-full backdrop-blur-sm  rounded-lg lg:rounded-xl text-[clamp(16px,1.4vw,24px)] font-medium leading-tight cursor-pointer hover:backdrop-blur-md transition-all duration-500">
        <p className="relative z-10">Github</p>
      </div>
    </footer>
  );
}
