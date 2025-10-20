"use client";
import { useState } from "react";

export default function SearchInput({ placeholder }) {
  const [query, setQuery] = useState("");

  return (
    <input
      type="text"
      placeholder={placeholder}
      value={query}
      onChange={(e) => setQuery(e.target.value)}
      className="w-full border p-2 rounded-md outline-none focus:ring-2 focus:ring-blue-500"
    />
  );
}
