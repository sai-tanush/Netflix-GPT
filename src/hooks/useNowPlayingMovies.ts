import { useDispatch } from "react-redux";
import { addNowPlayingMovies } from "../utils/moviesSlice";
import { useEffect } from "react";
import { API_OPTIONS } from "../utils/constants";

export const useNowPlayingMovies = () => {
    
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
}
