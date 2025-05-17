import React, { useState } from "react";
import "./App.css";
import ReactLogo from "./components/ReactLogo";

const projectImages = [
  {
    id: 1,
    title: "Portfolio Website",
    desc: "A personal portfolio built with React and CSS modules.",
    img: "https://picsum.photos/id/1018/600/300",
    link: "#!",
  },
  {
    id: 2,
    title: "Todo App",
    desc: "A simple and responsive todo app with local storage.",
    img: "https://picsum.photos/id/1015/600/300",
    link: "#!",
  },
  {
    id: 3,
    title: "Weather App",
    desc: "A weather forecast app using OpenWeather API with dynamic UI.",
    img: "https://picsum.photos/id/1019/600/300",
    link: "#!",
  },
  {
    id: 4,
    title: "Blog Platform",
    desc: "A blog platform with markdown support and user authentication.",
    img: "https://picsum.photos/id/1020/600/300",
    link: "#!",
  },
];

export default function App() {
  const [darkMode, setDarkMode] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  const toggleDarkMode = () => setDarkMode(!darkMode);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev === projectImages.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? projectImages.length - 1 : prev - 1));
  };

  return (
    <div className={`container ${darkMode ? "dark" : "light"}`}>
      <header className="navbar">
        <h1 className="logo">Fhrrzz</h1>
        <nav className="nav-links">
          <ul>
            <li><a href="#hero">Home</a></li>
            <li><a href="#skills">Skill</a></li>
            <li><a href="#projects">Project</a></li>
            <button onClick={toggleDarkMode} className="dark-mode-btn">
              {darkMode ? "☀️ Light Mode" : "🌙 Dark Mode"}
            </button>
          </ul>
        </nav>
      </header>

      <section className="hero" id="hero">
        <div className="react-logo-container">
          <ReactLogo />
        </div>
        <div className="katakata">
          <div className="hero-text">
            <div className="up">
              <h2>Hello, I'am Fhrrzz</h2>
              <p>Frontend Developer | UI/UX Enthusiast</p>
            </div>

            {/* About dipindah ke sini */}
            <div className="about-section">
              <h3>About Me</h3>
              <p>
                Saya seorang developer React Native yang bersemangat membuat aplikasi mobile yang responsif dan user-friendly.
              </p>
            </div>
          </div>
        </div>
        <div className="canvasImg">
          <img
            src="/Q.png"
            alt="Profile"
            className="hero-photo"
          />
        </div>
      </section>


      <section className="skills" id="skills">
        <h3>Skills</h3>
        <ul className="skills-list">
          {["React.js", "JavaScript (ES6+)", "HTML & CSS", "Tailwind CSS", "Git & GitHub", "Figma & UI/UX Design"].map((skill, index) => (
            <li
              key={skill}
              className={index % 2 === 0 ? "slide-in-left" : "slide-in-right"}
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              {skill}
            </li>
          ))}
        </ul>
      </section>


      <section className="projects" id="projects">
        <h3>Projects</h3>
        <div className="carousel">
          <div className="carousel-card">
            <img
              src={projectImages[currentIndex].img}
              alt={projectImages[currentIndex].title}
              className="project-img"
            />
            <h4>{projectImages[currentIndex].title}</h4>
            <p>{projectImages[currentIndex].desc}</p>
            <a href={projectImages[currentIndex].link} target="_blank" rel="noreferrer">
              View Project
            </a>
          </div>
          <div className="carousel-controls">
            <button onClick={prevSlide} className="carousel-btn" aria-label="Previous Project">
              &#10094;
            </button>
            <button onClick={nextSlide} className="carousel-btn" aria-label="Next Project">
              &#10095;
            </button>
          </div>
        </div>
      </section>

      <footer className="footer">
        <p>&copy; 2025 Your Name. All rights reserved.</p>
      </footer>
    </div>
  );
}
