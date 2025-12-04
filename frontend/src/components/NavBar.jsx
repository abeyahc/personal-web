import { Link } from "react-router-dom";
import "nes.css/css/nes.min.css";

export default function Navbar() {
  return (
  <nav className="fixed left-10 top-10 bottom-10 w-48
                flex flex-col h-screen
                border-4 border-white
                px-6 py-12
                justify-start">
      
      {/* Top Buttons */}
      <div className="flex flex-col gap-6">
        <Link to="/home">
          <button className="nes-btn w-full is-normal">
            About Me
          </button>
        </Link>

        <Link to="/projects">
          <button className="nes-btn w-full is-normal">
            Projects
          </button>
        </Link>

        <Link to="/photography">
          <button className="nes-btn w-full is-normal">
            Photography
          </button>
        </Link>
      </div>

      {/* Bottom Social Icons */}
      <div className="flex gap-3 items-center mt-auto pt-10">
        <i className="nes-icon github is-medium"></i>
        <i className="nes-icon linkedin is-medium"></i>
        <i className="nes-icon instagram is-medium"></i>
      </div>

    </nav>
  );
}
