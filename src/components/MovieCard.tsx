import { IMG_CDN_URL } from '../utils/constants'
import { Movie } from '../utils/moviesSlice'



const MovieCard = ({ movie }: {movie: Movie}) => {
  return (
    <div>
      <img alt="Move Poster" src={IMG_CDN_URL + movie.poster_path} />
    </div>
  )
}

export default MovieCard

//02:53:54