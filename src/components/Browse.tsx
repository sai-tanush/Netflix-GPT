import React from "react";
import { useNavigate } from "react-router-dom";
import { signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNowPlayingMovies } from "../hooks/useNowPlayingMovies";
import BrowseNavbar from "./BrowseNavbar";
const Browse: React.FC = () => {
  //const cartUser = useSelector((state: RootState) => state.user);
  const navigate = useNavigate();
  useNowPlayingMovies();

  function handleSignOut() {
    signOut(auth).then(() => {
      navigate("/login");
    }).catch((error) => {
      console.log("error=",error);
    });
  }

  return (
    <>
      <div className="relative w-screen h-screen">
        <BrowseNavbar />
        <button
          className="w-auto p-2 my-4 bg-red-700 rounded-lg text-white"
          onClick={handleSignOut}
        >
          SignOut
        </button>
      </div>
    </>
  );
};

export default Browse;

//01:04:55

