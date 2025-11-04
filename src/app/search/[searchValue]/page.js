"use client";
import React, { useState, useEffect } from "react";
import { useSearchParams, useRouter, useParams } from "next/navigation";

const BASE_URL = "https://api.themoviedb.org/3";
const ACCESS_TOKEN =
  "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxMjI5ZmNiMGRmZTNkMzc2MWFmOWM0YjFjYmEyZTg1NiIsIm5iZiI6MTc1OTcxMTIyNy43OTAwMDAyLCJzdWIiOiI2OGUzMGZmYjFlN2Y3MjAxYjI5Y2FiYmIiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.M0DQ3rCdsWnMw8U-8g5yGXx-Ga00Jp3p11eRyiSxCuY";

export default function SearchResultsPage() {
  const { searchValue } = useParams();
  const router = useRouter();

  console.log(searchValue);

  const [results, setResults] = useState([]);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchSearchResults = async () => {
      setLoading(true);
      try {
        const res = await fetch(
          `${BASE_URL}/search/movie?query=${
            searchValue || ""
          }&language=en-US&page=${page}`,
          {
            headers: {
              Authorization: `Bearer ${ACCESS_TOKEN}`,
              accept: "application/json",
            },
          }
        );
        const data = await res.json();
        setResults(data.results || []);
        setTotalPages(data.total_pages || 1);
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchSearchResults();
  }, [page]);

  if (loading)
    return (
      <p className="text-center mt-20 text-gray-500 text-lg">
        Loading movies...
      </p>
    );

  return (
    <div className="max-w-5xl mx-auto p-8">
      <h2 className="text-3xl font-bold mb-6">
        Search results for “{searchValue}”
      </h2>

      {results.length === 0 ? (
        <p className="text-gray-500">No results found.</p>
      ) : (
        <div className="space-y-4">
          {results.map((movie) => (
            <div
              key={movie.id}
              className="flex justify-between items-center border-b border-gray-200 pb-3 hover:bg-gray-50 dark:hover:bg-gray-900 p-3 rounded-lg transition cursor-pointer"
              onClick={() => router.push(`/movie/${movie.id}`)}
            >
              <div className="flex items-center gap-4">
                <img
                  src={
                    movie.poster_path
                      ? `https://image.tmdb.org/t/p/w92${movie.poster_path}`
                      : "/no-image.jpg"
                  }
                  alt={movie.title}
                  className="w-[60px] h-[90px] rounded-md object-cover"
                />
                <div>
                  <h3 className="text-lg font-semibold">{movie.title}</h3>
                  <p className="text-yellow-500 text-sm">
                    ⭐ {movie.vote_average?.toFixed(1)}/10
                  </p>
                  <p className="text-gray-500 text-sm">
                    {movie.release_date?.slice(0, 4) || "Unknown"}
                  </p>
                </div>
              </div>
              <p className="text-sm text-gray-600 hover:text-indigo-600 transition">
                See more →
              </p>
            </div>
          ))}
        </div>
      )}

      {totalPages > 1 && (
        <div className="flex justify-center items-center gap-4 mt-10">
          <button
            onClick={() => setPage((p) => Math.max(p - 1, 1))}
            disabled={page === 1}
            className="px-4 py-2 border rounded-md disabled:opacity-40 dark:border-gray-700 hover:bg-gray-100 dark:hover:bg-gray-800"
          >
            ← Prev
          </button>
          <span className="text-gray-600 dark:text-gray-300">
            Page {page} of {totalPages}
          </span>
          <button
            onClick={() => setPage((p) => Math.min(p + 1, totalPages))}
            disabled={page === totalPages}
            className="px-4 py-2 border rounded-md disabled:opacity-40 dark:border-gray-700 hover:bg-gray-100 dark:hover:bg-gray-800"
          >
            Next →
          </button>
        </div>
      )}
    </div>
  );
}
