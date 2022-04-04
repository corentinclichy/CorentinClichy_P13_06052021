import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "redux";

import {
  persistReducer,
  persistStore,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";

import storage from "redux-persist/lib/storage";
import storageSession from "redux-persist/lib/storage/session";

import userSliceReducer from "../features/Login/userSlice";
import userProfileSliceReducer from "../features/UserProfile/userProfileSlice";

const reducers = combineReducers({
  user: userSliceReducer,
  userProfile: userProfileSliceReducer,
});

const persistConfig = {
  key: "UserData",
  storage,
};

const persistedReducer = persistReducer(persistConfig, reducers);

export default configureStore({
  reducer: persistedReducer,
  devTools: process.env.NODE_ENV !== "production",
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});
