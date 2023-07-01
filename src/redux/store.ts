import { configureStore } from "@reduxjs/toolkit";
import categoriesReducer from "./categories/categoriesSlice";
import popularPostReducer from "./popularPost/popularPostSlice";
import singleNewsReducer from "./singleNews/singleNewsSlice";
import postsByCategoryReducer from "./postsByCategory";
import advertisementReducer from "./advertisement";
import likesDislikesReducer from "./likesDislikes";
import lastNewsReducer from "./lastNews/lastNewsSlice";
import settingsReducer from "./settings/settingsSlice";
import authReducer from "./auth";

export const store = configureStore({
  reducer: {
    categories: categoriesReducer,
    popularPosts: popularPostReducer,
    singleNews: singleNewsReducer,
    postsByCategory: postsByCategoryReducer,
    advertisement: advertisementReducer,
    likesDislikes: likesDislikesReducer,
    lastNews: lastNewsReducer,
    settings: settingsReducer,
    auth: authReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
