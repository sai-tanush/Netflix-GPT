import React from "react";
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
const Browse: React.FC = () => {
  useNowPlayingMovies();
  usePopularMovies();
  useTopRatedMovies();
  useUpcomingMovies();
  useAiringTodayTVshows();
  usePopularTVshows();
  useTopRatedTVshows();

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