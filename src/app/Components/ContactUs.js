"use client"
import { MdAttachEmail } from "react-icons/md";
import { PiPhoneCallFill } from "react-icons/pi";
import { BsFillPatchQuestionFill } from "react-icons/bs";
import { BiSolidMessageAltError } from "react-icons/bi";
import { IoMail } from "react-icons/io5";
import { useState } from "react";
import axios from "axios";
import Link from "next/link";

export default function ContactUsDetails(){

    const [sendLoader,setSendLoader]=useState(false)
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        phoneNumber: '',
        comment: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleSubmit = (e) => {
        setSendLoader(true)
        e.preventDefault();
        handelEmailSend(formData)
    };
    const handelEmailSend=async(formData)=>{
        
        const formdataNew={Email:formData.email,Name:`${formData.firstName} ${formData.lastName}`,Number:formData.phoneNumber,Description:formData.comment}
        const response = await axios.post('/api/sendEmail',formdataNew)
        if(response.status===200){
          setSendLoader(false)
        }
        else{
            console.log("FAIELD:EDE:D")
            setSendLoader(false)
        }
       
    }
    return(
        <div id="contact" className=" text-zinc-900 w-full min-h-screen bg-rose-200 bg-opacity-15 px-3 py-10 flex items-center flex-col gap-6 ">
            <h1 className=" text-[2.6rem] text-center leading-[2.7rem] font-semibold tracking-wider mt-10">Let’s Build the Future Together</h1>
            <div className=" w-full min-h-screen  py-5 flex md:flex-row flex-col gap-4">
                <div className=" w-[100%] md:w-[50%] h-full  py-4 pl-[5%]">
                    <h1 className=" text-[2rem] md:text-[3rem] font-[500] tracking-wide leading-7 ">We’d Love to Hear from You</h1>
                    <p className=" text-[1rem] md:text-[1.2rem] text-zinc-700 w-[95%] leading-6 mt-8 text-center md:w-[80%]">Connect with Techtonic Lab to unlock opportunities: From certifications and expert consultancy to internships and placements, we&apos;re here to support your journey to success.</p>
                    <div className=" w-[70%] mt-10 h-auto">
                        <div className=" flex px-4 md:px-8 items-center gap-2 text-[1.4rem]">
                            <MdAttachEmail className=" text-[1.6rem] text-sky-700 shrink-0"/>
                            <Link href={`mailto:admin@techtoniccorporate.com`}><div className="  hover:underline underline-offset-2  ">admin@techtoniccorporate.com</div></Link>                        </div>
                            <div className=" flex px-8 items-center gap-2 text-[1.2rem] ">
                                                    <PiPhoneCallFill className=" text-[1.4rem] text-sky-700"/>
                                                    <Link href={`tel:admin@techtoniccorporate.com`}><div className=" ">+91-8766069947</div></Link>
                                                </div>
                    </div>
                    <h2 className=" text-[1.3rem] leading-6 md:text-[1.4rem] w-full md:w-[70%] font-semibold md:leading-8 mt-10">We&apos;re here to support you—reach out to Techtonic Lab for certifications, consultancy, internships, and placement opportunities!</h2>
                    <div className=" md:block hidden"><div className=" flex items-center justify-center w-full h-auto pt-6 gap-3 md:gap-8">
                        <div className=" w-[18rem] h-[16rem]  rounded-lg p-4 flex flex-col gap-3 bg-black text-zinc-100">
                            <div className=" text-[1.5rem] font-[500] flex  items-center gap-2 text-orange-400">
                                <div className="w-10 h-10 rounded-full bg-zinc-100 grid place-items-center">
                                    <BsFillPatchQuestionFill className=" text-sky-600 text-[1.8rem] "/>
                                </div>
                                Customer Support</div>
                            <p className=" px-3">Need help? Our support team is here to assist with certifications, consultancy, internships, or placements. Reach out for a seamless experience with Techtonic Lab!</p>
                        </div>
                        <div className=" w-[22rem]  h-[16rem]  rounded-lg p-4 flex flex-col gap-3 bg-black text-zinc-100">
                        <div className=" text-[1.5rem] font-[500] flex items-center gap-2 text-orange-400">
                                <div className="w-10 h-10 rounded-full bg-zinc-100 grid place-items-center">
                                    <BiSolidMessageAltError className=" text-sky-600 text-[1.8rem] "/>
                                </div>
                                Feedback & Suggestions</div>
                        <p className=" px-3">Your feedback matters to us! Share your thoughts, suggestions, or ideas to help Techtonic Lab improve and grow. Together, we can create even better opportunities and experiences for students and professionals, driving innovation and success forward.</p>
                        </div>

                    </div></div>
                </div>
                <div className=" w-[100%] md:w-[50%] h-full  py-4 md:pl-[5%] flex ">
                    <div className=" w-full md:w-[90%] h-[100%] rounded-xl  shadow-md shadow-orange-400 py-8 px-5 bg-[rgb(22,38,39)] backdrop-blur-md flex flex-col items-center  ">
                        <h1 className=" text-[2.5rem] md:text-[3rem]  font-semibold text-transparent bg-clip-text bg-gradient-to-r from-zinc-100 via-rose-500 to-zinc-300 text-center">Get in Touch</h1>
                        <p className=" w-[90%] text-zinc-300 text-[1rem] tracking-wide leading-5 text-center">You can reach out to us anytime, 24/7! Whether you have questions, need assistance, or want to share your feedback, our team is always here to support you, day or night.</p>
                        <form onSubmit={handleSubmit} className="pt-14 space-y-5">
            <div className="flex items-center gap-4 md:flex-row flex-col">
                <input
                    type="text"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleChange}
                    className="px-3 py-2 outline-none md:w-[16rem] w-[22rem] rounded-md bg-zinc-100"
                    placeholder="First Name"
                />
                <input
                    type="text"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleChange}
                    className="px-3 py-2 outline-none md:w-[16rem] w-[22rem] rounded-md bg-zinc-100"
                    placeholder="Last Name"
                />
            </div>
            <div className="relative flex items-center">
                <IoMail className="text-[1.3rem] text-zinc-900 absolute left-2"/>
                <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="pl-9 w-full px-3 py-2 rounded-md bg-zinc-100"
                    placeholder="Email"
                />
            </div>
            <div className="relative flex items-center">
                <PiPhoneCallFill className="text-[1.3rem] text-zinc-900 absolute left-2"/>
                <input
                    type="number"
                    name="phoneNumber"
                    value={formData.phoneNumber}
                    onChange={handleChange}
                    className="w-full px-3 py-2 rounded-md bg-zinc-100 pl-9"
                    placeholder="Phone Number"
                />
            </div>
            <textarea
                name="comment"
                value={formData.comment}
                onChange={handleChange}
                className="w-full h-[20vh] rounded-md bg-zinc-100 px-4 py-2"
                placeholder="Comment"
            />

            <div className="w-full py-5 flex items-center justify-center">
                <button
                    type="submit"
                    className={`px-6 py-2 ${sendLoader && "animate-pulse"} rounded-md bg-rose-600 text-zinc-100`}
                >
                    {sendLoader?"Sending ...":"Let's Talk"}
                </button>
            </div>
        </form>
                    </div>
                </div>
            </div>

        </div>
    )
}