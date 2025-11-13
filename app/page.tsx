import CustomerStories from "../components/sections/home/CustomerStories";
import DesignedForMsmes from "../components/sections/home/DesignedForMsmes";
import Hero from "../components/sections/home/Hero";
import { Msmes } from "../components/sections/home/Msmes";
import Partners from "../components/sections/home/Partners";
import WhatYouGet from "../components/sections/home/WhatYouGet";
import FAQs from "../components/sections/home/FAQ";
import CallToAction from "../components/sections/home/CallToAction";
import HowAssuredPayWorks from "../components/sections/home/HowAssuredPayWork";

export default function Home() {
  return (
    <>
    <main>
        <Hero />
      <Msmes />
      <WhatYouGet />
      <HowAssuredPayWorks />
      <DesignedForMsmes />
      <CustomerStories />
      <Partners />
      <FAQs />
      <CallToAction />
    </main>
     
    </>
  );
}
