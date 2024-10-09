import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  id: "",
  name: "",
  email: "",
  state: "idle",
};
export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUser: (state, action) => {
      state.id = action.payload.id || "";
      state.name = action.payload.name || "";
      state.email = action.payload.email || "";
      state.state = "complete";
    },
    setLogout: (state) => {
      state.id = "";
      state.name = "";
      state.email = "";
    },
  },
});
export const { setUser, setLogout } = userSlice.actions;
export default userSlice.reducer;
