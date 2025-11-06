function Trailer({ trailerKey, poster }) {
  const [play, setPlay] = useState(false);

  return (
    <div className="relative w-[800px] h-[428px] rounded-xl overflow-hidden group">
      {play ? (
        <iframe
          className="w-full h-full"
          src={`https://www.youtube.com/embed/${trailerKey}?autoplay=1&controls=1`}
          allow="autoplay; encrypted-media"
          allowFullScreen
        />
      ) : (
        <>
          <img src={poster} className="w-full h-full object-cover opacity-90" />
          <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition"></div>
          <button
            onClick={() => setPlay(true)}
            className="absolute bottom-6 left-6 flex items-center gap-3 bg-white/90 hover:bg-white 
                       text-black px-4 py-2 rounded-full transition shadow-lg"
          >
            ▶ <span className="font-medium">Play trailer</span>
          </button>
        </>
      )}
    </div>
  );
}
