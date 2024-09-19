import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../utils/appStore";
import { signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { API_OPTIONS } from "../utils/constants";
import { addNowPlayingMovies } from "../utils/moviesSlice";

const Browse: React.FC = () => {
  const cartUser = useSelector((state: RootState) => state.user);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const getNowPlayingMovies = async() => {
    const data = await fetch("https://api.themoviedb.org/3/movie/now_playing?page=1", API_OPTIONS);
    const jsonData = await data.json();
    console.log("Movies List = ", jsonData.results);
    dispatch(addNowPlayingMovies(jsonData.results));
  }

  useEffect(() => {
    getNowPlayingMovies();
  },[]);

  function handleSignOut() {
    signOut(auth).then(() => {
      navigate("/login");
    }).catch((error) => {
      console.log("error=",error);
    });
  }

  return (
    <>
      <div className="relative w-screen h-screen flex flex-col justify-center items-center">
        <p className="text-3xl font-bold">Browse</p>
        <button
          className="w-auto p-2 my-4 bg-red-700 rounded-lg text-white"
          onClick={handleSignOut}
        >
          SignOut
        </button>
      </div>
      <div className="absolute top-2 right-2">
        <p>User-<span className="text-black font-bold">{cartUser.displayName}</span></p>
      </div>
    </>
  );
};

export default Browse;

