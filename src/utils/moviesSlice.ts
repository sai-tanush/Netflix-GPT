import { createSlice } from "@reduxjs/toolkit";

interface IPosterDetails {
  adult: boolean;
  backdrop_path: string;
  genre_ids: number[];
  id: number;
  original_language: string;
  overview: string;
  popularity: number;
  poster_path: string;
  vote_average: number;
  vote_count: number;
}
interface IMovieDetails extends IPosterDetails {
  original_title: string;
  release_date: string;
  title: string;
  video: boolean;
}
interface ITVShowDetails extends IPosterDetails  {
  origin_country: string[];
  original_name: string;
  first_air_date: string;
  name: string;
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
  nowPlayingMovies: IMovieDetails[] | null;
  popularMovies: IMovieDetails[] | null;
  topRatedMovies: IMovieDetails[] | null;
  upcommingMovies: IMovieDetails[] | null;
  airingTodayTVshows: ITVShowDetails[] | null;
  popularTVshows: ITVShowDetails[] | null;
  topRatedTVshows: ITVShowDetails[] | null;
  trailerVideo: MovieTrailer | null;
}

const initialState: MoviesState = {
  nowPlayingMovies: null,
  popularMovies: null,
  topRatedMovies: null,
  upcommingMovies: null,
  airingTodayTVshows: null,
  popularTVshows: null,
  topRatedTVshows: null,
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
    addPopularTVshows: (state, action) => {
      state.popularTVshows = action.payload;
    },
    addTopRatedTVshows: (state, action) => {
      state.topRatedTVshows = action.payload;
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
  addPopularTVshows,
  addTopRatedTVshows,
} = moviesSlice.actions;
export type { IMovieDetails, ITVShowDetails};
export default moviesSlice.reducer;
