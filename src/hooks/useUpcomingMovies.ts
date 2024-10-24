import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addUpcommingMovies } from "../utils/moviesSlice";
import { API_OPTIONS } from "../utils/constants";
import { RootState } from "../utils/appStore";

export const useUpcomingMovies = () => {
  const dispatch = useDispatch();
  const upcommingMovies = useSelector(
    (store: RootState) => store.movies.upcommingMovies
  );

  const getUpcomingMovies = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/upcoming?page=1",
      API_OPTIONS
    );
    const jsonData = await data.json();
    dispatch(addUpcommingMovies(jsonData.results));
  };

  useEffect(() => {
    if (!upcommingMovies) {
      getUpcomingMovies();
    }
  }, []);
};
