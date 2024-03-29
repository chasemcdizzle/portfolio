import React, { useEffect } from "react";
import { useMediaQuery } from "usehooks-ts";

import { AnimatedTooltip } from "@/components/ui/animated-tooltip";

const Skills = () => {
  const isMobile = useMediaQuery("(max-width: 768px)");

  //   useEffect(() => {
  //     if (isMobile) {
  //       collapse();
  //     } else {
  //       resetWidth();
  //     }
  //   }, [isMobile]);

  return (
    <>
      <h1
        className={`text-3xl md:text-5xl font-bold black w-fit text-primary pl-4`}
      >
        Skills
      </h1>
      {!isMobile ? (
        <div className="w-full bg-background dark:bg-grid-white/[0.2] bg-grid-black/[0.2] relative flex flex-col items-center justify-center">
          {/* Radial gradient for the container to give a faded look */}
          <div className="absolute pointer-events-none inset-0 flex items-center justify-center bg-background  [mask-image:radial-gradient(ellipse_at_center,transparent,black)]"></div>

          <div className="flex flex-row items-center justify-center py-5 w-full">
            <AnimatedTooltip items={skills} />
          </div>

          <div className="flex flex-row items-center justify-center py-5 w-full">
            <AnimatedTooltip items={skills2} />
          </div>

          <br />
        </div>
      ) : (
        <div className=" w-full bg-background   dark:bg-grid-white/[0.2] bg-grid-black/[0.2] relative flex flex-col items-center justify-center">
          {/* Radial gradient for the container to give a faded look */}
          <div className="absolute pointer-events-none inset-0 flex items-center justify-center bg-background  [mask-image:radial-gradient(ellipse_at_center,transparent,black)]"></div>

          <div className="flex flex-row items-center justify-center py-5 w-full">
            <AnimatedTooltip
              items={skills.slice(0, Math.floor(skills.length / 2) + 1)}
            />
          </div>

          <div className="flex flex-row items-center justify-center py-5 w-full">
            <AnimatedTooltip
              items={skills.slice(Math.floor(skills.length / 2) + 1)}
            />
          </div>

          <div className="flex flex-row items-center justify-center py-5 w-full">
            <AnimatedTooltip
              items={skills2.slice(0, Math.floor(skills2.length / 2))}
            />
          </div>

          <div className="flex flex-row items-center justify-center py-5 w-full">
            <AnimatedTooltip
              items={skills2.slice(Math.floor(skills2.length / 2))}
            />
          </div>

          <br />
        </div>
      )}
    </>
  );
};

const skills = [
  {
    id: 1,
    name: "CSS",
    image: "/css.png",
  },
  {
    id: 2,
    name: "Express",
    image: "/express.png",
  },
  {
    id: 3,
    name: "Framer",
    image: "/framer.png",
  },
  {
    id: 4,
    name: "GraphQL",
    image: "/graphql.png",
  },
  {
    id: 5,
    name: "JavaScript (ES6)",
    image: "/js.png",
  },
  {
    id: 6,
    name: "MongoDB",
    image: "/mongodb.png",
  },
  {
    id: 7,
    name: "MySQL",
    image: "/mysql.png",
  },
  {
    id: 8,
    name: "Next.js",
    image: "/next.png",
  },
  {
    id: 9,
    name: "Node.js",
    image: "/node-js.png",
  },
  {
    id: 10,
    name: "PostgreSQL",
    image: "/postger.png",
  },
  {
    id: 11,
    name: "Prisma ORM",
    image: "/prisma.webp",
  },
  {
    id: 12,
    name: "React.js (Hooks API)",
    image: "/react.png",
  },
  {
    id: 13,
    name: "React Native",
    image: "/ReactNative.png",
  },
  {
    id: 14,
    name: "TanStack Query (formerly React Query)",
    image: "/reactquery.png",
  },
  {
    id: 15,
    name: "Redux",
    image: "/redux.png",
  },
  {
    id: 16,
    name: "Cypress",
    image: "/cypress.jpeg",
  },
  {
    id: 17,
    name: "Tailwind CSS",
    image: "/tailwind.png",
  },
  {
    id: 18,
    name: "TypeScript",
    image: "/ts.png",
  },
  {
    id: 19,
    name: "Vercel",
    image: "/vercel.svg",
  },
];

const skills2 = [
  {
    id: 1,
    name: "C",
    image: "/c.png",
  },
  {
    id: 2,
    name: "Figma",
    image: "/figma.svg",
  },
  {
    id: 3,
    name: "C#",
    image: "/c-sharp.svg",
  },
  {
    id: 4,
    name: "Java",
    image: "/java.png",
  },
  {
    id: 5,
    name: "Python",
    image: "/python.png",
  },
  {
    id: 6,
    name: "Zustand",
    image: "/zustand.png",
  },
  {
    id: 7,
    name: "Zod",
    image: "/zod.svg",
  },
  {
    id: 8,
    name: "Joi",
    image: "/joi.png",
  },
  {
    id: 9,
    name: "Jest",
    image: "/jest.svg",
  },
  {
    id: 10,
    name: "jQuery",
    image: "/jquery.svg",
  },
  {
    id: 11,
    name: "Drizzle",
    image: "/drizzle.jpg",
  },
  {
    id: 12,
    name: "Webpack",
    image: "/webpack.svg",
  },
  {
    id: 13,
    name: "AWS",
    image: "/aws.png",
  },
  {
    id: 14,
    name: "DynamoDB",
    image: "/dynamodb.png",
  },
  {
    id: 15,
    name: "Git",
    image: "/gitwhite.png",
  },
  {
    id: 16,
    name: "Github",
    image: "/github-142-svgrepo-com.svg",
  },
  {
    id: 17,
    name: "C++",
    image: "/c++.png",
  },
  {
    id: 18,
    name: "Webhook",
    image: "/webhook.svg",
  },
];

export default Skills;
