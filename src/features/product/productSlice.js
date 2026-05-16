import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const getAllProduct = createAsyncThunk(
  "product/getAllProduct",
  async (_, { rejectWithValue }) => {
    try {
      let response = await axios.get("http://localhost:3000/product");
      console.log(response);
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  },
);

export const getProduct = createAsyncThunk(
  "product/getProduct",
  async (_, { rejectWithValue }) => {
    try {
      let response = await axios.get("http://localhost:3000/product");
      console.log(response);
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  },
);

export const productSlice = createSlice({
  name: "product",
  initialState: {
    products: [],
    product: {}
  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getAllProduct.fulfilled, (state, action) => {
      state.products = action.payload;
    });
    builder.addCase(getProduct.fulfilled, (state, action) => {
      state.products = action.payload;
    });
  },
});

export default productSlice.reducer;
