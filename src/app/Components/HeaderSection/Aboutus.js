"use client";
import { UserSupabaseContext } from "@/app/store/SupabaseContext";
import { useContext, useEffect, useRef, useState } from "react";
import { PiPlugsConnectedFill } from "react-icons/pi";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

import { BsFillPlayFill, BsPauseFill } from "react-icons/bs"; // Added for play/pause icons

const CustomVideo = ({ videoUrl }) => {
  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const togglePlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  return (
    <div className="relative w-full h-full group flex justify-center items-center r">
      <video 
        ref={videoRef}
        className=" h-full w-[60%] object-cover rounded-xl border border-zinc-500 shadow-lg shadow-zinc-600"
        preload="metadata"
      >
        <source src={videoUrl} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      
      {/* Play/Pause Overlay */}
      <div 
        className="absolute inset-0 flex items-center justify-center bg-black/20 opacity-0  transition-opacity cursor-pointer"
        onClick={togglePlay}
      >
        <div className="w-16 h-16 bg-white/80 rounded-full flex items-center justify-center">
          {isPlaying ? (
            <BsPauseFill className="text-3xl text-black" />
          ) : (
            <BsFillPlayFill className="text-3xl text-black ml-1" />
          )}
        </div>
      </div>
    </div>
  );
};
export default function AboutUs() {
    const supabaseContext = useContext(UserSupabaseContext);
   
    useGSAP(()=>{

        gsap.from(".aboutHead",{
          y:-100,
          duration:1,
          opacity:0,
          scrollTrigger:{
            trigger:".aboutHead",
            start:"top 35%",
            end:"top 35%",
          }
        })
        gsap.from(".aboutleft",{
            x:-100,
            duration:1,
            opacity:0,
            scrollTrigger:{
              trigger:".aboutHead",
              start:"top 20%",
              end:"top 20%",
            }
          })
          gsap.from(".aboutright",{
            x:100,
            duration:1,
            opacity:0,
            scrollTrigger:{
              trigger:".aboutHead",
              start:"top 20%",
              end:"top 20%",
            }
          })
      
    })
    return (
        <div className="w-full min-h-screen bg-red-200 bg-opacity-70 pt-[12%]">
          <h1 className=" aboutHead w-[90%] text-center leading-[2.9rem] mx-auto md:text-[4rem]  flex justify-center tracking-wider font-[500] text-zinc-900 text-[2.6rem]">
            Empowering Heart Health
          </h1>
          <div className="w-full h-[80%] flex justify-center items-centermt-[1rem] md:mt-[3rem] mb-[2rem] md:mb-[6rem]">
            <div className=" w-[95%] md:w-[60%] h-[95%] aboutleft">
              <div className="w-full h-full md:py-4 flex flex-col items-center gap-10">
                <h1 className="text-[1.3rem] lg:text-[1.8rem] text-center text-red-600 w-[90%] md:w-[70%] tracking-wider font-[500]">
                  Welcome to CardiCare Heart Hospital
                </h1>
                <div className="w-full tracking-wider  md:w-[80%] items-center flex justify-center flex-col text-[1rem] text-emerald-950 font-[500] lg:text-[1.2rem] text-center gap-10">
                  <p>
                    Welcome to CardiCare Heart Hospital, where we provide top-quality care for cardiovascular conditions. Our expert team and advanced facility ensure the best possible treatment for every patient. We understand that surgery can be overwhelming, so we offer non-surgical treatments like Enhanced External Counterpulsation (EECP) and Chelation Therapy, along with a full range of diagnostic, minimally invasive, and surgical options tailored to individual needs.
                  </p>
                  <p>
                    Thank you for considering CardiCare Heart Hospital. Please contact us to learn more or to schedule an appointment with one of our skilled medical professionals
                  </p>
                </div>
                <button className="px-8 py-2 text-[1.2rem] bg-zinc-100 text-zinc-900 tracking-wider font-[500] rounded-md mt-4 flex items-center gap-3 border-[0.0001rem] border-zinc-100 hover:bg-zinc-800 hover:text-zinc-100 hover:border-zinc-800 duration-700">
                  Reach Out Today <PiPlugsConnectedFill className="text-[1.5rem]" />
                </button>
              </div>
            </div>
            <div className="w-[40%] h-[60vh] aboutright md:block hidden ">
              <CustomVideo videoUrl={supabaseContext.audioUrl} />
            </div>
          </div>
        </div>
    );
}