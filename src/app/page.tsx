"use client";
import React, { useRef } from "react";
import Image from "next/image";
import Hero from "@/components/main/Hero";
import { BackgroundBoxesDemo } from "@/components/main/HeroBgBoxes";
import { NavBar } from "@/components/ui/NavBar";

export default function Home() {
  const aboutRef = useRef<HTMLDivElement | null>(null);

  const handleNavigate = (section: string) => {
    if (section === "about") {
      aboutRef?.current?.scrollIntoView({ behavior: "smooth" });
    }
    // Add more cases for other sections if needed
  };

  return (
    <main className="h-full w-screen">
      <NavBar onNavigate={handleNavigate} />
      <div className="flex flex-col gap-20 items-center">
        {/* <Hero /> */}
        <BackgroundBoxesDemo />
      </div>

      {/* Content */}
      <div className="flex flex-col gap-y-20 items-center px-20">
        {/* <h1
          className={` text-7xl font-bold black text-transparent bg-clip-text bg-gradient-to-r from-blue-500 via-pink-500 to-blue-500 text-center w-fit`}
        >
          Nicholas <span className="block">Chase</span>
        </h1> */}

        <div id="about" ref={aboutRef} className={`items-center`}>
          <h1
            className={` text-7xl font-bold black text-transparent w-fit text-center text-white`}
          >
            About <span className="block">Me</span>
          </h1>
        </div>

        <div id={`skills`} ref={aboutRef} className={`items-center`}>
          <h1
            className={` text-7xl font-bold black text-transparent w-fit text-center text-white`}
          >
            Skills
          </h1>
        </div>
        <div id={`experience`} ref={aboutRef} className={`items-center`}>
          <h1
            className={` text-7xl font-bold black text-transparent w-fit text-center text-white`}
          >
            Experience
          </h1>
        </div>
        <div id={`education`} ref={aboutRef} className={`items-center`}>
          <h1
            className={` text-7xl font-bold black text-transparent w-fit text-center text-white`}
          >
            Education
          </h1>
        </div>
        <div id={`projects`} ref={aboutRef} className={`items-center`}>
          <h1
            className={` text-7xl font-bold black text-transparent w-fit text-center text-white`}
          >
            Projects
          </h1>
        </div>
        <div id={`contact`} ref={aboutRef} className={`items-center`}>
          <h1
            className={` text-7xl font-bold black text-transparent w-fit text-center text-white`}
          >
            Contact
          </h1>
        </div>
      </div>

      {/* Nicholas Chase Portfolio */}
    </main>
  );
}
