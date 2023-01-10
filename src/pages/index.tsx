import { type NextPage } from "next";
import Link from "next/link";

const Home: NextPage = () => {

  return (
    <div className=" grid bg-gradient-to-r from-orange-300 to-red-500 justify-center items-center h-screen">
      <div className="container px-40 py-8 bg-slate-700 rounded-xl place-items-center ">
          <p className="text-xl text-center text-white ">
            Chose your user
          </p>
          <h1 className="mt-4 text-3xl font-semibold text-center text-gray-800 capitalize lg:text-4xl dark:text-white">Who are you?</h1>
          <div className="mt-6 space-y-8 xl:mt-12">
          <Link href={"/teatcher/mainTeatcher"} className="flex justify-center py-4  border border-white cursor-pointer rounded-xl hover:border-2 hover:ease-out duration-100 ">
              <div className="flex items-center">
                <div className="flex ">
                  <h2 className="text-lg font-medium text-white sm:text-2xl ">Teatcher</h2>
                </div>
              </div>
            </Link>
          <Link href={"/student"} className="flex justify-center items-center max-w-2xl  py-4 border border-white cursor-pointer rounded-xl hover:border-2 hover:ease-out duration-100">
              <div className="flex items-center">
                <div className="flex ">
                  <h2 className="text-lg font-medium text-white sm:text-2xl ">Student</h2>
                </div>
              </div>
            </Link>
          </div>
        </div>
    </div>
  );
  
};

export default Home;
