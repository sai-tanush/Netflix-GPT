import React from "react";
import MovieList from "./MovieList";
import { RootState } from "../utils/appStore";
import { useSelector } from "react-redux";

const SecondaryContainer: React.FC = () => {
  const movies = useSelector((store: RootState) => store.movies);
  return (
    movies.nowPlayingMovies && (
      <div className="bg-black">
        <div className="relative -mt-72 z-50">
        <MovieList title={"Now Playing"} movies={movies.nowPlayingMovies} />
          <MovieList title={"Upcomming"} movies={movies.nowPlayingMovies} />
          <MovieList title={"Popular"} movies={movies.popularMovies} />
          <MovieList title={"Top Rated Movies"} movies={movies.topRatedMovies} />
          <MovieList title={"Drama"} movies={movies.nowPlayingMovies} />
        </div>
      </div>
    )
  );
};

export default SecondaryContainer;
