import React from "react";

function Carousel({ darkMode }) {
  return (
    <section
      id="Skills"
      className={`mt-8 rounded-lg shadow-lg p-6 transition-colors duration-500 ${
        darkMode ? "bg-gray-900 text-gray-100" : "bg-white text-gray-900"
      }`}
          >
      <h1 className="text-center text-3xl font-semibold mb-6 text-blue-500">
        Language & Framework
      </h1>

      <div className="flex flex-col gap-6 overflow-hidden">
        {/* Carousel 1 */}
        <div
          className={`flex gap-12 animate-scrollRight whitespace-nowrap rounded-lg p-4 shadow-inner transition-colors duration-300 ${
            darkMode ? "bg-gray-800" : "bg-gray-100"
          }`}
          style={{ animationDuration: "20s" }}
        >
          {[
            {
              name: "JavaScript",
              src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
            },
            {
              name: "Java",
              src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg",
            },
            {
              name: "Python",
              src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
            },
            {
              name: "PHP",
              src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg",
            },
            {
              name: "Dart",
              src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/dart/dart-original.svg",
            },
            {
              name: "TypeScript",
              src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
            },
          ].map(({ name, src }) => (
            <div
              key={name}
              className={`min-w-[150px] max-w-[180px] p-6 rounded-xl shadow-md flex flex-col items-center justify-center transition-colors duration-300 ${
                darkMode ? "bg-blue-900 text-gray-100" : "bg-blue-100 text-gray-900"
              }`}
            >
              <img src={src} alt={`${name} Logo`} title={name} className="w-12 h-12" />
              <div className="mt-4 font-semibold">{name}</div>
            </div>
          ))}
        </div>

        {/* Carousel 2 */}
        <div
          className={`flex gap-12 animate-scrollLeft whitespace-nowrap rounded-lg p-4 shadow-inner transition-colors duration-300 ${
            darkMode ? "bg-gray-800" : "bg-gray-100"
          }`}
          style={{ animationDuration: "20s" }}
        >
          {[
            {
              name: "React.js",
              src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
            },
            {
              name: "Flask",
              src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flask/flask-original.svg",
            },
            {
              name: "Flutter",
              src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flutter/flutter-original.svg",
            },
            {
              name: "Laravel",
              src: "https://laravel.com/img/logomark.min.svg",
            },
            {
              name: "Tailwind",
              src: "https://unpkg.com/simple-icons@v8/icons/tailwindcss.svg",
            },
            {
              name: "Bootstrap",
              src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg",
            },
          ].map(({ name, src }) => (
            <div
              key={name}
              className={`min-w-[150px] max-w-[180px] p-6 rounded-xl shadow-md flex flex-col items-center justify-center transition-colors duration-300 ${
                darkMode ? "bg-blue-900 text-gray-100" : "bg-blue-100 text-gray-900"
              }`}

            >
              <img src={src} alt={`${name} Logo`} title={name} className="w-12 h-12" />
              <div className="mt-4 font-semibold">{name}</div>
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        @keyframes scrollLeft {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        @keyframes scrollRight {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        .animate-scrollLeft {
          animation-name: scrollLeft;
          animation-timing-function: linear;
          animation-iteration-count: infinite;
        }
        .animate-scrollRight {
          animation-name: scrollRight;
          animation-timing-function: linear;
          animation-iteration-count: infinite;
          animation-direction: reverse;
        }
      `}</style>
    </section>
  );
}

export default Carousel;
