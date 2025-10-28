import Header from "@/app/_features/home/Header";
import Footer from "@/app/_features/home/Footer";

const ACCESS_TOKEN =
  "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxMjI5ZmNiMGRmZTNkMzc2MWFmOWM0YjFjYmEyZTg1NiIsIm5iZiI6MTc1OTcxMTIyNy43OTAwMDAyLCJzdWIiOiI2OGUzMGZmYjFlN2Y3MjAxYjI5Y2FiYmIiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.M0DQ3rCdsWnMw8U-8g5yGXx-Ga00Jp3p11eRyiSxCuY";
const BASE_URL = "https://api.themoviedb.org/3";

async function getMovieDetails(id) {
  const res = await fetch(`${BASE_URL}/movie/${id}?language=en-US`, {
    headers: {
      Authorization: `Bearer ${ACCESS_TOKEN}`,
      accept: "application/json",
    },
  });
  return res.json();
}

async function getMovieVideos(id) {
  const res = await fetch(`${BASE_URL}/movie/${id}/videos`, {
    headers: {
      Authorization: `Bearer ${ACCESS_TOKEN}`,
      accept: "application/json",
    },
  });
  return res.json();
}

export default async function MovieDetailPage({ params }) {
  const { id } = params;

  const movie = await getMovieDetails(id);
  const videos = await getMovieVideos(id);

  const trailer = videos.results.find((v) => v.type === "Trailer");

  return (
    <>
      <Header />

      <div className="p-10 max-w-6xl mx-auto">
        <h1 className="text-4xl font-bold">{movie.title}</h1>
        <p className="text-gray-500">{movie.release_date}</p>

        {trailer && (
          <div className="mt-4">
            <iframe
              className="w-full aspect-video rounded-xl"
              src={`https://www.youtube.com/embed/${trailer.key}?autoplay=1&mute=1`}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        )}

        <p className="mt-6 text-gray-700">{movie.overview}</p>
      </div>

      <Footer />
    </>
  );
}
