import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export type TProduct = {
  name: string;
  price: string;
  category: string;
  description: string;
  productImg?: File;
};

const initialState: TProduct = {
  name: "",
  price: "",
  category: "",
  description: "",
  productImg: undefined,
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
    setProductImg: (state, action: PayloadAction<File | undefined>) => {
      state.productImg = action.payload;
    },
    resetProductState(state) {
      return initialState; // Resets state to initial values
    },
  },
});

export const {
  setName,
  setPrice,
  setDescription,
  setProductImg,
  setCategoryId,
  resetProductState,
} = productSlice.actions;

export default productSlice.reducer;
