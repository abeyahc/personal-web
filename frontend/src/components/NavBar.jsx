import { useEffect, useState, useRef } from "react";
import { Link } from "react-router-dom";
import { Menu, X, Sun, Moon } from "lucide-react";
import click from "../assets/button_click.mp3";
import "nes.css/css/nes.min.css";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const audioRef = useRef(new Audio(click));

  const play = () => {
    audioRef.current.currentTime = 0;
    audioRef.current.play();
  };

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme === "dark") {
      document.documentElement.classList.add("dark");
    }
  }, []);

  const toggleTheme = () => {
    play();
    const root = document.documentElement;
    const isDark = root.classList.toggle("dark");
    localStorage.setItem("theme", isDark ? "dark" : "light");
  };

  const isDark = document.documentElement.classList.contains("dark");

  return (
    <>
      {/* Mobile Hamburger Button */}
      <button
        onClick={() => {
          play();
          setIsOpen(!isOpen);
        }}
        className="hamburger-btn nes-btn fixed top-4 right-4 z-[60]"
        aria-label="Toggle menu"
      >
        {isOpen ? <X size={25} /> : <Menu size={25} />}
      </button>

      {/* Mobile Overlay */}
      {isOpen && (
        <div
          className="mobile-overlay fixed inset-0 bg-black bg-opacity-50 z-40"
          onClick={() => setIsOpen(false)}
        />
      )}

      {/* Navbar */}
      <nav
        className={`navbar-menu fixed left-0 top-0 min-h-screen w-[300px] flex flex-col justify-between px-[32px] py-[48px] z-50 transition-transform duration-300 ease-in-out ${
          isOpen ? "open" : ""
        }`}
        style={{
          backgroundColor: "var(--nav-bg)",
          color: "var(--text)",
        }}
      >
        {/* Top */}
        <div className="nav-top flex gap-[30px] w-full">
          <Link
            to="/"
            onClick={() => {
              play();
              setIsOpen(false);
            }}
          >
            <button className="nes-btn is-primary w-full">Home</button>
          </Link>

          <button
            onClick={toggleTheme}
            className="nes-btn is-warning w-full"
          >
            {isDark ? <Sun size={18} /> : <Moon size={18} />}
          </button>
        </div>

        {/* Nav Buttons */}
        <div className="flex flex-col nav-buttons-container">
          <Link to="/home" onClick={() => { play(); setIsOpen(false); }}>
            <button className="nes-btn w-full is-normal">About Me</button>
          </Link>

          <Link to="/projects" onClick={() => { play(); setIsOpen(false); }}>
            <button className="nes-btn w-full is-normal">Projects</button>
          </Link>

          <Link to="/photography" onClick={() => { play(); setIsOpen(false); }}>
            <button className="nes-btn w-full is-normal">Photography</button>
          </Link>
        </div>

        {/* Social Icons */}
        <div className="social-icons-container flex gap-[15px] items-center justify-center mt-auto">
          <a href="https://github.com/abeyahc" target="_blank" rel="noopener noreferrer">
            <i className="nes-icon github is-medium"></i>
          </a>
          <a href="https://linkedin.com/in/abeyah-calpatura" target="_blank" rel="noopener noreferrer">
            <i className="nes-icon linkedin is-medium"></i>
          </a>
          <a href="https://instagram.com/abeyahc" target="_blank" rel="noopener noreferrer">
            <i className="nes-icon instagram is-medium"></i>
          </a>
        </div>
      </nav>

      {/* =====================================================
         STYLES
         ===================================================== */}
      <style>{`
        .hamburger-btn {
          display: block;
          position: fixed !important;
          top: 0.25rem !important;
          right: 0.25rem !important;
        }

        .navbar-menu {
          top: 0;
          right: 0;
          width: 100vw;
          height: 100vh;
          transform: translateY(-100%);
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          gap: 40px;
        }

        .navbar-menu.open {
          transform: translateY(0);
        }

        .nav-buttons-container {
          width: 100%;
          max-width: 250px;
          display: flex;
          flex-direction: column;
          gap: 20px;
        }

        .mobile-overlay {
          display: none;
        }

        @media (min-width: 1024px) {
          .hamburger-btn {
            display: none !important;
          }

          .navbar-menu {
            width: 300px !important;
            height: 100vh !important;
            left: 0;
            top: 0;
            justify-content: space-between;
            align-items: flex-start;
            transform: none !important;
          }

          .nav-buttons-container {
            gap: 32px;
            max-width: none;
          }

          .social-icons-container {
            width: 100%;
            display: flex;
            justify-content: center;
          }
        }
      `}</style>
    </>
  );
}
