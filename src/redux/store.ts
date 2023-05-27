import { configureStore } from "@reduxjs/toolkit";
import categoriesReducer from "./categories/categoriesSlice";
import popularPostReducer from "./popularPost/popularPostSlice";
import singleNewsReducer from "./singleNews/singleNewsSlice";

export const store = configureStore({
  reducer: {
    categories: categoriesReducer,
    popularPosts: popularPostReducer,
    singleNews: singleNewsReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
