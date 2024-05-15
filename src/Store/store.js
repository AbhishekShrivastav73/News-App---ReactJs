import { configureStore } from "@reduxjs/toolkit";
import popularReducer from "../Reducers/PopularSlice";
import headlineReducer from "../Reducers/TopHeadline";

export const store = configureStore({
    reducer : { 
        popular : popularReducer,
        headline : headlineReducer
    }
})