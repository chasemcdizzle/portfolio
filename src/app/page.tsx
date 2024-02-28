"use client";
import React, { useRef } from "react";
import Image from "next/image";
import Hero from "@/components/main/Hero";
import { BackgroundBoxesDemo } from "@/components/main/HeroBgBoxes";
import { TracingBeam } from "@/components/ui/tracing-beam";
import { NavBar } from "@/components/ui/NavBar";
import Skills from "@/components/main/Skills";
import Experience from "@/components/main/Experience";

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
        <div className="flex flex-col gap-y-8 px-32">
          {/* <h1
          className={` text-7xl font-bold black text-transparent bg-clip-text bg-gradient-to-r from-blue-500 via-pink-500 to-blue-500 text-center w-fit`}
        >
          Nicholas <span className="block">Chase</span>
        </h1> */}

          <div
            id="about"
            ref={aboutRef}
            className={`px-8 flex flex-col gap-y-4 h-80`}
          >
            <h1
              className={` text-5xl font-bold black w-fit text-center text-primary pl-4`}
            >
              About Me
            </h1>
            <p>
              I am a passionate San Diego based software engineer who has worn
              many hats after nearly a decade as a professional programmer. I
              have filled roles such as Front End Web Developer, Back End Web
              Developer, React Native Cross-Platform Mobile Developer, Android
              Developer, Micro Embedded Developer, and Cloud Architect. In my
              free time I can be found coding personal projects, reverse
              engineering software, producing electronic music, skateboarding,
              and attending live music events.
            </p>
          </div>

          <div id={`skills`} className={`px-8 flex flex-col gap-y-4 h-80`}>
            <Skills />
          </div>

          <div id={`experience`} className={`px-8 flex flex-col gap-y-4 h-80`}>
            <Experience />
          </div>
          <div id={`education`} className={`px-8 flex flex-col gap-y-4`}>
            <h1
              className={` text-5xl font-bold black w-fit text-cen text-primary pl-4`}
            >
              {/* !!!!!!!! PUT MOVING BORDER AROUND THIS ONE? https://ui.aceternity.com/components/moving-border */}
              Education
            </h1>
          </div>
          <div id={`projects`} className={`px-8 flex flex-col gap-y-4`}>
            <h1
              className={` text-5xl font-bold black w-fit text-cen text-primary pl-4`}
            >
              Projects
            </h1>
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
