import React, { useState, useEffect, useRef } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import ReactLogo from "./components/ReactLogo";
import Carousel from "./components/Carousel";
import RotatingText from "./components/RotatingText";
import GeminiChat from "./components/GeminiChat";
import Footer from "./components/Footer";
import ContactForm from "./components/ContactForm";

const projectImages = [
  { id: 1, title: "Portfolio Website", desc: "Dibuat Dengan React TypeScript Dan Tailwind", img: "/tsx.png", link: "#!" },
  { id: 2, title: "Laravel", desc: "E-commerce dengan framework laravel dan tailwind", img: "/laravel.png", link: "#!" },
  { id: 3, title: "Game Javascript", desc: "Projek hanya untuk mengasah otak", img: "/game.png", link: "#!" },
  { id: 4, title: "Crud Flask", desc: "Hanya menggunakan Framework Flask untuk backend", img: "/py.png", link: "#!" },
  { id: 5, title: "Portofolio Kelas", desc: "membuat portofolio dengan tailwind", img: "/1.png", link: "#!" },
  { id: 6, title: "Presensi kelas", desc: "Presensi kelas hanya menggunakan local Storage", img: "/2.png", link: "#!" },
];

export default function App() {
  const [darkMode, setDarkMode] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [showChat, setShowChat] = useState(false);
  const canvasRef = useRef(null);

  const toggleDarkMode = () => setDarkMode(!darkMode);
  const nextSlide = () => setCurrentIndex(prev => (prev === projectImages.length - 1 ? 0 : prev + 1));
  const prevSlide = () => setCurrentIndex(prev => (prev === 0 ? projectImages.length - 1 : prev - 1));
  const textGradientClass = "bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent";

  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  useEffect(() => {
    if (!showChat) return;
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    let width, height;
    function resize() {
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = width;
      canvas.height = height;
    }
    resize();
    window.addEventListener("resize", resize);
    const particles = [];
    class Particle {
      constructor() {
        this.x = Math.random() * width;
        this.y = Math.random() * height;
        this.size = Math.random() * 3 + 1;
        this.speedX = (Math.random() - 0.5) * 0.7;
        this.speedY = (Math.random() - 0.5) * 0.7;
      }
      update() {
        this.x += this.speedX;
        this.y += this.speedY;
        if (this.x < 0 || this.x > width) this.speedX *= -1;
        if (this.y < 0 || this.y > height) this.speedY *= -1;
      }
      draw() {
        ctx.fillStyle = darkMode ? "rgba(100,150,255,0.7)" : "rgba(30,144,255,0.7)";
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fill();
      }
    }
    for (let i = 0; i < 100; i++) particles.push(new Particle());
    let animationId;
    function animate() {
      ctx.clearRect(0, 0, width, height);
      particles.forEach(p => { p.update(); p.draw(); });
      animationId = requestAnimationFrame(animate);
    }
    animate();
    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener("resize", resize);
    };
  }, [showChat, darkMode]);

  return (
    <div className={`flex flex-col min-h-screen ${darkMode ? "bg-gray-900 text-gray-100" : "bg-white text-gray-900"} transition-colors duration-500`}>
      <header className="flex flex-col md:flex-row justify-between items-center px-6 py-4 bg-gradient-to-r from-blue-500 to-blue-800 shadow-md sticky top-0 z-50">
        <h1 className="text-xl font-bold text-white">Fhrrzz</h1>
        <nav className="mt-2 md:mt-0">
          <ul className="flex flex-wrap justify-center gap-4 items-center">
            <li><a href="#hero" className="text-white hover:underline">Beranda</a></li>
            <li><a href="#contact" className="text-white hover:underline">Hubungi</a></li>
            <li><a href="#skills" className="text-white hover:underline">Skill</a></li>
            <li><a href="#projects" className="text-white hover:underline">Projek</a></li>
            <button onClick={toggleDarkMode} className="w-16 h-8 flex items-center bg-gray-300 dark:bg-yellow-400 border border-gray-400 dark:border-yellow-300 rounded-full p-1 transition-all duration-500 relative">
              <div className={`w-6 h-6 rounded-full bg-white shadow-md transform flex items-center justify-center text-sm transition-all duration-300 ${darkMode ? "translate-x-8" : "translate-x-0"}`}>{darkMode ? "☀️" : "🌙"}</div>
            </button>
          </ul>
        </nav>
      </header>
      <main className="flex-grow">
        <section id="hero" className={`flex flex-row flex-wrap justify-center items-center px-4 py-10 gap-10 ${darkMode ? "bg-gray-900 text-gray-100" : "bg-white text-gray-900"} transition-colors duration-500`}>
          <div className="w-full lg:w-1/2 flex flex-col justify-center gap-2 px-4 items-center lg:items-start text-center lg:text-left" data-aos="fade-right">
            <h2 className="text-3xl md:text-4xl font-bold flex flex-wrap justify-center lg:justify-start items-center gap-2">
              <span className={textGradientClass}>Hallo, I'm Fhrrzz</span>
              <span className="text-3xl text-transparent bg-gradient-to-r from-blue-500 to-blue-700 bg-clip-text">!!!</span>
            </h2>
            <div className="flex justify-center lg:justify-start"><RotatingText /></div>
            <p className={`text-lg md:text-xl mt-2 ${textGradientClass}`}>Saya seorang developer React Native yang bersemangat membuat aplikasi mobile dan web yang responsif dan user-friendly.</p>
          </div>
          <div className="relative group w-60 md:w-72 h-60 md:h-72 rounded-[40%_40%_10%_60%] shadow-lg bg-gradient-to-r from-blue-800 to-blue-500 flex items-center justify-center" data-aos="fade-left">
            <img src="/Q.png" alt="Profile" className="w-full h-full object-cover rounded-[40%_40%_10%_60%]" />
            <div className="absolute top-0 left-0 w-full h-full rounded-[40%_40%_10%_60%] bg-blue-400 opacity-0 group-hover:opacity-20 transition-opacity duration-500" />
            <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 -translate-y-2 opacity-0 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 z-50 pointer-events-none">
              <div className="relative bg-white text-black text-sm font-semibold px-4 py-2 rounded-lg shadow-lg backdrop-blur-sm bg-opacity-80 whitespace-nowrap">
                sheesss🥶🥶
                <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-3 h-3 bg-white rotate-45" />
              </div>
            </div>
          </div>
          <div className="w-full flex justify-center mt-6">
            <div className="w-48 h-48 sm:w-72 sm:h-72 md:w-[480px] md:h-[480px]">
              <ReactLogo />
            </div>
          </div>
        </section>
        <section id="skills" className={`py-10 px-4 ${darkMode ? "bg-gray-900 text-gray-100" : "bg-white text-gray-900"} transition-colors duration-500`}>
          <Carousel currentIndex={currentIndex} projectImages={projectImages} nextSlide={nextSlide} prevSlide={prevSlide} darkMode={darkMode} />
        </section>

        <section id="projects" className={`py-12 px-6 ${darkMode ? "bg-gray-900 text-white" : "bg-white text-gray-900"} transition-colors duration-500`}>
          <h2 className={`text-3xl font-bold text-center mb-10 ${textGradientClass}`}>My Projects</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {projectImages.map(project => (
              <div key={project.id} className={`rounded-xl overflow-hidden shadow-lg transform hover:scale-105 hover:shadow-2xl transition-all duration-300 ${darkMode ? "bg-gray-800" : "bg-gray-100"}`}>
                <img src={project.img} alt={project.title} className="w-full h-48 object-cover" />
                <div className="p-5 flex flex-col justify-between h-[200px]">
                  <div>
                    <h3 className={`text-xl font-semibold mb-2 ${textGradientClass}`}>{project.title}</h3>
                    <p className={textGradientClass}>{project.desc}</p>
                  </div>
                  <a href={project.link} target="_blank" rel="noopener noreferrer" className={`mt-auto inline-flex items-center justify-center gap-2 px-4 py-2 rounded-lg font-semibold ${darkMode ? "bg-blue-600 text-white hover:bg-blue-700" : "bg-blue-500 text-white hover:bg-blue-600"} transition`}>🔗 <span className="text-white">Lihat Project</span></a>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section id="contact" className={`scroll-mt-20 flex justify-center items-center py-16 px-6 ${darkMode ? "bg-gray-900 text-white" : "bg-white text-gray-900"} transition-colors duration-500`}>
          <div className="w-full max-w-4xl">
            <h2 className="text-4xl font-extrabold text-center mb-10 flex items-center justify-center gap-2">
              <span className="text-3xl">📬</span>
              <span className={darkMode ? "text-white" : textGradientClass}>Hubungi Saya</span>
            </h2>
            <div className={`p-8 rounded-3xl shadow-2xl border ${darkMode ? "bg-gray-800 border-blue-600" : "bg-gray-50 border-blue-300"}`}>
              <ContactForm darkMode={darkMode} />
            </div>
          </div>
        </section>
        {showChat && (
          <div className={`fixed inset-0 z-50 flex flex-col bg-black bg-opacity-80 backdrop-blur-sm transition-opacity duration-500 ${darkMode ? "text-white" : "text-black"}`} style={{ height: "100vh", width: "100vw" }}>
            <canvas ref={canvasRef} className="absolute inset-0 -z-10 w-full h-full" aria-hidden="true" />
            <button onClick={() => setShowChat(false)} className="absolute top-6 right-6 text-3xl font-bold p-2 rounded-full bg-gray-700 bg-opacity-50 hover:bg-opacity-80 transition text-white" aria-label="Close AI Chat">×</button>
            <div className="flex-grow p-6 overflow-auto flex flex-col justify-center items-center">
              <div className="w-full max-w-3xl bg-gray-100 dark:bg-gray-800 rounded-lg p-6 shadow-lg flex flex-col gap-4">
                <GeminiChat darkMode={darkMode} />
              </div>
            </div>
          </div>
        )}
        <button onClick={() => setShowChat(!showChat)} className="fixed bottom-6 right-6 z-50 bg-blue-600 hover:bg-blue-700 text-white p-4 rounded-full shadow-lg transition duration-300" aria-label="Open AI Chat">💬</button>
      </main>

      <Footer darkMode={darkMode} />
    </div>
  );
}
