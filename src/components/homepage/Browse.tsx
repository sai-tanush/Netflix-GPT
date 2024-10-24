import React from "react";
import { useSelector } from "react-redux";
import { useNowPlayingMovies } from "../../hooks/useNowPlayingMovies";
import { RootState } from "../../utils/appStore";
import { usePopularMovies } from "../../hooks/usePopularMovies";
import { useTopRatedMovies } from "../../hooks/useTopRatedMovies";
import { useAiringTodayTVshows } from "../../hooks/useAiringTodayTVshows";
import { useUpcomingMovies } from "../../hooks/useUpcomingMovies";
import { usePopularTVshows } from "../../hooks/usePopularTVshows";
import { useTopRatedTVshows } from "../../hooks/useTopRatedTVshows";
import BrowseNavbar from "./BrowseNavbar";
import GptPage from "../gptMovies/GptPage";
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";


const Browse: React.FC = () => {
  const showGptSection = useSelector(
    (store: RootState) => store.gpt?.showGptSearch
  );
  useNowPlayingMovies();
  usePopularMovies();
  useTopRatedMovies();
  useUpcomingMovies();
  useAiringTodayTVshows();
  usePopularTVshows();
  useTopRatedTVshows();

  return (
    <>
      <div className="relative w-screen min-h-screen no-scrollable">
        <BrowseNavbar />
        {showGptSection ? (
          <GptPage />
        ) : (
          <>
            <MainContainer />
            <SecondaryContainer />
          </>
        )}
      </div>
    </>
  );
};

export default Browse;
