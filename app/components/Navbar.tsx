"use client"
import { SignedIn, SignedOut, UserButton } from "@clerk/nextjs";
import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <div className="w-full h-15 bg-[#F4F1E8] flex justify-center items-center">
      <div className="w-[90%] py-3 flex justify-between items-center">
        <div className="uppercase font-semibold font-bebas tracking-widest text-2xl ">
          <Link href={"/"} className="cursor-pointer">refina.</Link>
        </div>
        <div className="hidden lg:flex justify-center items-center gap-3">
          <p className=" cursor-pointer">Camera</p>
          <p className=" cursor-pointer">Films</p>
          <p className=" cursor-pointer">Printers</p>
          <p className=" cursor-pointer">FAQ</p>
        </div>
        <div>
          <div className="cursor-pointer">
            <SignedIn>
              <UserButton showName/>
            </SignedIn>
            <SignedOut>
              <Link href={"/sign-in"}>
                <button className="cursor-pointer bg-black w-25 h-8 text-white">
                  Sign In
                </button>
              </Link>
            </SignedOut>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
