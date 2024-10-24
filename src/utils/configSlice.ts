import { createSlice } from "@reduxjs/toolkit";

type ConfigState = {
  lang: "en" | "hindi" | "spanish" | "german" | "japanese" | "chinese";
};

const initialState: ConfigState = {
  lang: "en",
};
const configSlice = createSlice({
  name: "config",
  initialState,
  reducers: {
    changeLanguage: (state, action) => {
      state.lang = action.payload;
    },
  },
});

export const { changeLanguage } = configSlice.actions;
export default configSlice.reducer;
