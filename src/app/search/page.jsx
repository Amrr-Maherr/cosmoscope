"use client";

import { useState } from "react";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer/Footer";
import { motion } from "framer-motion"; // استيراد motion من framer-motion

export default function SearchTestPage() {
  const [query, setQuery] = useState("");
  const [result, setResult] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    const trimmed = query.trim();
    if (trimmed) {
      setResult(`You searched for: ${trimmed}`);
    }
  };

  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-black text-white flex flex-col items-center justify-center p-6">
        {/* انيميشن العنوان */}
        <motion.h1
          className="text-4xl font-bold mb-8"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          Search Test
        </motion.h1>

        <form
          onSubmit={handleSubmit}
          className="flex items-center w-full max-w-xl bg-zinc-900 rounded-2xl shadow-md overflow-hidden"
        >
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search..."
            className="flex-grow bg-transparent text-white px-4 py-3 placeholder-gray-400 outline-none"
          />
          {/* انيميشن الزر عند الضغط */}
          <motion.button
            type="submit"
            className="bg-white text-black font-semibold px-6 py-3 hover:bg-gray-200 transition"
            whileTap={{ scale: 0.95 }} // تأثير انكماش عند الضغط على الزر
          >
            Search
          </motion.button>
        </form>

        {/* انيميشن النتيجة عند ظهورها */}
        {result && (
          <motion.p
            className="mt-6 text-lg text-gray-300"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            {result}
          </motion.p>
        )}
      </div>
      <Footer />
    </>
  );
}
