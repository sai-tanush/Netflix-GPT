import { useDispatch, useSelector } from "react-redux";
import lang from "../utils/languageConstant";
import { RootState } from "../utils/appStore";
import { useRef } from "react";
import model from "../utils/geminiai";
import { API_OPTIONS } from "../utils/constants";
import { addGptMovies, addGptSearchedMovies } from "../utils/gptSlice";

const GptSearchBar = () => {
  const currentLanguage = useSelector((store: RootState) => store.config?.lang);
  const searchInputText = useRef(null);
  const dispatch = useDispatch();

  const handleSearchBarSumbit = (e: React.ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();
  };

  const searchMovieTMDB = async (movie: string) => {
    const data = await fetch(
      "https://api.themoviedb.org/3/search/movie?query=" +
        movie +
        "&include_adult=false&language=en-US&page=1",
      API_OPTIONS
    );
    const jsonData = await data.json();

    return jsonData.results;
  };

  const handleGotSearchClick = async () => {
    const geminiAIQuery =
      "Act as a Movie Recommendation system and suggest some movies for the query : " +
      searchInputText.current.value +
      "Only give me names of 5 movies with comma separated like the example result given ahead. Example Result: Gadar, Sholay, Don, Koi Mil Gya, Hum Apke Hai Kaun";

    //Fetch Movies list from geminin api
    const geminiResults = async () => {
      const prompt = geminiAIQuery;
      const result = await model.generateContent(prompt);
      const response = await result.response;
      const geminiMovies = response?.candidates[0]?.content?.parts[0]?.text
        ?.split(",")
        .map((movie: string) => movie.trim());

      if (!geminiMovies) {
        console.log("Geminin ai Error");
      }
      console.log("Gemini Movies = ", geminiMovies);
      dispatch(addGptSearchedMovies(geminiMovies));

      //search Movies in TMDB DataBase
      const promiseArray = geminiMovies?.map((movie) => searchMovieTMDB(movie)); //->returns promises of movies
      try {
        const tmdbResults = await Promise.all(promiseArray);
        console.log("TMDB Results = ", tmdbResults);
        dispatch(addGptMovies(tmdbResults));
      } catch (error) {
        console.log("Error fetching TMDB results", error);
      }
    };
    geminiResults();
  };

  return (
    <div className="pt-[35%] md:pt-[8%] flex justify-center">
      <form
        className="bg-black py-2 px-4 rounded-md w-full md:w-1/2 grid grid-cols-12"
        onSubmit={handleSearchBarSumbit}
      >
        <input
          ref={searchInputText}
          type="text"
          className="px-3 col-span-9 h-[2.9rem] rounded-md"
          placeholder={lang[currentLanguage].gptSearchPlaceholder}
        />
        <button
          className="px-4 py-2 ml-3 col-span-3 h-[2.9rem] bg-red-700 rounded-md text-white"
          onClick={handleGotSearchClick}
        >
          {lang[currentLanguage].search}
        </button>
      </form>
    </div>
  );
};

export default GptSearchBar;
