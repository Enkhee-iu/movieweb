"use client";
import React, { useEffect, useState } from "react";
import { useParams, useRouter } from "next/navigation";

const BASE_URL = "https://api.themoviedb.org/3";
const ACCESS_TOKEN =
  "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxMjI5ZmNiMGRmZTNkMzc2MWFmOWM0YjFjYmEyZTg1NiIsIm5iZiI6MTc1OTcxMTIyNy43OTAwMDAyLCJzdWIiOiI2OGUzMGZmYjFlN2Y3MjAxYjI5Y2FiYmIiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.M0DQ3rCdsWnMw8U-8g5yGXx-Ga00Jp3p11eRyiSxCuY";

function MovieSkeleton() {
  return (
    <div className="animate-pulse max-w-7xl mx-auto p-8 text-gray-300">
      <div className="flex justify-between items-center mb-6">
        <div>
          <div className="h-8 w-48 bg-gray-200 rounded mb-2"></div>
          <div className="h-4 w-32 bg-gray-200 rounded"></div>
        </div>
        <div className="h-6 w-16 bg-gray-200 rounded"></div>
      </div>

      <div className="flex gap-8 mb-10">
        <div className="w-[290px] h-[428px] bg-gray-200 rounded-xl"></div>
        <div className="w-[760px] h-[428px] bg-gray-200 rounded-xl"></div>
      </div>

      <div className="h-20 bg-gray-200 rounded mb-8"></div>

      <div className="space-y-3 mb-10">
        <div className="h-4 w-64 bg-gray-200 rounded"></div>
        <div className="h-4 w-80 bg-gray-200 rounded"></div>
        <div className="h-4 w-72 bg-gray-200 rounded"></div>
      </div>

      <div className="grid grid-cols-5 gap-6">
        {Array.from({ length: 5 }).map((_, i) => (
          <div key={i}>
            <div className="w-full h-[270px] bg-gray-200 rounded-xl mb-2"></div>
            <div className="h-4 w-32 bg-gray-200 rounded mb-1"></div>
            <div className="h-3 w-16 bg-gray-200 rounded"></div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default function MovieDetail() {
  const router = useRouter();
  const { id } = useParams();

  const [movie, setMovie] = useState(null);
  const [similar, setSimilar] = useState([]);
  const [trailerKey, setTrailerKey] = useState(null);
  const [credits, setCredits] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchMovieData = async () => {
      try {
        const movieRes = await fetch(`${BASE_URL}/movie/${id}?language=en-US`, {
          headers: {
            Authorization: `Bearer ${ACCESS_TOKEN}`,
            accept: "application/json",
          },
        });
        const movieData = await movieRes.json();
        setMovie(movieData);

        const videoRes = await fetch(
          `${BASE_URL}/movie/${id}/videos?language=en-US`,
          {
            headers: {
              Authorization: `Bearer ${ACCESS_TOKEN}`,
              accept: "application/json",
            },
          }
        );
        const videoData = await videoRes.json();
        const trailer = videoData?.results?.find(
          (v) => v.type === "Trailer" && v.site === "YouTube"
        );

        setTrailerKey(trailer ? trailer.key : null);

        const similarRes = await fetch(
          `${BASE_URL}/movie/${id}/similar?language=en-US`,
          {
            headers: {
              Authorization: `Bearer ${ACCESS_TOKEN}`,
              accept: "application/json",
            },
          }
        );
        const similarData = await similarRes.json();
        setSimilar(similarData.results || []);

        const creditRes = await fetch(
          `${BASE_URL}/movie/${id}/credits?language=en-US`,
          {
            headers: {
              Authorization: `Bearer ${ACCESS_TOKEN}`,
              accept: "application/json",
            },
          }
        );
        const creditData = await creditRes.json();
        setCredits(creditData);

        setLoading(false);
      } catch (error) {
        console.error("Error fetching movie details:", error);
        setLoading(false);
      }
    };

    if (id) fetchMovieData();
  }, [id]);

  if (loading) return <MovieSkeleton />;

  if (!movie)
    return <p className="text-center text-red-500 mt-10">Movie not found</p>;

  return (
    <div className="bg-white text-gray-800 min-h-screen">
      <div className="max-w-7xl mx-auto p-8">
        <div className="flex justify-between items-center mb-6">
          <div>
            <h2 className="text-4xl font-bold">{movie.title}</h2>
            <p className="text-gray-500">
              {movie.release_date} • {movie.runtime} min
            </p>
          </div>
          <div className="flex items-center gap-2 text-yellow-500">
            <span>⭐</span>
            <p className="text-lg font-semibold text-gray-800">
              {movie.vote_average?.toFixed(1)}/10
            </p>
          </div>
        </div>

        <div className="flex gap-8 mb-10">
          <img
            src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
            alt={movie.title}
            className="rounded-xl shadow-lg w-[290px] h-[428px]"
          />
          <div className="w-[760px] h-[428px] bg-gray-200 rounded-xl flex">
            {trailerKey ? (
              <iframe
                src={`https://www.youtube.com/embed/${trailerKey}`}
                title="Trailer"
                allowFullScreen
                className="w-full h-full rounded-xl"
              ></iframe>
            ) : (
              <p className="text-gray-500 m-auto">No trailer available</p>
            )}
          </div>
        </div>

        <p className="text-gray-700 mb-8">{movie.overview}</p>

        {credits && (
          <div className="space-y-3 mb-10 text-gray-800">
            <div className="flex gap-2">
              <p className="font-semibold w-[100px]">Director</p>
              <p>
                {credits.crew
                  .filter((m) => m.job === "Director")
                  .map((d) => d.name)
                  .join(", ") || "N/A"}
              </p>
            </div>

            <div className="flex gap-2">
              <p className="font-semibold w-[100px]">Writers</p>
              <p>
                {credits.crew
                  .filter(
                    (m) =>
                      m.job === "Writer" ||
                      m.job === "Screenplay" ||
                      m.job === "Story" ||
                      m.department === "Writing"
                  )
                  .slice(0, 3)
                  .map((w) => w.name)
                  .join(", ") || "N/A"}
              </p>
            </div>

            <div className="flex gap-2">
              <p className="font-semibold w-[100px]">Stars</p>
              <p>
                {credits.cast
                  .slice(0, 3)
                  .map((actor) => actor.name)
                  .join(" • ") || "N/A"}
              </p>
            </div>
          </div>
        )}

        <div className="flex justify-between items-center mb-4">
          <h3 className="text-2xl font-bold text-gray-800">More like this</h3>
          <button
            onClick={() => router.push(`/movie/${id}/similar`)}
            className="text-gray-500 text-sm hover:text-gray-800 flex items-center gap-1 cursor-pointer"
          >
            See more →
          </button>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-5 gap-6">
          {similar.slice(0, 5).map((m) => (
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
      </div>
    </div>
  );
}
