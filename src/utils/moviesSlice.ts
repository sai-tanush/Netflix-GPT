import { createSlice } from "@reduxjs/toolkit";

interface Movie {
    adult: boolean;
    backdrop_path: string;
    genre_ids: number[];
    id: number;
    original_language: string;
    original_title: string;
    overview: string;
    popularity: number;
    poster_path: string;
    release_date: string;
    title: string;
    video: boolean;
    vote_average: number;
    vote_count: number;
  }

  interface MoviesState {
    nowPlayingMovies: Movie[] | null;
  }
  
  const initialState: MoviesState = {
    nowPlayingMovies: null,
  };

const moviesSlice = createSlice({
  name:"movies",
  initialState,
  reducers: {
    addNowPlayingMovies: (state, action) => {
      state.nowPlayingMovies = action.payload;
    },
  },
});
export const { addNowPlayingMovies } = moviesSlice.actions;
export default moviesSlice.reducer;