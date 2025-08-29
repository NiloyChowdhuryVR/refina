import React from "react";

const Navbar = () => {
  return (
    <div className="w-full h-15 bg-[#F4F1E8] flex justify-center items-center">
      <div className="w-[90%] py-3 flex justify-between items-center">
        <div className="uppercase font-semibold font-bebas tracking-widest text-2xl ">
          <h1 className="cursor-pointer">refina.</h1>
        </div>
        <div className="flex justify-center items-center gap-3">
          <p className=" cursor-pointer">Camera</p>
          <p className=" cursor-pointer">Films</p>
          <p className=" cursor-pointer">Printers</p>
          <p className=" cursor-pointer">FAQ</p>
        </div>
        <div>
            <p className="cursor-pointer">Global Links</p>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
