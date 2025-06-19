import React, { useState, useEffect } from "react";
import ReactLogo from "./components/ReactLogo";
import Carousel from "./components/Carousel";
import Swal from "sweetalert2";
import RotatingText from "./components/RotatingText";

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
    Swal.fire({
      title: "Success",
      icon: "success",
      draggable: true,
    });
    setNama("");
    setEmail("");
    setDesc("");
  };

  const handleDelete = (index) => {
    const newData = data.filter((_, i) => i !== index);
    setData(newData);
    localStorage.setItem("contactData", JSON.stringify(newData));
    Swal.fire("Data berhasil dihapus", "", "success");
  };

  // reusable kelas gradasi teks
  const textGradientClass = "bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent";

  return (
    <div
      className={`flex flex-col gap-4 p-6 md:p-12 lg:p-20 rounded-lg shadow-md w-full max-w-4xl ${
        darkMode ? "bg-gray-800 text-gray-100" : "bg-white text-gray-900"
      } transition-colors duration-500`}
    >
      <h1 className={`text-3xl font-semibold text-center ${darkMode ? "text-white" : textGradientClass}`}>
        Contact Me
      </h1>

      <form
        onSubmit={handleSubmit}
        className={`flex flex-col md:flex-row gap-4 p-6 rounded-lg ${
          darkMode ? "bg-gray-700" : "bg-gray-200"
        }`}
      >
        <div className="flex flex-col gap-2 w-full md:w-1/2">
          <label className={`text-sm ${darkMode ? "" : textGradientClass}`}>Your name:</label>
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
          <label className={`text-sm mt-4 ${darkMode ? "" : textGradientClass}`}>Your email:</label>
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
          <label className={`text-sm ${darkMode ? "" : textGradientClass}`}>Desc:</label>
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
        <h2 className={`text-xl font-semibold mb-4 ${darkMode ? "text-white" : textGradientClass}`}>
          Data Tersimpan:
        </h2>
        {data.length === 0 && <p className={darkMode ? "text-gray-300" : ""}>Tidak ada data tersimpan.</p>}
        <ul>
          {data.map((item, index) => (
            <li
              key={index}
              className={`mb-4 p-3 rounded shadow-sm ${
                darkMode ? "bg-gray-700" : "bg-gray-100"
              }`}
            >
              <p>
                <strong className={darkMode ? "" : textGradientClass}>Nama:</strong> {item.nama}
              </p>
              <p>
                <strong className={darkMode ? "" : textGradientClass}>Email:</strong> {item.email}
              </p>
              <p>
                <strong className={darkMode ? "" : textGradientClass}>Pesan:</strong> {item.desc}
              </p>
              <button
                onClick={() => handleDelete(index)}
                className="mt-2 px-4 py-1 border border-red-500 text-red-500 rounded hover:bg-red-500 hover:text-white transition duration-300"
              >
                Hapus
              </button>
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

  const textGradientClass = "bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent";

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

      <section
        id="hero"
        className={`flex flex-col items-center px-4 py-10 gap-10 ${
          darkMode ? "bg-gray-900 text-gray-100" : "bg-white text-gray-900"
        } transition-colors duration-500`}
      >
        <div className="flex flex-col lg:flex-row items-center justify-center gap-10 w-full m">
          <div className="w-full lg:w-1/2 text-center lg:text-left">
            <h2 className={`text-3xl font-bold mb-4 ml-[-90px] ${textGradientClass}`}>
              {"Hello, I'm Fhrrzz "}
              <span className="inline-block text-black bg-none">
                👋
              </span>
            </h2>
            <RotatingText textGradientClass={textGradientClass} />
            <p className={`text-lg leading-relaxed ml-[-90px] ${textGradientClass}`}>
              Saya seorang developer React Native yang bersemangat membuat aplikasi mobile
              <br />
              dan web yang responsif dan user-friendly.
            </p>
          </div>

          {/* Profile Image (Kanan) */}
          <div className="relative group w-60 sm:w-72 h-60 sm:h-72 flex-shrink-0">
            <div className="w-full h-full bg-gradient-to-r from-blue-800 to-blue-500 rounded-[40%_40%_10%_60%] shadow-lg overflow-hidden">
              <img
                src="/Q.png"
                alt="Profile"
                className="w-full h-full object-cover rounded-[40%_40%_10%_60%]"
              />
            </div>

            <div className="absolute top-0 left-0 w-full h-full rounded-[40%_40%_10%_60%] bg-blue-400 opacity-0 group-hover:opacity-20 transition-opacity duration-500"></div>

            <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 translate-y-2 opacity-0 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 z-50 pointer-events-none">
              <div className="relative bg-white text-black text-sm font-semibold px-4 py-2 rounded-lg shadow-lg backdrop-blur-sm bg-opacity-80">
                sheesss🥶🥶
                <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-3 h-3 bg-white rotate-45"></div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-6">
          <div className="w-100 h-100 mx-auto">
            <ReactLogo />
          </div>
        </div>
      </section>

      <section
        id="projects"
        className={`py-10 px-4 ${
          darkMode ? "bg-gray-900 text-gray-100" : "bg-white text-gray-900"
        } transition-colors duration-500`}
      >
        <Carousel
          currentIndex={currentIndex}
          projectImages={projectImages}
          nextSlide={nextSlide}
          prevSlide={prevSlide}
          darkMode={darkMode}
        />
      </section>

      <section
        id="projects"
        className={`py-12 px-6 ${
          darkMode ? "bg-gray-900 text-white" : "bg-white text-gray-900"
        } transition-colors duration-500`}
      >
        <h2 className={`text-3xl font-bold text-center mb-10 ${textGradientClass}`}>
          My Projects
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {projectImages.map((project, index) => (
            <div
              key={index}
              className={`rounded-xl overflow-hidden shadow-lg transform hover:scale-105 hover:shadow-2xl transition-all duration-300 ${
                darkMode ? "bg-gray-800" : "bg-gray-100"
              }`}
            >
              <img
                src={project.img}
                alt={project.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-5 flex flex-col justify-between h-[200px]">
                <div>
                  <h3 className={`text-xl font-semibold mb-2 ${textGradientClass}`}>
                    {project.title}
                  </h3>
                  <p className={textGradientClass}>{project.desc}</p>
                </div>
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`mt-auto inline-flex items-center justify-center gap-2 px-4 py-2 rounded-lg font-semibold ${
                    darkMode
                      ? "bg-blue-600 text-white hover:bg-blue-700"
                      : "bg-blue-500 text-white hover:bg-blue-600"
                  } transition`}
                >
                  <span className="text-black">🔗</span>
                  <span className={`${textGradientClass} text-white`}>Lihat Project</span>
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section
        id="contact"
        className={`flex justify-center items-center py-10 px-4 ${
          darkMode ? "bg-gray-900 text-gray-100" : "bg-white text-gray-900"
        } transition-colors duration-500`}
      >
        <ContactForm darkMode={darkMode} />
      </section>

      <footer
        className={`py-4 px-6 text-center ${
          darkMode ? "bg-gray-800 text-gray-300" : "bg-gray-200 text-gray-700"
        } transition-colors duration-500`}
      >
        <p className={`underline ${textGradientClass}`}>Made with ❤️ by Fhrrzz 2025</p>
      </footer>
    </div>
  );
}
