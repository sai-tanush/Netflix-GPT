import { IMG_CDN_URL } from "../utils/constants";

type PosterPathProps = {
  posterPath: string;
};

const MovieCard: React.FC<PosterPathProps> = ({ posterPath }) => {
  if (!posterPath) return null;
  return (
    <div className="w-36 md:w-48 pr-4">
      <img alt="Move Poster" src={IMG_CDN_URL + posterPath} />
    </div>
  );
};

export default MovieCard;
