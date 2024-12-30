import Image from "next/image";
import eecpImage from "@/app/assets/EECP_image.jpeg";
import { Oswald } from 'next/font/google';
import { useEffect, useRef } from "react";
import QuestionningLayout from "./QuestioningLayout";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import IconCardDesign from "./IconsDesign";
import Pluss from "@/app/assets/pluss.png"

const oswald = Oswald({
  weight: ['200', '400', '500', '700'],
  subsets: ['latin'],
});


export default function ServicesSection() {
  const serviceContainer = useRef(null);
  const contentRefs = useRef([]);
  useGSAP(()=>{
    const section = serviceContainer.current;
    const contents = contentRefs.current;
    gsap.from(".serverHead",{
      y:-200,
      duration:0.5,
      opacity:0,
      scrollTrigger:{
        trigger:".serverHead",
        start:"50% 55%",
        end:"55% 45%",
      }
    })
  
    gsap.from(".head1",{
      y:-50,
      duration:0.6,
      opacity:0,
      scrollTrigger:{
        trigger:".head1",
        start:"top 60%",
        end:"top 50%",
      }
    })
    gsap.from(".subHead1",{
      y:-50,
      duration:0.6,
      opacity:0,
      scrollTrigger:{
        trigger:".subHead1",
        start:"top 40%",
        end:"top 40%",
        
      }
    })
    gsap.from(".subheadhead",{
      x:100,
      duration:0.8,
      opacity:0,
      stagger:0.3,
      scrollTrigger:{
        trigger:".subheadhead",
        start:"top 50%",
        end:"top 50%",
      }
    })
    gsap.from(".eecphead",{
      scale:0,
      duration:0.5,
      opacity:0,
      scrollTrigger:{
        trigger:".eecphead",
        start:"top 40%",
        end:"top 30%",
      }
    })
    gsap.from(".eachServicebox",{
      x:150,
      duration:0.6,
      opacity:0,
      scrollTrigger:{
        trigger:".head1",
        start:"top 40%",
        end:"top 30%",
        pin:true
      }
    }),
    gsap.from(".option1 #serviceIcon",{
      scale:0,
      duration:1,
      opacity:0,
      stagger:0.3,
      scrollTrigger:{
        trigger:"#serviceIcon",
        start:"top 50%",
        end:"top 50%",
        
      }
    })
    gsap.from(".option2 #serviceIcon",{
      scale:0,
      duration:1,
      opacity:0,
      stagger:0.3,
      scrollTrigger:{
        trigger:" .option2 #serviceIcon",
        start:"top 46%",
        end:"top 46%",
        
      }
    })
    gsap.from(".subHead2",{
      y:-50,
      duration:0.6,
      opacity:0,
      scrollTrigger:{
        trigger:".subHead2",
        start:"top 48%",
        end:"top 48%",
        
      }
    })
   
    //   if (index < contents.length - 1) {
    //     // For all content except the last one
    //     tl.fromTo(
    //       content,
    //       { opacity: 0, y: 20 },
    //       { opacity: 1, y: 0, duration: 0.5 }
    //     ).to(content, { opacity: 0, y: -20, duration: 0.5 });
    //   } else {
    //     // For the last content, just fade in and keep visible
    //     tl.fromTo(
    //       content,
    //       { opacity: 0, y: 20 },
    //       { opacity: 1, y: 0, duration: 0.5 }
    //     );
    //   }
    // });
  })
  
  return (
    <div  className=" service w-screen min-h-screen   px-5 pb-[10vh]   bg-red-200 bg-opacity-70 overflow-hidden flex flex-col  gap-4  pt-2 md:pt-20">
      <h1 className=" serverHead  w-full text-[2.5rem]  md:text-[4rem] font-[500] text-zinc-800 tracking-wider text-center leading-[2.8rem]">Non-Surgical Cardiac Solutions</h1>
      <div className="  w-full flex flex-col gap-2 items-center mt-3">
        <h1 className=" subHead1 text-[1.3rem] md:text-[1.8rem] tracking-wider font-[500] text-zinc-600 text-center">We provide two alternative treatments for cardiac conditions:</h1>
        <div className=" option1 w-[80%]  mt-6 flex  gap-10 justify-center">
          <IconCardDesign text={"Enhanced External Counterpulsation"} subText={"(EECP)"} />
          <IconCardDesign text={"Chelation Therapy"}/>
        </div>
      </div>
      <div className="w-full flex flex-col gap-2 items-center mt-8" >
      <h1 className=" subHead2 text-[1.8rem] tracking-wider font-[500] text-zinc-600 text-center">Additional services include:</h1>
        <div className=" option2 -[100%] md:w-[80%]  mt-6 flex  gap-10 justify-center flex-wrap">
         


          <IconCardDesign text={"Electrocardiogram"} subText={"(ECG)"} />
          <IconCardDesign text={"Arterial Clearance Therapy"}/>
          <IconCardDesign text={"Periscope Cardiovascular Testing"}/>
        </div>
      </div>
      {/* <ServicesSection/> */}
      {/* <div ref={serviceContainer} className="  w-screen h-screen  mt-20 py-10 px-6">
        <h1  className=" text-[4.5rem] font-[500] w-full  text-zinc-900 ">Enhanced External Counterpulsation1 (EECP)</h1>

        <p className=" w-[90%] pl-8 text-[1.3rem] tracking-wider py-4 text-emerald-800">
        Clinical studies have shown that EECP therapy can improve symptoms and quality of life in patients with angina, heart failure, or other cardiovascular conditions. By increasing blood flow to the heart and improving circulation throughout the body, EECP can alleviate chest pain, reduce shortness of breath, and enhance exercise tolerance, allowing patients to engage in activities they enjoy with less discomfort.
        </p>
        <div className=" w-ful h-[60vh]  mt-10 flex items-center">
          <div className=" w-[60%] h-full ">
            <div className=" w-[90%] h-full  flex flex-col gap-3 items-center justify-center">
                
               <QuestionningLayout question={"What is Enhanced External Counterpulsation (EECP)?"} />
               <QuestionningLayout question={"Who is a good candidate for EECP treatment?"}/>
               <QuestionningLayout question={"How does EECP therapy work?"}/>
               <QuestionningLayout question={"Are there any side effects or risks associated with EECP?"}/>


            </div>
          </div>
          <div className=" relative w-[40%] h-full flex items-center justify-center">
            <div className=" w-[75%] h-[98%] border rounded-t-full"></div>
            <Image src={Pluss} alt="plus" className=" absolute left-20 -top-3 w-14"/>
            <Image src={Pluss} alt="plus" className=" absolute left-1 top-4 w-20"/>

          </div>

        </div>
      </div>  */}
      {/* <div className="w-full h-[68vh] mt-6 pt-6 px-4 border" >
        <h1 className="w-full text-[2rem] text-zinc-900 tracking-widest underline underline-offset-4 eecphead">Enhanced External Counterpulsation (EECP)</h1>
        <div className="w-full h-[80%] flex gap-8 items-center mt-8 eachServicebox">
          <div className="w-[40%] h-full lg:block hidden">
            <div className="w-full h-full p-5 flex justify-center items-center">
              <Image src={eecpImage} className="w-full h-full object-cover rounded-lg shadow-xl shadow-zinc-900" alt="eecp" />
            </div>
          </div>
          <div className="w-[100%] lg:w-[55%] h-full lg:pl-10">
            <div className="w-full h-full flex flex-col justify-center items-center">
              <h1 className={`text-[2.5rem] ${oswald.className} tracking-widest font-[500] text-zinc-700`}>EECP Therapy</h1>
              <p className={`text-[2.2rem] -mt-3 ${oswald.className} tracking-widest font-[500] text-rose-500`}># Advance 5</p>
              <p className="w-[100%] md:w-[80%] text-[1.2rem] mt-8 tracking-wider">
                Clinical studies have shown that EECP therapy can improve symptoms and quality of life in patients with angina, heart failure, or other cardiovascular conditions. By increasing blood flow to the heart and improving circulation throughout the body, EECP can alleviate chest pain, reduce shortness of breath, and enhance exercise tolerance, allowing patients to engage in activities they enjoy with less discomfort.
              </p>
            </div>
          </div>
        </div>
      </div> */}
      {/* <div className="w-full border h-[100vh] mt-6 pt-6 px-4" id="services-1">
        <h1 className=" head1 w-full text-[2rem] text-emerald-300 tracking-widest underline underline-offset-4">Enhanced External Counterpulsation (EECP)</h1>
        <div className="w-full h-[80%]  flex gap-8 items-center mt-8">
          <div className=" image1 w-[40%] h-full lg:block hidden">
            <div className="w-full h-full p-5 flex justify-center items-center">
              <Image src={eecpImage} className="w-full h-full object-cover rounded-lg shadow-xl shadow-zinc-900" alt="eecp" />
            </div>
          </div>
          <div className=" image1-content w-[100%] lg:w-[60%] h-full border lg:pl-10 flex items-center flex-col gap-5  overflow-y-auto overflow-x-hidden  ">

            <div className=" w-full h-full shrink-0 flex flex-col justify-center items-center">
              <h1 className={`text-[2.5rem] ${oswald.className} tracking-widest font-[500]`}>EECP Therapy</h1>
              <p className={`text-[2.2rem] -mt-3 ${oswald.className} tracking-widest font-[500]`}># Advance 5</p>
              <p className="w-[100%] md:w-[80%] text-[1.2rem] mt-8 tracking-wider">
                Clinical studies have shown that EECP therapy can improve symptoms and quality of life in patients with angina, heart failure, or other cardiovascular conditions. By increasing blood flow to the heart and improving circulation throughout the body, EECP can alleviate chest pain, reduce shortness of breath, and enhance exercise tolerance, allowing patients to engage in activities they enjoy with less discomfort.
              </p>
            </div>
            <div className=" w-full h-full shrink-0 justify-center  flex items-center flex-col gap-2  ">
                <QuestionningLayout/>
                <QuestionningLayout/>
            </div>
            
          </div>
        </div>
      </div> */}

       {/* <div className="w-full border h-[68vh] mt-6 pt-6 px-4">
        <h1 className="w-full text-[2rem] text-emerald-300 tracking-widest underline underline-offset-4">Chelation Therapy</h1>
        <div className="w-full h-[80%] flex gap-8 items-center mt-8">
          <div className="w-[40%] h-full lg:block hidden">
            <div className="w-full h-full p-5 flex justify-center items-center">
              <Image src={eecpImage} className="w-full h-full object-cover rounded-lg shadow-xl shadow-zinc-900" alt="eecp" />
            </div>
          </div>
          <div className="w-[100%] lg:w-[55%] h-full lg:pl-10 flex justify-center items-center flex-col gap-5  overflow-y-scroll overflow-x-hidden  pt-32">

            <div className="w-full h-full flex flex-col justify-center items-center">
              <h1 className={`text-[2.5rem] ${oswald.className} tracking-widest font-[500]`}>Chelation Therapy</h1>
              <p className={`text-[2.2rem] -mt-3 ${oswald.className} tracking-widest font-[500]`}># Advance 5</p>
              <p className="w-[100%] md:w-[80%] text-[1.2rem] mt-8 tracking-wider">
              Chelation therapy is a medical treatment that uses chelating agents to remove heavy metals and toxins from the body. The therapy involves the intravenous infusion of a chelating agent, such as EDTA, which binds to metals in the bloodstream and facilitates their elimination through urine.
              </p>
            </div>
            <div className=" w-full  flex items-center flex-col gap-2  ">
                <QuestionningLayout/>
                <QuestionningLayout/>
            </div>
          </div>
        </div>
      </div> */}
    </div>
  );
}