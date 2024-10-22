import { useState } from "react";
import { IMG_CDN_URL } from "../../../utils/constants";
import { useSelector } from "react-redux";
import { RootState } from "../../../utils/appStore";

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
};

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
};

type PosterPathProps = {
  posterPath: string;
  currMovie: MovieDetails | TVShowsDetails;
};

const MovieCard: React.FC<PosterPathProps> = ({ posterPath, currMovie }) => {
  const [isPosterClicked, setIsPosterClicked] = useState<boolean>(false);
  const gptSelect = useSelector((state: RootState) => state.user?.gptSection);


  if (!posterPath) return null;

  const handlePosterCardClicked = () => {
    setIsPosterClicked((val) => !val);
  };

  const isMovie = (currMovie: MovieDetails | TVShowsDetails): currMovie is MovieDetails => {
    return (currMovie as MovieDetails).title !== undefined;
  };

  return (
    <>
      {!isPosterClicked && (
        <div
          className={`w-36 md:w-48 pr-4 cursor-pointer ${
            gptSelect ? 'pointer-events-none' : ''
          }`}  // Apply pointer-events-none when gptSelect is true
          onClick={!gptSelect ? handlePosterCardClicked : undefined} // Prevent function call if gptSelect is true
        >
          <img alt="Movie Poster" src={IMG_CDN_URL + posterPath} />
        </div>
      )}
      {isPosterClicked && (
        <div className="absolute top-0 left-0 h-screen w-screen mt-[-37%] bg-black z-50">
          {!gptSelect && (
            <div className="flex justify-end mr-[20%] mt-[2%]">
              <button className="bg-red-600 py-2 px-3 text-lg" 
                onClick={handlePosterCardClicked}>
                Back
              </button>
            </div>
          )}
          <div className="w-3/4 h-3/4 flex mx-auto mt-2">
            <img alt="Movie Poster" src={IMG_CDN_URL + posterPath} />
            <div className="w-full h-full flex flex-col space-y-3 mx-[5%] mt-[12%]">
              <p className="text-6xl text-center text-white mb-[5%]">
                {isMovie(currMovie) ? currMovie.title : currMovie.name}
              </p>
              <p className="text-xl text-white">
                <span className="font-bold mr-5">Description:</span>{currMovie.overview}
              </p>
              <p className="text-xl text-white">
                <span className="font-bold mr-5">Released On:</span>{isMovie(currMovie) ? currMovie.release_date : currMovie.first_air_date}
              </p>
              <p className="text-xl text-white">
                <span className="font-bold mr-5">Rating:</span>{currMovie.vote_average}
              </p>
              <p className="text-xl text-white">
                <span className="font-bold mr-5">Languages:</span>{currMovie.original_language}
              </p>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default MovieCard;
