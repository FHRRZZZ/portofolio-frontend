import React, { useState } from "react";
import axios from "axios";
import { Bot, Send } from "lucide-react";

const API_KEY = "AIzaSyCsYzEOplTtLJU9c7rCR-k1wTWm12x_cDI"; // ⚠️ jangan dipakai di production
const API_URL = `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=${API_KEY}`;

const GeminiChat = ({ darkMode }) => {
  const [prompt, setPrompt] = useState("");
  const [response, setResponse] = useState("");
  const [loading, setLoading] = useState(false);

  const handleAsk = async () => {
    if (!prompt.trim()) return;
    setLoading(true);
    setResponse("");

    try {
      const res = await axios.post(API_URL, {
        contents: [
          {
            parts: [
              { text: "Kamu adalah asisten AI bernama Edgar. Jawab selalu sebagai Edgar." },
              { text: prompt }
            ]
          }
        ]
      });

      const output = res.data?.candidates?.[0]?.content?.parts?.[0]?.text || "Tidak ada balasan.";
      setResponse(output);
      setPrompt("");
    } catch (err) {
      console.error(err);
      setResponse("Terjadi kesalahan.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className={`w-full max-w-4xl mx-auto rounded-2xl p-6 md:p-10 shadow-xl border transition-all duration-300 ${darkMode ? "bg-gray-800 text-white border-gray-700" : "bg-white text-gray-900 border-gray-200"}`}>
      <h2 className="text-3xl font-bold text-center mb-6 flex items-center justify-center gap-2">
        <Bot size={28} className={darkMode ? "text-white" : "text-blue-600"} />
        <span className={darkMode ? "text-white" : "bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent"}>
          Chat dengan <span className="font-extrabold">Edgar</span>
        </span>
      </h2>

      {response && (
        <div className={`mb-6 p-4 rounded-xl border whitespace-pre-line shadow-sm ${darkMode ? "bg-gray-700 border-blue-600 text-gray-100" : "bg-blue-50 border-blue-300 text-gray-900"}`}>
          {response}
        </div>
      )}

      <textarea
        rows={5}
        className={`w-full p-4 rounded-xl border resize-none transition-all duration-200 focus:outline-none focus:ring-2 ${darkMode ? "bg-gray-700 border-blue-500 text-white focus:ring-blue-400 placeholder-gray-400" : "bg-gray-50 border-blue-400 text-gray-900 focus:ring-blue-500 placeholder-gray-500"}`}
        placeholder="Tulis pertanyaanmu di sini..."
        value={prompt}
        onChange={(e) => setPrompt(e.target.value)}
      />

      <button
        onClick={handleAsk}
        disabled={loading}
        className={`w-full mt-4 flex justify-center items-center gap-2 px-5 py-3 font-semibold rounded-xl transition-all duration-300 ${loading ? "bg-gradient-to-r from-blue-300 to-blue-400 cursor-not-allowed" : "bg-gradient-to-r from-blue-500 to-indigo-500 hover:from-blue-600 hover:to-indigo-600 text-white"}`}
      >
        <Send size={18} />
        {loading ? "Mengirim..." : "Kirim"}
      </button>
    </div>
  );
};

export default GeminiChat;
