import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { RootState } from "../store";

interface InitialState {
  likesCount: number | undefined;
  dislikesCount: number | undefined;
}

const initialState: InitialState = {
  likesCount: undefined,
  dislikesCount: undefined,
};

const likesDislikesSlice = createSlice({
  name: "likesDislikes",
  initialState,
  reducers: {
    saveLikesCount(state, action: PayloadAction<number | undefined>) {
      state.likesCount = action.payload;
    },
    saveDislikesCount(state, action: PayloadAction<number | undefined>) {
      state.dislikesCount = action.payload;
    },
  },
});

export const { saveLikesCount, saveDislikesCount } = likesDislikesSlice.actions;

export default likesDislikesSlice.reducer;
