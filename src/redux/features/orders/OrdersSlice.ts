import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface OrderState {
  product: string;
  category: string;
  name: string;
  quantity: number;
  price: number;
  phoneNumber: string;
  email: string;
  deliveryAddress: string;
}

const initialState: OrderState = {
  product: "",
  category: "",
  name: "",
  quantity: 0,
  price: 0,
  phoneNumber: "",
  email: "",
  deliveryAddress: "",
};

const orderSlice = createSlice({
  name: "order",
  initialState,
  reducers: {
    setProductId: (state, action: PayloadAction<string>) => {
      state.product = action.payload;
    },
    setCategoryId: (state, action: PayloadAction<string>) => {
      state.category = action.payload;
    },
    setName: (state, action: PayloadAction<string>) => {
      state.name = action.payload;
    },
    setQuantity: (state, action: PayloadAction<number>) => {
      state.quantity = action.payload;
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
  },
});


export const {
  setProductId,
  setCategoryId,
  setName,
  setQuantity,
  setPrice,
  setPhoneNumber,
  setEmail,
  setDeliveryAddress,
} = orderSlice.actions;

export default orderSlice.reducer;