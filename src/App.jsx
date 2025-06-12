import React, { useState } from "react";
import ReactLogo from "./components/ReactLogo";
import Carousel from "./components/Carousel";

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
    img: "/py.png",
    link: "#!",
  },
];

export default function App() {
  const [darkMode, setDarkMode] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  const toggleDarkMode = () => setDarkMode(!darkMode);
  const nextSlide = () =>
    setCurrentIndex((prev) => (prev === projectImages.length - 1 ? 0 : prev + 1));
  const prevSlide = () =>
    setCurrentIndex((prev) => (prev === 0 ? projectImages.length - 1 : prev - 1));

  return (
    <div className={`${darkMode ? "bg-gray-900 text-gray-100" : "bg-white text-gray-900"} min-h-screen transition-colors duration-500`}>
      
      {/* Navbar */}
      <header className="flex flex-col md:flex-row justify-between items-center px-6 py-4 bg-gradient-to-r from-blue-500 to-blue-800 shadow-md sticky top-0 z-50">
        <h1 className="text-xl font-bold text-white">Fhrrzz</h1>
        <nav className="mt-2 md:mt-0">
          <ul className="flex flex-wrap justify-center gap-4 items-center">
            <li><a href="#hero" className="text-white hover:underline">Home</a></li>
            <li><a href="#contact" className="text-white hover:underline">Contact</a></li>
            <li><a href="#skills" className="text-white hover:underline">Skill</a></li>
            <li><a href="#projects" className="text-white hover:underline">Project</a></li>
            <button onClick={toggleDarkMode} className="ml-2 px-3 py-1 border border-white text-white rounded hover:bg-white hover:text-black">
              {darkMode ? "☀️ Light" : "🌙 Dark"}
            </button>
          </ul>
        </nav>
      </header>

      {/* Hero / About */}
      <section
        id="hero"
        className={`flex flex-col lg:flex-row justify-center items-center px-4 py-10 ${
          darkMode ? "bg-gray-900 text-gray-100" : "bg-white text-gray-900"
        } transition-colors duration-500`}
      >
        <div className="w-full lg:w-2/3 flex flex-col lg:flex-row items-center lg:items-start gap-6">
          {/* React Logo */}
          <div className="flex justify-center lg:justify-start w-full lg:w-auto">
            <div className="w-30 h-28 flex-shrink-0">
              <ReactLogo />
            </div>
          </div>

          {/* About Me Box */}
          <div className="w-full max-w-md">
            <div
              className={`p-4 shadow-lg rounded-md transition-all hover:scale-105 duration-300 ${
                darkMode ? "bg-blue-900" : "bg-blue-100"
              }`}
            >
              <h2 className="text-2xl font-semibold underline">{`Hello, I'm Fhrrzz`}</h2>
              <p className="text-lg">{`Frontend Developer | Backend Developer`}</p>
            </div>
            <div
              className={`mt-2 p-4 rounded-lg shadow-lg transition-all hover:scale-105 duration-300 ${
                darkMode ? "bg-blue-800" : "bg-blue-100"
              }`}
            >
              <h3 className="text-lg font-semibold mb-2">About Me</h3>
              <p>
                Saya seorang developer React Native yang bersemangat membuat aplikasi
                mobile yang responsif dan user-friendly.
              </p>
            </div>
          </div>
        </div>

        {/* Profile Image */}
        <div className="relative group w-60 sm:w-72 h-60 sm:h-72 flex-shrink-0">
          <div className="w-full h-full bg-gradient-to-r from-blue-800 to-blue-500 rounded-[40%_40%_10%_60%] shadow-lg overflow-hidden">
            <img
              src="/Q.png"
              alt="Profile"
              className="w-full h-full object-cover rounded-[40%_40%_10%_60%]"
            />
          </div>
          <div className="absolute top-2 left-1/2 transform -translate-x-1/2 text-xs sm:text-sm font-semibold bg-gray-100 text-blue-700 px-3 py-1 rounded-full opacity-0 group-hover:opacity-100 transition duration-300">
            sheesshh 🥶
          </div>
        </div>
      </section>


      {/* Contact Me */}
      <section
        id="contact"
        className={`${darkMode ? "bg-gray-900 text-gray-100" : "bg-white text-gray-900"} flex justify-center items-center py-10 px-4 transition-colors duration-500`}
      >
        <div className={`flex flex-col gap-4 p-6 md:p-12 lg:p-20 rounded-lg shadow-md w-full max-w-4xl ${darkMode ? "bg-gray-800" : "bg-white"} transition-colors duration-500`}>
          <h1 className={`text-3xl font-semibold text-center ${darkMode ? "text-white" : "text-blue-800"}`}>Contact Me</h1>
          <div className={`flex flex-col md:flex-row gap-4 p-6 rounded-lg ${darkMode ? "bg-gray-700" : "bg-gray-200"}`}>
            <div className="flex flex-col gap-2 w-full">
              <label className="text-sm">Your name:</label>
              <input type="text" className={`${darkMode ? "bg-gray-700 border-blue-400 text-gray-200" : "bg-gray-100 border-blue-600 text-gray-900"} p-2 rounded-lg border`} />
              <label className="text-sm">Your email:</label>
              <input type="text" className={`${darkMode ? "bg-gray-700 border-blue-400 text-gray-200" : "bg-gray-100 border-blue-600 text-gray-900"} p-2 rounded-lg border`} />
            </div>
            <div className="flex flex-col gap-2 w-full">
              <label className="text-sm">Desc:</label>
              <textarea className={`${darkMode ? "bg-gray-700 border-blue-400 text-gray-200" : "bg-gray-100 border-blue-600 text-gray-900"} p-2 rounded-lg h-full min-h-[100px] border`}></textarea>
            </div>
          </div>
          <button className="self-center px-6 py-2 border border-gray-300 rounded-lg hover:bg-blue-600 hover:text-white transition duration-300">Submit</button>
        </div>
      </section>

      {/* Skills */}
      <section
        id="skills"
        className={`${darkMode ? "bg-gray-900 text-gray-100" : "bg-gray-100 text-gray-900"} py-10 px-4 text-center transition-colors duration-500`}
      >
        <Carousel darkMode={darkMode}/>
      </section>

      {/* Projects */}
      <section
        id="projects"
        className={`${darkMode ? "bg-gray-900 text-gray-100" : "bg-white text-gray-900"} py-10 px-4 text-center transition-colors duration-500`}
      >
        <h3 className="text-2xl font-semibold mb-6">Projects</h3>
        <div className={`${darkMode ? "bg-gray-800 text-gray-100" : "bg-white text-blue-800"} rounded-lg shadow-lg p-6 max-w-md mx-auto transition-colors duration-500`}>
          <img src={projectImages[currentIndex].img} alt={projectImages[currentIndex].title} className="w-full mb-4 rounded-lg" />
          <h4 className="text-xl font-bold">{projectImages[currentIndex].title}</h4>
          <p className="mb-2">{projectImages[currentIndex].desc}</p>
          <a href={projectImages[currentIndex].link} target="_blank" rel="noreferrer" className={`${darkMode ? "text-blue-400" : "text-blue-600"} hover:underline`}>
            View Project
          </a>
          <div className="flex justify-center gap-4 mt-4">
            <button onClick={prevSlide} className="text-2xl font-bold">&lt;</button>
            <button onClick={nextSlide} className="text-2xl font-bold">&gt;</button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className={`${darkMode ? "bg-gray-900 text-gray-200" : "bg-gray-200 text-gray-700"} text-center py-4 mt-10 transition-colors duration-500`}>
        <p>&copy; Fhrrzz. All rights reserved.</p>
      </footer>
    </div>
  );
}
