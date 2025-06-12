import React, { useState, useEffect } from "react";
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

function ContactForm({ darkMode }) {
  const [nama, setNama] = useState("");
  const [email, setEmail] = useState("");
  const [desc, setDesc] = useState("");

  const [data, setData] = useState(() => {
    try {
      const saved = JSON.parse(localStorage.getItem("contactData"));
      return Array.isArray(saved) ? saved : [];
    } catch {
      return [];
    }
  });

  useEffect(() => {
    localStorage.setItem("contactData", JSON.stringify(data));
  }, [data]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!nama.trim() || !email.trim() || !desc.trim()) return;

    const newEntry = { nama, email, desc };
    setData([...data, newEntry]);
    setNama("");
    setEmail("");
    setDesc("");
  };

  return (
    <div
      className={`flex flex-col gap-4 p-6 md:p-12 lg:p-20 rounded-lg shadow-md w-full max-w-4xl ${
        darkMode ? "bg-gray-800 text-gray-100" : "bg-white text-gray-900"
      } transition-colors duration-500`}
    >
      <h1
        className={`text-3xl font-semibold text-center ${
          darkMode ? "text-white" : "text-blue-800"
        }`}
      >
        Contact Me
      </h1>

      <form
        onSubmit={handleSubmit}
        className={`flex flex-col md:flex-row gap-4 p-6 rounded-lg ${
          darkMode ? "bg-gray-700" : "bg-gray-200"
        }`}
      >
        <div className="flex flex-col gap-2 w-full md:w-1/2">
          <label className="text-sm">Your name:</label>
          <input
            type="text"
            value={nama}
            onChange={(e) => setNama(e.target.value)}
            className={`${
              darkMode
                ? "bg-gray-700 border-blue-400 text-gray-200"
                : "bg-gray-100 border-blue-600 text-gray-900"
            } p-2 rounded-lg border`}
            placeholder="Masukkan nama"
          />
          <label className="text-sm mt-4">Your email:</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className={`${
              darkMode
                ? "bg-gray-700 border-blue-400 text-gray-200"
                : "bg-gray-100 border-blue-600 text-gray-900"
            } p-2 rounded-lg border`}
            placeholder="Masukkan email"
          />
        </div>

        <div className="flex flex-col gap-2 w-full md:w-1/2">
          <label className="text-sm">Desc:</label>
          <textarea
            value={desc}
            onChange={(e) => setDesc(e.target.value)}
            className={`${
              darkMode
                ? "bg-gray-700 border-blue-400 text-gray-200"
                : "bg-gray-100 border-blue-600 text-gray-900"
            } p-2 rounded-lg h-full min-h-[100px] border`}
            placeholder="Masukkan pesan"
          ></textarea>
        </div>
      </form>

      <button
        onClick={handleSubmit}
        className="self-center px-6 py-2 border border-gray-300 rounded-lg hover:bg-blue-600 hover:text-white transition duration-300"
      >
        Submit
      </button>

      <div className="mt-8 max-h-72 overflow-auto">
        <h2 className="text-xl font-semibold mb-4">Data Tersimpan:</h2>
        {data.length === 0 && <p>Tidak ada data tersimpan.</p>}
        <ul>
          {data.map((item, index) => (
            <li
              key={index}
              className={`mb-4 p-3 rounded shadow-sm ${
                darkMode ? "bg-gray-700" : "bg-gray-100"
              }`}
            >
              <p>
                <strong>Nama:</strong> {item.nama}
              </p>
              <p>
                <strong>Email:</strong> {item.email}
              </p>
              <p>
                <strong>Pesan:</strong> {item.desc}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default function App() {
  const [darkMode, setDarkMode] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  const toggleDarkMode = () => setDarkMode(!darkMode);
  const nextSlide = () =>
    setCurrentIndex((prev) => (prev === projectImages.length - 1 ? 0 : prev + 1));
  const prevSlide = () =>
    setCurrentIndex((prev) => (prev === 0 ? projectImages.length - 1 : prev - 1));

  return (
    <div
      className={`${
        darkMode ? "bg-gray-900 text-gray-100" : "bg-white text-gray-900"
      } min-h-screen transition-colors duration-500`}
    >
      {/* Navbar */}
      <header className="flex flex-col md:flex-row justify-between items-center px-6 py-4 bg-gradient-to-r from-blue-500 to-blue-800 shadow-md sticky top-0 z-50">
        <h1 className="text-xl font-bold text-white">Fhrrzz</h1>
        <nav className="mt-2 md:mt-0">
          <ul className="flex flex-wrap justify-center gap-4 items-center">
            <li>
              <a href="#hero" className="text-white hover:underline">
                Home
              </a>
            </li>
            <li>
              <a href="#contact" className="text-white hover:underline">
                Contact
              </a>
            </li>
            <li>
              <a href="#skills" className="text-white hover:underline">
                Skill
              </a>
            </li>
            <li>
              <a href="#projects" className="text-white hover:underline">
                Project
              </a>
            </li>
            <button
              onClick={toggleDarkMode}
              className="ml-2 px-3 py-1 border border-white text-white rounded hover:bg-white hover:text-black"
            >
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
          <div className="absolute top-0 left-0 w-full h-full rounded-[40%_40%_10%_60%] bg-blue-400 opacity-0 group-hover:opacity-20 transition-opacity duration-500"></div>
        </div>
      </section>

      {/* Contact Me Section */}
      <section
        id="contact"
        className={`flex justify-center items-center py-10 px-4 ${
          darkMode ? "bg-gray-900 text-gray-100" : "bg-white text-gray-900"
        } transition-colors duration-500`}
      >
        <ContactForm darkMode={darkMode} />
      </section>

      <section className="flex items-center justify-center">
      <div className="max-w-4xl mx-auto relative flex flex-col items-center">
        <div
          className={`w-full rounded-lg overflow-hidden shadow-lg transition-colors duration-500 ${
            darkMode ? "bg-gray-800" : "bg-gray-100"
          }`}
        >
          <img
            src={projectImages[currentIndex].img}
            alt={projectImages[currentIndex].title}
            className="w-full h-64 object-cover"
          />
          <div className="p-6">
            <h3 className="text-xl font-semibold mb-2">{projectImages[currentIndex].title}</h3>
            <p className="mb-4">{projectImages[currentIndex].desc}</p>
            <a
              href={projectImages[currentIndex].link}
              target="_blank"
              rel="noopener noreferrer"
              className={`inline-block px-4 py-2 rounded ${
                darkMode
                  ? "bg-blue-600 text-white hover:bg-blue-700"
                  : "bg-blue-500 text-white hover:bg-blue-600"
              } transition`}
            >
              See Project
            </a>
          </div>
        </div>

        {/* Navigation Buttons */}
        <div className="flex gap-6 mt-6">
          <button
            onClick={prevSlide}
            className={`px-4 py-2 rounded border ${
              darkMode
                ? "border-gray-300 text-gray-300 hover:bg-gray-700"
                : "border-gray-600 text-gray-600 hover:bg-gray-200"
            } transition`}
          >
            Prev
          </button>
          <button
            onClick={nextSlide}
            className={`px-4 py-2 rounded border ${
              darkMode
                ? "border-gray-300 text-gray-300 hover:bg-gray-700"
                : "border-gray-600 text-gray-600 hover:bg-gray-200"
            } transition`}
          >
            Next
          </button>
        </div>
      </div>
      </section>

      {/* Projects Carousel */}
      <section
        id="projects"
        className={`py-10 px-4 ${
          darkMode ? "bg-gray-900 text-gray-100" : "bg-white text-gray-900"
        } transition-colors duration-500`}
      >
        <h2 className="text-3xl font-semibold mb-8 text-center">My Projects</h2>
        <Carousel
          currentIndex={currentIndex}
          projectImages={projectImages}
          nextSlide={nextSlide}
          prevSlide={prevSlide}
          darkMode={darkMode}
        />
      </section>

      {/* Footer */}
      <footer
        className={`py-4 px-6 text-center ${
          darkMode ? "bg-gray-800 text-gray-300" : "bg-gray-200 text-gray-700"
        } transition-colors duration-500`}
      >
        <p>Made with ❤️ by Fhrrzz 2023</p>
      </footer>
    </div>
  );
}
