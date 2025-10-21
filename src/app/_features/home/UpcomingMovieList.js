import MovieCard from "@/app/_components/MovieCard";

export const UpcomingMovieList = () => {
  return (
    <div className="w-<fraction>  min-h-[4184px] pl-120 pr-120 ">
      <div className="w-<fraction>  min-h-[36px] flex justify-between mb-8 mt-8">
        <p className="text-[24px] font-semibold">Upcoming</p>
        <div className="w-[120px] min-h-[36px] flex gap-[8px]">
          <button className="font-semibold text-[14px]">See More</button>
        </div>
      </div>
      <div className=" grid  grid-cols-5 gap-4  ">
        <MovieCard />
        <MovieCard />
        <MovieCard />
        <MovieCard />
        <MovieCard />
        <MovieCard />
        <MovieCard />
        <MovieCard />
        <MovieCard />
        <MovieCard />
      </div>
    </div>
  );
};
