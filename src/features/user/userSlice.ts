import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

interface User {
  id?: number;
  first_name?: string;
  email?: string;
  avatar?: string;
  last_name?: string;
  gender?: null;
  permissions?: number;
}

interface InitialState {
  loadingUser: boolean;
  user: User;
  accessToken: string;
}

const initialState: InitialState = {
  loadingUser: false,
  user: {},
  accessToken: "",
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    // builder.addCase()
  },
});
