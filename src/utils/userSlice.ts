import { createSlice} from "@reduxjs/toolkit";

type UserState = {
  uid: string,
  email: string,
  displayName: string | null;
}

const initialState: UserState | null = null;
const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    addUser: (state, action) => {
      return action.payload;
    },
    removeUser: () => {
      return null;
    },
  },
});

console.log("userSlice = ",userSlice.getInitialState());

export const { addUser, removeUser } = userSlice.actions;
export default userSlice.reducer;
