import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { API_OPTIONS } from "../utils/constants";
import { addTopRatedTVshows } from "../utils/moviesSlice";
import { RootState } from "../utils/appStore";

export const useTopRatedTVshows = () => {
  const dispatch = useDispatch();
  const topRatedTVshows = useSelector(
    (store: RootState) => store.movies.topRatedTVshows
  );

  const getTopRatedTVshows = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/tv/top_rated?page=1",
      API_OPTIONS
    );
    const jsonData = await data.json();
    dispatch(addTopRatedTVshows(jsonData.results));
  };

  useEffect(() => {
    if (!topRatedTVshows) {
      getTopRatedTVshows();
    }
  }, []);
};
