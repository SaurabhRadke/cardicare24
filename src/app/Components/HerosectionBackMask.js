"use client"
import Image from "next/image";
import heroImage from "@/app/assets/doc.jpg"
export default function HeroSectionBackMask(){
    return(
        <div className=" w-auto h-auto relative ">
            <Image src={heroImage} alt="back" className="  border-[0.6rem] h-[80%] w-[100%] border-rose-500 rounded-[3rem] " />
            <div className=" absolute bottom-0 right-0 w-[20rem] h-[5rem] border-t-[0.6rem] border-l-[0.6rem] lg:scale-100 scale-0 border-rose-500  rounded-tl-[2rem] bg-zinc-100 ">
                <div className=" absolute w-[2rem] h-[2rem]  -top-[2rem] right-0 rounded-br-[0.7rem] " style={{boxShadow:"0.6rem 0.6rem #ffffff"}}></div>
                <div className=" absolute w-[2rem] h-[2rem]  -left-[2rem] bottom-0  rounded-br-[0.7rem] " style={{boxShadow:"0.6rem 0.6rem #ffffff"}}></div>
                <div className=" absolute w-[1rem] h-[1rem]  -top-[1.5rem] right-[0.6rem] rounded-br-[0.7rem] " style={{boxShadow:"0.4rem 0.4rem #F43F5E"}}></div>
                <div className=" absolute w-[1rem] h-[1rem]   -left-[1.5rem] bottom-[0.5rem] rounded-br-[0.7rem] " style={{boxShadow:"0.4rem 0.4rem #F43F5E"}}></div>


            </div>
        </div> 
    )
}