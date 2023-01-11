import { NextPage } from "next";
import Link from "next/link";
import Image from "next/image";
import BgImage from "src/assets/teacher-page.jpg"

const MainTeacher: NextPage = () => {
    return (
        <div className="bg-gradient-to-r from-orange-300 to-red-500 ">
            <link rel="stylesheet" href="https://demos.creative-tim.com/notus-js/assets/styles/tailwind.css" />
            <link rel="stylesheet" href="https://demos.creative-tim.com/notus-js/assets/vendor/@fortawesome/fontawesome-free/css/all.min.css" />
            <section className="">
                <div className="relative pt-16 pb-32 flex content-center items-center justify-center min-h-screen-75">
                    <div>
                        <Image
                            src={BgImage}
                            fill={true}
                            alt=""
                        />
                    </div>
                    
                    <div className="absolute top-0 w-full h-full bg-center bg-cover">
                        <span id="blackOverlay" className="w-full h-full absolute opacity-75 bg-black"></span>
                    </div>
                    <div className="container relative  text-center flex justify-center">
                        <div className="transform hover:scale-105 transition-all">
                            <Link className=" flex items-center justify-center bg-slate-600 text-gray-50 font-bold w-8 h-8 rounded-full " href={"/"}>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 12h-15m0 0l6.75 6.75M4.5 12l6.75-6.75" />
                                </svg>
                            </Link>
                        </div>
                        <div className="items-center flex flex-wrap justify-center">
                            <div className="w-full lg:w-8/12 px-4 ml-auto mr-auto">
                                <div className="">
                                    <h1 className="text-white font-semibold text-5xl">
                                        Extract the learning from your students!
                                    </h1>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="top-auto bottom-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden h-70-px">
                        <svg className="absolute bottom-0 overflow-hidden" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" version="1.1" viewBox="0 0 2560 100" x="0" y="0">
                            <polygon className="text-blueGray-200 fill-current" points="2560 0 2560 100 0 100"></polygon>
                        </svg>
                    </div>
                </div>
                <section className="pb-10 bg-gradient-to-r from-orange-300 to-red-500 -mt-24 ">
                    <div className="container mx-auto px-4">
                        <div className="flex flex-wrap flex justify-center">
                            <Link href={"/teacher/newTask"} className="pt-6 w-full md:w-4/12 px-4 text-center transform hover:scale-105 transition-all">
                                <div className="relative flex flex-col min-w-0 break-words bg-blueGray-200 w-full mb-8 shadow-lg rounded-lg">
                                    <div className="px-4 py-5 flex-auto">
                                        <div className="text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-red-400">
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                                            </svg>

                                        </div>
                                        <h6 className="text-xl font-semibold">Add Task</h6>
                                        <p className="mt-2 mb-4 text-blueGray-500">
                                            It's time to verify your student Learnings!
                                        </p>
                                        <p className="mt-2 mb-4 text-blueGray-500">
                                            Do some tasks to test your post class!
                                        </p>
                                    </div>
                                </div>
                            </Link>
                            <Link href={"/teacher/watchTask"} className="pt-6 w-full md:w-4/12 px-4 text-center transform hover:scale-105 transition-all">
                                <div className="relative flex flex-col min-w-0 break-words bg-blueGray-200 w-full mb-8 shadow-lg rounded-lg">
                                    <div className="px-4 py-5 flex-auto">
                                        <div className="text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-emerald-400">
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                                            </svg>
                                        </div>
                                        <h6 className="text-xl font-semibold">See Task</h6>
                                        <p className="mt-2 mb-4 text-blueGray-500">
                                            Let's see the results of your students!
                                        </p>
                                        <p className="mt-2 mb-4 text-blueGray-500">
                                            Motivate your students!
                                        </p>
                                    </div>
                                </div>
                            </Link>
                        </div>
                    </div>
                </section>
            </section>
        </div>
    )
}

export default MainTeacher