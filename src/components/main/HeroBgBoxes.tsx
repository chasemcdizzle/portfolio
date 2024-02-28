"use client";
import React from "react";
import { Boxes } from "../ui/background-boxes";
import { cn } from "@/lib/utils/cn";
import Image from "next/image";
import dynamic from "next/dynamic";
const Typewriter = dynamic(
  () => import("typewriter-effect"),
  { ssr: false } // This line disables server-side rendering for this component
);
import { SparklesCore } from "@/components/ui/sparkles";

export function BackgroundBoxesDemo() {
  return (
    <div className=" min-h-80 relative w-full overflow-hidden bg-transparent flex flex-col items-center justify-center">
      <div
        id="wrapper"
        className="flex flex-col items-center justify-center w-full z-30" // Increase z-index to layer above the Boxes
      >
        {/* Use a higher z-index for the image wrapper */}
        <Boxes className="z-35" /> {/* Ensure Boxes are below the image */}
        <div
          className="w-full inline-block rounded-full overflow-hidden z-40"
          style={{ width: "150px", height: "150px" }}
        >
          {/* Image should have z-index higher than the Boxes but allow pointer events */}
          <Image
            src="/portrait_cropped_upscaled_less.jpeg"
            alt="Your Name"
            width={150}
            height={150}
            quality={100}
            className="z-50 relative" // Positioned relative to allow z-index to take effect
          />
        </div>
        <h1
          className={`text-5xl md:text-7xl font-bold black text-transparent relative z-101 bg-clip-text bg-gradient-to-r from-blue-500 via-pink-500 to-blue-500 text-center w-fit`}
        >
          Nicholas Chase
        </h1>
        <div className=" text-lg md:text-xl  mt-2 relative z-20 flex flex-col md:flex-row justify-center items-baseline">
          <span className="mr-2 md:w-fit w-full text-center md:text-left">
            Is a
          </span>
          <div className="font-bold" style={{ display: "inline" }}>
            <Typewriter
              options={{
                autoStart: true,
                loop: true,
                delay: 50,
                deleteSpeed: 20,
              }}
              onInit={(typewriter) => {
                typewriter
                  .typeString("Software Developer")
                  .pauseFor(2000)
                  .deleteChars("Software Developer".length)

                  .typeString("Web Developer")
                  .pauseFor(2000)
                  .deleteChars("Web Developer".length)

                  .typeString("Mobile Developer")
                  .pauseFor(2000)
                  .deleteChars("Mobile Developer".length)

                  .typeString("Full-Stack Developer")
                  .pauseFor(2000)
                  .deleteChars("Full-Stack Developer".length)

                  .typeString("Micro-Embedded Engineer")
                  .pauseFor(2000)
                  .deleteChars("Micro-Embedded Engineer".length)

                  .typeString("Computer Engineer")
                  .pauseFor(2000)
                  .deleteChars("Computer Engineer".length)

                  .start();
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
