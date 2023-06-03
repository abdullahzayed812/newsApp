import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { AppDispatch, RootState } from "../store";
import { instance } from "../../config/api";
import { ADVERTISEMENTS_ENDPOINT_URL } from "../../config/urls";

interface Advertisement {
  [index: string]: string;
}

interface CategoriesState {
  loading: boolean;
  advertisement: Advertisement;
}

const initialState: CategoriesState = {
  loading: false,
  advertisement: {},
};

const advertisementSlice = createSlice({
  name: "popularPost",
  initialState,
  reducers: {
    advertisementRequest(state) {
      state.loading = true;
    },
    advertisementSuccess(state, action: PayloadAction<Advertisement>) {
      state.loading = false;
      state.advertisement = action.payload;
    },
    advertisementFailed(state) {
      state.loading = false;
    },
  },
});

export const {
  advertisementRequest,
  advertisementSuccess,
  advertisementFailed,
} = advertisementSlice.actions;

export const getAdvertisements = (state: RootState) => state.advertisement;

export async function getAdvertisement(dispatch: AppDispatch) {
  dispatch(advertisementRequest());
  try {
    const response = await instance.get(ADVERTISEMENTS_ENDPOINT_URL);
    dispatch(advertisementSuccess(response?.data?.data));
    return response;
  } catch (error) {
    dispatch(advertisementFailed());
    console.log(error);
  }
}

export default advertisementSlice.reducer;
