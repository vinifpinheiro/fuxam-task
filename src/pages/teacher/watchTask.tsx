import { GetServerSideProps, NextPage } from "next";
import { Task, getTask } from "../../../lib/db";
import Image from "next/image";
import BgImage from "src/assets/see-task.jpg"
import Link from "next/link";

interface PostTask {
    tasks: Task[]
}

export const getServerSideProps: GetServerSideProps = async () => {
    const tasks = await getTask()
    return {
        props: {
            tasks
        }
    }
}

const WatchTask = ({ tasks }: PostTask) => {

    return (
        <div>
            <div>
                <Image
                    src={BgImage}
                    fill="relative"
                    alt=""
                    className="max-sm:invisible"
                />
                <div className="absolute top-0 w-full h-full bg-center bg-cover bg-full ">
                    <span id="blackOverlay" className="w-full h-full absolute opacity-75 bg-black"></span>
                </div>
                <div className=" flex justify-center  pt-4  container relative  mx-auto">
                    <Link className=" flex items-center justify-center bg-slate-600 text-gray-50 font-bold w-8 h-8 rounded-full transform hover:scale-105 transition-all " href={"/"}>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 12h-15m0 0l6.75 6.75M4.5 12l6.75-6.75" />
                        </svg>
                    </Link>
                </div>
                <div className="flex justify-around max-sm:flex-col">
                    {tasks.map((item, index) => (
                        <div className="min-h-screen bg-gray-100 py-6 flex flex-col sm:py-12">
                            
                            <div className="relative py-2 sm:max-w-xl sm:mx-auto">
                                <div
                                    className="absolute inset-0 bg-[#FE7A67] shadow-lg transform -skew-y-6 sm:skew-y-0 sm:-rotate-6 sm:rounded-3xl">
                                </div>
                                <div className="relative px-4 py-12 bg-white shadow-lg sm:rounded-3xl sm:p-10 ">
                                    <div key={index} className="max-w-md mx-auto">
                                        <div>
                                            <h1 className="text-2xl font-bold">{item.discipline} Task</h1>
                                            <p className="text-xl font-semibold">{item.teacher}</p>
                                        </div>
                                    </div>
                                    <div className="flex justify-center mt-4">
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 9.75l4.5 4.5m0-4.5l-4.5 4.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                        </svg>

                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}

                </div>
            </div>
        </div>
    )
}

export default WatchTask