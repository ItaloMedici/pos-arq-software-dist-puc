import { useEffect, useState } from "react";
import { MoviesService } from "../api/MoviesServices";
import { MoviesList } from "../components/MoviesList";
import { MoviesContainer } from "../styles/MoviesContainer";

export const Home = () => {
  const [movies, setMovies] = useState([]);

  const fetchMovies = async () => {
    const { data } = await MoviesService.getMovies();
    setMovies(data.results);
  };

  useEffect(() => {
    fetchMovies();
  }, []);

  return (
    <main>
      <MoviesContainer>
        <MoviesList movies={movies} />
      </MoviesContainer>
    </main>
  );
};
