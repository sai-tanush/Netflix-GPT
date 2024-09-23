import { useSelector } from "react-redux";
import { RootState } from "../utils/appStore";
import useMovieTrailer from "../hooks/useMovietrailer";



const VideoBackground = ({ movieId }: { movieId: number }) => {  
  useMovieTrailer({movieId});
  const trailerVideo = useSelector((store:RootState)=> store.movies?.trailerVideo)  

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
