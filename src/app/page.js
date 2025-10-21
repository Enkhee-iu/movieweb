// "use client";
import { headers } from "next/headers";
import { HeroCard } from "./_components/HeroCard";
import  { MovieCart } from "./_components/MovieCard";
import { Footer } from "./_features/Footer";
import { Header } from "./_features/Header";
import { HeroSection } from "./_features/home/HeroSection";
import { PopularMovieList } from "./_features/home/PopularMovieList";
import { TopRatedMovieList } from "./_features/home/TopRatedMovieList";
import { UpcomingMovieList } from "./_features/home/UpcomingMovieList";
import Filmicon from "./_icons/Filmicon";
import Filmtitle from "./_icons/Filmtitle";
import Footerfilmicon from "./_icons/Footerfilmicon";
import Footertitle from "./_icons/Footertitle";
import Genreicon from "./_icons/Genreicon";
import Moonicon from "./_icons/Moonicon";
import RatingStar from "./_icons/RatingStar";
import Searchicon from "./_icons/Searchicon";



const BASE_URL = "https://api.themoviedb.org/3";
const ACCESS_TOKEN = "YOUR_API_TOKEN_HERE";

const getData = async () => {
  try {
    const response = await fetch(
      `${BASE_URL}/movie/upcoming?language=en-US&page=1`,
      {
        headers: {
          Authorization: `Bearer ${ACCESS_TOKEN}`,
          "Content-Type": "application/json",
        },
      }
    );
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.error(error);
  }
};

// useEffect(() => {
//   getData();
// }, []);

export default function Home() {
  return (
    <div className="">
      <Header />
      <HeroSection />
      <UpcomingMovieList />
      <PopularMovieList />
      <TopRatedMovieList />
      <Footer />
      
    </div>
  );
}

