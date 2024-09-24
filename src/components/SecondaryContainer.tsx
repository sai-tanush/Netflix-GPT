import React from "react";
import { useSelector } from "react-redux";
import MovieList from "./MovieList";
import { RootState } from "../utils/appStore";

const SecondaryContainer: React.FC = () => {
  const movies = useSelector((store: RootState) => store.movies);
  return (
    movies.nowPlayingMovies && (
      <div className="bg-black">
        <div className="relative -mt-72 z-50">
          <MovieList title={"Now Playing"} movies={movies.nowPlayingMovies} />
          <MovieList title={"Upcoming"} movies={movies.upcommingMovies} />
          <MovieList title={"Popular"} movies={movies.popularMovies} />
          <MovieList
            title={"Top Rated Movies"}
            movies={movies.topRatedMovies}
          />
          <MovieList
            title={"Airing Today TV Shows"}
            movies={movies.airingTodayTVshows}
          />
          <MovieList
            title={"Popular TV Shows"}
            movies={movies.popularTVshows}
          />
          <MovieList
            title={"Top Rated TV Shows"}
            movies={movies.topRatedTVshows}
          />
        </div>
      </div>
    )
  );
};

export default SecondaryContainer;
