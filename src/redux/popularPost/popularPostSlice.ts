import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { AppDispatch, RootState } from "../store";
import { instance } from "../../config/api";
import { POPULAR_POSTS_ENDPOINT_URL } from "../../config/urls";

export interface PopularPosts {
  id?: number;
  image?: string;
  name?: string;
  url?: string;
  isAds?: boolean;
}

interface CategoriesState {
  loading: boolean;
  popularPosts: PopularPosts[];
}

const initialState: CategoriesState = {
  loading: false,
  popularPosts: [],
};

const popularPostsSlice = createSlice({
  name: "popularPost",
  initialState,
  reducers: {
    popularPostsRequest(state) {
      state.loading = true;
    },
    popularPostsSuccess(state, action: PayloadAction<PopularPosts[]>) {
      state.loading = false;
      state.popularPosts = action.payload;
    },
    popularPostsFailed(state) {
      state.loading = false;
    },
  },
});

export const { popularPostsRequest, popularPostsSuccess, popularPostsFailed } =
  popularPostsSlice.actions;

export const getPost = (state: RootState) => state.popularPosts;

export async function getPopularPosts(dispatch: AppDispatch) {
  dispatch(popularPostsRequest());
  try {
    const response = await instance.get(POPULAR_POSTS_ENDPOINT_URL);
    dispatch(popularPostsSuccess(response?.data?.data));
    return response;
  } catch (error) {
    dispatch(popularPostsFailed());
    console.log(error);
  }
}

export default popularPostsSlice.reducer;
