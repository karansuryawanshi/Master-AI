"use client";

import Logo3 from "@/public/logo3.png";
import Image from "next/image";
import Lines from "../public/Lines.svg";
import { motion } from "framer-motion";
import { Sparkles } from "lucide-react";

// import oneCoverImage from "@/public/one_coverImage.avif";

export const Banner = () => {
  return (
    <>
      <div className="flex">
        {/* Left Half of Image */}
        <motion.div className="w-[650px] h-[500px] overflow-hidden">
          <img
            src="/one_coverImage.avif"
            alt="Left Half"
            width={900}
            height={100}
            className="object-cover object-right w-[1100px] h-[500px]"
          />
        </motion.div>

        {/* Center Text */}
        <motion.div className="flex flex-col gap-10 items-center justify-center bg-[#fbfaf4] w-[2000px] h-[500px]">
          <motion.h1
            // initial={{ scale: 1, opacity: 0.1 }}
            animate={{ scale: 1, opacity: [0, 1, 0.3, 1] }}
            transition={{ duration: 2.0 }}
            className="text-4xl font-semibold text-center"
          >
            Unlock power of AI to create images, audio, video, chatbots, and
            code
          </motion.h1>
          <div className="p-1 border rounded-full">
            <div className="p-1 border rounded-full">
              <div className="p-1 border rounded-full">
                <motion.button
                  whileHover="hover"
                  initial="rest"
                  animate="rest"
                  className="flex items-center gap-6 px-6 py-3 overflow-hidden text-lg font-normal text-white bg-black border rounded-full"
                >
                  <Sparkles
                    width={35}
                    height={35}
                    className="p-1 text-black bg-white border rounded-full"
                  />
                  <div className="relative h-[28px] overflow-hidden">
                    <motion.div
                      variants={{
                        rest: { y: 0 },
                        hover: { y: "-50%" },
                      }}
                      transition={{ duration: 0.2, ease: "easeOut" }}
                      className="flex flex-col"
                    >
                      <p>Get Started</p>
                      <p>Get Started</p> {/* Your hover text */}
                    </motion.div>
                  </div>
                </motion.button>
              </div>
            </div>
          </div>
        </motion.div>

        <div className="w-[650px] h-[500px] overflow-hidden">
          <motion.img
            src="/two_coverImage.avif"
            alt="Right Half"
            width={900}
            height={100}
            className="object-cover object-left w-[1100px] h-[500px]"
          />
        </div>
      </div>
    </>
  );
};
