import { useSelector } from "react-redux"
import VideoTitle from "./VideoTitle";
import VideoBackground from "./VideoBackground";
import { RootState } from "../utils/appStore";

const MainContainer:React.FC = () => {
    const movies = useSelector((store:RootState) => store.movies?.nowPlayingMovies);
    if(!movies) return;
  return (
    <div className="absolute top-0 left-0 flex flex-col">
        <VideoTitle />
        <VideoBackground />
    </div>
  )
}

export default MainContainer