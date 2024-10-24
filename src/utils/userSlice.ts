import { createSlice } from "@reduxjs/toolkit";

type UserState = {
  uid: string;
  email: string;
  displayName: string | null;
  gptSection: boolean;
};

const initialState: UserState | null = {
  uid: '',
  email: '',
  displayName: null,
  gptSection: false,
};
const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    addUser: (state, action) => {
      return action.payload;
    },
    removeUser: () => {
      return {
        uid: '',
        email: '',
        displayName: null,
        gptSection: false,  // Ensure gptSection is reset to false
      };
    },
    gptSelect: (state) => {
        state.gptSection = !state.gptSection;
    }
  },
});

export const { addUser, removeUser, gptSelect } = userSlice.actions;
export default userSlice.reducer;
