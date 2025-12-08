import Navbar from "../components/NavBar";
import { Typewriter } from "react-simple-typewriter";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#242424]">
      <Navbar />

      <div className="ml-[300px] min-h-screen text-[#ffffff] flex justify-center pt-12">

        {/* Outer container */}
        <div className="flex flex-col items-center w-full m-[30px] gap-[30px]">

          {/* Top section: Intro + Image */}
          <div className="border-4 border-[#e0e0e0] bg-[#0d0d0d] 
                          pt-[80px] pb-[80px] px-[90px]
                          flex items-center justify-between 
                          w-full mb-8">

            {/* Left side (Intro Text) */}
            <div className="flex flex-col items-start">
              <h1 className="text-[2.35rem] mb-2 text-[#00ff00]">
                <Typewriter
                  words={["Hello World!"]}
                  loop={false}
                  cursor
                  cursorStyle="|"
                  typeSpeed={150}
                  deleteSpeed={50}
                  delaySpeed={2000}
                  cursorColor="#00ff00"
                />
              </h1>

              <p className="text-[1.5rem] mb-4">my name is</p>

              <h2 className="text-[2.5rem] leading-tight">
                Abeyah <br /> Calpatura
              </h2>
            </div>

            {/* Right side (Photo) */}
            <div className="flex-shrink-0 ml-10">
              <img
                src="/pfp.JPG"
                alt="Profile"
                className="w-[440px] h-[250px] object-cover border-4 border-[#e0e0e0]"
              />
            </div>

          </div>

          {/* About Me Box */}
          <div className="border-4 border-[#e0e0e0] bg-[#0d0d0d] flex-col
                          pt-[35px] pb-[35px] px-[90px] w-full text-left max-w-[900px mx-auto">
            <p className="text-[1.05rem] [line-height:2] opacity-90">
              <span className="text-[#00ffe1] font-bold">*</span> Hi! I'm Abeyah <span className="opacity-70"> (uh-bay-yuh)</span>! 
              Currently, I'm a first-gen Filipina student as a senior earning my Bachelor's
              in Computer Science at California Polytechnic University of San Luis Obispo!
              I graduated from San Joaquin Delta College with an Associates in Mathematics and
              Interdisciplinary Studies in Mathematics and Sciences in the Summer of 2024. 
            </p>
            <br></br>
            {/* Fun facts heading */}
            <h4 className="text-xl font-semibold mt-4 mb-2">
              <span className="text-[#00ffe1] font-bold">*</span> Fun Facts About Me!
            </h4>

            {/* Fun facts list */}
            <ul className="list-asterisk pl-6 space-y-2 text-[1.05rem] [line-height:1.8] opacity-90">
              <li> I love photography </li>
              <li> Played piano for 10+ years!</li>
              <li> I love drawing digital art</li>
              <li> Currently learning bass guitar</li>
            </ul>

          </div>

        </div>

      </div>
    </div>
  );
}
