"use client";
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

export default function Header({ dark, setDark }) {
  const supabaseContext = useContext(UserSupabaseContext);
  const pathname = usePathname();
  const headerRef = useRef(null);
  const lastScrollY = useRef(0);
  const tl = useRef(null);

  useEffect(() => {
    // Initialize GSAP timeline
    tl.current = gsap.timeline({ paused: true });
    tl.current.to(headerRef.current, {
      yPercent: -150,
      duration: 0.3,
      ease: "power2.inOut"
    });

    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      // Don't trigger at the very top of the page
      if (currentScrollY < 100) {
        tl.current.reverse();
        lastScrollY.current = currentScrollY;
        return;
      }

      // Determine scroll direction
      if (currentScrollY > lastScrollY.current) {
        // Scrolling down - hide header
        tl.current.play();
      } else {
        // Scrolling up - show header
        tl.current.reverse();
      }

      lastScrollY.current = currentScrollY;
    };

    // Add scroll event listener with debounce for performance
    let timeout;
    const debouncedScroll = () => {
      clearTimeout(timeout);
      timeout = setTimeout(() => {
        handleScroll();
      }, 10);
    };

    window.addEventListener("scroll", debouncedScroll);

    return () => {
      window.removeEventListener("scroll", debouncedScroll);
      clearTimeout(timeout);
    };
  }, []);

  return (
    <div
      ref={headerRef}
      className={`fixed top-5 w-[95%] md:w-[80%] z-50 bg-zinc-800 py-2 border-[1px] rounded-xl box-animated px-3 md:px-8 ${
        supabaseContext.dark ? "border-zinc-700 shadow-lg shadow-zinc-900" : "border-zinc-300 shadow-lg shadow-zinc-500"
      } flex justify-between items-center overflow-hidden`}
    >
      <div className="text-[2.5rem] font-semibold tracking-wider">
        <Image src={logo} alt="logo" className="w-36 md:w-52"/>
      </div>
      <div className="lg:block hidden">
        <div className="md:scale-100 scale-0 py-3 rounded-full text-[1.1rem] flex items-center md:justify-between">
          <Link href="/" className="px-6">
            <div className={`relative tracking-widest overflow-hidden group cursor-pointer ${pathname==="/"&&`border-b-2 ${dark?"text-teal-500 border-teal-500":"text-teal-500 border-teal-500"}`}`}>
              <h1 className="w-full h-full group-hover:-translate-y-[1.5rem] duration-500">
                Home
              </h1>
              <h1 className="absolute top-full left-0 w-full h-full group-hover:-translate-y-[1.7rem] duration-500">
                Home
              </h1>
            </div>
          </Link>
          <Link href="/about" className="px-6">
            <div className={`relative tracking-widest overflow-hidden group cursor-pointer ${pathname==="/about"&&`border-b-2 ${dark?"text-teal-500 border-teal-500":"text-teal-500 border-teal-500"}`}`}>
              <h1 className="w-full h-full group-hover:-translate-y-[1.5rem] duration-500">
                About
              </h1>
              <h1 className="absolute top-full left-0 w-full h-full group-hover:-translate-y-[1.7rem] duration-500">
                About
              </h1>
            </div>
          </Link>
          <Link href="/services" className="px-6">
            <div className={`relative tracking-widest overflow-hidden group cursor-pointer ${pathname==="/services"&&`border-b-2 ${dark?"text-teal-500 border-teal-500":"text-teal-500 border-teal-500"}`}`}>
              <h1 className="w-full h-full group-hover:-translate-y-[1.5rem] duration-500">
                Services
              </h1>
              <h1 className="absolute top-full left-0 w-full h-full group-hover:-translate-y-[1.7rem] duration-500">
                Services
              </h1>
            </div>
          </Link>
          <Link href="/contactus" className="px-6">
            <div className={`relative tracking-widest overflow-hidden group cursor-pointer ${pathname==="/contactus"&&`border-b-2 ${dark?"text-teal-500 border-teal-500":"text-teal-500 border-teal-500"}`}`}>
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
        <button 
          className="px-5 py-[0.3rem] rounded-md bg-emerald-800 tracking-widest font-[500] hover:bg-transparent hover:text-emerald-600 border-[0.001rem] hover:border-emerald-600 border-emerald-800 duration-500 text-[0.9rem] text-zinc-100"
          onClick={() => supabaseContext.setLoginPage(true)}
        >
          Login
        </button>
        <div
          className={`w-9 h-9 flex justify-center items-center ${
            supabaseContext.dark ? "hover:bg-zinc-600" : "hover:bg-zinc-300"
          } cursor-pointer duration-500 rounded-full`}
          onClick={() => supabaseContext.setDark(!supabaseContext.dark)}
        >
          {supabaseContext.dark ? <IoSunny className="text-[1.4rem]" /> : <BsFillMoonStarsFill className="text-[1.2rem]" />}
        </div>
        <div 
          className="text-[1.5rem] lg:hidden text-zinc-300 w-10 h-10 rounded-full hover:text-zinc-100 hover:bg-emerald-700 grid place-items-center duration-500 cursor-pointer"
          onClick={() => supabaseContext.setSidebar(true)}
        >
          <HiMenuAlt3/>
        </div>
      </div>
    </div>
  );
}