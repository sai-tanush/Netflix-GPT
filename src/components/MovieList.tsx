import React from 'react'

interface Movie {
    adult: boolean;
    backdrop_path: string;
    genre_ids: number[];
    id: number;
    original_language: string;
    original_title: string;
    overview: string;
    popularity: number;
    poster_path: string;
    release_date: string;
    title: string;
    video: boolean;
    vote_average: number;
    vote_count: number;
  }

interface MovieListProps {
    title: string
    movies: Movie[] | null;
}

const MovieList:React.FC<MovieListProps>= ({title, movies}) => {
  return (
    <div>{title}</div>
  )
}

export default MovieList