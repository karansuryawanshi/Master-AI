"use client";

import { useRef } from "react";
import { useState, useEffect } from "react";
import { Header } from "@/components/Header";
import { Banner } from "@/components/Banner";
import { MasterWindow } from "@/components/MasterWindow";
import { motion, AnimatePresence } from "framer-motion";
import { Footer } from "@/components/Footer";

import { AiDetails } from "@/components/AiDetails";

const LandingPage = () => {
  const [changeImage, setChangeImage] = useState<boolean>(false);
  console.log("changeImage");

  return (
    <div className="relative">
      <AnimatePresence mode="wait">
        <motion.video
          key={changeImage ? "new" : "default"}
          initial={{ opacity: 0.5 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
          src={changeImage ? "/Bg2-Image.mp4" : "/Bg-Image.mp4"}
          autoPlay
          loop
          muted
          playsInline
          className="fixed top-0 left-0 z-[-10] object-cover w-screen h-screen"
        />
      </AnimatePresence>

      <div className="relative z-[999] t-0 l-0 w-screen">
        <Header></Header>
        <Banner></Banner>
        <MasterWindow></MasterWindow>
        <AiDetails onScrollThreshold={setChangeImage} />
        <Footer></Footer>
      </div>
    </div>
  );
};
export default LandingPage;
