import Medsos from "./Medsos";

function Footer({ darkMode }) {
  return (
    <footer
      className={`py-6 px-6 text-center transition-colors duration-500 ${
        darkMode ? "bg-gray-800 text-gray-300" : "bg-gray-200 text-gray-700"
      }`}
    >
      <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="font-medium select-none">
          © 2025 Fhrrzz | Powered by React & Tailwind CSS
        </p>

        <div className="flex justify-center gap-6">
          <Medsos />
        </div>
      </div>
    </footer>
  );
}


export default Footer;
