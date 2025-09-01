import Image from "next/image";
import React from "react";
import { IoArrowRedoSharp } from "react-icons/io5";

const SideHero = () => {
  return (
    <div className="h-full w-full hidden lg:block flex-1 border-y border-gray-400">
      <div className="flex justify-center h-[20%] ">
        <div className="w-[80%] flex justify-center items-center flex-col h-full">

        <h2 className="font-bebas tracking-wider text-center text-[1.3vw] font-semibold">Sell 3x Faster with Professional-Grade Images</h2>
        <p className="text-center text-[0.8vw] font-roboto">
          Captivate shoppers instantly with crystal-clear, scroll-stopping visuals designed to convert.
        </p>
        </div>
      </div>
      <div className="w-full relative bg-[#F9CE7D] h-[65%]">
        {/* <div className="rotate-170 absolute top-[60%] right-[35%] text-[#F4F1E8]">
          <IoArrowRedoSharp className="text-[10vw]" />
        </div> */}
        {/* <Image
          className="absolute z-1 top-[3%] right-[18%] -rotate-10 hover:scale-103 transition-all"
          src={"/heroBefore.png"}
          height={20}
          width={90}
          alt="before"
        /> */}
        <Image
          src={"/heroTrans1.png"}
          className="absolute origin-center top-1/2 left-1/2 -translate-1/2 rotate-20 hover:scale-102 transition-all w-[76%]"
          width={350}
          height={10}
          alt="Hero"
        />
      </div>
      <div className="w-full flex justify-center items-center h-[15%]">
        <div className="w-[80%] ">
        <h2 className="text-center font-semibold font-bebas text-[1.2vw] tracking-wider">Trusted by Professionals Worldwide</h2>
        </div>
      </div>
    </div>
  );
};

export default SideHero;
