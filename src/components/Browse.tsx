import React from "react";
import { useNowPlayingMovies } from "../hooks/useNowPlayingMovies";
import BrowseNavbar from "./BrowseNavbar";
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";
import { usePopularMovies } from "../hooks/usePopularMovies";
import { useTopRatedMovies } from "../hooks/useTopRatedMovies";
const Browse: React.FC = () => {
  useNowPlayingMovies();
  usePopularMovies();
  useTopRatedMovies();

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