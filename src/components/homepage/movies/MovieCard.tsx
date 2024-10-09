import { useState } from "react";
import { IMG_CDN_URL } from "../../../utils/constants";

type MovieDetails = {
  adult: boolean;
  backdrop_path: string;
  genre_ids: number[];
  id: number;
  original_language: string;
  overview: string;
  popularity: number;
  poster_path: string;
  vote_average: number;
  vote_count: number;
  original_title: string;
  release_date: string;
  title: string;
  video: boolean;
}

type TVShowsDetails = {
  adult: boolean;
  backdrop_path: string;
  genre_ids: number[];
  id: number;
  original_language: string;
  overview: string;
  popularity: number;
  poster_path: string;
  vote_average: number;
  vote_count: number;
  origin_country: string[];
  original_name: string;
  first_air_date: string;
  name: string;
}

type PosterPathProps = {
  posterPath: string;
  currMovie: MovieDetails | TVShowsDetails;
};

const MovieCard: React.FC<PosterPathProps> = ({ posterPath, currMovie }) => {
  const [isPosterClicked, setIsPosterClicked] = useState<boolean>(false);
  if (!posterPath) return null;

  const handlePosterCardClicked = () => {
    setIsPosterClicked((val) => !val);
    console.log("Current MovieCard Details = ", currMovie);
  };

  const isMovie = (currMovie: MovieDetails | TVShowsDetails): currMovie is MovieDetails => {
    return (currMovie as MovieDetails).title !== undefined;
  };
  return (
    <>
      {!isPosterClicked && (
        <div
          className="w-36 md:w-48 pr-4 cursor-pointer"
          onClick={handlePosterCardClicked}
        >
          <img alt="Move Poster" src={IMG_CDN_URL + posterPath} />
        </div>
      )}
      {isPosterClicked && (
        <div className="absolute top-0 left-0 h-full w-full bg-black z-50">
          <div className="flex justify-center items-center">
            <p className="text-white font-2xl font-bold">{isMovie(currMovie) ? currMovie.title : currMovie.name}</p>
            <button className="bg-red-600 py-2 px-3 text-lg" 
            onClick={handlePosterCardClicked}>Back</button>
          </div>
        </div>
      )}
    </>
  );
};

export default MovieCard;
