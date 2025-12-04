import { Link } from "react-router-dom";
import "nes.css/css/nes.min.css";

export default function Navbar() {
  return (
    <nav className="fixed left-0 top-0 min-h-screen w-[300px]
                    flex flex-col justify-between
                    bg-[#1d1d1d] border-r-[4px] border-white
                    px-[32px] py-[48px] z-50">

      {/* Top Buttons */}
      <div className="flex flex-col gap-[32px] pt-[40px]">
        <Link to="/home">
          <button className="nes-btn w-full is-normal">About Me</button>
        </Link>

        <Link to="/projects">
          <button className="nes-btn w-full is-normal">Projects</button>
        </Link>

        <Link to="/photography">
          <button className="nes-btn w-full is-normal">Photography</button>
        </Link>
      </div>

      {/* Bottom Social Icons */}
      <div className="flex gap-[15px] items-center justify-center mt-auto">
        <i className="nes-icon github is-medium"></i>
        <i className="nes-icon linkedin is-medium"></i>
        <i className="nes-icon instagram is-medium"></i>
      </div>
    </nav>
  );
}