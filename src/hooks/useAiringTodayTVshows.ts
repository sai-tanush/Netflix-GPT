import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { API_OPTIONS } from "../utils/constants";
import { addAiringTodayTVshows } from "../utils/moviesSlice";

export const useAiringTodayTVshows = () => {
  const dispatch = useDispatch();

  const getAiringTodayTVshows = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/tv/airing_today?page=1",
      API_OPTIONS
    );
    const jsonData = await data.json();
    dispatch(addAiringTodayTVshows(jsonData.results));
  };

  useEffect(() => {
    getAiringTodayTVshows();
  }, []);
};
