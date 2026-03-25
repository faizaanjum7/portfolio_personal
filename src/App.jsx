import { useState } from 'react'
import './App.css'
import Wave from 'react-wavify'

import morningStar from "./assets/morning-star.webp";
import sleepingStar from "./assets/sleeping-star.webp";
import me from "./assets/me.png";
import pearl from "./assets/pearl.webp";
import shell2 from "./assets/shell2.webp";
import starfish from "./assets/starfish.webp";
import stars3 from "./assets/stars_3.webp";
import crescentMoon from "./assets/crescent-moon.webp";
import githubIcon from "./assets/github.png";
import linkedinIcon from "./assets/linkedin.png";
import emailIcon from "./assets/email.png";


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

        <div className="nav-links">
          <a href="#about" className="nav-link" onClick={(e) => openTab(e,'about')}>
            <img src={shell2} alt="about" className="nav-icon" /> about
          </a>

          <a href="#interests" className="nav-link" onClick={(e) => openTab(e, 'interests')}>
              <img src={starfish} alt="Interests" className="nav-icon" /> interests
            </a>

            <a href="#portfolio" className="nav-link" onClick={(e) => openTab(e, 'portfolio')}>
              <img src={stars3} alt="Portfolio" className="nav-icon" /> portfolio
            </a>

            <a href="#contact" className="nav-link" onClick={(e) => openTab(e, 'contact')}>
              <img src={crescentMoon} alt="Contact" className="nav-icon" /> contact
            </a>
        </div>
      </div>
      </div>

      <footer className="footer">
        <div className="footer-links">
          <a href="https://github.com/faizaanjum7" target="_blank" rel="noopener noreferrer">
            <img src={githubIcon} alt="GitHub" className="footer-icon" />
          </a>
           <a href="mailto:faizaanjumm07@gmail.com"onClick={() => window.open("https://mail.google.com/mail/?view=cm&to=faizaanjumm07@gmail.com", "_blank")}>
            <img src={emailIcon} alt="Email" className="footer-icon" />
          </a>
          <a href="https://www.linkedin.com/in/m-s-faiza-anjum-b7b251264/" target="_blank" rel="noopener noreferrer">
            <img src={linkedinIcon} alt="LinkedIn" className="footer-icon" />
          </a>
        </div>
        <p className="footer-credits">© 2026 Faiza Anjum M S</p>
      </footer>

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