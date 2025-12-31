import { useState, useRef } from "react";
import sprite from "../assets/personal-sprite.png";
import { useNavigate } from "react-router-dom";
import click from "../assets/button_click.mp3";
import "nes.css/css/nes.min.css";
import "../index.css";


export default function Load() {
  const [isLoading, setIsLoading] = useState(false);
  const [isZooming, setIsZooming] = useState(false);

  const clickSound = useRef(new Audio(click));
  
  const navigate = useNavigate();

  const handleLogin = () => {
    clickSound.current.currentTime = 0;
    clickSound.current.volume = 0.3; // optional NES-style subtle click
    clickSound.current.play();

    setIsZooming(true);

    setTimeout(() => {
      setIsZooming(false);
      setIsLoading(true);
    }, 800);

    // Navigate after animation finishes
    setTimeout(() => {
      navigate("/home");
    }, 800); // match animation duration
  };


  if (isLoading) {
    return <LoadingScreen />;
  }

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-[#242424] gap-6 overflow-hidden">
      <div 
        className={`relative scale-450 sm:scale-200 md:scale-300 lg:scale-[4] xl:scale-[4.5] 2xl:scale-[5] transition-all duration-1000 ease-in-out ${
          isZooming ? 'scale-[20] opacity-0' : ''
        }`}
      >
        <div 
          className="sprite relative" 
          style={{backgroundImage: `url(${sprite})`}} 
        >
          <button 
            className="nes-btn absolute top-[85px] left-[105px] font-nes scale-50 is-small"
            onClick={handleLogin}
            disabled={isZooming}
          >
            Login
          </button>
        </div>
      </div>
    </div>
  );
}