"use client";
import React, { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import { Footer } from "@/app/_features/Footer";
import { Header } from "@/app/_features/Header";
import { MovieCard } from "@/app/_components/MovieListCard";

const BASE_URL = "https://api.themoviedb.org/3";
const ACCESS_TOKEN =
  "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxMjI5ZmNiMGRmZTNkMzc2MWFmOWM0YjFjYmEyZTg1NiIsIm5iZiI6MTc1OTcxMTIyNy43OTAwMDAyLCJzdWIiOiI2OGUzMGZmYjFlN2Y3MjAxYjI5Y2FiYmIiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.M0DQ3rCdsWnMw8U-8g5yGXx-Ga00Jp3p11eRyiSxCuY";

export default function GenrePage() {
  const { id } = useParams(); // жанрын ID
  const [movies, setMovies] = useState([]);
  const [genreName, setGenreName] = useState("");
  const [page, setPage] = useState(1);

  // 🎬 Кино татах
  useEffect(() => {
    const fetchMoviesByGenre = async () => {
      const res = await fetch(
        `${BASE_URL}/discover/movie?language=en&with_genres=${id}&page=${page}`,
        {
          headers: {
            Authorization: `Bearer ${ACCESS_TOKEN}`,
          },
        }
      );
      const data = await res.json();
      setMovies(data.results || []);
    };

    const fetchGenreName = async () => {
      const res = await fetch(`${BASE_URL}/genre/movie/list?language=en`, {
        headers: {
          Authorization: `Bearer ${ACCESS_TOKEN}`,
        },
      });
      const data = await res.json();
      const found = data.genres.find((g) => g.id == id);
      if (found) setGenreName(found.name);
    };

    fetchMoviesByGenre();
    fetchGenreName();
  }, [id, page]);

  return (
    <div>
      <Header />
      <div className="p-6 text-white min-h-screen">
        <h1 className="text-3xl font-bold mb-6">
          🎬 {genreName || "Genre"} Movies
        </h1>

        {/* ✅ MovieCard ашиглах */}
        <div className="flex flex-wrap justify-center gap-6">
          {movies.length > 0 ? (
            movies.map((movie) => (
              <MovieCard
                key={movie.id}
                id={movie.id}
                title={movie.title}
                rating={movie.vote_average?.toFixed(1) || "N/A"}
                image={
                  movie.poster_path
                    ? `https://image.tmdb.org/t/p/w500${movie.poster_path}`
                    : "/no-image.jpg"
                }
              />
            ))
          ) : (
            <p className="text-gray-400 col-span-full text-center">
              No movies found for this genre.
            </p>
          )}
        </div>

        {/* Pagination */}
        <div className="flex justify-center items-center gap-4 mt-6">
          <button
            onClick={() => setPage((p) => Math.max(p - 1, 1))}
            disabled={page === 1}
            className="px-3 py-1 bg-gray-600 rounded-lg hover:bg-gray-500 disabled:opacity-50"
          >
            Prev
          </button>
          <span className="text-lg">{page}</span>
          <button
            onClick={() => setPage((p) => p + 1)}
            className="px-3 py-1 bg-gray-600 rounded-lg hover:bg-gray-500"
          >
            Next
          </button>
        </div>
      </div>
      <Footer />
    </div>
  );
}
