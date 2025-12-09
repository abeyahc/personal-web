import Navbar from "../components/NavBar";
import { Typewriter } from "react-simple-typewriter";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#242424]">
      <Navbar />

      <div className="home-content min-h-screen text-[#ffffff] flex justify-center pt-12">

        {/* Outer container */}
        <div className="flex flex-col items-center w-full m-[30px] gap-[30px]">

          {/* Top section: Intro + Image */}
          <div className="intro-section border-4 border-[#e0e0e0] bg-[#0d0d0d] 
                          w-full mb-8">

            {/* Left side (Intro Text) */}
            <div className="intro-text-block flex flex-col items-center">

              {/* Typewriter text wrapper to stop shifting */}
              <div className="typewriter-wrapper">
                <h1 className="intro-title text-[#00ff00] mb-2">
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
              </div>

              <p className="intro-subtitle mb-4">my name is</p>

              <h2 className="intro-name leading-tight">
                Abeyah <br /> Calpatura
              </h2>
            </div>

            {/* Right side (Photo) */}
            <div className="photo-container flex-shrink-0">
              <img
                src="/pfp.JPG"
                alt="Profile"
                className="profile-photo object-cover border-4 border-[#e0e0e0] photo-jiggle"
              />
            </div>

          </div>

          {/* About Me Box */}
          <div className="about-section border-4 border-[#e0e0e0] bg-[#0d0d0d] flex-col w-full text-left">
            <p className="about-text opacity-90">
              <span className="text-[#00ffe1] font-bold">*</span> Hi! I'm Abeyah <span className="opacity-70"> (uh-bay-yuh)</span>! 
              Currently, I'm a first-gen Filipina student as a senior earning my Bachelor's
              in Computer Science at California Polytechnic University of San Luis Obispo!
              I graduated from San Joaquin Delta College with an Associates in Mathematics and
              Interdisciplinary Studies in Mathematics and Sciences in the Summer of 2024. 
            </p>
            <br />

            {/* Fun facts heading */}
            <h4 className="fun-facts-heading font-semibold mt-4 mb-2">
              <span className="text-[#00ffe1] font-bold">*</span> Fun Facts About Me!
            </h4>

            {/* Fun facts list */}
            <ul className="fun-facts-list list-asterisk pl-6 space-y-2 opacity-90">
              <li>I love photography</li>
              <li>Played piano for 10+ years!</li>
              <li>I love drawing digital art</li>
              <li>Currently learning bass guitar</li>
            </ul>

          </div>

        </div>

      </div>

      <style>{`
        /* Mobile styles (default) */
        .home-content {
          margin-left: 0;
        }

        /* Prevent layout from shifting during typewriter animation */
        .typewriter-wrapper {
          display: inline-block;
          min-width: 200px;
          text-align: center;
        }

        /* Stabilize entire intro text on mobile */
        .intro-text-block {
          width: 100%;
          text-align: center;
        }

        .intro-section {
          padding: 40px 20px;
          flex-direction: column;
          display: flex;
          align-items: center;
          text-align: center;
          gap: 30px;
        }

        .intro-title {
          font-size: 1.75rem;
        }

        .intro-subtitle {
          font-size: 1.2rem;
        }

        .intro-name {
          font-size: 2rem;
        }

        .photo-container {
          margin-left: 0;
          width: 100%;
          display: flex;
          justify-content: center;
        }

        .profile-photo {
          width: 100%;
          max-width: 350px;
          height: auto;
          aspect-ratio: 16/9;
        }

        .about-section {
          padding: 30px 20px;
          max-width: 100%;
        }

        .about-text {
          font-size: 1rem;
          line-height: 1.8;
        }

        .fun-facts-heading {
          font-size: 1.1rem;
        }

        .fun-facts-list {
          font-size: 1rem;
          line-height: 1.6;
        }

        /* Tablet styles */
        @media (min-width: 768px) {
          .intro-section {
            padding: 50px 40px;
          }

          .intro-title {
            font-size: 2rem;
          }

          .intro-subtitle {
            font-size: 1.35rem;
          }

          .intro-name {
            font-size: 2.25rem;
          }

          .profile-photo {
            max-width: 400px;
          }

          .about-section {
            padding: 35px 50px;
          }
        }

        /* Desktop styles */
        @media (min-width: 1024px) {
          .home-content {
            margin-left: 300px;
          }

          /* Restore original text alignment on desktop */
          .intro-text-block {
            text-align: left;
            align-items: flex-start;
          }

          .intro-section {
            padding: 80px 90px;
            flex-direction: row;
            justify-content: space-between;
            text-align: left;
          }

          .intro-title {
            font-size: 2rem;
          }

          .intro-subtitle {
            font-size: 1.5rem;
          }

          .intro-name {
            font-size: 2.5rem;
          }

          .photo-container {
            margin-left: 40px;
            width: auto;
          }

          .profile-photo {
            width: 440px;
            height: 250px;
            max-width: none;
          }

          .about-section {
            padding: 35px 90px;
            max-width: 100%;
          }

          .about-text {
            font-size: 1.05rem;
            line-height: 2;
          }

          .fun-facts-heading {
            font-size: 1.25rem;
          }

          .fun-facts-list {
            font-size: 1.05rem;
            line-height: 1.8;
          }
        }
      `}</style>
    </div>
  );
}
