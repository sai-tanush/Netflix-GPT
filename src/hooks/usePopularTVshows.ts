import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { API_OPTIONS } from "../utils/constants";
import { addPopularTVshows } from "../utils/moviesSlice";

export const usePopularTVshows = () => {
    
    const dispatch = useDispatch();

    const getPopularTVshows = async() => {
      const data = await fetch("https://api.themoviedb.org/3/tv/popular?page=1", API_OPTIONS);
      const jsonData = await data.json();
      dispatch(addPopularTVshows(jsonData.results));
    }
  
    useEffect(() => {
      getPopularTVshows();
    },[]);      
}
