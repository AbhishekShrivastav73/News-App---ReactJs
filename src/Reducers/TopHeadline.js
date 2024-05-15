import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  info: []
};

export const headlineSlice = createSlice({
  name: "headline",
  initialState,
  reducers: {
    getNews: (state, action) => {
      state.info = action.payload;
    },
  },
});

export const { getNews } = headlineSlice.actions;
export default headlineSlice.reducer;
