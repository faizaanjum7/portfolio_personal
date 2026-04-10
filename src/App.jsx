import { useState } from 'react'
import './App.css'
import Wave from 'react-wavify'
import {projectsData} from './data/projects'

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
import faiza_anjum from "./assets/Faiza_Anjum.pdf";
import galleryIcon from "./assets/gallery.png";
import sky2 from "./assets/sky2.webp";
import sky3 from "./assets/sky3.webp";
import sky4 from "./assets/sky4.webp";
import moon from "./assets/moon.webp";

import daynightSound from "./assets/daynight.mp3";
import resume_pop from "./assets/resume_pop.mp3";
import linksSound from "./assets/links.wav";
import closeSound from "./assets/links_close.wav";

function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [activeTab, setActiveTab] = useState(null);
  const [isClosing, setIsClosing] = useState(false);

  const playSound = (sound) => {
    const audio = new Audio(sound);
    audio.play().catch(console.error);
  }

  const toggleTheme = () => {
    playSound(daynightSound);
    setIsDarkMode(prev => !prev);
  }

  const handleResumeClick = () => {
    playSound(resume_pop);
  }

  const openTab = (e, tabName) => {
    e.preventDefault();
    playSound(linksSound);
    setActiveTab(tabName);
  }

  const closeTab = () => {
    playSound(closeSound);
    setIsClosing(true);
    setTimeout(() => {
      setActiveTab(null);
      setIsClosing(false);
    }, 300);
  }

  const handleLinkClick = () => {
    playSound(linksSound);
  }


  const renderTabContent = () => {
    switch (activeTab) {
      case 'about':
        return (
          <div className="window-body">
            <h2>faiza anjum</h2>
            <p>as a computer science student, i enjoy building interactive web interfaces and experimenting how design and code come together to create better user experiences. i'm currently working as full stack intern working with figma, react, nodejs and sql.</p><br></br>
            <p>i often enjoy learning by building small side projects where i can test new ideas, explore different UI concepts, and improve how things feel and behave on the web.</p>

            <h3 style={{ marginTop: '25px', marginBottom: '5px', fontSize: '1.3rem' }}>what i do</h3>
            <ul className="what-i-do-list">
              <li>build responsive web applications</li>
              <li>design interactive user interfaces</li>
              <li>develop frontend experiences with react</li>
            </ul>

            <h3 style={{ marginTop: '25px', marginBottom: '5px', fontSize: '1.3rem' }}>education</h3>
            <div className="timeline">
              <div className="timeline-item">
                <div className="timeline-date">2022 – 2026</div>
                <div className="timeline-title">b.tech in computer science</div>
                <div className="timeline-subtitle">GPREC</div>
                <div className="timeline-subtitle"><b>CGPA: </b>8.9</div>

              </div>
            </div>
          </div>
        );
      case 'interests':
        return (
          <div className="window-body">
            <h2>other interests</h2>
            <p>when i'm not coding, i enjoy exploring creative inspirations and small moments of calm.</p>
            <p style={{ marginTop: '15px', fontWeight: 'bold' }}>things i love:</p>
            <ul className="interest-list">
              <li>music</li>
              <li style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                moon & night skies
                <img
                  src={galleryIcon}
                  alt="Gallery"
                  onClick={(e) => openTab(e, 'gallery')}
                  style={{ width: "20px", height: "20px", cursor: "pointer", filter: "drop-shadow(0 0 2px rgba(255,255,255,0.5))" }}
                  title="View Photo Gallery"
                />
              </li>
              <li>stars and astronomy</li>
              <li>cooking</li>
              <li>poetry and aesthetics</li>
            </ul>
          </div>
        );

      case 'gallery':
        return (
          <div className="window-body">
            <h2>photo gallery</h2>
            <div className="gallery-grid">
              <img src={sky2} alt="Skyscape" className="gallery-image" />
              <img src={moon} alt="Moon Photography" className="gallery-image" />
              <img src={sky3} alt="Night Sky" className="gallery-image" />
              <img src={sky4} alt="Starry Sky" className="gallery-image" />
            </div>
          </div>
        );

      case 'portfolio':
        return (
          <div className="window-body">
            <h2>my projects</h2>
            <div className="portfolio-grid">
              {projectsData.map((project) => (
                <div key={project.id} className="project-card" onClick={(e) => openTab(e, project.id)}>
                  <div className="project-card-header">
                    <h3>{project.title}</h3>
                    {project.status && <span className="tag">{project.status}</span>}
                  </div>
                  <p className="project-short-desc">{project.description}</p>
                  <div className="project-card-footer">
                    <p className="tech-stack">{project.tech}</p>
                    <img src={pearl} alt="View project" className="project-preview-icon" />
                  </div>
                </div>
              ))}
            </div>
          </div>
        );

      case 'contact':
        return (
          <div className="window-body">
            <h2>contact</h2>
            <p style={{ marginBottom: "20px" }}>feel free to reach out for collaborations or just a friendly hello!</p>
            <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
              <a href="mailto:faizaanjumm07@gmail.com" onClick={() => window.open("https://mail.google.com/mail/?view=cm&to=faizaanjumm07@gmail.com", "_blank")} style={{ color: "var(--link-text, inherit)", textDecoration: "none" }}><strong>email:</strong> faizaanjumm07@gmail.com</a>
              <a href="https://github.com/faizaanjum7" target="_blank" rel="noopener noreferrer" style={{ color: "var(--link-text, inherit)", textDecoration: "none" }}><strong>gitHub:</strong> github.com/faizaanjum7</a>
              <a href="https://www.linkedin.com/in/m-s-faiza-anjum-b7b251264/" target="_blank" rel="noopener noreferrer" style={{ color: "var(--link-text, inherit)", textDecoration: "none" }}><strong>linkedIn:</strong> faiza-anjum-m-s</a>
            </div>
          </div>
        );
      default:
        const activeProject = projectsData.find(p => p.id === activeTab);
        if (activeProject) {
          return (
            <div className="window-body project-detail-view">
              <button className="back-btn" onClick={(e) => openTab(e, 'portfolio')}>
                ← back to portfolio
              </button>
              <h2>{activeProject.title} {activeProject.status && <span className="tag">{activeProject.status}</span>}</h2>
              <div className="project-detail-content">
                <p className="project-desc">{activeProject.description}</p>
                <div className="tech-badge-container">
                  {activeProject.tech.split(' • ').map(t => (
                    <span key={t} className="tech-badge">{t}</span>
                  ))}
                </div>
                <div className="project-links">
                  {activeProject.github && <a href={activeProject.github} target="_blank" rel="noopener noreferrer" onClick={handleLinkClick}>github repository ↗</a>}
                  {activeProject.live && <a href={activeProject.live} target="_blank" rel="noopener noreferrer" onClick={handleLinkClick}>live demo ↗</a>}
                </div>
              </div>
            </div>
          );
        }
        return null;
    }
  };
  return (
    <div className={`ocean ${isDarkMode ? 'dark' : 'light'}`}>

      <button className="theme-toggle" onClick={toggleTheme}>
        <img
          src={isDarkMode ? sleepingStar : morningStar}
          alt={isDarkMode ? "Night Mode" : "Day Mode"}
          className={isDarkMode ? 'glow' : ''}
        />
      </button>

      <div className="content-wrapper">
        <div className="profile-container">
          <img src={me} alt="myimage" className="profile-img" />
        </div>
        <div className="about-section">
          <img src={pearl} alt="pearl" className="floating-pearl pearl1"></img>
          <img src={pearl} alt="pearl" className="floating-pearl pearl2"></img>
          <img src={pearl} alt="pearl" className="floating-pearl pearl3"></img>

          <h1>hi, i'm faiza!</h1>
          <p>a final year computer science student, full stack intern, music lover ♬⋆.˚</p>

          <div className="nav-links">
            <a href="#about" className="nav-link" onClick={(e) => openTab(e, 'about')}>
              <img src={shell2} alt="about" className="nav-icon" /> about
            </a>

            <a href="#interests" className="nav-link" onClick={(e) => openTab(e, 'interests')}>
              <img src={starfish} alt="interests" className="nav-icon" /> interests
            </a>

            <a href="#portfolio" className="nav-link" onClick={(e) => openTab(e, 'portfolio')}>
              <img src={stars3} alt="portfolio" className="nav-icon" /> portfolio
            </a>

            <a href="#contact" className="nav-link" onClick={(e) => openTab(e, 'contact')}>
              <img src={crescentMoon} alt="contact" className="nav-icon" /> contact
            </a>
          </div>
        </div>
      </div>

      <footer className="footer">
        <div className="footer-links">
          <a href="https://github.com/faizaanjum7" target="_blank" rel="noopener noreferrer">
            <img src={githubIcon} alt="GitHub" className="footer-icon" />
          </a>
          <a href="mailto:faizaanjumm07@gmail.com" onClick={() => window.open("https://mail.google.com/mail/?view=cm&to=faizaanjumm07@gmail.com", "_blank")}>
            <img src={emailIcon} alt="Email" className="footer-icon" />
          </a>
          <a href="https://www.linkedin.com/in/m-s-faiza-anjum-b7b251264/" target="_blank" rel="noopener noreferrer">
            <img src={linkedinIcon} alt="LinkedIn" className="footer-icon" />
          </a>
        </div>
        <p className="footer-credits">© 2026 Faiza Anjum M S</p>
      </footer>

      <a href={faiza_anjum} target="_blank" rel="noopener noreferrer" className="resume-bubble" onClick={handleResumeClick}><span>resume</span></a>


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

      {activeTab && (
        <div className={`floating-window ${isDarkMode ? 'dark-window' : 'light-window'} ${isClosing ? 'closing' : ''}`}>
          <div className="window-header">
            <div className="window-controls">
              <span className="control close" onClick={closeTab}></span>
              <span className="control minimize"></span>
              <span className="control maximize"></span>
            </div>
            <div className="window-title">{activeTab}.txt</div>
          </div>
          {renderTabContent()}
        </div>
      )}

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