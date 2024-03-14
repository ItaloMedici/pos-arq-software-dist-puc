import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { MoviesService } from "../api/MoviesServices";

export const MovieDatail = () => {
  const { id } = useParams();

  const [movie, setMovie] = useState([]);

  const fetchMovie = async () => {
    const data = await MoviesService.getMovieById(+id);
    console.log(data);
    setMovie(data);
  };

  useEffect(() => {
    fetchMovie();
  }, []);

  return (
    <div>
      <h2>{movie.title}</h2>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit</p>
    </div>
  );
};
