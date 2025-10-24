"use client";
import React from "react";
import { Header } from "@/app/_features/Header";
import { Footer } from "@/app/_features/Footer";
import { MovieListData } from "@/app/movies/MovieListData";

export const dynamicParams = true;

export default function MovieTypePage({ params }) {
  const { type } = params;

  const titleMap = {
    popular: "🔥 Popular Movies",
    top_rated: "⭐ Top Rated Movies",
    upcoming: "🎬 Upcoming Movies",
  };

  const title = titleMap[type] || "Movies";

  return (
    <div className="flex flex-col min-h-screen">
      <Header />

      <main className="flex-1 flex justify-center">
        <MovieListData title={title} type={type} />
      </main>

      <Footer />
    </div>
  );
}
