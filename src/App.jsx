import { useState } from 'react'
import './App.css'
import Wave from 'react-wavify'

import morningStar from "./assets/morning-star.webp";
import sleepingStar from "./assets/sleeping-star.webp";


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