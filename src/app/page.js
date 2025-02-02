"use client"

import { Toaster } from "react-hot-toast";
import AboutCardiCare from "./components/AboutCardiCare";
import CardicareVision from "./components/CompleteCardicare";
import ContactUsDetails from "./components/ContactUsSection";
import FooterSection from "./components/FooterSection";
import HeaderSection from "./components/HeaderSection";
import HeroSection from "./components/HeroSection";
import ServicesOffered from "./components/ServicesOffered";
import VideoSection from "./components/VideoSection";

export default function Home() {
  

  return (
    <main className="w-full overflow-hidden">
        <div className=" w-screen min-h-screen bg-zinc-100">
          <Toaster/>
          <HeaderSection/>
          <HeroSection/>
          <AboutCardiCare/>
          <ServicesOffered/>
          <VideoSection/>
          <CardicareVision/>
          <ContactUsDetails/>
          <FooterSection/>
        </div>
    </main>
  );
}