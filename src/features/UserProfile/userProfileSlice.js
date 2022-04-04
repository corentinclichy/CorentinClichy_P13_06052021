import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

import { apiUrl } from "../../app/userAPI";

const initialState = {
  status: null,
  userProfile: {},
  error: null,
};

// Create a async thunk
export const fetchUserProfile = createAsyncThunk(
  "userProfile/fetchUserProfile",
  async ({ token }) => {
    const bearerToken = `Bearer ${token}`;

    return await axios
      .post(
        `${apiUrl}/profile`,
        {},
        {
          headers: {
            "Content-type": "Application/json",
            Authorization: bearerToken,
          },
        }
      )
      .then(function (response) {
        return response.data.body;
      })
      .catch(function (error) {
        return {
          data: {},
          status: "error",
        };
      });
  }
);

const userProfileSlice = createSlice({
  name: "userProfile",
  initialState,
  reducers: {
    reset: (state) => initialState,
  },
  extraReducers: {
    [fetchUserProfile.pending]: (state, action) => {
      state.status = "loading";
    },
    [fetchUserProfile.fulfilled]: (state, action) => {
      state.status = "succeed";
      state.userProfile = action.payload;
    },
    [fetchUserProfile.rejected]: (state, action) => {
      state.status = "failed";
      state.error = "error fetching";
    },
  },
});

export const { reset } = userProfileSlice.actions;

export const selectUserProfile = (state) => state.userProfile.userProfile;

export default userProfileSlice.reducer;
