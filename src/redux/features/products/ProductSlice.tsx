import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export type TProduct = {
  name: string;
  price: string;
  category: string;
  description: string;
};

const initialState: TProduct = {
  name: "",
  price: "",
  category: "",
  description: "",
};

const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    setName: (state, action: PayloadAction<string>) => {
      state.name = action.payload;
    },
    setPrice: (state, action: PayloadAction<string>) => {
      state.price = action.payload;
    },
    setCategoryId: (state, action: PayloadAction<string>) => {
      state.category = action.payload;
    },
    setDescription: (state, action: PayloadAction<string>) => {
      state.description = action.payload;
    },
    resetProductState() {
      return initialState; // Resets state to initial values
    },
  },
});

export const {
  setName,
  setPrice,
  setDescription,
  setCategoryId,
  resetProductState,
} = productSlice.actions;

export default productSlice.reducer;
