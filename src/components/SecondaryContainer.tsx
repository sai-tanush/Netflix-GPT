import React from 'react'
import MovieList from './MovieList'
import { RootState } from '../utils/appStore'
import { useSelector } from 'react-redux'

const SecondaryContainer:React.FC = () => {
    const movies = useSelector((store:RootState) => store.movies)
  return (
      movies.nowPlayingMovies && ( 
    <div className='bg-black'>
        <MovieList title={"Now Playing"} movies={movies.nowPlayingMovies} />
        <MovieList title={"Upcomming"} movies={movies.nowPlayingMovies} />
        <MovieList title={"Trending"} movies={movies.nowPlayingMovies} />
        <MovieList title={"Action"} movies={movies.nowPlayingMovies} />
        <MovieList title={"Drama"} movies={movies.nowPlayingMovies} />
    </div>
    )
  )
}

export default SecondaryContainer