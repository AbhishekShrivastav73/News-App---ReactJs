import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  info: []
};

export const PopularSlice = createSlice({
  name: "popular",
  initialState,
  reducers: {
    getNews: (state, action) => {
      state.info = action.payload;
    },
  },
});

export const { getNews } = PopularSlice.actions;
export default PopularSlice.reducer;
