"use client";

import Logo3 from "@/public/logo3.png";
import Image from "next/image";
import Lines from "../public/Lines.svg";
import { motion } from "framer-motion";

export const Header = () => {
  return (
    <nav className="sticky flex items-center justify-between p-4 pt-4 bg-[#fbfaf4] w-screen">
      <motion.img
        src={Lines.src}
        alt="background_Image"
        className="absolute z-[9999]"
        style={{ top: "-850px", left: "250px" }}
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.5, ease: "easeOut", delay: 1.0 }}
      />

      <motion.div
        animate={{ x: ["-60px", "0px"] }}
        transition={{ duration: 1.2 }}
        className="flex items-center justify-center gap-4 font-bold"
      >
        <Image src={Logo3} width={30} alt="Logo" height={30}></Image>
        <span className="text-2xl">MasterAi</span>
      </motion.div>
      <div>
        <motion.ul
          animate={{ y: ["-60px", "0px"] }}
          transition={{ duration: 1.2 }}
          className="flex font-medium"
          style={{ gap: "20px" }}
        >
          <motion.li className="px-4 py-2 border rounded-full shadow-lg bg-[#fbfaf4]">
            Home
          </motion.li>
          <li className="px-4 py-2 border rounded-full shadow-lg bg-[#fbfaf4]">
            About
          </li>
          <li className="px-4 py-2 border rounded-full shadow-lg bg-[#fbfaf4]">
            Contact Us
          </li>
          <li className="px-4 py-2 border rounded-full shadow-lg bg-[#fbfaf4]">
            Careers
          </li>
        </motion.ul>
      </div>
      <motion.div
        animate={{ x: ["60px", "0px"] }}
        transition={{ duration: 1.2 }}
      >
        <Image width={35} height={35} alt="Logo" src={Logo3}></Image>
      </motion.div>
    </nav>
  );
};
