import { GetServerSideProps, NextPage } from "next";
import { Task, getTask } from "../../lib/db";
import Link from "next/link";
import { useState } from "react"
import Image from "next/image";
import BgImage from "src/assets/student-page.jpg"
import router from "next/router";

interface PostTask {
    tasks: Task[]
}

interface FormData {
    student: string
    response: string
    id: string
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
    const refreshData = () => {
        router.replace(router.asPath)
    }

    const [form, setForm] = useState<FormData>({
        student: '',
        response: '',
        id: '',
    })

    


    async function deleteNote(id: string) {
        try {
            fetch(`http://localhost:3000/api/methods/${id}`, {
                headers: {
                    "Content-Type": "application/json",
                },
                method: 'DELETE'
            }).then(() => {
                refreshData()
            })
        } catch (error) {
            console.log(error);
        }
    }

    


    return (
        <>
            <div>
                <div className="">
                    <Image
                        src={BgImage}
                        fill={true}
                        alt=""
                        className=" max-sm:invisible"
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

                    <div>
                        {tasks.map((item, index) => (
                            <div className="min-h-screen bg-gray-100 py-6 flex flex-col justify-center sm:py-12">

                                <div className="relative py-3 sm:max-w-xl sm:mx-auto">
                                    <div
                                        className="absolute inset-0 bg-[#FE7A67] shadow-lg transform -skew-y-6 sm:skew-y-0 sm:-rotate-6 sm:rounded-3xl">
                                    </div>
                                    <div className="relative px-4 py-10 bg-white shadow-lg sm:rounded-3xl sm:p-20">
                                        <div key={index} className="max-w-md mx-auto">
                                            <div>

                                                <h1 className="text-2xl font-bold">{item.discipline} Task</h1>
                                                <p className="text-xl font-semibold">{item.teacher}</p>
                                                <h1 className="mt-5 text-2xl font-semibold"><p>Question:</p>{item.question}</h1>
                                            </div>
                                            <form className="divide-y divide-gray-200">
                                                <div className="py-8 text-base leading-6 space-y-4 text-gray-700 sm:text-lg sm:leading-7">
                                                    <div className="relative">
                                                        <input
                                                            value={form.student}
                                                            onChange={e => setForm({ ...form, student: e.target.value })} type="text" className="peer placeholder-transparent h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:borer-rose-600" placeholder="Name" />
                                                        <label className="absolute left-0 -top-3.5 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm">Name</label>
                                                    </div>
                                                    <div className="relative">
                                                        <input
                                                            value={form.response}
                                                            onChange={e => setForm({ ...form, response: e.target.value })} type="text" className="peer placeholder-transparent h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:borer-rose-600" placeholder="Response" />
                                                        <label className="absolute left-0 -top-3.5 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm">Response</label>
                                                    </div>
                                                    
                                                </div>
                                            </form>
                                            <div className="flex justify-center">
                                                <button onClick={() => deleteNote(item.id)} className="bg-[#FE7A67] mt-4 text-white rounded-md px-4 py-2 transform hover:scale-110 transition-all felx justify-center">Send</button>
                                            </div>
                                            
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