import { createSlice } from "@reduxjs/toolkit";
import { AppDispatch } from "../store";
import { instance } from "../../config/api";
import { LOGIN_ENDPOINT_URL, REGISTER_ENDPOINT_URL } from "../../config/urls";

interface InitialState {
  signInLoading: boolean;
  signUpLoading: boolean;
}

const initialState: InitialState = {
  signInLoading: false,
  signUpLoading: false,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    signInRequest(state) {
      state.signInLoading = true;
    },
    signInSuccess(state) {
      state.signInLoading = false;
    },
    signInFailed(state) {
      state.signInLoading = false;
    },
    signUpRequest(state) {
      state.signUpLoading = true;
    },
    signUpSuccess(state) {
      state.signUpLoading = false;
    },
    signUpFailed(state) {
      state.signUpLoading = false;
    },
  },
});

export const {
  signInRequest,
  signInSuccess,
  signInFailed,
  signUpRequest,
  signUpSuccess,
  signUpFailed,
} = authSlice.actions;

export async function signIn(
  dispatch: AppDispatch,
  data: { email: string; password: string },
) {
  dispatch(signInRequest());
  try {
    const response = await instance.post(LOGIN_ENDPOINT_URL, data);
    dispatch(signInSuccess());
    return response;
  } catch (error) {
    dispatch(signInFailed());
    console.log(error);
  }
}

export async function signUp(
  dispatch: AppDispatch,
  data: {
    first_name: string;
    last_name: string;
    email: string;
    password: string;
    password_confirmation: string;
  },
) {
  dispatch(signUpRequest());
  try {
    const response = await instance.post(REGISTER_ENDPOINT_URL, data);
    dispatch(signUpSuccess());
    console.log(response);
    return response;
  } catch (error) {
    dispatch(signUpFailed());
    console.log(error);
  }
}

export default authSlice.reducer;
