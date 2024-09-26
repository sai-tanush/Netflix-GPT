import { createSlice } from "@reduxjs/toolkit";



type Movie = {
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
};

type MoviesCollection = Movie[][];

type GptState = {
  showGptSearch: boolean
  movies: MoviesCollection
};

const initialState: GptState = {
    showGptSearch: false,
    movies: [],
}
const gptSlice = createSlice({
  name: "gpt",
  initialState,
  reducers: {
    toggleGptSearchView: (state) => {
       state.showGptSearch = !state.showGptSearch;
    },
    addGptMovies: (state, action) => {
      state.movies = action.payload;
    }
  },
});

export const { toggleGptSearchView, addGptMovies } = gptSlice.actions;
export default gptSlice.reducer;
