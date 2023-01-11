import { GetServerSideProps, NextPage } from "next";
import { Task, getTask } from "../../lib/db";
import Link from "next/link";
import { useState } from "react"
import Image from "next/image";
import BgImage from "src/assets/student-page.jpg"
import { isSymbolObject } from "util/types";

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

const Student = ({ tasks }: PostTask) => {

    const [response, setResponse] = useState("")
    const [student, setStudent] = useState("")

    const handleClick = async () => {
        await fetch("/api/task", {
            method: 'PUT',
            body: JSON.stringify({ response, student })
        }
        )
    }

    return (
        <>
            <div>
                <div className="">
                    <Image
                        src={BgImage}
                        fill="relative"
                        alt=""
                        className="max-sm:invisible"
                    />
                    <div className="absolute top-0 w-full h-full bg-center bg-cover bg-full ">
                        <span id="blackOverlay" className="w-full h-full absolute opacity-75 bg-black"></span>
                    </div>
                    <div>
                        {tasks.map((item, index) => (
                            <div className="min-h-screen bg-gray-100 py-6 flex flex-col justify-center sm:py-12">
                                <div className="relative py-3 sm:max-w-xl sm:mx-auto">
                                    <div
                                        className="absolute inset-0 bg-[#FE7A67] shadow-lg transform -skew-y-6 sm:skew-y-0 sm:-rotate-6 sm:rounded-3xl">
                                    </div>
                                    <div className="relative px-4 py-10 bg-white shadow-lg sm:rounded-3xl sm:p-20">
                                        <div key={index} className="max-w-md mx-auto"> {}
                                            <div>
                                                <h1 className="text-2xl font-bold">{item.discipline} Task</h1>
                                                <p className="text-xl font-semibold">{item.teacher}</p>
                                                <h1 className="mt-5 text-2xl font-semibold"><p>Question:</p>{item.question}</h1>
                                            </div>
                                            <form className="divide-y divide-gray-200">
                                                <div className="py-8 text-base leading-6 space-y-4 text-gray-700 sm:text-lg sm:leading-7">
                                                    <div className="relative">
                                                        <input value={student} onChange={(e) => setStudent(e.currentTarget.value)} type="text" className="peer placeholder-transparent h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:borer-rose-600" placeholder="Name" />
                                                        <label className="absolute left-0 -top-3.5 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm">Name</label>
                                                    </div>
                                                    <div className="relative">
                                                        <input value={response} onChange={(e) => setResponse(e.currentTarget.value)} type="text" className="peer placeholder-transparent h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:borer-rose-600" placeholder="Response" />
                                                        <label className="absolute left-0 -top-3.5 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm">Response</label>
                                                    </div>
                                                    <div className="flex justify-center ">
                                                        <button onClick={() => handleClick()} className="bg-[#FE7A67] mt-8 text-white rounded-md px-2 py-1 transform hover:scale-110 transition-all">Send</button>
                                                    </div>
                                                </div>
                                            </form>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                        
                    </div>
                </div>
            </div>
        </>
    )
}

export default Student