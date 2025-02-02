import Image from "next/image";
import wave from "@/app/assets/waveAnimation.svg"
import image1 from "@/app/assets/aboutUsImage/imagee1.jpg"
import image2 from "@/app/assets/aboutUsImage/imagee2.jpg"
import image3 from "@/app/assets/aboutUsImage/imagee3.jpg"
import image4 from "@/app/assets/aboutUsImage/imagee4.jpg"
import image5 from "@/app/assets/aboutUsImage/imagee5.jpg"
import image6 from "@/app/assets/aboutUsImage/imagee6.jpg"
import image7 from "@/app/assets/aboutUsImage/imagee7.jpg"
import image8 from "@/app/assets/aboutUsImage/imagee8.jpg"
import image9 from "@/app/assets/aboutUsImage/imagee9.jpg"
import image10 from "@/app/assets/aboutUsImage/imagee10.jpg"

import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import { PiPlugsConnectedFill } from "react-icons/pi";

export default function AboutCardiCare(){
    // Array of all clinic images with their sources and alt texts
    const clinicImages = [
        { src: image1, alt: "CardiCare Clinic Image 1" },
        { src: image2, alt: "CardiCare Clinic Image 2" },
        { src: image3, alt: "CardiCare Clinic Image 3" },
        { src: image4, alt: "CardiCare Clinic Image 4" },
        { src: image5, alt: "CardiCare Clinic Image 5" },
        { src: image6, alt: "CardiCare Clinic Image 6" },
        { src: image7, alt: "CardiCare Clinic Image 7" },
        { src: image8, alt: "CardiCare Clinic Image 8" },
        { src: image9, alt: "CardiCare Clinic Image 9" },
        { src: image10, alt: "CardiCare Clinic Image 10" }
    ];

    return(
        <div className="w-full min-h-screen bg-zinc-100 relative flex items-center py-8 md:py-0">
            {/* Wave Background */}
            <div className="absolute w-full h-auto top-0">
                <Image 
                    src={wave} 
                    alt="wave" 
                    className="-rotate-180 w-full"
                    priority
                />
            </div>

            {/* Main Content Container */}
            <div className="w-full md:w-[90%] min-h-[90%] px-4 md:px-[4%] flex flex-col gap-6 md:gap-12 items-center pt-16 md:pt-[3%] relative z-10">
                {/* Main Heading */}
                <h1 className="w-full text-2xl md:text-4xl lg:text-[4rem] text-center font-medium leading-tight">
                    Empowering Heart Health
                </h1>

                {/* Content Section */}
                <div className="w-full flex flex-col md:flex-row items-center gap-8 md:gap-0">
                    {/* Text Content */}
                    <div className="w-full md:w-[60%] flex flex-col items-center gap-4">
                        <h2 className="bg-clip-text bg-gradient-to-br from-rose-600 to-teal-700 text-xl md:text-2xl lg:text-[2.2rem] font-medium text-transparent text-center">
                            Welcome to CardiCare Heart Clinic
                        </h2>

                        <div className="w-full md:w-[70%] text-center text-base md:text-lg lg:text-[1.2rem] font-medium mt-4 md:mt-12 space-y-6">
                            <p>
                                Welcome to CardiCare Heart Clinic, where we provide top-quality care for cardiovascular conditions. Our expert team and advanced facility ensure the best possible treatment for every patient. We understand that surgery can be overwhelming, so we offer non-surgical treatments like Enhanced External Counterpulsation (EECP) and Chelation Therapy, along with a full range of diagnostic, minimally invasive, and surgical options tailored to individual needs.
                            </p>
                            <p>
                                Thank you for considering CardiCare Heart Clinic. Please contact us to learn more or to schedule an appointment with one of our skilled medical professionals
                            </p>
                        </div>

                        <button className="px-6 md:px-8 py-2 text-base md:text-lg lg:text-[1.2rem] bg-zinc-100 text-zinc-900 tracking-wide font-medium rounded-md mt-4 flex items-center gap-3 border border-zinc-900 hover:bg-zinc-800 hover:text-zinc-100 hover:border-zinc-800 duration-700">
                            Reach Out Today 
                            <PiPlugsConnectedFill className="text-xl md:text-2xl" />
                        </button>
                    </div>

                    {/* Carousel Section */}
                    <div className="w-full md:w-[40%] flex items-center justify-center mt-8 md:mt-0">
                        <div className="w-full max-w-md md:max-w-full">
                            <Carousel 
                                showArrows={true}
                                showStatus={false}
                                showThumbs={true}
                                infiniteLoop={true}
                                autoPlay={true}
                                interval={3000}
                                swipeable={true}
                                emulateTouch={true}
                                className="w-full"
                                thumbWidth={60}
                                selectedItem={0}
                                stopOnHover={true}
                            >
                                {clinicImages.map((image, index) => (
                                    <div key={index} className="p-2 md:p-4">
                                        <Image 
                                            src={image.src} 
                                            alt={image.alt}
                                            width={500}
                                            height={300}
                                            className="rounded-xl border-2 border-zinc-300 shadow-lg shadow-[#d6786b63]"
                                            priority={index < 2} // Prioritize loading first two images
                                            quality={90} // Higher quality for clinic images
                                        />
                                    </div>
                                ))}
                            </Carousel>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}