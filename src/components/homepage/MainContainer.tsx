import { useSelector } from "react-redux";
import VideoTitle from "./video/VideoTitle";
import VideoBackground from "./video/VideoBackground";
import { RootState } from "../../utils/appStore";
import { RANDOM_NUM } from "../../utils/constants";


const MainContainer: React.FC = () => {
  const movies = useSelector(
    (store: RootState) => store.movies?.nowPlayingMovies
  );
  if (!movies) return;

  const mainMovie = movies[RANDOM_NUM];
  const { original_title, overview, id } = mainMovie;
  return (
    <div className="flex flex-col pt-[20%] bg-black md:pt-0">
      <VideoTitle title={original_title} overview={overview} />
      <VideoBackground movieId={id} />
    </div>
  );
};

export default MainContainer;
