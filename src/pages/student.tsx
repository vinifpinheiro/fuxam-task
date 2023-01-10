import { GetServerSideProps, NextPage } from "next";
import { Task, getTask } from "../../lib/db";
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

const Student = ({ tasks }: PostTask) => {


    return (
        <>
            <div className="h-max bg-gradient-to-r from-orange-300 to-red-500 ">
                <div className=" flex justify-center  pt-4  ">
                    <Link className=" flex items-center justify-center bg-slate-600 text-gray-50 font-bold w-8 h-8 rounded-full " href={"/"}>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 12h-15m0 0l6.75 6.75M4.5 12l6.75-6.75" />
                        </svg>
                    </Link>
                </div>
                
                <div className="flex justify-center pt-4 min-w-screen min-h-[480px]">
                    <div className="flex flex-col ">
                        {
                            tasks?.map((item, index) => (
                                <div key={item.id} className="bg-white px-12 py-10  text-2xl rounded-lg w-90 mb-14">
                                    <div className="flex justify-start ">
                                        <span className=" flex  bg-slate-600 flex justify-center items-center rounded-full w-8 h-8 text-gray-50 font-bold">{item.id}</span>
                                    </div>
                                    <div className="flex justify-center">

                                        <div className="flex  flex-col font-bold text-center">
                                            <p className="">{item.discipline} Task</p>
                                            <p>{item.teatcher_name}</p>

                                        </div>

                                    </div>

                                    <div key={item.id} className="flex justify-center text-center">
                                        <div className="px-12 py-8 flex ">
                                            <form action="" className="flex flex-col ">
                                                <label htmlFor="" className="mb-5">{item.question}</label>
                                                <textarea className="form-control
                                                    block
                                                    w-full
                                                    px-3
                                                    py-1.5
                                                    text-base
                                                    font-normal
                                                    text-gray-700
                                                    bg-white bg-clip-padding
                                                    border border-solid border-slate-600
                                                    rounded
                                                    transition
                                                    ease-in-out
                                                    m-0
                                                    focus:text-gray-700 focus:bg-white focus:border-purple-600 focus:outline-none
                                                    "
                                                    name="" id="" ></textarea>
                                                <div className="flex justify-center mt-6">
                                                    <button type="submit" className="flex justify-center p-4 bg-slate-600 text-gray-50 rounded-xl ">Send</button>
                                                </div>
                                                
                                            </form>
                                        </div>
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                </div>

            </div>

        </>
    )
}

export default Student