import React from "react";
import { useNowPlayingMovies } from "../hooks/useNowPlayingMovies";
import BrowseNavbar from "./BrowseNavbar";
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";
import { usePopularMovies } from "../hooks/usePopularMovies";
import { useTopRatedMovies } from "../hooks/useTopRatedMovies";
import { useUpcomingMovies } from "../hooks/useUpcomingMovies";
import { useAiringTodayTVshows } from "../hooks/useAiringTodayTVshows";
import { useOnTheAirTVshows } from "../hooks/useOnTheAirTVshows";
const Browse: React.FC = () => {
  useNowPlayingMovies();
  usePopularMovies();
  useTopRatedMovies();
  useUpcomingMovies();
  useAiringTodayTVshows();
  useOnTheAirTVshows();

  return (
    <>
      <div className="relative w-screen min-h-screen">
        <BrowseNavbar />
        <MainContainer />
        <SecondaryContainer />
      </div>
    </>
  );
};

export default Browse;