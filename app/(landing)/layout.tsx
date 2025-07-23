"use client"; // Ensure this is at the very top

import React from "react";
import dynamic from "next/dynamic";

const ReactPlayer = dynamic(() => import("react-player/lazy"), { ssr: false });

const image = [
  {
    image:
      "https://static.vecteezy.com/system/resources/previews/017/744/080/non_2x/blue-artificial-intelligence-technology-background-hd-free-photo.jpg",
    image2: "https://img.pikbest.com/origin/09/28/35/25KpIkbEsTf4R.jpg!w700wp",
  },
];

const LandingLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <main className="h-auto overflow-x-hidden">
      <div className="h-auto mx-auto">{children}</div>
    </main>
  );
};

export default LandingLayout;
