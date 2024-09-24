import { createSlice } from "@reduxjs/toolkit";

export interface Movie {
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
export interface TVShow {
  adult: boolean;
  backdrop_path: string;
  genre_ids: number[];
  id: number;
  origin_country: string[];
  original_language: string;
  original_name: string;
  overview: string;
  popularity: number;
  poster_path: string;
  first_air_date: string;
  name: string;
  vote_average: number;
  vote_count: number;
}

interface MovieTrailer {
  id: string;
  iso_639_1: string;
  iso_3166_1: string;
  key: string;
  name: string;
  official: boolean;
  published_at: string;
  site: string;
  size: number;
  type: string;
}

interface MoviesState {
  nowPlayingMovies: Movie[] | null;
  popularMovies: Movie[] | null;
  topRatedMovies: Movie[] | null;
  upcommingMovies: Movie[] | null;
  airingTodayTVshows: TVShow[] | null;
  onTheAirTVshows: TVShow[] | null;
  popularTVshows: TVShow[] | null;
  trailerVideo: MovieTrailer | null;
}

const initialState: MoviesState = {
  nowPlayingMovies: null,
  popularMovies: null,
  topRatedMovies: null,
  upcommingMovies: null,
  airingTodayTVshows: null,
  onTheAirTVshows: null,
  popularTVshows: null,
  trailerVideo: null,
};

const moviesSlice = createSlice({
  name: "movies",
  initialState,
  reducers: {
    addNowPlayingMovies: (state, action) => {
      state.nowPlayingMovies = action.payload;
    },
    addPopularMovies: (state, action) => {
      state.popularMovies = action.payload;
    },
    addTopRatedMovies: (state, action) => {
      state.topRatedMovies = action.payload;
    },
    addUpcommingMovies: (state, action) => {
      state.upcommingMovies = action.payload;
    },
    addAiringTodayTVshows: (state, action) => {
      state.airingTodayTVshows = action.payload;
    },
    addOnTheAirTVshows: (state, action) => {
      state.onTheAirTVshows = action.payload;
    },
    addPopularTVshows: (state, action) => {
      state.popularTVshows = action.payload;
    },
    addTrailerVideo: (state, action) => {
      state.trailerVideo = action.payload;
    },
  },
});
export const {
  addNowPlayingMovies,
  addTrailerVideo,
  addPopularMovies,
  addTopRatedMovies,
  addUpcommingMovies,
  addAiringTodayTVshows,
  addOnTheAirTVshows,
  addPopularTVshows,
} = moviesSlice.actions;
export default moviesSlice.reducer;
