import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { API_OPTIONS } from "../utils/constants";
import { addTrailerVideo } from "../utils/moviesSlice";
import { RootState } from "../utils/appStore";

type VideoDetails = {
  id: string;
  iso_639_1: string;
  iso_3166_1: string;
  key: string;
  name: string;
  official: boolean;
  published_at: string;
  site: string;
  size: number;
  type: "Trailer";
};

const useMovieTrailer = ({ movieId }: { movieId: number }) => {
  const dispatch = useDispatch();
  const movieTrailer = useSelector(
    (store: RootState) => store.movies.trailerVideo
  );

  const getMovieVideo = async () => {
    const data = await fetch(
      `https://api.themoviedb.org/3/movie/${movieId}/videos`,
      API_OPTIONS
    );
    const jsonData = await data.json();
    const filterData = jsonData.results.filter(
      (video: VideoDetails) => video.type === "Trailer"
    );
    const trailer = filterData.length ? filterData[0] : jsonData.results[0];
    dispatch(addTrailerVideo(trailer));
  };

  useEffect(() => {
    if (!movieTrailer) {
      getMovieVideo();
    }
  }, []);
};

export default useMovieTrailer;
