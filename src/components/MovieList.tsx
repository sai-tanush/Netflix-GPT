import React from 'react'
import MovieCard from './MovieCard';
import { Movie } from '../utils/moviesSlice';

interface MovieListProps {
    title: string
    movies: Movie[]
}

const MovieList:React.FC<MovieListProps>= ({title, movies}) => {
  console.log("movie Title = ", title);
  return (
    <div>
        <MovieCard movie={movies[0]} />
    </div>
  )
}

export default MovieList