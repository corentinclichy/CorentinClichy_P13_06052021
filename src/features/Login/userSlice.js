import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

import { getToken } from "../../app/userAPI";


// Set up the initial state
const initialState = {
    data: {
        token: null,
        isConnected: null,
        isRememberMe: false,
    },
    status: null,
};

export const getUserToken = createAsyncThunk(
    "user/getUserToken",
    async ({ email, password, isRememberMe }) => {
        const res = await getToken(email, password, isRememberMe);
        return {
            token: res.data.body.token,
            isConnected: true,
            isRememberMe: isRememberMe,
        };
    }
);

// Create the slice
const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        signOut: (state) => {
            state.data.token = null;
            state.data.isConnected = false;
            state.data.isRememberMe = null;
        },
    },
    extraReducers: {
        [ getUserToken.pending ]: (state) => {
            state.status = "Loading";
        },
        [ getUserToken.fulfilled ]: (state, { payload }) => {
            state.status = "Succeeded";
            state.data = payload;
        },
        [ getUserToken.rejected ]: (state) => {
            state.status = "Failed";
        },
    },
});

export const { signOut } = userSlice.actions;

// Export to useSelector in the component
export const selectUserData = (state) => state.user.data;

// Export the reducer
export default userSlice.reducer;
