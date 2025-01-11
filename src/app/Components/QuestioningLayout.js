"use client"
import { useState } from "react";
import { IoIosArrowDown } from "react-icons/io";
import questionIcon from "@/app/assets/question-mark.png"
import { IoMdArrowRoundForward } from "react-icons/io";
import Image from "next/image";
export default function QuestionningLayout({question}){
    const [showAnswer,setShowAnswer]=useState(false)
    return(
        <div className=" w-[75%] h-[5.5rem] group  hover:w-[80%] duration-300 cursor-pointer rounded-lg bg-[rgb(22,38,39)] px-4 overflow-hidden flex items-center justify-between">
                            <Image src={questionIcon} alt="question" className=" w-9 md:w-12"/>
                            <h1 className=" w-[80%]  h-full flex items-center  text-[0.9rem] md:text-[1.2rem] tracking-wider text-rose-500 font-[500]">
                                {question}
                            </h1>
                            <div className=" group-hover:scale-90 duration-300 group-hover:bg-rose-600 w-11 h-11 rounded-full  shrink-0 grid place-items-center bg-zinc-200"> 
                              <IoMdArrowRoundForward className=" text-[1.7rem] -rotate-45 text-zinc-900 group-hover:text-[1.6rem] group-hover:text-zinc-100 duration-300 group-hover:rotate-0"/>
                            </div>
                        </div>
        
)}

// How is EECP Treatment Applied?
// EECP treatment is typically administered for 1 hour daily, 5-6 days a week, over a period of 35 days. This treatment is painless, safe, and reliable, as it poses no risk to the patient. It is non-invasive, requiring no injections or surgical intervention, allowing patients to relax, read, or listen to music during the sessions.

// How Does EECP Work?
// For the heart to function optimally, there must be a balance between oxygen consumption and oxygen supply. Oxygen consumption is related to heart rate and pumping, while oxygen supply depends on blood flow. In a healthy heart, 80% of the blood reaching the heart muscle flows during its relaxation phase. EECP treatment supports natural bypassing by promoting the formation of new blood vessels, thereby increasing blood flow to the heart muscle.

// What Are the Benefits of EECP Treatment?
// EECP offers a comfortable treatment experience and provides several direct and indirect benefits for cardiac health, including:

// Increasing blood flow to the heart.
// Enhancing oxygen supply to the heart during its relaxation phase.
// Reducing the workload on the heart, improving its performance.
// Stimulating the development of new blood vessels around damaged or blocked vessels.
// Reducing or eliminating chest pain.
// Decreasing lactic acid production, which helps prevent muscle fatigue.
// Are There Any Side Effects of EECP Treatment?
// EECP treatment has no known severe side effects. However, minor skin irritation may occur around the cuff site due to the applied pressure.