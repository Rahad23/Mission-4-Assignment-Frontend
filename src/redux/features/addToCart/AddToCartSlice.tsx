import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface OrderState {
  product: Array<{
    id: string;
    quantity: number;
  }>;
  category: Array<{
    id: string;
  }>;
  name: string;
  price: number;
  phoneNumber: string;
  email: string;
  deliveryAddress: string;
}

const initialState: OrderState = {
  product: [],
  category: [],
  name: "",
  price: 0,
  phoneNumber: "",
  email: "",
  deliveryAddress: "",
};

const orderSlice = createSlice({
  name: "cartOrder",
  initialState,
  reducers: {
    setOrderProduct: (
      state,
      action: PayloadAction<{ id: string; quantity: number }[]>
    ) => {
      action.payload.forEach((data) => {
        state.product.push(data);
      });
    },
    setCategoryId: (state, action: PayloadAction<{ id: string }[]>) => {
      action.payload.forEach((data) => state.category.push(data));
    },
    setName: (state, action: PayloadAction<string>) => {
      state.name = action.payload;
    },
    setPrice: (state, action: PayloadAction<number>) => {
      state.price = action.payload;
    },
    setPhoneNumber: (state, action: PayloadAction<string>) => {
      state.phoneNumber = action.payload;
    },
    setEmail: (state, action: PayloadAction<string>) => {
      state.email = action.payload;
    },
    setDeliveryAddress: (state, action: PayloadAction<string>) => {
      state.deliveryAddress = action.payload;
    },
    resetCartOrderState() {
      return initialState; // Resets state to initial values
    },
  },
});

export const {
  setOrderProduct,
  setCategoryId,
  setName,
  setPrice,
  setPhoneNumber,
  setEmail,
  setDeliveryAddress,
  resetCartOrderState,
} = orderSlice.actions;

export default orderSlice.reducer;
