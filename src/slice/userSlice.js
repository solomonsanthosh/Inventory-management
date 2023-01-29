import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  user: null,
  token: null,
};
export const userSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setCredentials: (state, action) => {
      const { user, token } = action.payload;
      state.user = user;
      state.token = token;
    },
  },
});

// Action creators are generated for each case reducer function
export const { setCredentials } = userSlice.actions;

export default userSlice.reducer;

// export const selectCurrentUser = (state) => state.auth.user;
// export const selectCurrentToken = (state) => state.auth.token;
