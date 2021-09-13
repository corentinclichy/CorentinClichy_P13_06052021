import { createSlice } from "@reduxjs/toolkit";

export const usersSlice = createSlice({
  name: "users",
  initialState: {
    users: [],
    loading: false,
    error: null,
  },
  reducers: {
    getUsersRequest: (state) => {
      state.loading = true;
      state.error = null;
    },
  },
});
