import Image from "next/image";
import React from "react";
import { IoArrowRedoSharp } from "react-icons/io5";

const SideHero = () => {
  return (
    <div className="h-full w-full flex-1 border-y border-gray-400">
      <div className="flex justify-center h-[20%] ">
        <div className="w-[80%] flex justify-center items-center flex-col h-full">

        <h2 className="font-bebas tracking-wider text-xl font-semibold">Sell 3x Faster with Professional-Grade Images</h2>
        <p className="text-center text-sm font-roboto">
          Captivate shoppers instantly with crystal-clear, scroll-stopping visuals designed to convert.
        </p>
        </div>
      </div>
      <div className="w-full relative bg-[#F9CE7D] h-[65%]">
        <div className="rotate-180 absolute top-35 right-30 text-[#F4F1E8]">
          <IoArrowRedoSharp size={150}/>
        </div>
        <Image
          className="absolute z-1 top-3 right-20 -rotate-10 hover:scale-110 transition-all"
          src={"/heroBefore.png"}
          height={20}
          width={90}
          alt="before"
        />
        <Image
          src={"/heroTrans1.png"}
          className="absolute -top-6 -left-30 rotate-20 hover:scale-110 transition-all"
          width={380}
          height={10}
          alt="Hero"
        />
      </div>
      <div className="w-full flex justify-center items-center h-[15%]">
        <div className="w-[80%] ">
        <h2 className="text-center font-semibold font-bebas text-2xl tracking-wider">Trusted by Professionals Worldwide</h2>
        </div>
      </div>
    </div>
  );
};

export default SideHero;
