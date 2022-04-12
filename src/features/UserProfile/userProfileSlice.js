import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { getUserInfo, updateUserData } from "../../app/userAPI";
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
        return await getUserInfo(token);
    }
);



export const updateUserProfile = createAsyncThunk(
    "userProfile/updateUserProfile",
    async ({ token, payload }) => {
        const res = await updateUserData(token, payload);
        return res;
    }
);

const userProfileSlice = createSlice({
    name: "userProfile",
    initialState,
    reducers: {
        reset: (state) => initialState,
    },
    extraReducers: {
        [ fetchUserProfile.pending ]: (state, action) => {
            state.status = "loading";
        },
        [ fetchUserProfile.fulfilled ]: (state, action) => {
            state.status = "succeed";
            state.userProfile = action.payload;
        },
        [ fetchUserProfile.rejected ]: (state, action) => {
            state.status = "failed";
            state.error = "error fetching";
        },
        [ updateUserProfile.pending ]: (state, action) => {
            state.status = "loading";
        },
        [ updateUserProfile.fulfilled ]: (state, action) => {
            state.status = "succeed";
            state.userProfile = action.payload;
        },
        [ updateUserProfile.rejected ]: (state, action) => {
            state.status = "failed";
            state.error = "error fetching";
        },
    },
});

export const { reset } = userProfileSlice.actions;

export const selectUserProfile = (state) => state.userProfile.userProfile;

export default userProfileSlice.reducer;
