import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { API_OPTIONS } from "../utils/constants";
import { addOnTheAirTVshows } from "../utils/moviesSlice";

export const useOnTheAirTVshows = () => {
    
    const dispatch = useDispatch();

    const getOnTheAirTVshows = async() => {
      const data = await fetch("https://api.themoviedb.org/3/tv/on_the_air?page=1", API_OPTIONS);
      const jsonData = await data.json();
      dispatch(addOnTheAirTVshows(jsonData.results));
    }
  
    useEffect(() => {
      getOnTheAirTVshows();
    },[]);      
}
