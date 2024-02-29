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
  // ticketz

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
    thumbnail: "/ticketz/5.png",
  },
  {
    title: "Ticketz",
    link: "https://app.pixelperfect.quest",
    thumbnail: "/ticketz/3.png",
  },
  {
    title: "Ticketz",
    link: "https://app.pixelperfect.quest",
    thumbnail: "/ticketz/4.png",
  },

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

  // Thermostat Portal
  {
    title: "XCSpec Thermostat Portal",
    link: "https://renderwork.studio",
    thumbnail: "/tstat_portal/control_2022-10-19_14.31.42.png",
  },

  {
    title: "XCSpec Thermostat Portal",
    link: "https://renderwork.studio",
    thumbnail: "/tstat_portal/dashboard_2022-10-19_14.30.36.png",
  },
  {
    title: "XCSpec Thermostat Portal",
    link: "https://renderwork.studio",
    thumbnail: "/tstat_portal/datanalysis2_2022-10-19_14.32.31.png",
  },
  {
    title: "XCSpec Thermostat Portal",
    link: "https://renderwork.studio",
    thumbnail: "/tstat_portal/schedule_manager_2022-10-19_14.33.15.png",
  },
  {
    title: "XCSpec Thermostat Portal",
    link: "https://renderwork.studio",
    thumbnail: "/tstat_portal/site_manager_2022-10-19_14.33.04.png",
  },
];

export default Projects;
