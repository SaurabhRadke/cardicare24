"use client"
import Image from "next/image";
import { LuArrowUpRightFromCircle } from "react-icons/lu";
import blob from "@/app/assets/blob.svg"
import blob1 from "@/app/assets/blob-1.svg"
import blob2 from "@/app/assets/blob-2.svg"
import bgImage1 from "@/app/assets/heroImage11.png"
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { useContext, useState } from "react";
import { GrEdit } from "react-icons/gr";
import { UserSupabaseContext } from "@/app/store/SupabaseContext";

export default function HeroSection() {
    const supabaseContext = useContext(UserSupabaseContext)
    useGSAP(() => {
        const tl = gsap.timeline()
        
        // First animate the rounds
        tl.from(".rounds", {
            delay: 0.8,
            scale: 0,
            duration: 0.8,
            opacity: 0,
            stagger: 0.3,
        })
        
        // Then animate each word in the heading
        tl.from(".subhead", {
            opacity: 0,
            y: -50,
            duration: 0.8,
            stagger: 0.2,
            ease: "back.out(1.7)",
            display: "inline-block" // This ensures proper transform origin
        })
        
        // Then the paragraph
        tl.from(".subheadsub", {
            y: -100,
            opacity: 0,
            duration: 0.5
        })
        
        // Finally the button
        tl.from(".subheadbutton", {
            y: -100,
            opacity: 0,
            duration: 0.3
        })
    })
    
    return (
        <div className="relative w-full min-h-screen flex flex-col">
            {/* Background container with same positioning style */}
<div className="absolute inset-0 bg-red-200 bg-opacity-70 backdrop-blur-sm pt-[10%] hidden md:flex items-center">
    {/* Mobile: full width, Desktop: original positioning */}
    <Image 
        src={blob1} 
        alt="heart" 
        className="absolute w-full md:w-[60vw] rounds -top-40 -left-[5%]" 
    />
    <Image 
        src={blob2} 
        alt="heart" 
        className="absolute w-full md:w-[60vw] rounds top-20 rotate-180 left-[0%]" 
    />
    <Image 
        src={blob} 
        alt="heart" 
        className="absolute w-full md:w-[65vw] -left-[15%] rounds mb-20 h-[120%]" 
    />
    <Image 
        src={bgImage1} 
        alt="heart" 
        className="absolute w-full md:w-[43vw] rounds left-[2%]" 
    />
</div>

            <div className=" absolute md:relative w-full md:pl-[48%] md:backdrop-blur-0 backdrop-blur-sm pt-[6%] h-full flex-grow">
                <div className="flex flex-col items-center justify-center w-full h-full py-20">
                    <h1 className="text-[2.5rem] md:text-[3.5rem]  tracking-wider font-[500] text-zinc-100 md:text-zinc-800 leading-[3rem] md:leading-[3.7rem] w-[76%] md:w-[70%] text-center">
                        <span className="subhead inline-block">Comprehensive</span>{' '}
                        <span className="subhead inline-block">Heart</span>{' '}
                        <span className="subhead inline-block">Care</span>{' '}
                        <span className="subhead inline-block">at</span>{' '}
                        <span className="subhead inline-block text-red-600">CardiCare</span>{' '}
                        <span className="subhead inline-block">Heart</span>{' '}
                        <span className="subhead inline-block">Clinic</span>
                    </h1>
                    
                    <p style={{mixBlendMode: "difference"}} className="subheadsub py-8 content text-[1rem] md:text-[1.25rem] font-[400] mt-1 tracking-wider w-[90%] md:w-[70%] text-center">
                        CardiCare Heart Clinic provides top-quality cardiovascular care with personalized treatment plans. Our advanced facility offers non-surgical options like EECP and Chelation Therapy, as well as diagnostic imaging, minimally invasive procedures, and surgical interventions. Contact us to learn more or schedule an appointment
                    </p>

                    <div className="content pt-6 subheadbutton">
                        <div className="flex gap-4 items-center cursor-pointer px-8 py-[0.5rem] rounded-md text-[1.1rem] md:text-[1.3rem] border-[0.0001rem] border-emerald-800 hover:border-emerald-800 tracking-wider bg-emerald-800 hover:text-emerald-800 hover:bg-transparent duration-500">
                            Discover Our Heart Care Services <LuArrowUpRightFromCircle className="pl-2 text-[2rem]" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}