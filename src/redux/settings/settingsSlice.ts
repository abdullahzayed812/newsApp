import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { AppDispatch, RootState } from "../store";
import { instance } from "../../config/api";
import {
  ADVERTISEMENTS_ENDPOINT_URL,
  SETTINGS_ENDPOINT_URL,
} from "../../config/urls";

interface Settings {
  [index: string]: string;
}

interface InitialState {
  loading: boolean;
  settings: Settings;
}

const initialState: InitialState = {
  loading: false,
  settings: {},
};

const settingsSlice = createSlice({
  name: "popularPost",
  initialState,
  reducers: {
    settingsRequest(state) {
      state.loading = true;
    },
    settingsSuccess(state, action: PayloadAction<Settings>) {
      state.loading = false;
      state.settings = action.payload;
    },
    settingsFailed(state) {
      state.loading = false;
    },
  },
});

export const { settingsRequest, settingsSuccess, settingsFailed } =
  settingsSlice.actions;

export async function getSettings(dispatch: AppDispatch) {
  dispatch(settingsRequest());
  try {
    const response = await instance.get(SETTINGS_ENDPOINT_URL);
    dispatch(settingsSuccess(response?.data?.data));
    return response;
  } catch (error) {
    dispatch(settingsFailed());
    console.log(error);
  }
}

export default settingsSlice.reducer;
