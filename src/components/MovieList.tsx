import React from "react";
import MovieCard from "./MovieCard";
import { Movie } from "../utils/moviesSlice";

interface MovieListProps {
  title: string;
  movies: Movie[];
}

const MovieList: React.FC<MovieListProps> = ({ title, movies }) => {
  console.log("movies = ", movies);
  console.log("movie Title = ", title);
  return (
    <div className="p-6 -mb-9">
      <p className="text-xl text-white ml-9 mb-2">{title}</p>
      <div className="flex overflow-x-scroll">
        <div className="flex">
          {movies?.map((movie) => (
            <MovieCard key={movie.id} posterPath={movie.poster_path} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default MovieList;
