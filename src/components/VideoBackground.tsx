import { useEffect } from "react";
import { API_OPTIONS } from "../utils/constants";

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
  //fetch trailer video
  const getMovieVideo = async () => {
    const data = await fetch(`https://api.themoviedb.org/3/movie/${movieId}/videos`, API_OPTIONS);
    const jsonData = await data.json();
    console.log("Movie Details = ", jsonData);
    const filterData = jsonData.results.filter((video: VideoDetails) => video.type === "Trailer");
    const trailer  = filterData.length? filterData[0] : jsonData.results[0];
    console.log("trailer = ", trailer);
  }

  useEffect(()=> {
    getMovieVideo();
  }, [])

  return (
    <div>
      <h1>Video Background</h1>
    </div>
  );
};

export default VideoBackground;
