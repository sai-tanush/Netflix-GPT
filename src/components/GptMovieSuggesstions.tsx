import { useSelector } from "react-redux"
import { RootState } from "../utils/appStore"
import MovieList from "./MovieList";

const GptMovieSuggesstions:React.FC = () => {
  const { movies, gptMovies } = useSelector((store: RootState) => store.gpt);
  if(!gptMovies) return null;

  return (
    <div className="p-4 my-2 mx-3 bg-black text-white bg-opacity-55">
      <div>
        {gptMovies.map((movieName, index) => (
          <MovieList key={movieName} title={movieName} movies={movies[index]} />
        ))}
      </div>
    </div>
  )
}

export default GptMovieSuggesstions