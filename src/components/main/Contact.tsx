import React from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Linkedin } from "lucide-react";

const Contact = () => {
  return (
    <footer className="absolute z-300 w-full h-60">
      <div className="w-full h-full flex justify-between items-center bg-background border-t border-b-secondary z-300 md:px-0 px-3">
        <div className="flex flex-col w-full align-middle items-center">
          <div className="w-fit">
            <h1
              className={` text-5xl font-bold black w-fit text-cen text-primary`}
            >
              Contact Me
            </h1>
            <div className="py-4">
              <p className="text-left">
                Interested in my work? <br />
              </p>
              <p className="text-left">
                Have an exciting opportunity? <br />
              </p>
              {/* <p className="text-right font-bold">Reach out to me!</p> */}
            </div>
            <p
              className={`text-right font-bold black text-transparent relative z-101 bg-clip-text bg-gradient-to-r from-blue-500 via-pink-500 to-blue-500`}
            >
              Reach out to me!
            </p>
          </div>
        </div>
        <div className="socials w-screen flex flex-col align-middle items-center text-left ">
          <div className="w-fit">
            <div className="flex flex-col align-middle">
              <a href="mailto:nickscottchase@proton.me">
                <Button variant={"link"}>Email</Button>
              </a>
              <Link
                target="_blank"
                href="https://www.linkedin.com/in/nicholas-chase-1109b8231/"
              >
                <Button variant={"link"}>LinkedIn</Button>
              </Link>
              <Link target="_blank" href="https://twitter.com/ChaseMcdizzle">
                <Button variant={"link"}>Twitter</Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Contact;
