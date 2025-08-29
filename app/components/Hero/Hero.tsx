import React from "react";
import BottomHero from "./BottomHero";
import UpperHeroContainer from "./UpperHeroContainer";

const Hero = () => {
  return (
    <div className="h-[calc(100vh-3.75rem)] w-full bg-[#F4F1E8] flex flex-col justify-center items-center">
      <UpperHeroContainer />
      <BottomHero />
    </div>
  );
};

export default Hero;
