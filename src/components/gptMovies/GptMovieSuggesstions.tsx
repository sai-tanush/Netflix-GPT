import { useSelector } from "react-redux";
import { RootState } from "../../utils/appStore";
import MovieList from "../homepage/MovieList";

const GptMovieSuggesstions: React.FC = () => {
  const { movies, gptMovies } = useSelector((store: RootState) => store.gpt);
  // if (!gptMovies) return null;

  return (
    <div className="px-4 mt-4 mx-3 bg-black text-white bg-opacity-70">
      {gptMovies.map((movieName, index) => (
        <MovieList key={movieName} title={movieName} movies={movies[index]} />
      ))}
    </div>
  );
};

export default GptMovieSuggesstions;
