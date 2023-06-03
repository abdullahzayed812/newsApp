import { configureStore } from "@reduxjs/toolkit";
import categoriesReducer from "./categories/categoriesSlice";
import popularPostReducer from "./popularPost/popularPostSlice";
import singleNewsReducer from "./singleNews/singleNewsSlice";
import postsByCategoryReducer from "./postsByCategory";
import advertisementReducer from "./advertisement";
import likesDislikesReducer from "./likesDislikes";

export const store = configureStore({
  reducer: {
    categories: categoriesReducer,
    popularPosts: popularPostReducer,
    singleNews: singleNewsReducer,
    postsByCategory: postsByCategoryReducer,
    advertisement: advertisementReducer,
    likesDislikes: likesDislikesReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
