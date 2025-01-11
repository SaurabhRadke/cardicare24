import Image from "next/image";
import Chleation from "@/app/assets/chelationIcon.png"
import Eecp from "@/app/assets/eecpIcon.png"


export default function IconCardDesign({text,subText}){

    return(
        <div id="serviceIcon" className=" relative flex flex-col items-center gap-1">
            <div className=" w-32 h-32 rounded-full border-4 border-zinc-900 shrink-0 grid place-items-center bg-rose-600 bg-opacity-65 backdrop-blur-sm">
                {text==="Enhanced External Counterpulsation"?<Image src={Eecp} alt="chelation" className=" w-[75%] "/>:<Image src={Chleation} alt="chelation" className=" w-[80%] "/>}
            </div>
            <h1 className=" shrink-0 text-zinc-900 font-[500] text-[1,1rem] md:text-[1.4rem]  text-center mt-3">{text}</h1>
            <p className="shrink-0 text-zinc-900 font-[500] text-[1.1rem] md:text-[1.4rem]">{subText}</p>
        </div>
    )
}