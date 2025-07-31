"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { useRef } from "react";

interface AiDetailsProps {
  onScrollThreshold: (reached: boolean) => void;
}

export const AiDetails: React.FC<AiDetailsProps> = ({ onScrollThreshold }) => {
  const [showSecond, setShowSecond] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      if (scrollY > 2800) setShowSecond(true);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // ---------- Jammed effect ----------

  const containerRef = useRef<HTMLDivElement>(null);

  const handleWheel = (e: React.WheelEvent<HTMLDivElement>) => {
    // e.preventDefault();
    const container = containerRef.current;
    if (!container) return;

    const dampedScroll = e.deltaY * 0.06; // Reduce movement to 10% of scroll
    container.scrollBy({
      top: dampedScroll,
      // behavior: "smooth",
    });
  };

  //   useEffect(() => {
  //   const container = containerRef.current;
  //   if (!container) return;

  //   const handleWheel = (e: WheelEvent) => {
  //     e.preventDefault();
  //     const dampedScroll = e.deltaY * 0.06;
  //     container.scrollBy({
  //       top: dampedScroll,
  //     });
  //   };

  //   container.addEventListener("wheel", handleWheel, { passive: false });

  //   return () => {
  //     container.removeEventListener("wheel", handleWheel);
  //   };
  // }, []);

  // ------------------ component ------------------------
  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current) return;
      const scrollTop = containerRef.current.scrollTop;

      if (scrollTop >= 900) {
        onScrollThreshold(true);
      } else {
        onScrollThreshold(false);
      }
    };

    const el = containerRef.current;
    if (el) el.addEventListener("scroll", handleScroll);

    return () => {
      if (el) el.removeEventListener("scroll", handleScroll);
    };
  }, [onScrollThreshold]);

  return (
    <>
      <div className="overflow-hidden">
        <div className="flex w-screen">
          <div className="w-3/12 bg-[#fbfaf4]"></div>
          <div className="w-auto">
            <img
              src={"./transparentSquare.png"}
              width={250}
              alt="TransparentBlock"
            />
          </div>
          <div className="w-full bg-[#fbfaf4]"></div>
        </div>
        <div className="bg-[#fbfaf4] w-screen flex items-end justify-center overflow-hidden">
          <h1 className="text-6xl font-semibold">Our Core Feature</h1>
        </div>
        <div className="flex items-center justify-center w-screen h-screen overflow-hidden">
          <img
            className="w-full h-full"
            src="/rectangle_image.png"
            alt="transparent image"
          />
          <div
            className="absolute h-[38rem] overflow-auto scroll-smooth scrollbar-none"
            ref={containerRef}
            onWheel={handleWheel}
          >
            <div className="flex flex-col items-center justify-center text-[#fbfaf4] gap-2 h-[40rem]">
              <p className="flex px-2 py-1 border rounded-full w-fit">01</p>
              <h1 className="text-2xl">Text Generation</h1>
              <p className="w-[50rem] text-justify">
                A text generation model is an AI system that uses deep learning,
                typically transformer-based architectures, to predict and
                generate human-like text. It analyzes vast amounts of text data
                to learn grammar, context, and semantics, enabling it to produce
                coherent and contextually relevant responses. A common use case
                is content creation—such as in Master AI, where users can input
                prompts like Write a blog on AI, and the model generates
                complete, high-quality content automatically.
              </p>
            </div>
            {/* ---------- Second text ---------- */}
            <div className=" flex flex-col items-center text-[#fbfaf4] gap-2 h-[25rem]">
              <p className="flex px-2 py-1 border rounded-full w-fit">02</p>
              <h1 className="text-2xl">Audio Generation</h1>
              <p className="w-[50rem] text-justify">
                An audio generation model is an AI system that creates realistic
                sound or speech by analyzing patterns in existing audio data.
                Using deep learning techniques like neural networks or diffusion
                models, it learns tone, pitch, rhythm, and pronunciation to
                generate coherent audio outputs. A common use case is AI voice
                assistants or tools like Master AI, where users can convert
                written text into natural-sounding speech for podcasts,
                tutorials, or voiceovers.
              </p>
            </div>
            <div className=" flex flex-col items-center text-[#fbfaf4] gap-2 h-[25rem]">
              <p className="flex px-2 py-1 border rounded-full w-fit">03</p>
              <h1 className="text-2xl">Video Generation</h1>
              <p className="w-[50rem] text-justify">
                A video generation model is an advanced AI system that creates
                synthetic video content by learning from large datasets of
                visual and motion patterns. It combines computer vision, deep
                learning, and sometimes text or audio inputs to generate
                dynamic, realistic videos. In platforms like Master AI, it can
                be used to convert text prompts or scripts into explainer videos
                or avatar-based content, streamlining content creation for
                education, marketing, and social media.
              </p>
            </div>
            <div className=" flex flex-col items-center text-[#fbfaf4] gap-2 h-[25rem]">
              <p className="flex px-2 py-1 border rounded-full w-fit">04</p>
              <h1 className="text-2xl">Image Generation</h1>
              <p className="w-[50rem] text-justify">
                An image generation model is an AI system that creates realistic
                or artistic images from text prompts, sketches, or other inputs
                using deep learning techniques like GANs or diffusion models. It
                learns visual styles, objects, and compositions from massive
                datasets to produce original visuals. In Master AI, users can
                generate high-quality illustrations, thumbnails, or concept art
                simply by describing what they want, making design faster and
                more accessible.
              </p>
            </div>
            <div className=" flex flex-col items-center text-[#fbfaf4] gap-2 h-[25rem]">
              <p className="flex px-2 py-1 border rounded-full w-fit">05</p>
              <h1 className="text-2xl">Code Generation</h1>
              <p className="w-[50rem] text-justify">
                A code generation model is an AI system that generates
                programming code from natural language prompts or partial code
                snippets using deep learning, especially transformer
                architectures. It learns syntax, logic patterns, and best
                practices across multiple languages to produce functional and
                context-aware code. In Master AI, developers can input prompts
                like “Create a login form in React,” and the model instantly
                generates the required code, boosting productivity and reducing
                development time.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
