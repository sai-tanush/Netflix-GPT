import React from 'react'
import MovieCard from './MovieCard';
import { Movie } from '../utils/moviesSlice';

interface MovieListProps {
    title: string
    movies: Movie[]
}

const MovieList:React.FC<MovieListProps>= ({title, movies}) => {
  console.log("movies = ", movies);
  console.log("movie Title = ", title);
  return (
    <div>
        {movies.map((movies) => (
          <MovieCard key={movies.id} posterPath={movies.poster_path} />
        ))}
    </div>
  )
}

export default MovieList