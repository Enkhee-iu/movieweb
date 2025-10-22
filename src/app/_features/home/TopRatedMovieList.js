"use client";
import { MovieCard } from "@/app/_components/MovieListCard";
import React, { useEffect, useState } from "react";

const BASE_URL = "https://api.themoviedb.org/3";
const ACCESS_TOKEN =
  "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxMjI5ZmNiMGRmZTNkMzc2MWFmOWM0YjFjYmEyZTg1NiIsIm5iZiI6MTc1OTcxMTIyNy43OTAwMDAyLCJzdWIiOiI2OGUzMGZmYjFlN2Y3MjAxYjI5Y2FiYmIiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.M0DQ3rCdsWnMw8U-8g5yGXx-Ga00Jp3p11eRyiSxCuY"; // өөрийн token-г энд тавина

export const TopRatedMovieList = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const fetchPopularMovies = async () => {
      try {
        const res = await fetch(
          `${BASE_URL}/movie/top_rated?language=en-US&page=1`,
          {
            headers: {
              Authorization: `Bearer ${ACCESS_TOKEN}`,
              accept: "application/json",
            },
          }
        );
        const data = await res.json();
        setMovies(data.results || []);
      } catch (error) {
        console.error("Error fetching movies:", error);
      }
    };

    fetchPopularMovies();
  }, []);

  return (
    <div className="w-<fraction> h-<fraction> flex justify-center">
      <div className="p-6">
        <div className="flex justify-between">
          <h2 className="text-2xl font-bold mb-6 text-gray-800">Upcoming</h2>
          <h3 className="text-sm font-normal oklch(14.7% 0.004 49.25) flex items-center gap-[11px]">
            See more
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width={11}
              height={11}
              fill="none"
            >
              <path
                stroke="#18181B"
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M.5 5.167h9.333m0 0L5.167.5m4.666 4.667L5.167 9.833"
              />
            </svg>
          </h3>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 justify-center">
          {movies.map((movie) => (
            <MovieCard
              key={movie.id}
              title={movie.title}
              rating={movie.vote_average.toFixed(1)}
              image={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};
