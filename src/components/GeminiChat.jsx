import React, { useState } from "react";
import axios from "axios";
import { Bot, Send } from "lucide-react"; // Icon opsional

const GeminiChat = () => {
  const [prompt, setPrompt] = useState("");
  const [response, setResponse] = useState("");
  const [loading, setLoading] = useState(false);

  const handleAsk = async () => {
    if (!prompt.trim()) return;
    setLoading(true);
    setResponse("");

    try {
      const res = await axios.post(
        "https://portofolio-production-0e38.up.railway.app/", // Ganti ini dengan domain Railway-mu
        { prompt }
      );
      setResponse(res.data.reply || "Tidak ada balasan.");
    } catch (err) {
      setResponse("Terjadi kesalahan saat menghubungi server.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="p-6 md:p-10 max-w-3xl mx-auto bg-white dark:bg-gray-900 rounded-xl shadow-md transition">
      <h2 className="text-2xl md:text-3xl font-bold text-center text-blue-600 dark:text-blue-400 flex items-center justify-center gap-2 mb-6">
        <Bot size={28} /> Chat dengan Edgar
      </h2>

      <textarea
        rows={5}
        className="w-full p-4 border rounded-lg border-blue-400 focus:ring-2 focus:ring-blue-500 bg-gray-50 dark:bg-gray-800 dark:text-white transition resize-none"
        placeholder="Tulis pertanyaanmu di sini..."
        value={prompt}
        onChange={(e) => setPrompt(e.target.value)}
      />

      <button
        onClick={handleAsk}
        disabled={loading}
        className={`w-full mt-4 flex justify-center items-center gap-2 px-4 py-2 text-white font-semibold rounded-lg transition ${
          loading ? "bg-blue-300" : "bg-blue-500 hover:bg-blue-600"
        }`}
      >
        <Send size={18} />
        {loading ? "Mengirim..." : "Kirim"}
      </button>

      {response && (
        <div className="mt-6 p-4 bg-blue-50 dark:bg-gray-800 border border-blue-200 dark:border-blue-600 rounded-lg whitespace-pre-line text-gray-900 dark:text-gray-100">
          {response}
        </div>
      )}
    </div>
  );
};

export default GeminiChat;
