import { IMG_CDN_URL } from "../../../utils/constants";
import { IMovieDetails, ITVShowDetails } from "../../../utils/moviesSlice";

type PosterPathProps = {
  posterPath: string;
  currMovie: IMovieDetails | ITVShowDetails;
};

const MovieCard: React.FC<PosterPathProps> = ({ posterPath, currMovie }) => {
  if (!posterPath) return null;

  const handlePosterCardClicked = () => {
    console.log("Current Movie Details = ", currMovie);
  };
  return (
    <div className="w-36 md:w-48 pr-4 cursor-pointer" onClick={handlePosterCardClicked}>
      <img alt="Move Poster" src={IMG_CDN_URL + posterPath} />
    </div>
  );
};

export default MovieCard;
