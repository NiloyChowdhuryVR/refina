import React from "react";
import { FaCameraRetro } from "react-icons/fa";
import { BsCardImage } from "react-icons/bs";
import { GoGraph } from "react-icons/go";
import Link from "next/link";

const MainHero = () => {
  return (
    <div className="relative w-full max-w-220 h-full  border border-gray-400">
      {/* Corner accents */}
      {/* Top-left */}
      <div className="absolute top-0 left-0 w-8 h-8 border-t-4 border-l-4 border-gray-800"></div>
      {/* Top-right */}
      <div className="absolute top-0 right-0 w-8 h-8 border-t-4 border-r-4 border-gray-800"></div>
      {/* Bottom-left */}
      <div className="absolute bottom-0 left-0 w-8 h-8 border-b-4 border-l-4 border-gray-800"></div>
      {/* Bottom-right */}
      <div className="absolute bottom-0 right-0 w-8 h-8 border-b-4 border-r-4 border-gray-800"></div>

      {/* Content inside */}
      <div className="flex flex-col gap-5 pl-[5%] pt-[5%] h-full">
        <div>
          <h1 className="text-[7rem] leading-none font-bebas font-bold">
            <span className="align-middle inline-block">
              <FaCameraRetro className="w-[1em] h-[1em] inline-block mr-5" />
            </span>
            From Snapshots to Sales
          </h1>
        </div>
        <div className="flex w-[70%] text-cente gap-5">
          <div className="flex justify-center gap-4 items-center">
            <BsCardImage size={100} />
            <div>
              <h3 className="text-lg font-roboto font-semibold">Raw → Ready</h3>
              <p className="font-roboto text-md">
                Turn raw shots into store-ready images
              </p>
            </div>
          </div>
          <div className="flex justify-center items-center gap-4">
            <GoGraph size={100} />
            <div>
              <h3 className="text-lg font-roboto font-semibold">
                Customize & Sell
              </h3>
              <p className="font-roboto text-md">
                Transform, customize, and sell faster.
              </p>
            </div>
          </div>
        </div>
        <div className="flex gap-5">
          <Link
            href="/generate"
            className="bg-orange-500 text-white px-5 py-2 hover:bg-transparent border-orange-500 border-2 hover:text-orange-500 cursor-pointer text-sm font-semibold font-roboto inline-block text-center"
          >
            Get Started
          </Link>
          <button className="border-black border-2 hover:bg-black hover:text-white text-black px-5 py-2 cursor-pointer text-sm font-semibold font-roboto">
            Watch Tutorial
          </button>
        </div>
      </div>
    </div>
  );
};

export default MainHero;
