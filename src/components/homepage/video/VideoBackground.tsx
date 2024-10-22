import { useSelector } from "react-redux";
import useMovieTrailer from "../../../hooks/useMovietrailer";
import { RootState } from "../../../utils/appStore";

type VideoBackgroundProps = {
  movieId: number;
};

const VideoBackground: React.FC<VideoBackgroundProps> = ({ movieId }) => {
  useMovieTrailer({ movieId });
  const trailerVideo = useSelector(
    (store: RootState) => store.movies?.trailerVideo
  );

  return (
    <iframe
      className="w-screen aspect-video mt-[-8rem]"
      src={`https://www.youtube.com/embed/${trailerVideo?.key}?&autoplay=1&mute=1&loop=1&playlist=${trailerVideo?.key}`}
      title="YouTube video player"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      referrerPolicy="strict-origin-when-cross-origin"
      allowFullScreen
    ></iframe>
  );
};

export default VideoBackground;
