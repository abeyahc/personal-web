import { useRef, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import click from "../assets/button_click.mp3";
import bgMusic from "../assets/music.mp3";
import { musicPlayer } from "../utils/music";

export default function MusicPrompt() {
  const navigate = useNavigate();
  const clickSound = useRef(new Audio(click));

  const [selectedChoice, setSelectedChoice] = useState(
    localStorage.getItem("musicPreference")
  );

  const choices = [
    { value: "enabled", label: "yeah, turn it on" },
    { value: "disabled", label: "no thanks, keep it quiet" },
  ];

  const [cursor, setCursor] = useState(() => {
    const saved = localStorage.getItem("musicPreference");
    const idx = choices.findIndex((c) => c.value === saved);
    return idx >= 0 ? idx : 0;
  });

  const playClick = () => {
    clickSound.current.currentTime = 0;
    clickSound.current.volume = 0.3;
    clickSound.current.play();
  };


  useEffect(() => {
    if (choices[cursor].value === "enabled") {
      musicPlayer.start(bgMusic);
    } else {
      musicPlayer.stop();
    }
  }, [cursor]);

  const confirm = (index) => {
    const choice = choices[index].value;
    playClick();
    localStorage.setItem("musicPreference", choice);
    setSelectedChoice(choice);

    if (choice === "disabled") {
      musicPlayer.stop();
    }
    // if "enabled", music is already playing from hover preview

    setTimeout(() => navigate("/home"), 250);
  };

  useEffect(() => {
    if (selectedChoice) {
      navigate("/home");
      return;
    }

    const handleKeyDown = (e) => {
      if (e.key === "ArrowUp") {
        e.preventDefault();
        setCursor((prev) => (prev - 1 + choices.length) % choices.length);
      } else if (e.key === "ArrowDown") {
        e.preventDefault();
        setCursor((prev) => (prev + 1) % choices.length);
      } else if (e.key === "Enter") {
        confirm(cursor);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [cursor, navigate, selectedChoice]);

  return (
    <div className="ut-screen">
      <div className="ut-box">
        <div className="ut-header">
          <div className="ut-portrait">♪</div>
          <div>
            <div className="ut-name">* Abeyah</div>
            <div className="ut-text">
              oh... hey there...<br />
              i was just listening to some tunes...<br />
              would you like some music<br />
              while you look around..?<br />
              <span className="cursor-blink">▼</span>
            </div>
          </div>
        </div>

        <hr className="ut-divider" />

        <div className="ut-choices">
          {choices.map(({ value, label, sub }, index) => (
            <label
              key={value}
              className={`ut-choice${cursor === index ? " active" : ""}${selectedChoice === value ? " selected" : ""}`}
              onMouseEnter={() => setCursor(index)}
              onDoubleClick={() => confirm(index)}
            >
              <input
                className="ut-radio"
                type="radio"
                name="music"
                value={value}
                readOnly
                checked={selectedChoice === value}
              />
              <span className="ut-arrow">▶</span>
              <div>
                <div className="ut-label">{label}</div>
                <div className="ut-sublabel">{sub}</div>
              </div>
            </label>
          ))}
        </div>

      </div>

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Press+Start+2P&display=swap');

        .ut-screen {
          min-height: 100vh;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 2.5rem 1.5rem;
          background: #1a1a2e;
          font-family: 'Press Start 2P', monospace;
        }

        .ut-box {
          width: 100%;
          max-width: 680px;
          border: 5px solid #fff;
          background: #000;
          color: #fff;
          padding: 2rem 2.25rem;
          position: relative;
        }

        .ut-box::before {
          content: '';
          position: absolute;
          inset: 5px;
          border: 2px solid #fff;
          pointer-events: none;
        }

        .ut-portrait {
          width: 88px;
          height: 88px;
          border: 3px solid #fff;
          flex-shrink: 0;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 44px;
        }

        .ut-header {
          display: flex;
          gap: 1.25rem;
          align-items: flex-start;
          margin-bottom: 1.5rem;
        }

        .ut-name {
          font-size: 14px;
          color: #ffff00;
          margin-bottom: 10px;
          letter-spacing: 1px;
        }

        .ut-text {
          font-size: 15px;
          line-height: 2;
          color: #fff;
        }

        .cursor-blink {
          display: inline-block;
          animation: blink 0.8s step-end infinite;
        }

        @keyframes blink {
          0%, 100% { opacity: 1; }
          50% { opacity: 0; }
        }

        .ut-divider {
          border: none;
          border-top: 2px solid #fff;
          margin: 1.25rem 0;
        }

        .ut-choices {
          display: flex;
          flex-direction: column;
          gap: 14px;
        }

        .ut-choice {
          display: flex;
          align-items: center;
          gap: 14px;
          cursor: pointer;
          font-size: 14px;
          color: #fff;
          padding: 8px 0;
          user-select: none;
        }

        .ut-radio { display: none; }

        .ut-arrow {
          color: #ffff00;
          font-size: 25px;
          opacity: 0;
          width: 20px;
          flex-shrink: 0;
          transform: translateY(-7px);
        }

        .ut-choice.active {
          color: #ffff00;
        }

        .ut-choice.active .ut-arrow {
          opacity: 1;
          animation: pulse 0.6s step-end infinite;
        }

        .ut-choice.selected .ut-sublabel {
          color: #cccc00;
        }

        @keyframes pulse {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.3; }
        }

        .ut-sublabel {
          font-size: 11px;
          color: #aaa;
          margin-top: 5px;
        }

        .ut-choice.active .ut-sublabel { color: #cccc00; }

        @media (max-width: 640px) {
          .ut-box { padding: 1.5rem; }
          .ut-portrait { width: 72px; height: 72px; font-size: 36px; }
          .ut-header { gap: 1rem; }
          .ut-name { font-size: 12px; }
          .ut-text { font-size: 13px; }
          .ut-choice { font-size: 12px; }
          .ut-sublabel { font-size: 10px; }
        }
      `}</style>
    </div>
  );
}