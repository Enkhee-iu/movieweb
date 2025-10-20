import { Footer } from "./_features/Footer";
import { Header } from "./_features/Header";
import { HeroSection } from "./_features/home/HeroSection";
import { PopularMovieList } from "./_features/home/PopularMovieList";
import { TopRatedMovieList } from "./_features/home/TopRatedMovieList";
import { UpcomingMovieList } from "./_features/home/UpcomingMovieList";



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
