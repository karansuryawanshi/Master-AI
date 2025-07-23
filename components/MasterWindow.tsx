"use client";
// import image from "@/public/one_coverImage.avif"
import { useScroll, useTransform } from "framer-motion";
import { useEffect, useState, useRef } from "react";
import { motion } from "framer-motion";

export const MasterWindow = () => {
  const ref = useRef(null);
  const { scrollY } = useScroll();

  useEffect(() => {
    const unsubscribe = scrollY.on("change", (latest) => {
      console.log("Scroll Y:", latest);
    });

    return () => unsubscribe();
  }, [scrollY]);

  const imageHeight = useTransform(
    scrollY,
    [650, 1200, 1650, 1950],
    ["10rem", "30rem", "30rem", "10rem"]
  );
  const imageWidth = useTransform(
    scrollY,
    [650, 1200, 1650, 1950],
    ["100%", "200vw", "100vh", "50rem"]
  );
  const sideHeight = useTransform(scrollY, [650, 1200], ["32rem", "130rem"]);

  const sideWidth = useTransform(
    scrollY,
    [650, 1200, 1650, 1950],
    ["35rem", "0rem", "0rem", "100rem"]
  );

  const scale = useTransform(scrollY, [650, 1200, 1850, 2250], [2, 2, 2, 1]);

  const topHeight = useTransform(scrollY, [650, 1200], ["14rem", "0rem"]);
  const BottomHeight = useTransform(
    scrollY,
    [650, 1200, 1650, 1950],
    ["100rem", "0rem", "0rem", "5rem"]
  );
  const opacity = useTransform(scrollY, [1150, 1250, 1600], [0, 1, 1]);
  const x = useTransform(scrollY, [1250, 1350, 1600, 1700], [400, 0, 0, 400]);
  const width = useTransform(
    scrollY,
    [1150, 1250, 1500],
    ["100vh", "100vh", "0vh"]
  );

  const windowHeader = useTransform(scrollY, [1735, 2050], ["2rem", "100rem"]);

  const pointerEvents = useTransform(scrollY, [1500, 1600], ["none", "auto"]);

  const visibility = useTransform(scrollY, [2000, 2038], ["hidden", "visible"]);

  return (
    <>
      <div className="w-full min-h-screen overflow-x-hidden">
        <motion.div
          style={{ height: topHeight }}
          className="w-full bg-[#fbfaf4]"
        />

        <div className="flex items-start justify-between">
          <motion.div
            style={{
              height: sideHeight,
              width: sideWidth,
            }}
            className="bg-[#fbfaf4] w-[25rem]"
          >
            <motion.div
              className="flex items-end justify-end mt-[95rem] absolute"
              style={{ left: "-25rem", visibility }}
              whileInView={{ opacity: [0, 1], x: [50, 0] }}
              // animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1.5, ease: "easeOut", delay: 1.0 }}
            >
              <svg
                width="600"
                height="600"
                viewBox="0 0 300 300"
                xmlns="http://www.w3.org/2000/svg"
              >
                <defs>
                  <linearGradient
                    id="movingGradient"
                    x1="0%"
                    y1="0%"
                    x2="100%"
                    y2="0%"
                  >
                    <stop offset="0%" stop-color="white" stop-opacity="0.3" />
                    <stop offset="100%" stop-color="#00d4ff" />
                  </linearGradient>

                  <g id="rotatingStroke">
                    <circle
                      cx="150"
                      cy="150"
                      r="140"
                      fill="none"
                      stroke="url(#movingGradient)"
                      stroke-width="1"
                      stroke-linecap="round"
                    />
                  </g>
                </defs>

                <use href="#rotatingStroke">
                  <animateTransform
                    attributeName="transform"
                    type="rotate"
                    from="0 150 150"
                    to="360 150 150"
                    dur="4s"
                    repeatCount="indefinite"
                  />
                </use>
              </svg>
            </motion.div>
          </motion.div>

          <motion.div
            id="one_image"
            style={{
              height: imageHeight,
              width: imageWidth,
            }}
            className="relative"
          >
            <motion.div
              className="bg-[#fbfaf4]"
              style={{ height: windowHeader }}
            ></motion.div>
            <motion.div
              style={{ width: width }}
              className="w-screen h-screen overflow-hidden rounded-lg"
            >
              <motion.div
                className="fixed p-4 -translate-x-1/2 -translate-y-1/2 w-96 pl-6 h-[40rem]  bg-[#091717] rounded-xl left-[74%] top-[2rem] text-[#fbfaf4] overflow-y-auto scroll-smooth scrollbar-none"
                style={{ opacity, x }}
              >
                <h1 className="text-xl text-[#fbfaf4]">Summary</h1>

                <motion.div
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  transition={{ duration: 1 }}
                  className="flex flex-col items-center justify-center gap-6 mb-4"
                >
                  <img width={200} src="/logo3.png" alt="" />
                  <h1 className="text-4xl font-semibold">Master AI</h1>
                </motion.div>

                <div className="pr-2 space-y-4">
                  <p className="text-justify">
                    Master-AI is a full-stack web application designed to bring
                    together multiple AI capabilities—such as text generation,
                    image creation, code assistance, audio processing, and even
                    video generation—into a single, unified platform. The core
                    idea behind building this project is to simplify complex
                    tasks and help users solve anything creatively and
                    efficiently without needing to switch between different AI
                    tools or websites. Instead of relying on multiple
                    applications like ChatGPT for text, DALL·E for images, or
                    other code generators, Master-AI integrates all these
                    features into one interface, making it seamless and more
                    productive for users.
                  </p>
                  <p className="text-justify">
                    The platform is built using modern web technologies like
                    Next.js 13 for the frontend, Tailwind CSS for responsive
                    design, Prisma for database management, and Stripe for
                    handling subscriptions. Users can access basic features for
                    free, while advanced functionality is available through a
                    premium plan. Once a user logs in, they can interact with
                    various AI modules by entering prompts and receiving smart,
                    instant outputs tailored to their needs. Whether it’s
                    generating marketing content, creating code snippets,
                    designing images, or editing audio, the platform is
                    structured to make these complex tasks approachable for
                    anyone, all from a single dashboard.
                  </p>
                </div>
              </motion.div>
            </motion.div>
          </motion.div>

          <motion.div
            style={{
              height: sideHeight,
              width: sideWidth,
            }}
            className="bg-[#fbfaf4] w-[25rem]"
          >
            <motion.div
              className="flex items-end justify-end mt-[95rem] absolute"
              style={{ right: "-21rem", visibility }}
              whileInView={{ opacity: [0, 1], x: [-50, 0] }}
              // animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1.5, ease: "easeOut", delay: 1.0 }}
            >
              <svg
                width="600"
                height="600"
                viewBox="0 0 300 300"
                xmlns="http://www.w3.org/2000/svg"
              >
                <defs>
                  <linearGradient
                    id="pinkGradient"
                    x1="0%"
                    y1="0%"
                    x2="100%"
                    y2="0%"
                  >
                    <stop offset="0%" stop-color="#ff6b81" />
                    <stop
                      offset="100%"
                      stop-color="#ffffff"
                      stop-opacity="0.1"
                    />
                  </linearGradient>
                </defs>

                <g>
                  <circle
                    cx="150"
                    cy="150"
                    r="140"
                    fill="none"
                    stroke="url(#pinkGradient)"
                    stroke-width="1"
                    stroke-linecap="round"
                  >
                    <animateTransform
                      attributeName="transform"
                      type="rotate"
                      from="0 150 150"
                      to="360 150 150"
                      dur="4s"
                      repeatCount="indefinite"
                    />
                  </circle>
                </g>
              </svg>
            </motion.div>
          </motion.div>
        </div>

        <motion.div
          style={{ height: BottomHeight }}
          className="w-full bg-[#fbfaf4] sticky b-0 l-0"
        />
      </div>
    </>
  );
};
