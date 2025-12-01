import { useState } from "react";
import sprite from "../assets/personal-sprite.png";
import { useNavigate } from "react-router-dom";
import "nes.css/css/nes.min.css";
import "../index.css";

export default function Load() {
  const [isLoading, setIsLoading] = useState(false);

  const navigate = useNavigate();

  const handleLogin = () => {
    setIsLoading(true);

    setTimeout(() => {
      setIsLoading(false);
      console.log("Finished Loading");
      navigate("/home");
    }, 3000);
  };

  if (isLoading) {
    return <LoadingScreen />;
  }

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-[#242424] gap-6">
      <div className="relative scale-450 sm:scale-200 md:scale-300 lg:scale-[4] xl:scale-[4.5] 2xl:scale-[5]">
          <div 
            className="sprite" 
            style={{backgroundImage: `url(${sprite})`}} 
          >
          <button 
            className="nes-btn absolute top-[95px] left-[123px] font-nes scale-100 is-small"
            onClick={handleLogin}
          >
          Login
          </button>
          </div>
        </div>
    </div>
  );
}

// =======================
// Loading Screen Component
// =======================
function LoadingScreen() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-[#242424] gap-4">
      <i className="nes-icon coin is-large"></i>
      <p className="font-nes text-white">Loading...</p>
    </div>
  );
}
