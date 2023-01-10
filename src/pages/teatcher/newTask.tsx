import { NextPage } from "next";
import Image from "next/image";
import { useState } from "react";
import BgImage from "src/assets/newtask-page.jpg"
import Link from "next/link";

const TeatcherPage: NextPage = () => {

    const [teatcherName, setTeatcherName] = useState("")
    const [discipline, setDiscipline] = useState("")
    const [question, setQuestion] = useState("")

    return(
        <div>
            <div>
                <div>
                    <Image
                        src={BgImage}
                        fill="relative"
                    />
                    <div className="absolute top-0 w-full h-full bg-center bg-cover">
                        <span id="blackOverlay" className="w-full h-full absolute opacity-75 bg-black"></span>
                    </div>
                </div>
                <div className=" flex justify-center  pt-4  container relative transform hover:scale-105 transition-all">
                    <Link className=" flex items-center justify-center bg-slate-600 text-gray-50 font-bold w-8 h-8 rounded-full " href={"/teatcher/mainTeatcher"}>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 12h-15m0 0l6.75 6.75M4.5 12l6.75-6.75" />
                        </svg>
                    </Link>
                </div>
                <div className="container relative ">
                    <div className="flex items-center justify-center p-12">
                        <div className="mx-auto w-full max-w-[550px]">
                            <form action="https://formbold.com/s/FORM_ID" method="POST">
                                <div className="mb-5">
                                    <label
                                        htmlFor="name"
                                        className="mb-3 block text-base font-medium text-white"
                                    >
                                        Teatcher Name
                                    </label>
                                    <input
                                        type="text"
                                        name="teatcher_name"
                                        id="name"
                                        placeholder="First Name"
                                        className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                                    />
                                </div>
                                <div className="mb-5">
                                    <label
                                        
                                        className="mb-3 block text-base font-medium text-white"
                                    >
                                        Discipline
                                    </label>
                                    <input
                                        type="text"
                                        name="discipline"
                                        placeholder="Type it her"
                                        className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                                    />
                                </div>
                                <div className="mb-5">
                                    <label

                                        className="mb-3 block text-base font-medium text-white"
                                    >
                                        Question
                                    </label>
                                    <textarea
                                        name="discipline"
                                        placeholder="Type your question her"
                                        className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                                    />
                                </div>
                                <div className="flex justify-center">
                                    <button
                                        className=" rounded-md bg-[#6A64F1] py-3 px-8 text-base font-semibold text-white outline-none transform hover:scale-105 transition-all"
                                    >
                                        Submit
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default TeatcherPage