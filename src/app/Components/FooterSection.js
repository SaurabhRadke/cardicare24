"use client"
import Image from "next/image";
import { TbArrowForwardUpDouble } from "react-icons/tb";
import { MdAddLocationAlt } from "react-icons/md";
import { LuMousePointerClick } from "react-icons/lu";
import { MdAttachEmail } from "react-icons/md";
import { PiPhoneCallFill } from "react-icons/pi";
import { FaUsers } from "react-icons/fa6";
import { FaSquareInstagram } from "react-icons/fa6";
import { FaFacebookSquare } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import Link from "next/link";
import logo from "@/app/assets/cardicare_logo.png"
import { IoLogoWhatsapp } from "react-icons/io";

export default function FooterSection(){

    const getGoogleMapsDirectionsUrl = (address) => {
        console.log(`https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(address)}`)
      };
    return(
        <footer className=" w-full   flex  justify-center   ">
            <div className=" w-[100%] min-h-[50vh]  rounded-t-xl  py-8 px-[4%] flex md:flex-row flex-col ">
                <div className=" w-full md:w-[50%] h-full  pt-10">
                    <div className=" flex items-center gap-2">
                        <Image src={logo} alt="logo" priority  className="w-[16rem] "/>
                    </div>
                    <p className=" w-[100%] md:w-[80%] mt-3 text-[1rem] text-zinc-900 tracking-wider pl-0  leading-5">At Cardicare Clinic, we are dedicated to your heart health, offering advanced treatments and compassionate care to transform lives. Since 2001, we have been a trusted partner in cardiovascular wellness, blending innovation with a patient-first approach. Visit us to experience world-class care tailored to your needs. Your journey to better heart health starts here. Together, let’s create a healthier tomorrow, one heartbeat at a time</p>
                    <div className=" py-10 flex flex-col gap-2 pl-[10%]">
                        <div className=" text-[1.4rem] font-[500] text-transparent bg-clip-text bg-gradient-to-r from-zinc-800 via-sky-700 to-zinc-600 flex items-center group hover:underline underline-offset-1 gap-1 "> <MdAddLocationAlt className=" text-sky-700 text-[1.4rem] mb-1"/><span className=" group-hover:text-orange-400 duration-300 cursor-pointer">Our Address</span></div>
                        <div className=" pl-[6%] space-y-4">
                            <div className=" flex gap-2 " onClick={()=>getGoogleMapsDirectionsUrl("SAI NIT-JIT PLAZA , Second Floor,Plot No.10,Beltarodi Ed. nr. GULMOHAR RESTAURANT, Manish Nagar,Somalwar , nagpur,MH-440037")}>
                                <TbArrowForwardUpDouble  className=" text-sky-500 text-[1.6rem]"/>
                                <p className=" w-full md:w-[50%] text-zinc-700"> 401, Indu-yash Complex, Shivaji Nagar, Ram Nagar Square, Nagpur MH - 440010</p>
                            </div>
                            
                        </div>
                    </div>
                </div>
                <div className=" w-full md:w-[50%] h-full  pt-10 px-[10%]">
                    <div className=" w-auto">
                    <div className=" text-[1.4rem] font-[500] text-transparent bg-clip-text bg-gradient-to-r from-zinc-800 via-sky-700 to-zinc-600 flex items-center group hover:underline underline-offset-1 gap-1 "> <LuMousePointerClick className=" text-sky-700 text-[1.6rem] mb-1"/><span className="  duration-300 cursor-pointer">Get in Touch</span></div>
                    <div className=" pl-[3%] md:pl-[5%] pt-4 text-zinc-800">
                        <div className=" flex px-8 items-center gap-2 text-[1.2rem] ">
                                                    <MdAttachEmail className=" shrink-0 text-[1.4rem] text-sky-700"/>
                                                    <Link href={`mailto:cardicareheartcare@gmail.com`}><p className="  hover:underline underline-offset-2  ">cardicareheartcare@gmail.com</p></Link>
                                                </div>
                                                <div className=" flex px-8 items-center gap-2 text-[1.2rem] ">
                                                    <PiPhoneCallFill className=" text-[1.4rem] text-sky-700"/>
                                                    <Link href={`tel:0712-2554488`}><p className=" ">0712-2554488</p></Link>
                                                </div>
                    </div>
                    
                    </div>
                    <div className=" w-auto mt-10">
                    <div className=" text-[1.4rem] font-[500] text-transparent bg-clip-text bg-gradient-to-r from-zinc-800 via-sky-700 to-zinc-600 flex items-center group hover:underline underline-offset-1 gap-1 "> <FaUsers className=" text-sky-700 text-[1.6rem] mb-1"/><span className="  duration-300 cursor-pointer">Follow Us</span></div>
                    <div className=" pl-[13%] pt-4 text-zinc-800 flex items-center gap-6">
                        <FaSquareInstagram className=" hover:text-rose-500 hover:-translate-y-2 duration-300 text-[1.8rem] cursor-pointer "/>
                        <FaFacebookSquare className="hover:text-rose-500 hover:-translate-y-2 duration-300 text-[1.8rem] cursor-pointer"/>
                        <IoLogoWhatsapp className=" hover:text-rose-500 hover:-translate-y-2 duration-300 cursor-pointer text-[1.8rem]"/>
                    </div>
                    
                    </div>
                </div>
            </div>
        </footer>
    )
}