import { type NextPage } from "next";
import Link from "next/link";
import Image from "next/image";
import ImgTeatcher from "src/assets/teacher.svg"
import ImgStudent from "src/assets/aluno.svg";

const Home: NextPage = () => {

  return (
    <div className=" grid bg-gray-900  bg-gradient-to-bl justify-center items-center h-screen ">
      <div className="container shadow-box-[0_35px_35px_rgba(255, 255, 255, 1)] px-40 py-8 bg-white rounded-xl place-items-center max-sm:px-20 ">
        <p className="text-xl text-center text-[#222222] font-bold max-sm:text-sm">
          What User You Are?
        </p>
        <h1 className="mt-4 text-sm  text-center text-[#222222] capitalize lg:text-base">Choose an account type</h1>
        <div className="mt-6 space-y-8 xl:mt-12 ">
          <Link href={"/teacher/mainTeacher"} className="flex border border-[##00000033] cursor-pointer rounded-2xl  transform hover:scale-105 transition-all ">
            <div className="flex items-center ">
              <div className="flex items-center bg-[#FE7A67] rounded-l-2xl ">
                <Image
                  className=""
                  src={ImgTeatcher}
                  alt=""
                  width={40}
                  height={70}
                />
                
              </div>
              <h2 className="text-lg text-[#222222] ml-4 font-bold sm:text-xl ">Teacher</h2>
            </div>
          </Link>

          <Link href={"/student"} className="flex   border border-[##00000033] cursor-pointer rounded-2xl  transform hover:scale-105 transition-all">
            <div className="flex items-center justify-start">
              <div className="flex items-center bg-[#FE7A67] rounded-l-2xl ">
                <Image
                  className=""
                  src={ImgStudent}
                  alt=""
                  width={40}
                  height={70}
                />
              </div>
              <h2 className="text-lg text-[#222222] ml-4 font-bold sm:text-xl ">Student</h2>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );

};

export default Home;
