import React from "react";
import { useSelector } from "react-redux";
import { useNowPlayingMovies } from "../hooks/useNowPlayingMovies";
import BrowseNavbar from "./BrowseNavbar";
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";
import { usePopularMovies } from "../hooks/usePopularMovies";
import { useTopRatedMovies } from "../hooks/useTopRatedMovies";
import { useUpcomingMovies } from "../hooks/useUpcomingMovies";
import { useAiringTodayTVshows } from "../hooks/useAiringTodayTVshows";
import { usePopularTVshows } from "../hooks/usePopularTVshows";
import { useTopRatedTVshows } from "../hooks/useTopRatedTVshows";
import { RootState } from "../utils/appStore";
import GptPage from "./GptPage";

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
