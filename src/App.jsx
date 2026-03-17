import { useState } from 'react'
import './App.css'
import Wave from 'react-wavify'

import morningStar from "./assets/morning-star.webp";
import sleepingStar from "./assets/sleeping-star.webp";
import me from "./assets/me.png";
import pearl from "./assets/pearl.webp";


import daynightSound from "./assets/daynight.mp3";

function App() {
  const [isDarkMode, setIsDarkMode]=useState(false);

  const playSound = (sound) => {
    const audio=new Audio(sound);
    audio.play().catch(console.error);
  }

  const toggleTheme = () => {
    playSound(daynightSound);
    setIsDarkMode(prev => !prev);
  }
  return (
    <div className={`ocean ${isDarkMode ? 'dark': 'light'}`}>

      <button className="theme-toggle" onClick={toggleTheme}>
        <img
          src={isDarkMode ? sleepingStar : morningStar}
          alt={isDarkMode ? "Night Mode" : "Day Mode"}
          className={isDarkMode ? 'glow' : ''}
        />
      </button>

      <div className="content-wrapper">
        <div className="profile-container">
        <img src={me} alt="myimage" className="profile-img"/>
        </div>
      <div className="about-section">
        <img src={pearl} alt="pearl" className="floating-pearl pearl1"></img>
        <img src={pearl} alt="pearl" className="floating-pearl pearl2"></img>
        <img src={pearl} alt="pearl" className="floating-pearl pearl3"></img>

        <h1>hi, i'm faiza!</h1>
        <p>a final year computer science student, full stack intern, music lover ♬⋆.˚</p>
      </div>
      </div>
        
        <Wave
        className="wave wave1"
        fill={isDarkMode ? "#1d2b45" : "#4fa3d1"}
        paused={false}
        options={{
          height: 60,
          amplitude: 40,
          speed: 0.15,
          points: 3
        }}
      />

      <Wave
        className="wave wave2"
        fill={isDarkMode ? "#0e1529" : "#2e8bc0"}
        paused={false}
        options={{
          height: 70,
          amplitude: 35,
          speed: 0.12,
          points: 3
        }}
      />

    </div>
  );
}

export default App;