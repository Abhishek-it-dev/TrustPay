"use client";
import CustomerStories from "../components/sections/home/CustomerStories";
import DesignedForMsmes from "../components/sections/home/DesignedForMsmes";
// import Hero from "../components/sections/home/Hero";
import Hero from "../components/sections/common/Hero";
import { Msmes } from "../components/sections/home/Msmes";
import Partners from "../components/sections/home/Partners";
import WhatYouGet from "../components/sections/home/WhatYouGet";
import FAQs from "../components/sections/home/FAQ";
import CallToAction from "../components/sections/home/CallToAction";
import HowTrustPayWorks from "../components/sections/home/HowAssuredPayWork";

import usePageConfig from "../hooks/usePageConfig";

export default function Home() {
  const config= usePageConfig();
  return (
    <>
    <main>
        <Hero {...config?.hero} />
      <Msmes />
      <WhatYouGet />
      <HowTrustPayWorks />
      <DesignedForMsmes />
      <CustomerStories />
      <Partners />
      <FAQs />
      <CallToAction />
    </main>
     
    </>
  );
}
