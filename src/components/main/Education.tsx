import React from "react";
import Image from "next/image";
import { Spotlight } from "@/components/ui/Spotlight";
import { CardBody, CardContainer, CardItem } from "@/components/ui/3d-card";

const Education = () => {
  return (
    <>
      <div className="flex flex-col">
        <h1
          className={`text-3xl md:text-5xl font-bold black w-fit text-cen text-primary pl-4`}
        >
          {/* !!!!!!!! PUT MOVING BORDER AROUND THIS ONE? https://ui.aceternity.com/components/moving-border */}
          Education
        </h1>
        <Spotlight
          className="-top-40 left-0 md:left-60 md:-top-20"
          fill="white"
        />
        <CardContainer className="inter-var">
          <CardBody className="bg-gray-50 relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[30rem] h-auto rounded-xl p-6 border  ">
            <CardItem
              translateZ="50"
              className="text-xl font-bold text-neutral-600 dark:text-white"
            >
              University of California, Santa Cruz
            </CardItem>
            <CardItem
              as="p"
              translateZ="60"
              className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300"
            >
              Bachelor of Science - BS, Computer Engineering
            </CardItem>
            <CardItem
              translateZ="100"
              rotateX={20}
              rotateZ={-10}
              className="mt-10 w-full"
            >
              <Image
                src="/ucsc.jpg"
                height="1000"
                width="1000"
                className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"
                alt="thumbnail"
              />
            </CardItem>
            <div className="flex mt-5 w-full">
              <CardItem
                translateZ="100"
                translateY="10"
                rotateX={-20}
                rotateY={-20}
                rotateZ={-10}
                className="px-4 py-2 rounded-xl text-xs font-normal dark:text-white text-right"
              >
                <div className="w-full">Sep 2011 - Dec 2015</div>
              </CardItem>
            </div>
          </CardBody>
        </CardContainer>
        {/* <p>UC Santa Cruz</p> */}
      </div>
    </>
  );
};

export default Education;
