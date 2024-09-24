import { IMG_CDN_URL } from '../utils/constants'

interface PosterPathProps {
  posterPath: string
}


const MovieCard:React.FC<PosterPathProps>= ({ posterPath }) => {
  return (
    <div>
      <img alt="Move Poster" src={IMG_CDN_URL + posterPath} />
    </div>
  )
}

export default MovieCard

//02:53:54