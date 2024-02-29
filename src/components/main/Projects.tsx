"use client";
import React from "react";
import { HeroParallax } from "../ui/hero-parallax";

function Projects() {
  return (
    <>
      {/* <h1
        className={` text-5xl font-bold black w-fit text-cen text-primary pl-4`}
      >
        Projects
      </h1> */}
      <HeroParallax products={products} />
    </>
  );
}
export const products = [
  // AQ Installers App
  {
    title: "AQ Installer's App",
    link: "https://gomoonbeam.com",
    thumbnail: "/AQ-Installers-App/2.png",
  },
  {
    title: "AQ Installer's App",
    link: "https://gomoonbeam.com",
    thumbnail: "/AQ-Installers-App/3.png",
  },
  {
    title: "AQ Installer's App",
    link: "https://gomoonbeam.com",
    thumbnail: "/AQ-Installers-App/4.png",
  },

  {
    title: "AQ Installer's App",
    link: "https://gomoonbeam.com",
    thumbnail: "/AQ-Installers-App/5.png",
  },
  {
    title: "AQ Installer's App",
    link: "https://gomoonbeam.com",
    thumbnail: "/AQ-Installers-App/6.png",
  },

  // ticketz

  {
    title: "Ticketz",
    link: "https://app.pixelperfect.quest",
    thumbnail: "/ticketz/5.png",
  },
  {
    title: "Ticketz",
    link: "https://app.pixelperfect.quest",
    thumbnail: "/ticketz/2.png",
  },
  {
    title: "Ticketz",
    link: "https://app.pixelperfect.quest",
    thumbnail: "/ticketz/1.png",
  },
  {
    title: "Ticketz",
    link: "https://app.pixelperfect.quest",
    thumbnail: "/ticketz/4.png",
  },

  {
    title: "Ticketz",
    link: "https://app.pixelperfect.quest",
    thumbnail: "/ticketz/3.png",
  },

  //
  {
    title: "Renderwork Studio",
    link: "https://renderwork.studio",
    thumbnail:
      "https://aceternity.com/images/products/thumbnails/new/renderwork.png",
  },

  {
    title: "Creme Digital",
    link: "https://cremedigital.com",
    thumbnail:
      "https://aceternity.com/images/products/thumbnails/new/cremedigital.png",
  },
  {
    title: "Golden Bells Academy",
    link: "https://goldenbellsacademy.com",
    thumbnail:
      "https://aceternity.com/images/products/thumbnails/new/goldenbellsacademy.png",
  },
  {
    title: "Invoker Labs",
    link: "https://invoker.lol",
    thumbnail:
      "https://aceternity.com/images/products/thumbnails/new/invoker.png",
  },
  {
    title: "E Free Invoice",
    link: "https://efreeinvoice.com",
    thumbnail:
      "https://aceternity.com/images/products/thumbnails/new/efreeinvoice.png",
  },
];

export default Projects;
