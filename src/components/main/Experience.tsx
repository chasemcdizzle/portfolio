import React from "react";
import { SparklesCore } from "@/components/ui/sparkles";
import { Meteors } from "@/components/ui/meteors";

const Experience = () => {
  return (
    <>
      <h1
        className={` text-5xl font-bold black w-fit text-cen text-primary pl-4`}
      >
        Experience
      </h1>
      <div className="flex h-full items-center align-middle justify-between px-6 py-1 gap-x-6">
        <div className="h-full relative max-w-xs min-w-[260px] w-[260px]">
          <div className="absolute inset-0 h-full w-full bg-gradient-to-r from-blue-500 to-teal-500 transform scale-[0.80] bg-red-500 rounded-full blur-3xl" />
          <div className="relative shadow-xl bg-secondary border border-gray-800  px-4 py-8 h-full overflow-hidden rounded-2xl flex flex-col justify-end items-start">
            <div className="h-5 w-5 rounded-full border flex items-center justify-center mb-4 border-gray-500">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="h-2 w-2 text-slate-500"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4.5 4.5l15 15m0 0V8.25m0 11.25H8.25"
                />
              </svg>
            </div>
            <div className="w-full text-right">
              <h1 className="font-bold text-xl  mb-4 relative z-50">
                Senior Software Engineer
              </h1>

              <p className="mb-4 relative z-50">XCSpec · Full-time</p>

              <p className="font-normal text-base text-slate-500 mb-4 relative z-50">
                Sep 2015 - Present
              </p>
            </div>

            {/* Meaty part - Meteor effect */}
            <Meteors number={20} />
          </div>
        </div>
        <div className="h-full relative max-w-xs min-w-[260px] w-[260px]">
          <div className="absolute inset-0 h-full w-full bg-gradient-to-r from-blue-500 to-teal-500 transform scale-[0.80] bg-red-500 rounded-full blur-3xl" />
          <div className="relative shadow-xl bg-secondary border border-gray-800  px-4 py-8 h-full overflow-hidden rounded-2xl flex flex-col justify-end items-start">
            <div className="h-5 w-5 rounded-full border flex items-center justify-center mb-4 border-gray-500">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="h-2 w-2 text-slate-500"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4.5 4.5l15 15m0 0V8.25m0 11.25H8.25"
                />
              </svg>
            </div>
            <div className="w-full text-right">
              <h1 className="font-bold text-xl mb-4 relative z-50">
                Front-End Software Engineer
              </h1>

              <p className="mb-4 relative z-50">Evensale · Part-time</p>

              <p className="font-normal text-base text-slate-500 mb-4 relative z-50">
                Jun 2012 - Aug 2012
              </p>
            </div>

            {/* Meaty part - Meteor effect */}
            <Meteors number={20} />
          </div>
        </div>
      </div>
    </>
  );
};

export default Experience;
