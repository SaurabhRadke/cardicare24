 "use client"
 import { createContext, useEffect, useState } from "react"
import { SupabaseBrowser } from "../utiles/supabase/browser";
 export const UserSupabaseContext = createContext({});

export default function SupabaseAuthProvider({children}){
   const Supabase=SupabaseBrowser()
    const [dark,setDark]=useState(true)
    const[sidebar,setSidebar]=useState(false)
    const [Authenticate,setAuthenticated]=useState(false)
    const [UserData,setuserData]=useState({})
    const [audioUrl,setAudioUrl]=useState("https://haozufsalmvcznewanuu.supabase.co/storage/v1/object/sign/cardicare_files/video/cardicare.MP4?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJjYXJkaWNhcmVfZmlsZXMvdmlkZW8vY2FyZGljYXJlLk1QNCIsImlhdCI6MTczMDA0OTMzNiwiZXhwIjoxNzYxNTg1MzM2fQ.zmvpkE_vz35ZX5ZHhrdAKn3KB7zFy9w0CTbqCYlY8oM&t=2024-10-27T17%3A15%3A37.269Z")
    const [loginPage,setLoginPage]=useState(false)

   

   
    async function CheckAuth(){
      try {
         const { data, error } = await Supabase.auth.signInWithPassword({
            email: 'cardicare9573@gmail.com',
            password: 'Cardicare@9573',
          })
          if(error===null && data.session.user.aud==="authenticated"){
            setAuthenticated(true)
            setuserData(data.session.user.identities[0])
          }
      } catch (error) {
         console.log("Failed to Authenticate")
      }
    }
 return(
    <UserSupabaseContext.Provider
     value={{
        dark,
        setDark,
        sidebar,
        setSidebar,
        CheckAuth,
        Authenticate,
        audioUrl,
        loginPage,
        setLoginPage
     }}
    >
        {children}
    </UserSupabaseContext.Provider>
 )
}