import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { PopularPosts } from "../popularPost/popularPostSlice";
import { DefaultTheme } from "@react-navigation/native";
import { AppDispatch } from "../store";
import { instance } from "../../config/api";
import { LAST_NEWS_ENDPOINT_URL } from "../../config/urls";

interface InitialState {
  loading: boolean;
  lastNewsList: PopularPosts[];
}

const initialState: InitialState = {
  loading: false,
  lastNewsList: [],
};

const lastNewsSlice = createSlice({
  name: "lastNews",
  initialState,
  reducers: {
    lastNewsRequest(state) {
      state.loading = true;
    },
    lastNewsSuccess(state, action: PayloadAction<PopularPosts[]>) {
      state.loading = false;
      state.lastNewsList = action.payload;
    },
    lastNewsFailed(state) {
      state.loading = false;
    },
  },
});

export const { lastNewsRequest, lastNewsSuccess, lastNewsFailed } =
  lastNewsSlice.actions;

export async function getLastNews(
  dispatch: AppDispatch,
  data: { offset: number },
) {
  dispatch(lastNewsRequest());
  try {
    const response = await instance.get(LAST_NEWS_ENDPOINT_URL, {
      params: data,
    });
    dispatch(lastNewsSuccess(response?.data?.data));
    return response;
  } catch (error) {
    dispatch(lastNewsFailed());
    console.log(error);
  }
}

export default lastNewsSlice.reducer;
