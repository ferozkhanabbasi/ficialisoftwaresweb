"use client";
import Hero from "@/components/Hero";
import Features from "@/components/Services";
import Faq from "@/components/Faq";
import CTA from "@/components/CTA";
import AboutUs from "@/components/AboutUs";
import CoreValues from "@/components/CoreValues";
import ContactUs from "@/components/ContactUs";

export default function Page() {
  return (
    <>
      <Hero />
      <Features />
      <AboutUs />
      <CoreValues />
      <Faq />
      <ContactUs />
      <CTA />
    </>
  );
}
