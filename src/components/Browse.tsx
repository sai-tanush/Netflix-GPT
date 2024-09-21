import React from "react";
import { useNowPlayingMovies } from "../hooks/useNowPlayingMovies";
import BrowseNavbar from "./BrowseNavbar";
const Browse: React.FC = () => {
  useNowPlayingMovies();

  return (
    <>
      <div className="relative w-screen h-screen">
        <BrowseNavbar />
      </div>
    </>
  );
};

export default Browse;

//01:04:55

