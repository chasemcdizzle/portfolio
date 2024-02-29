"use client";
import React, { useRef } from "react";
import Image from "next/image";
import Hero from "@/components/main/Hero";
import { HeroBgBoxes } from "@/components/main/HeroBgBoxes";
import { TracingBeam } from "@/components/ui/tracing-beam";
import { NavBar } from "@/components/ui/NavBar";
import AboutMe from "@/components/main/AboutMe";
import Skills from "@/components/main/Skills";
import Experience from "@/components/main/Experience";
import Education from "@/components/main/Education";
import Projects from "@/components/main/Projects";
import Contact from "@/components/main/Contact";

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
      {/* NavBar */}
      <NavBar onNavigate={handleNavigate} />
      <div className="w-full flex flex-col bg-background  dark:bg-grid-small-white/[0.2] bg-grid-small-black/[0.2] relative items-center justify-center">
        {/* Radial gradient for the container to give a faded look */}
        {/* <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-background bg-white [mask-image:radial-gradient(ellipse_at_center,transparent,black)]"></div> */}

        {/* Tracing Beam */}
        <TracingBeam className="px-6">
          <div className="flex flex-col gap-20 items-center">
            {/* <Hero /> */}
            <HeroBgBoxes />
          </div>

          {/* Content */}
          <div className="flex flex-col gap-y-52">
            <div id="about" className={`md:px-32 px-3 flex flex-col gap-y-4`}>
              <AboutMe />
            </div>

            <div
              id={`skills`}
              className={`md:px-32 px-3 flex flex-col gap-y-4`}
            >
              <Skills />
            </div>

            <div
              id={`experience`}
              className={`md:px-32 px-3 flex flex-col gap-y-4`}
            >
              <Experience />
            </div>
            <div
              id={`education`}
              className={`md:px-32 px-3 flex flex-col gap-y-4`}
            >
              <Education />
            </div>
            <div id={`projects`} className={`px-0 flex flex-col`}>
              <Projects />
            </div>
          </div>
        </TracingBeam>
      </div>
      <div id={`contact`}>
        <Contact />
      </div>
    </main>
  );
}
