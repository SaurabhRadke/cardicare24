"use client";
import { UserSupabaseContext } from "@/app/store/SupabaseContext";
import { useContext, useEffect, useRef } from "react";
import { RxCross2 } from "react-icons/rx";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import Link from "next/link";

export default function HeaderSidebar() {
    const SupabaseContext = useContext(UserSupabaseContext);
    const sidebar = useRef();
    const side_tl = useRef();

    useGSAP(() => {
        side_tl.current = gsap.timeline()
            .from(".linker", {
                duration: 0.4,
                y: -40,
                opacity: 0,
                stagger: 0.4,
                
            });
    }, { scope: sidebar });

    useEffect(() => {
        
        side_tl.current.play();
       
    }, [SupabaseContext.sidebar,]);

    return (
        <div ref={sidebar} className={`  origin-right w-screen h-screen lg:hidden block bg-zinc-800 fixed left-0 top-0 p-4`}>
            <div className="relative w-full h-full border-[0.0001rem] border-zinc-500 rounded-xl flex flex-col gap-4 p-2">
                <div  className="w-full  py-3 px-4 text-[3rem] font-[700] tracking-widest border-b">Cardicare</div>

                {['/', '/about', '/services', '/contactus'].map((path, index) => (
                    <Link href={path}  key={index} className="linker">
                        <div className="relative w-full px-4 group text-[2rem] py-10 flex items-center cursor-pointer font-[500] tracking-wider rounded-md">
                            <div className="w-0 h-full bg-emerald-700 rounded-md group-hover:opacity-100 opacity-0 group-hover:w-full duration-500 absolute left-0"></div>
                            <h1 className="absolute px-4">{path === '/' ? 'Home' : path.slice(1).charAt(0).toUpperCase() + path.slice(2)}</h1>
                        </div>
                    </Link>
                ))}

                <RxCross2 className="absolute right-4 top-4 text-[2.6rem] hover:text-rose-600 duration-300 cursor-pointer" onClick={() => SupabaseContext.setSidebar(false)} />
            </div>
        </div>
    );
}