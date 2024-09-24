import React from 'react'
import MovieList from './MovieList'
import { RootState } from '../utils/appStore'
import { useSelector } from 'react-redux'

const SecondaryContainer:React.FC = () => {
    const movies = useSelector((store:RootState) => store.movies)
  return (
    <div className='bg-black'>
        <MovieList title={"Now Playing"} movies={movies.nowPlayingMovies} />
    </div>
  )
}

export default SecondaryContainer