"use client";
import Image from "next/image";
import { Button } from "@/components/ui/button"; // optional if using shadcn or custom button
import { Download } from "lucide-react";
// import footerImage from ""
import "../app/globals.css";

export const Footer = () => {
  return (
    <>
      <div className="z-[99] w-screen h-screen flex flex-col gap-2 items-center justify-center absolute ">
        <p className="text-[#fbfaf4] text-4xl">Get Started With Master AI</p>
        <button className="px-4 py-2 border-[#fbfaf4] bg-[#fbfaf4] rounded-lg">
          Get Started
        </button>
      </div>
      <div className="relative flex w-screen h-screen bg-white/10">
        <img
          className="relative w-full h-full"
          style={{ objectFit: "cover" }}
          src="./footer_Image.avif"
          alt="Image"
        />
        {/* <img
          className="relative w-full h-full"
          src="./transparentSquare.png"
          alt="Image"
        />
        <img
          className="relative w-full h-full"
          src="./transparentSquare.png"
          alt="Image"
        /> */}
      </div>
    </>
  );
};
