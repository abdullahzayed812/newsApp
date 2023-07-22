import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { AppDispatch, RootState } from "../store";
import { instance } from "../../config/api";
import { SINGLE_POST_ENDPOINT_URL } from "../../config/urls";

interface SingleNews {
  id: number | undefined;
  image: string;
  name: string;
  content: string;
  category_name: string;
  views: number | undefined;
  likes: undefined;
  dislikes: undefined;
  created_at: string;
  comments: [];
  related_items: { id: number; name: string; image: string }[];
  facebook: string;
  twitter: string;
  whatsapp: string;
  telegram: string;
}

interface SingleNewsState {
  loading: boolean;
  singleNews: SingleNews;
}

const initialState: SingleNewsState = {
  loading: false,
  singleNews: {
    id: undefined,
    image: "",
    name: "",
    content: "",
    category_name: "",
    views: undefined,
    likes: undefined,
    dislikes: undefined,
    created_at: "",
    comments: [],
    related_items: [],
    facebook: "string",
    twitter: "string",
    telegram: "string",
    whatsapp: "string",
  },
};

const singleNewsSlice = createSlice({
  name: "singleNews",
  initialState,
  reducers: {
    singleNewsRequest(state) {
      state.loading = true;
    },
    singleNewsSuccess(state, action: PayloadAction<SingleNews>) {
      state.loading = false;
      state.singleNews = action.payload;
    },
    singleNewsFailed(state) {
      state.loading = false;
    },
  },
});

export const { singleNewsRequest, singleNewsSuccess, singleNewsFailed } =
  singleNewsSlice.actions;

export const getNews = (state: RootState) => state.singleNews;

export async function getSingleNews(
  dispatch: AppDispatch,
  newsID: number | undefined,
) {
  dispatch(singleNewsRequest());
  try {
    const response = await instance.get(
      `${SINGLE_POST_ENDPOINT_URL}/${newsID}`,
    );
    dispatch(singleNewsSuccess(response?.data?.data));
    return response;
  } catch (error) {
    dispatch(singleNewsFailed());
    console.log(error);
  }
}

export default singleNewsSlice.reducer;
