"use client";
import React, { useState, useRef, useEffect } from "react";
import { ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { Search } from "lucide-react";

export const Genre = () => {
  const [open, setOpen] = useState(false);
  const dropdownRef = useRef(null);

  const genres = [
    "Action",
    "Adventure",
    "Animation",
    "Biography",
    "Comedy",
    "Crime",
    "Documentary",
    "Drama",
    "Family",
    "Fantasy",
    "Film-Noir",
    "Game-Show",
    "History",
    "Horror",
    "Music",
    "Musical",
    "Mystery",
    "News",
    "Reality-TV",
    "Romance",
    "Sci-Fi",
    "Short",
    "Sport",
    "Talk-Show",
    "Thriller",
    "War",
    "Western",
  ];

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div ref={dropdownRef} className="relative inline-block text-left">
      <button
        onClick={() => setOpen(!open)}
        className="flex items-center gap-2 text-gray-700 hover:text-indigo-600 transition cursor-pointer"
      >
        <ChevronDown
          size={16}
          className={`transition-transform duration-300  ${
            open ? "rotate-180" : ""
          }`}
        />
        Genre
      </button>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="absolute left-0  mt-2 w-[520px] bg-white border border-gray-200 rounded-xl shadow-lg p-5 z-50"
          >
            <h3 className="text-lg font-semibold mb-1">Genres</h3>
            <p className="text-sm text-gray-500 mb-4">
              See lists of movies by genre
            </p>
            <div className="flex flex-wrap gap-2">
              {genres.map((genre) => (
                <button
                  key={genre}
                  className="text-sm flex items-center gap-1 cursor-pointer px-3 py-1.5 border border-gray-300 rounded-full hover:bg-indigo-50 hover:border-indigo-300 hover:text-indigo-700 transition"
                >
                  {genre}
                  <span className="text-gray-400">›</span>
                </button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

<div className="w-[488px] h-9 flex flex-row justify-between items-center gap-3">
  <div className="w-[97px] h-9 flex justify-center items-center rounded-xl border-2 border-gray-100 bg-gray-100">
    <Genre />
  </div>

  <div className="w-[379px] h-9 flex items-center rounded-8 border-2 border-gray-200 bg-gray-100 px-3 gap-2">
    <Search size={16} className="text-gray-400" />
    <input
      type="text"
      placeholder="Search"
      className="w-full h-full bg-transparent text-gray-500 text-sm placeholder-gray-400 focus:outline-none"
    />
  </div>
</div>;
