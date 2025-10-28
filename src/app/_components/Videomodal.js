"use client";

import React from "react";

export default function VideoModal({ isOpen, onClose, trailerUrl }) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center">
      <div className="relative w-[90%] max-w-3xl bg-black rounded-md">
        <button
          onClick={onClose}
          className="absolute -top-10 right-0 left-240 text-white text-3xl cursor-pointer"
        >
          ✕
        </button>
        <iframe
          className="w-[997px] h-[561px] rounded-md"
          src={`${trailerUrl}?autoplay=1`}
          allow="autoplay; encrypted-media"
        ></iframe>
      </div>
    </div>
  );
}
