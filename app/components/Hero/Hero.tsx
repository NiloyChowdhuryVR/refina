import React from "react";
import BottomHero from "./BottomHero";
import UpperHeroContainer from "./UpperHeroContainer";

const Hero = () => {
  return (
    // removed justify-center below 
    <div className="h-[calc(100vh-3.75rem)] w-full bg-[#F4F1E8] flex flex-col 
     items-center overflow-x-hidden">
      <UpperHeroContainer />
      <BottomHero />
    </div>
  );
};

export default Hero;
