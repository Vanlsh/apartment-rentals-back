import { Flat } from "@/types/flat";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface FavoriteState {
  data: Flat[];
}

const initialState: FavoriteState = { data: [] };

const favoriteSlice = createSlice({
  name: "favorite",
  initialState,
  reducers: {
    addFavorite(state, actions: PayloadAction<Flat>) {
      state.data.push(actions.payload);
    },
    removeFavorite(state, actions: PayloadAction<string>) {
      state.data = state.data.filter((flat) => flat._id !== actions.payload);
    },
  },
});

export const { addFavorite, removeFavorite } = favoriteSlice.actions;
export const favoriteReducer = favoriteSlice.reducer;
