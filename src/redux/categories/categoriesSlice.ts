import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { AppDispatch, RootState } from "../store";
import { instance } from "../../config/api";
import { CATEGORIES_ENDPOINT_URL } from "../../config/urls";

interface Category {
  id: number;
  name: string;
  key: string;
}

interface CategoriesState {
  loading: boolean;
  categories: Category[];
}

const initialState: CategoriesState = {
  loading: false,
  categories: [],
};

const categoriesSlice = createSlice({
  name: "categories",
  initialState,
  reducers: {
    categoriesRequest(state) {
      state.loading = true;
    },
    categoriesSuccess(state, action: PayloadAction<Category[]>) {
      state.loading = false;
      state.categories = action.payload;
    },
    categoriesFailed(state) {
      state.loading = false;
    },
  },
});

export const { categoriesRequest, categoriesSuccess, categoriesFailed } =
  categoriesSlice.actions;

export const getAllCategories = (state: RootState) => state.categories;

export async function getCategories(dispatch: AppDispatch) {
  dispatch(categoriesRequest());
  try {
    const response = await instance.get(CATEGORIES_ENDPOINT_URL);
    dispatch(categoriesSuccess(response?.data?.data));
    return response;
  } catch (error) {
    dispatch(categoriesFailed());
    console.log(error);
  }
}

export default categoriesSlice.reducer;
