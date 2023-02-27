import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
const apiUrl = import.meta.env.VITE_BASE_URL;

const productSlice = createSlice({
  name: 'products',
  initialState: {
    products: [],
    status: 'idle',
    productById: [],
    productByIdStatus: 'idle',
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchProducts.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchProducts.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.products = action.payload;
      })
      .addCase(fetchProducts.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      })
      .addCase(fetchProductById.pending, (state) => {
        state.productByIdStatus = 'loading';
      })
      .addCase(fetchProductById.fulfilled, (state, action) => {
        state.productByIdStatus = 'succeeded';
        state.productById = action.payload;
      })
      .addCase(fetchProductById.rejected, (state, action) => {
        state.productByIdStatus = 'failed';
        state.error = action.error.message;
      })
  },
});

export const fetchProducts = createAsyncThunk(
  'products/fetchProducts',
  async (limit) => {
    const response = await axios.get(`${apiUrl}?limit=${limit}`);
    return response.data;
  }
);

export const fetchProductById = createAsyncThunk(
  `products/fetchProductById`,
  async (id) => {
    const response = await axios.get(`${apiUrl}/${id}`);
    return response.data;
  }
);

export default productSlice.reducer;
