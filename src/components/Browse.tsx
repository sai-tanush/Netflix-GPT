import React from "react";
import { useNowPlayingMovies } from "../hooks/useNowPlayingMovies";
import BrowseNavbar from "./BrowseNavbar";
import MainContainer from "./MainContainer";
const Browse: React.FC = () => {
  useNowPlayingMovies();

  return (
    <>
      <div className="relative w-screen min-h-screen">
        <BrowseNavbar />
        <MainContainer />
      </div>
    </>
  );
};

export default Browse;