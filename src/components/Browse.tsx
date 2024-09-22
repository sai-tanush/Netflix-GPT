import React from "react";
import { useNowPlayingMovies } from "../hooks/useNowPlayingMovies";
import BrowseNavbar from "./BrowseNavbar";
const Browse: React.FC = () => {
  useNowPlayingMovies();

  return (
    <>
      <div className="relative w-screen min-h-screen bg-gray-950">
        <BrowseNavbar />
      </div>
    </>
  );
};

export default Browse;

//01:04:55

