import { createSlice } from "@reduxjs/toolkit";
import { HYDRATE } from "next-redux-wrapper";

const initialState = {
  user: {
    name: 'ahmad eid'
  }
};

const userSlice = createSlice({
  name: 'userSlice',
  initialState,
  reducers: {
    setUser: () => {

    }
  },
  extraReducers: {
    [HYDRATE]: (state, action) => {
      return {
        ...state,
        ...action.payload.user
      }
    }
  }
});

export const userActions = userSlice.actions;
export default userSlice.reducer;