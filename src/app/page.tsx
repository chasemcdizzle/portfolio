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

      {/* Tracing Beam */}
      <TracingBeam className="px-6">
        <div className="flex flex-col gap-20 items-center">
          {/* <Hero /> */}
          <BackgroundBoxesDemo />
        </div>

        {/* Content */}
        <div className="flex flex-col gap-y-52">
          <div id="about" className={`md:px-32 flex flex-col gap-y-4`}>
            <AboutMe />
          </div>

          <div id={`skills`} className={`md:px-32 flex flex-col gap-y-4`}>
            <Skills />
          </div>

          <div id={`experience`} className={`md:px-32 flex flex-col gap-y-4`}>
            <Experience />
          </div>
          <div id={`education`} className={`md:px-32 flex flex-col gap-y-4`}>
            <Education />
          </div>
          <div id={`projects`} className={`px-0 flex flex-col gap-y-4`}>
            <Projects />
          </div>
          <div id={`contact`}>
            <Contact />
          </div>
          {/* <div id={`contact`} className={`px-8 flex flex-col gap-y-4`}>
            
          </div> */}
        </div>
      </TracingBeam>
    </main>
  );
}
