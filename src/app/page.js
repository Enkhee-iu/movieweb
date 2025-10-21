import { HeroCard } from "./_components/HeroCard";
import MovieCard from "./_components/MovieCard";

import { Footer } from "./_features/Footer";
import { Header } from "./_features/Header";
import { HeroSection } from "./_features/home/HeroSection";
import { PopularMovieList } from "./_features/home/PopularMovieList";
import { TopRatedMovieList } from "./_features/home/TopRatedMovieList";
import { UpcomingMovieList } from "./_features/home/UpcomingMovieList";
import Filmicon from "./_icons/Filmicon";
import Filmtitle from "./_icons/Filmtitle";
import Genreicon from "./_icons/Genreicon";
import Moonicon from "./_icons/Moonicon";
import RatingStar from "./_icons/RatingStar";
import Searchicon from "./_icons/Searchicon";

export default function Home() {
  return (
    <div>
      <Header />
      <HeroSection />
      <UpcomingMovieList />
      <PopularMovieList />
      <TopRatedMovieList />
      <Footer />
    </div>
  );
}
