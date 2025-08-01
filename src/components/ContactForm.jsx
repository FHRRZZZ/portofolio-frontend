import React, { useState, useEffect } from "react";
import Swal from "sweetalert2";

const ContactForm = ({ darkMode }) => {
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
      title: "Sukses!",
      text: "Pesan berhasil dikirim.",
      icon: "success",
    });
    setNama("");
    setEmail("");
    setDesc("");
  };

  const handleDelete = (index) => {
    const newData = data.filter((_, i) => i !== index);
    setData(newData);
    Swal.fire("Data berhasil dihapus", "", "success");
  };

  const textGradient = "bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent";

  return (
    <div
      className={`flex flex-col gap-4 p-6 rounded-lg w-full transition-all ${
        darkMode ? "bg-gray-800 text-white" : "bg-white text-gray-900"
      }`}
    >
      <form
        onSubmit={handleSubmit}
        className={`flex flex-col md:flex-row gap-4 p-6 rounded-lg ${
          darkMode ? "bg-gray-700" : "bg-gray-200"
        }`}
      >
        <div className="flex flex-col gap-2 w-full md:w-1/2">
          <label className={`text-sm ${darkMode ? "" : textGradient}`}>Nama:</label>
          <input
            type="text"
            value={nama}
            onChange={(e) => setNama(e.target.value)}
            placeholder="Masukkan nama"
            className={`p-2 rounded-lg border ${
              darkMode
                ? "bg-gray-700 border-blue-400 text-white"
                : "bg-gray-100 border-blue-600 text-black"
            }`}
          />
          <label className={`text-sm mt-4 ${darkMode ? "" : textGradient}`}>Email:</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Masukkan email"
            className={`p-2 rounded-lg border ${
              darkMode
                ? "bg-gray-700 border-blue-400 text-white"
                : "bg-gray-100 border-blue-600 text-black"
            }`}
          />
        </div>

        <div className="flex flex-col gap-2 w-full md:w-1/2">
          <label className={`text-sm ${darkMode ? "" : textGradient}`}>Pesan:</label>
          <textarea
            value={desc}
            onChange={(e) => setDesc(e.target.value)}
            placeholder="Tulis pesan Anda..."
            className={`p-2 rounded-lg border min-h-[100px] ${
              darkMode
                ? "bg-gray-700 border-blue-400 text-white"
                : "bg-gray-100 border-blue-600 text-black"
            }`}
          ></textarea>
        </div>
      </form>

      <button
        onClick={handleSubmit}
        className="self-center px-6 py-2 border border-blue-600 text-blue-600 rounded-lg hover:bg-blue-600 hover:text-white transition duration-300"
      >
        Kirim
      </button>

      <div className="mt-8 max-h-72 overflow-auto">
        <h2 className={`text-xl font-semibold mb-4 ${darkMode ? "" : textGradient}`}>
          Data Terkirim:
        </h2>
        {data.length === 0 && (
          <p className={darkMode ? "text-gray-300" : "text-gray-600"}>
            Belum ada data yang tersimpan.
          </p>
        )}
        <ul>
          {data.map((item, index) => (
            <li
              key={index}
              className={`mb-4 p-3 rounded shadow-sm ${
                darkMode ? "bg-gray-700" : "bg-gray-100"
              }`}
            >
              <p><strong>Nama:</strong> {item.nama}</p>
              <p><strong>Email:</strong> {item.email}</p>
              <p><strong>Pesan:</strong> {item.desc}</p>
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
};

export default ContactForm;
