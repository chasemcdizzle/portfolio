"use client";
import React, { useRef } from "react";
import Image from "next/image";
import Hero from "@/components/main/Hero";
import { BackgroundBoxesDemo } from "@/components/main/HeroBgBoxes";
import { TracingBeam } from "@/components/ui/tracing-beam";
import { NavBar } from "@/components/ui/NavBar";
import AboutMe from "@/components/main/AboutMe";
import Skills from "@/components/main/Skills";
import Experience from "@/components/main/Experience";
import Education from "@/components/main/Education";
import Projects from "@/components/main/Projects";

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
      <TracingBeam className="px-6">
        <div className="flex flex-col gap-20 items-center">
          {/* <Hero /> */}
          <BackgroundBoxesDemo />
        </div>

        {/* Content */}
        <div className="flex flex-col gap-y-8">
          {/* <h1
          className={` text-7xl font-bold black text-transparent bg-clip-text bg-gradient-to-r from-blue-500 via-pink-500 to-blue-500 text-center w-fit`}
        >
          Nicholas <span className="block">Chase</span>
        </h1> */}

          <div id="about" className={`px-8 flex flex-col gap-y-4 h-80`}>
            <AboutMe />
          </div>

          <div id={`skills`} className={`px-8 flex flex-col gap-y-4 h-80`}>
            <Skills />
          </div>

          <div id={`experience`} className={`px-8 flex flex-col gap-y-4`}>
            <Experience />
          </div>
          <div id={`education`} className={`px-8 flex flex-col gap-y-4`}>
            <Education />
          </div>
          <div id={`projects`} className={`px-8 flex flex-col gap-y-4`}>
            <Projects />
          </div>
          <div id={`contact`} className={`px-8 flex flex-col gap-y-4`}>
            <h1
              className={` text-5xl font-bold black w-fit text-cen text-primary pl-4`}
            >
              Contact
            </h1>
          </div>
        </div>
      </TracingBeam>
    </main>
  );
}
