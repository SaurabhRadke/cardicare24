"use client"
import Image from "next/image";
import { IoSunny } from "react-icons/io5";
import { BsFillMoonStarsFill } from "react-icons/bs";
import { HiMenuAlt3 } from "react-icons/hi";
import logo from "@/app/assets/cardicare_logo.png"
import Link from "next/link";
import { usePathname } from 'next/navigation'
import { useContext, useEffect, useRef } from "react";
import { UserSupabaseContext } from "@/app/store/SupabaseContext";
import gsap from "gsap";
import ButtonComponent from "./ButtonCompoents";
export default function HeaderSection(){
    const supabaseContext = useContext(UserSupabaseContext);
  const pathname = usePathname();
    return(
        <div
      className={` w-full  z-50 bg-zinc-100  border-b-[#fb71869a] py-3 border-[1px]  px-3 md:px-8  flex justify-between items-center overflow-hidden`}
    >
      <div className="text-[2.5rem] font-semibold tracking-wider">
        <Image src={logo} alt="logo" className="w-36 md:w-52"/>
      </div>
      <div className="lg:block hidden">
        <div className="md:scale-100 scale-0 py-3 rounded-full text-[1.1rem] flex items-center md:justify-between">
          <Link href="/" className="px-6">
            <div className={`relative tracking-widest overflow-hidden group cursor-pointer ${pathname==="/"&&`border-b-2 text-teal-500 border-teal-500 `}`}>
              <h1 className="w-full h-full group-hover:-translate-y-[1.5rem] duration-500">
                Home
              </h1>
              <h1 className="absolute top-full left-0 w-full h-full group-hover:-translate-y-[1.7rem] duration-500">
                Home
              </h1>
            </div>
          </Link>
          <Link href="/about" className="px-6">
            <div className={`relative tracking-widest overflow-hidden group cursor-pointer ${pathname==="/about"&&`border-b-2 text-teal-500 border-teal-500 `}`}>
              <h1 className="w-full h-full group-hover:-translate-y-[1.5rem] duration-500">
                About
              </h1>
              <h1 className="absolute top-full left-0 w-full h-full group-hover:-translate-y-[1.7rem] duration-500">
                About
              </h1>
            </div>
          </Link>
          <Link href="/services" className="px-6">
            <div className={`relative tracking-widest overflow-hidden group cursor-pointer ${pathname==="/services"&&`border-b-2 text-teal-500 border-teal-500 `}`}>
              <h1 className="w-full h-full group-hover:-translate-y-[1.5rem] duration-500">
                Services
              </h1>
              <h1 className="absolute top-full left-0 w-full h-full group-hover:-translate-y-[1.7rem] duration-500">
                Services
              </h1>
            </div>
          </Link>
          <Link href="/contactus" className="px-6">
            <div className={`relative tracking-widest overflow-hidden group cursor-pointer ${pathname==="/contactus"&&`border-b-2 text-teal-500 border-teal-500 `}`}>
              <h1 className="w-full h-full group-hover:-translate-y-[1.5rem] duration-500">
                Contact
              </h1>
              <h1 className="absolute top-full left-0 w-full h-full group-hover:-translate-y-[1.7rem] duration-500">
                Contact
              </h1>
            </div>
          </Link>
        </div>
      </div>
      <div className="flex items-center gap-1 md:gap-4">
        <ButtonComponent text={"Login"}/>
        {/* <button 
          className="px-5 py-[0.3rem] rounded-md bg-emerald-800 tracking-widest font-[500] hover:bg-transparent hover:text-emerald-600 border-[0.001rem] hover:border-emerald-600 border-emerald-800 duration-500 text-[0.9rem] text-zinc-100"
          onClick={() => supabaseContext.setLoginPage(true)}
        >
          Login
        </button> */}
        {/* <div
          className={`w-9 h-9 flex justify-center items-center  cursor-pointer duration-500 rounded-full`}
        >
          {supabaseContext.dark ? <IoSunny className="text-[1.4rem]" /> : <BsFillMoonStarsFill className="text-[1.2rem]" />}
        </div> */}
        <div 
          className="text-[1.5rem] lg:hidden text-zinc-300 w-10 h-10 rounded-full hover:text-zinc-100 hover:bg-emerald-700 grid place-items-center duration-500 cursor-pointer"
          onClick={() => supabaseContext.setSidebar(true)}
        >
          <HiMenuAlt3/>
        </div>
      </div>
    </div>
    )
}