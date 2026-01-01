import Navbar from "../components/NavBar";
import { Typewriter } from "react-simple-typewriter";
import { useState, useEffect } from "react";

export default function Home() {
  const photos = ["/pfp.JPG", "/pfp2.jpeg", "/pfp3.jpeg"];
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % photos.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen">
      <Navbar />

      <div className="home-content min-h-screen flex justify-center pt-12">
        <div className="outer-wrap flex flex-col items-center w-full m-[30px] gap-[30px]">

          {/* INTRO SECTION */}
          <div
            className="intro-section border-4 w-full"
            style={{
              backgroundColor: "var(--panel)",
              borderColor: "var(--border)",
            }}
          >
            {/* Text */}
            <div className="intro-text-block flex flex-col items-center">
              <div className="typewriter-wrapper">
                <h1 className="intro-title mb-2"
                    style={{ color: "var(--terminal-green)" }}
                >
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
              </div>

              <p className="intro-subtitle opacity-80 mb-4">
                my name is
              </p>

              <h2 className="intro-name leading-tight">
                Abeyah <br /> Calpatura
              </h2>
            </div>

            {/* Photo */}
            <div
              className="photo-container border-4"
              style={{ borderColor: "var(--border)" }}
            >
              <img
                key={photos[index]}
                src={photos[index]}
                alt="Profile"
                className={`profile-photo fade-photo object-cover ${
                  photos[index] === "/pfp2.jpeg" ? "pfp2-adjust" : ""
                }`}
              />
            </div>
          </div>

          {/* ABOUT */}
          <div
            className="about-section panel border-4 w-full text-left"
            style={{
              backgroundColor: "var(--panel)",
              borderColor: "var(--border)",
            }}
          >
            <p className="about-text opacity-90">
              <strong>*</strong> Hi! I'm Abeyah{" "}
              <span className="opacity-70">(uh-bay-yuh)</span>! I’m a first-gen
              Filipina senior earning my Bachelor’s in Computer Science at
              California Polytechnic University of San Luis Obispo. I graduated
              from San Joaquin Delta College with Associates in Mathematics and
              Interdisciplinary Studies.
            </p>

            <h4 className="fun-facts-heading font-semibold mt-4 mb-2">
              <strong>*</strong> Fun Facts About Me!
            </h4>

            <ul className="fun-facts-list list-asterisk pl-6 space-y-2 opacity-90">
              <li>I love photography</li>
              <li>Played piano for 10+ years!</li>
              <li>I love drawing digital art</li>
              <li>Currently learning bass guitar</li>
            </ul>
          </div>

          {/* WORK EXPERIENCE */}
          <div className="nes-container with-title w-full">
            <p className="title">Work Experience</p>
            <p>
              I currently work as a research and development intern at Sandia
              National Laboratories, contributing to QUENDS through unit tests,
              CI/CD pipelines, and documentation. I previously interned at Ames
              National Laboratory working with Perlmutter on NWChemEx
              performance analysis.
            </p>
          </div>

        </div>
      </div>

      {/* PAGE-SPECIFIC STYLES */}
      <style>{`
        .home-content {
          margin-left: 0;
        }

        .outer-wrap {
          max-width: 1100px;
          width: 100%;
        }

        .typewriter-wrapper {
          min-width: 200px;
          text-align: center;
        }

        .intro-section {
          padding: 40px 20px;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 30px;
          text-align: center;
        }

        .photo-container {
          display: flex;
          justify-content: center;
        }

        .profile-photo {
          width: 100%;
          max-width: 350px;
          aspect-ratio: 16 / 9;
        }

        @media (min-width: 1024px) {
          .home-content {
            margin-left: 300px;
          }

          .intro-section {
            flex-direction: row;
            justify-content: space-between;
            align-items: center;
            padding: 60px 70px;
            text-align: left;
          }

          .intro-text-block {
            align-items: flex-start;
          }

          .profile-photo {
            width: 440px;
            height: 250px;
          }
        }
      `}</style>
    </div>
  );
}
