import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export type TProduct = {
  ad_name: string;
  ad_title: string;
  category: string;
};

const initialState: TProduct = {
  ad_name: "",
  ad_title: "",
  category: "",
};

const advertisementSlice = createSlice({
  name: "advertisement",
  initialState,
  reducers: {
    setAdName: (state, action: PayloadAction<string>) => {
      state.ad_name = action.payload;
    },
    setAdTitle: (state, action: PayloadAction<string>) => {
      state.ad_title = action.payload;
    },
    setCategoryId: (state, action: PayloadAction<string>) => {
      state.category = action.payload;
    },

    resetAdState() {
      return initialState; // Resets state to initial values
    },
  },
});

export const { setAdName, setAdTitle, setCategoryId, resetAdState } =
  advertisementSlice.actions;

export default advertisementSlice.reducer;
