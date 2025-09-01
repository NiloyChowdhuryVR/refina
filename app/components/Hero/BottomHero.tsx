import React from "react";
import { CiCamera } from "react-icons/ci";
import { CiShoppingTag } from "react-icons/ci";
import { AiOutlineScissor } from "react-icons/ai";
import { FiShoppingCart } from "react-icons/fi";




const BottomHero = () => {
  return (
    <div className="gap-7 lg:gap-0 py-10 lg:py-0 lg:h-45 w-[90%] flex justify-between items-center flex-col lg:flex-row">
      <div className="flex justify-center flex-col gap-3 lg:gap-0 lg:flex-row items-center h-full w-80 text-center lg:text-start">
        <CiCamera size={40} className="mr-5"/>
        <div>
          <h2 className="font-semibold font-roboto text-lg">Perfect Product Shots</h2>
          <p className="font-roboto text-sm">
            Highlight products from their best view.
          </p>
        </div>
      </div>
      <div className="flex justify-center items-center flex-col lg:flex-row gap-3 lg:gap-0 text-center lg:text-start h-full w-80">
        <CiShoppingTag size={40} className="mr-5"/>
        <div>
          <h2 className="font-semibold font-roboto text-lg">Offer-Ready Images</h2>
          <p className="font-roboto text-sm">
            Boost sales with deal-focused visuals.
          </p>
        </div>
      </div>
      <div className="flex justify-center items-center flex-col lg:flex-row gap-3 lg:gap-0 text-center lg:text-start h-full w-80">
        <AiOutlineScissor size={40} className="mr-5"/>
        <div>
          <h2 className="font-semibold font-roboto text-lg">Background Magic</h2>
          <p className="font-roboto text-sm">
           Clean, pro backgrounds in one click.
          </p>
        </div>
      </div>
      <div className="flex justify-center items-center flex-col lg:flex-row gap-3 lg:gap-0 text-center lg:text-start h-full w-80">
        <FiShoppingCart size={40} className="mr-5"/>
        <div>
          <h2 className="font-semibold font-roboto text-lg">Ad-Ready Visuals</h2>
          <p className="font-roboto text-sm">
            Instant creatives for campaigns.
          </p>
        </div>
      </div>
      
    </div>
  );
};

export default BottomHero;
