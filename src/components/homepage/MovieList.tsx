import React from "react";
import MovieCard from "./movies/MovieCard";
import { IMovieDetails, ITVShowDetails } from "../../utils/moviesSlice";

interface MovieListProps {
  title: string;
  movies?: IMovieDetails[] | null;
  tvshows?: ITVShowDetails[] | null;
}

const MovieList: React.FC<MovieListProps> = ({ title, movies, tvshows }) => {
  const posterType = movies ? movies : tvshows;
  return (
    <div className="p-6 -mb-9">
      <p className="text-xl text-white ml-9 mb-2">{title}</p>
      <div className="flex overflow-x-scroll no-scrollbar">
        <div className="flex">
          {posterType?.map((movie) => (
            <MovieCard key={movie.id} posterPath={movie.poster_path} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default MovieList;
