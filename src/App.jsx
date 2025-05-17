import React, { useState } from "react";
import "./App.css";
import ReactLogo from "./components/ReactLogo";
import { RiNextjsFill } from "react-icons/ri";
import { FaLaravel } from "react-icons/fa";
import { RiTailwindCssFill } from "react-icons/ri";
import { FaBootstrap } from "react-icons/fa";
import { FaPython } from "react-icons/fa";
import { FaFlutter } from "react-icons/fa6";
import { DiDjango } from "react-icons/di";
import { SiFlask } from "react-icons/si";
import { IoLogoJavascript } from "react-icons/io";
import { DiPhp } from "react-icons/di";
import { FaDartLang } from "react-icons/fa6";
import { FaJava } from "react-icons/fa";
import { SiTypescript } from "react-icons/si";
import { IoLogoVue } from "react-icons/io5";

const projectImages = [
  {
    id: 1,
    title: "Portfolio Website",
    desc: "Dibuat Dengan React TypeScript Dan Tailwind",
    img: "/tsx.png",
    link: "#!",
  },
  {
    id: 2,
    title: "Laravel",
    desc: "E-commerce dengan framework laravel dan tailwind",
    img: "/laravel.png",
    link: "#!",
  },
  {
    id: 3,
    title: "Game Javascript",
    desc: "Projek hanya untuk mengasah otak",
    img: "/game.png",
    link: "#!",
  },
  {
    id: 4,
    title: "Crud Flask",
    desc: "Hanya menggunakan Framework Flask untuk backend",
    img:  "/py.png",
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
            <li><a href="#FrameWork">FrameWork</a></li>
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
        <div className="mouse">
        <div className="canvasImg image-container">
          <img
            src="/Q.png"
            alt="Profile"
            className="hero-photo"
          />
          <div className="hover-text">sheesshh🥶🥶🥶</div>
        </div>
        <p>Letakan mouse pada foto</p>
        </div>
      </section>

      <section className="skills" id="skills">
        <h3 className="skills-title">Skills</h3>
        <div className="skills-container">
          <div className="skill-card">
            <i className="skill-icon"><FaPython/></i>
            <h4 className="skill-title">Pyton</h4>
            <p className="skill-description">Backend Language</p>
          </div>
          <div className="skill-card">
            <i className="skill-icon"><IoLogoJavascript/></i>
            <h4 className="skill-title">JavaScript</h4>
            <p className="skill-description">Frontend Language</p>
          </div>
          <div className="skill-card">
            <i className="skill-icon"><DiPhp/></i>
            <h4 className="skill-title">php</h4>
            <p className="skill-description">Backend Language</p>
          </div>
          <div className="skill-card">
            <i className="skill-icon"><FaDartLang/></i>
            <h4 className="skill-title">Dart</h4>
            <p className="skill-description">Frontend/Backend </p>
          </div>
          <div className="skill-card">
            <i className="skill-icon"><FaJava/></i>
            <h4 className="skill-title">Java</h4>
            <p className="skill-description">Backend Language</p>
          </div>
          <div className="skill-card">
            <i className="skill-icon"><SiTypescript/></i>
            <h4 className="skill-title">TypeScript</h4>
            <p className="skill-description">Frontend Language</p>
          </div>
        </div>
      </section>

      <section className="framework-section" id="FrameWork">
        <h3 className="framework-title">Frameworks</h3>
        <div className="framework-container">
          <div className="framework-card">
            <FaLaravel className="framework-icon" />
            <span>Laravel Jetsream</span>
          </div>
          <div className="framework-card">
            <RiNextjsFill className="framework-icon" />
            <span>Next.Js</span>
          </div>
          <div className="framework-card">
            <RiTailwindCssFill className="framework-icon" />
            <span>Tailwind</span>
          </div>
          <div className="framework-card">
            <FaBootstrap className="framework-icon" />
            <span>Bootstrap</span>
          </div>
          <div className="framework-card">
            <IoLogoVue className="framework-icon" />
            <span>Vue.js</span>
          </div>
          <div className="framework-card">
            <FaFlutter className="framework-icon" />
            <span>Flutter</span>
          </div>
          <div className="framework-card">
            <DiDjango className="framework-icon" />
            <span>Django</span>
          </div>
          <div className="framework-card">
            <SiFlask className="framework-icon" />
            <span>Flask Python</span>
          </div>
        </div>
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
        <p>&copy;Fhrrzz. All rights reserved.</p>
      </footer>
    </div>
  );
}
