import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { API_OPTIONS } from "../utils/constants";
import { addPopularTVshows } from "../utils/moviesSlice";
import { RootState } from "../utils/appStore";

export const usePopularTVshows = () => {
  const dispatch = useDispatch();
  const popularTVshows = useSelector(
    (store: RootState) => store.movies.popularTVshows
  );

  const getPopularTVshows = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/tv/popular?page=2",
      API_OPTIONS
    );
    const jsonData = await data.json();
    dispatch(addPopularTVshows(jsonData.results));
  };

  useEffect(() => {
    if (!popularTVshows) {
      getPopularTVshows();
    }
  }, []);
};
