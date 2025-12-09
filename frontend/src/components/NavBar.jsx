import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";
import "nes.css/css/nes.min.css";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Mobile Hamburger Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="hamburger-btn nes-btn fixed top-1 left-1 z-[60]"
        aria-label="Toggle menu"
      >
        {isOpen ? <X size={25} /> : <Menu size={25} />}
      </button>

      {/* Overlay for mobile */}
      {isOpen && (
        <div
          className="mobile-overlay fixed inset-0 bg-black bg-opacity-50 z-40"
          onClick={() => setIsOpen(false)}
        />
      )}

      {/* Navbar */}
      <nav
        className={`navbar-menu fixed left-0 top-0 min-h-screen w-[300px] flex flex-col justify-between bg-[#1d1d1d] px-[32px] py-[48px] z-50 transition-transform duration-300 ease-in-out ${
          isOpen ? "open" : ""
        }`}
      >
        {/* Top Buttons */}
        <div className="flex flex-col gap-[32px] nav-buttons-container">
          <Link to="/home" onClick={() => setIsOpen(false)}>
            <button className="nes-btn w-full is-normal">About Me</button>
          </Link>

          <Link to="/projects" onClick={() => setIsOpen(false)}>
            <button className="nes-btn w-full is-normal">Projects</button>
          </Link>

          <Link to="/photography" onClick={() => setIsOpen(false)}>
            <button className="nes-btn w-full is-normal">Photography</button>
          </Link>
        </div>

        {/* Bottom Social Icons */}
        <div className="flex gap-[15px] items-center justify-center mt-auto">
          <a
            href="https://github.com/abeyahc"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:opacity-80 transition-opacity"
          >
            <i className="nes-icon github is-medium"></i>
          </a>

          <a
            href="https://linkedin.com/in/abeyah-calpatura"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:opacity-80 transition-opacity"
          >
            <i className="nes-icon linkedin is-medium"></i>
          </a>

          <a
            href="https://instagram.com/abeyahc"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:opacity-80 transition-opacity"
          >
            <i className="nes-icon instagram is-medium"></i>
          </a>
        </div>
      </nav>

      <style>{`
        /* Mobile styles (default) */
        .hamburger-btn {
          display: block;
        }

        .navbar-menu {
          transform: translateX(-100%);
        }

        .navbar-menu.open {
          transform: translateX(0);
        }

        .nav-buttons-container {
          padding-top: 88px;
        }

        .mobile-overlay {
          display: block;
        }

        /* Desktop styles */
        @media (min-width: 1024px) {
          .hamburger-btn {
            display: none !important;
          }

          .navbar-menu {
            transform: translateX(0) !important;
          }

          .nav-buttons-container {
            padding-top: 40px;
          }

          .mobile-overlay {
            display: none !important;
          }
        }
      `}</style>
    </>
  );
}