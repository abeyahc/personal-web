import { Link, useLocation } from "react-router-dom";
import "nes.css/css/nes.min.css";

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 w-full z-50 bg-[#209cee] shadow-lg">
      <div className="flex flex-wrap gap-6 justify-center p-8">
        <Link to="/home">
          <button 
            className="nes-btn" 
            style={{
              fontSize: '1.5rem',
              padding: '1.5rem 2.5rem',
              minWidth: '200px'
            }}
          >
            About Me
          </button>
        </Link>
      </div>
    </nav>
  );
}