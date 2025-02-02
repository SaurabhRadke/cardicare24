import Image from "next/image";
import HeroSectionBackMask from "./HerosectionBackMask";
import wave from "@/app/assets/waveAnimation.svg"

export default function HeroSection() {
    return (
        <div className="w-full h-auto md:min-h-screen flex flex-col items-center pt-16 md:pt-[8vh] px-4 md:px-0 relative overflow-hidden">
            <h1 className="text-2xl md:text-3xl lg:text-[4rem] w-full md:w-[80%] lg:w-[70%] leading-tight md:leading-[4rem] text-center font-medium">
                Comprehensive Heart Care at CardiCare Heart Clinic
            </h1>

            <p className="text-base md:text-lg lg:text-[1.1rem] my-4 md:my-3 w-full md:w-[80%] lg:w-[60%] text-zinc-600 text-center leading-relaxed md:leading-5">
                CardiCare Heart Clinic provides top-quality cardiovascular care with personalized treatment plans. Our advanced facility offers non-surgical options like EECP and Chelation Therapy, as well as diagnostic imaging, minimally invasive procedures, and surgical interventions. Contact us to learn more or schedule an appointment.
            </p>

            <div className="block md:hidden w-[90%] h-[40vh] mt-8 mb-16 rounded-xl overflow-hidden">
                <div className="w-full h-full relative">
                    <HeroSectionBackMask />
                </div>
            </div>

            <div className="hidden md:block w-[70vw] lg:w-[60vw] h-[90vh] mt-8 relative mb-[4rem] z-40">
                <div className="w-[90%] h-[70%] bg-[#fb71866e] rounded-3xl absolute right-0 top-0"></div>
                <div className="w-[90%] h-[70%] bg-[#fb7186d2] rounded-3xl absolute right-[2rem] top-[2rem]"></div>
                <div className="w-[90%] h-[100%] rounded-3xl absolute right-[4rem] top-[4rem]">
                    <HeroSectionBackMask />
                </div>
            </div>

            <div className="absolute bottom-0 left-0 w-full h-auto">
                <Image 
                    src={wave} 
                    alt="wave background" 
                    className="w-full"
                    priority
                />
            </div>
        </div>
    )
}