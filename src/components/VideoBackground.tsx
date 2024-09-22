import { useEffect } from "react";
import { API_OPTIONS } from "../utils/constants";
import { useDispatch, useSelector } from "react-redux";
import { addTrailerVideo } from "../utils/moviesSlice";
import { RootState } from "../utils/appStore";

interface VideoDetails {
  id: string;
  iso_639_1: string;
  iso_3166_1: string;
  key: string;
  name: string;
  official: boolean;
  published_at: string;
  site: string;
  size: number;
  type: string;
}

const VideoBackground = ({ movieId }: { movieId: number }) => {
  
  const dispatch = useDispatch();
  const trailerVideo = useSelector((store:RootState)=> store.movies?.trailerVideo)
  //fetch trailer video
  const getMovieVideo = async () => {
    const data = await fetch(
      `https://api.themoviedb.org/3/movie/${movieId}/videos`,
      API_OPTIONS
    );
    const jsonData = await data.json();
    console.log("Movie Details = ", jsonData);
    const filterData = jsonData.results.filter(
      (video: VideoDetails) => video.type === "Trailer"
    );
    const trailer = filterData.length ? filterData[0] : jsonData.results[0];
    console.log("trailer = ", trailer);
    dispatch(addTrailerVideo(trailer));
  };

  useEffect(() => {
    getMovieVideo();
  }, []);

  return (
    <div>
      <iframe
        width="560"
        height="315"
        src={`https://www.youtube.com/embed/${trailerVideo?.key}`}
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin"
        allowFullScreen
      ></iframe>
    </div>
  );
}; 

export default VideoBackground;
