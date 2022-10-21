import { configureStore } from "@reduxjs/toolkit";
import { createWrapper } from "next-redux-wrapper";

// SLICES
import userSliceReducer from './userSlice/user-slice';

const store = () => configureStore({
  reducer: {
    user: userSliceReducer
  },
  devTools: true
});

export const wrapper = createWrapper(store)