"use client";
import React, { useEffect, useState } from "react";
import { useParams, useRouter } from "next/navigation";
import { Header } from "@/app/_features/Header";
import { Footer } from "@/app/_features/Footer";

const BASE_URL = "https://api.themoviedb.org/3";
const ACCESS_TOKEN =
  "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxMjI5ZmNiMGRmZTNkMzc2MWFmOWM0YjFjYmEyZTg1NiIsIm5iZiI6MTc1OTcxMTIyNy43OTAwMDAyLCJzdWIiOiI2OGUzMGZmYjFlN2Y3MjAxYjI5Y2FiYmIiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.M0DQ3rCdsWnMw8U-8g5yGXx-Ga00Jp3p11eRyiSxCuY";

// 🦴 Skeleton Loader Component
function SimilarMoviesSkeleton() {
  return (
    <div className="animate-pulse max-w-7xl mx-auto p-8 text-gray-300">
      <div className="flex justify-between items-center mb-8">
        <div className="h-8 w-48 bg-gray-200 rounded"></div>
        <div className="h-5 w-16 bg-gray-200 rounded"></div>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-5 gap-6">
        {Array.from({ length: 20 }).map((_, i) => (
          <div key={i}>
            <div className="w-full h-[270px] bg-gray-200 rounded-xl mb-2"></div>
            <div className="h-4 w-32 bg-gray-200 rounded mb-1"></div>
            <div className="h-3 w-16 bg-gray-200 rounded"></div>
          </div>
        ))}
      </div>

      <div className="flex justify-center items-center mt-10 gap-4">
        <div className="h-8 w-20 bg-gray-200 rounded"></div>
        <div className="h-4 w-32 bg-gray-200 rounded"></div>
        <div className="h-8 w-20 bg-gray-200 rounded"></div>
      </div>
    </div>
  );
}

export default function SimilarMoviesPage() {
  const { id } = useParams();
  const router = useRouter();

  const [movies, setMovies] = useState([]);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchSimilar = async () => {
      try {
        setLoading(true);
        const res = await fetch(
          `${BASE_URL}/movie/${id}/similar?language=en-US&page=${page}`,
          {
            headers: {
              Authorization: `Bearer ${ACCESS_TOKEN}`,
              accept: "application/json",
            },
          }
        );
        const data = await res.json();
        setMovies(data.results || []);
        setTotalPages(data.total_pages || 1);
        setLoading(false);
      } catch (err) {
        console.error("Error fetching similar movies:", err);
        setLoading(false);
      }
    };

    if (id) fetchSimilar();
  }, [id, page]);

  // 🦴 Skeleton loading state
  if (loading)
    return (
      <div className="bg-white text-gray-800 min-h-screen">
        <Header />
        <SimilarMoviesSkeleton />
        <Footer />
      </div>
    );

  return (
    <div className="bg-white text-gray-800 min-h-screen">
      <Header />
      <div className="max-w-7xl mx-auto p-8">
        {/* Title + Back */}
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-3xl font-bold">More like this</h2>
          <button
            onClick={() => router.back()}
            className="text-gray-500 text-sm hover:text-gray-800"
          >
            ← Back
          </button>
        </div>

        {/* Movies grid */}
        {movies.length === 0 ? (
          <p className="text-center text-gray-500 mt-10">
            No similar movies found
          </p>
        ) : (
          <div className="grid grid-cols-2 md:grid-cols-5 gap-6">
            {movies.map((m) => (
              <div
                key={m.id}
                className="cursor-pointer hover:scale-[1.03] transition"
                onClick={() => router.push(`/movie/${m.id}`)}
              >
                <img
                  src={`https://image.tmdb.org/t/p/w500${m.poster_path}`}
                  alt={m.title}
                  className="rounded-xl shadow-md mb-2"
                />
                <p className="text-sm font-medium text-gray-800 truncate">
                  {m.title}
                </p>
                <p className="text-yellow-500 text-sm">
                  ⭐ {m.vote_average?.toFixed(1)}
                </p>
              </div>
            ))}
          </div>
        )}

        {/* Pagination */}
        <div className="flex justify-center items-center mt-10 gap-4">
          <button
            disabled={page === 1}
            onClick={() => setPage((p) => Math.max(1, p - 1))}
            className={`px-4 py-2 rounded-md ${
              page === 1
                ? "bg-gray-200 text-gray-400"
                : "bg-gray-800 text-white"
            }`}
          >
            Prev
          </button>

          <p className="text-gray-700">
            Page {page} of {totalPages}
          </p>

          <button
            disabled={page === totalPages}
            onClick={() => setPage((p) => Math.min(totalPages, p + 1))}
            className={`px-4 py-2 rounded-md ${
              page === totalPages
                ? "bg-gray-200 text-gray-400"
                : "bg-gray-800 text-white"
            }`}
          >
            Next
          </button>
        </div>
      </div>
      <Footer />
    </div>
  );
}
