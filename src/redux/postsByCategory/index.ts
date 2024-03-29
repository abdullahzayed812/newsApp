import { createSlice } from "@reduxjs/toolkit";
import { AppDispatch } from "../store";
import { instance } from "../../config/api";
import { POSTS_BY_CATEGORY_ENDPOINT_URL } from "../../config/urls";

interface Posts {
  id: number | undefined;
  name: string;
  image: string;
}

interface InitialState {
  loading: boolean;
  postsByCategoryID: Posts[];
}

const initialState: InitialState = {
  loading: false,
  postsByCategoryID: [],
};

const postsByCategorySlice = createSlice({
  name: "postsByCategory",
  initialState,
  reducers: {
    postsByCategoryIDRequest(state) {
      state.loading = true;
    },
    postsByCategoryIDSuccess(state, action) {
      state.loading = false;
      state.postsByCategoryID = action.payload;
    },
    postsByCategoryIDFailed(state) {
      state.loading = false;
    },
    addNewsList(state, action) {
      state.postsByCategoryID = [...state.postsByCategoryID, action.payload];
    },
  },
});

export const {
  postsByCategoryIDRequest,
  postsByCategoryIDSuccess,
  postsByCategoryIDFailed,
  addNewsList,
} = postsByCategorySlice.actions;

export async function getPostsByCategoryID(
  dispatch: AppDispatch,
  categoryID: number,
  postsNumber: number,
) {
  dispatch(postsByCategoryIDRequest());
  try {
    const response = await instance.get(
      `${POSTS_BY_CATEGORY_ENDPOINT_URL}${categoryID}/${postsNumber}/0`,
    );
    dispatch(postsByCategoryIDSuccess(response?.data?.data));
    return response;
  } catch (error) {
    console.log(error);
  }
}

export default postsByCategorySlice.reducer;
