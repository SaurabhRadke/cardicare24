"use client"
import { UserSupabaseContext } from "@/app/store/SupabaseContext"
import Image from "next/image"
import { useContext, useRef } from "react"
import leftImage from "@/app/assets/loginBackground.jpg"
import toast from "react-hot-toast"

export default function LoginPageLayout(){
    const supabaseContext=useContext(UserSupabaseContext)
    const emailRef=useRef(null)
    const passwordRef=useRef(null)
    function HandelLogin(){
        if(!emailRef || !passwordRef || emailRef.current.value==="" || passwordRef.current.value==="" ){
            toast.error("Missing Credentials")
            return
        }
        const email=emailRef.current.value
        const password=passwordRef.current.value
    }
    return(
        <div className= {`fixed left-0  ${supabaseContext.loginPage?" scale-100 opacity-100 backdrop-blur-lg":" scale-0 opacity-0"} duration-300 top-0 z-30 w-screen h-screen   flex justify-center items-center overflow-hidden`}>
            <div className=" w-[80vw] h-[80vh] rounded-xl bg-zinc-800 overflow-hidden   shadow-md shadow-black flex justify-center items-center gap-2">
                <div className=" w-[50%] h-full  overflow-hidden lg:block hidden ">
                    <Image src={leftImage} alt="login" className=" object-cover w-full h-full"/>
                     </div>
                <div className=" w-[90%] lg:w-[50%] h-full p-3 flex flex-col items-center justify-center gap-10">
                    <div className=" flex flex-col items-start w-[70%] leading-9">
                        <h1 className=" tracking-wider text-[2.5rem] font-[500]">Welcome to </h1>
                        <p className=" tracking-wide text-emerald-600 text-[1.8rem] font-[500]">Cardicare Heart Care Hospital</p>
                        </div> 
                    <div className=" w-[70%] ">
                        <form className=" w-full h-full flex flex-col gap-6 items-center" onSubmit={(e)=>{e.preventDefault();HandelLogin()}}>
                        <input type="email" ref={emailRef} autoFocus placeholder="Admin Email" className=" w-full tracking-wider text-[1.1rem] text-zinc-100 px-4 py-3 rounded-full outline-none bg-zinc-600"/>
                        <input type="password" ref={passwordRef} autoFocus placeholder="Admin Password" className=" w-full tracking-wider text-[1.1rem] text-zinc-100 px-4 py-3 rounded-full outline-none bg-zinc-600"/>
                        <button type="submit" className=" px-4 mt-3 py-2 rounded-sm bg-emerald-600 text-zinc-100 tracking-widest font-[500] hover:bg-transparent border-[0.0001rem] border-emerald-600 duration-500">Login</button>
                        </form>
                    </div>
                    </div>
            </div>
        </div>
    )
}