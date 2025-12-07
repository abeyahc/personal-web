import Navbar from "../components/NavBar";
import { Typewriter } from "react-simple-typewriter";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#242424]">
      <Navbar />
      <div className="ml-[300px] min-h-screen text-[#ffffff] flex justify-center pt-12">
        <div className="border-4 border-[#e0e0e0] bg-[#0d0d0d] pt-[80px] pb-[80px] pl-[90px] pr-[90px] flex items-center justify-between h-fit w-full m-[30px]">
          <div className="flex flex-col">
            
            {/* Typing effect styled like original h1 */}
            <h1 className="text-[2.35rem] mb-2">
              <Typewriter
                words={["Hello World!"]}
                loop={false}
                cursor
                cursorStyle="|"
                typeSpeed={150}
                deleteSpeed={50}
                delaySpeed={2000}
              />
            </h1>

            <p className="text-[1.5rem] mb-4">my name is</p>
            
            <h2 className="text-[2.5rem] leading-tight">
              Abeyah<br />Calpatura
            </h2>

          </div>

          <div className="flex-shrink-0">
            <img
              src="/pfp.JPG"
              alt="Profile"
              className="w-[440px] h-[250px] object-cover border-4 border-white"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
