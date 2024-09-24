import { useSelector } from "react-redux"
import VideoTitle from "./VideoTitle";
import VideoBackground from "./VideoBackground";
import { RootState } from "../utils/appStore";

const MainContainer:React.FC = () => {
    const movies = useSelector((store:RootState) => store.movies?.nowPlayingMovies);
    if(!movies) return;

    const mainMovie = movies[0];
    const { original_title, overview, id } = mainMovie;
  return (
    <div className="flex flex-col">
        <VideoTitle title={original_title} overview={overview}/>
        <VideoBackground movieId={id} />
    </div>
  )
}

export default MainContainer