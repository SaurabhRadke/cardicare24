"use client"
import Image from "next/image";
import Header from "./Components/HeaderSection/Header";
import { useContext, useEffect, useRef,useState } from "react";
import HeroSection from "./Components/HeaderSection/HeroSection";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { UserSupabaseContext } from "./store/SupabaseContext";
import { Toaster } from "react-hot-toast";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { PiPlugsConnectedFill } from "react-icons/pi";
import { BsFillPlayFill, BsPauseFill } from "react-icons/bs"; // Added for play/pause icons
import AboutUs from "./Components/HeaderSection/Aboutus";
import ServicesSection from "./Components/Sevices";
import ServicesSectionEachCard from "./Components/ServicesSection";
import CardicareVision from "./Components/CardicareVision";
import ContactUsDetails from "./Components/ContactUs";
import FooterSection from "./Components/FooterSection";



export default function Home() {
  gsap.registerPlugin(ScrollTrigger);
  const supabaseContext = useContext(UserSupabaseContext)
  const container = useRef()
  const tl = useRef()

  useGSAP(
    () => {
      tl.current = gsap.timeline()
        .from(".box-animated", {
          duration: 1,
          y: -100,
          opacity: 0,
          stagger: 0.3,
          ease: "power4.inOut",
        })
    },
    
    { scope: container }
    
  );

  useEffect(() => {
    tl.current.play()
  }, [])

  return (
    <main className="w-full overflow-hidden">
      <div 
        ref={container} 
        className={`${supabaseContext.dark ? "bg-zinc-800 text-zinc-100" : "bg-zinc-100 text-zinc-800"}
          min-h-screen w-full flex flex-col items-center`}
      >
        <Toaster />
        <Header />
        <HeroSection />
        <AboutUs/>
        <ServicesSection/>
        
        <div className="w-full min-h-screen bg-red-200 bg-opacity-70 ">
          <ServicesSectionEachCard/>
          <div className=" w-full min-h-screen ">
            <CardicareVision/>
            <ContactUsDetails/>
          </div>
        </div>
        <FooterSection/>

      </div>
    </main>
  );
}