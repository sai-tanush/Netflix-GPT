import { IMG_CDN_URL } from '../utils/constants'

interface PosterPathProps {
  posterPath: string
}


const MovieCard:React.FC<PosterPathProps>= ({ posterPath }) => {
  return (
    <div className='w-48 pr-4'>
      <img alt="Move Poster" src={IMG_CDN_URL + posterPath} />
    </div>
  )
}

export default MovieCard

//02:53:54