import {
  createAsyncThunk,
  createSlice,
} from "@reduxjs/toolkit";
import axios from "axios";

export const getAllUser = createAsyncThunk(
  "users/getAllUser",
  async (_, { rejectedWithValue }) => {
    try {
      let response = await axios.get(
        "https://jsonplaceholder.typicode.com/users",
      );
      console.log(response.data);
      return response.data;
    } catch (error) {
      console.log(error.message);
      return rejectedWithValue(error.message);
    }
  },
);

export const userSlice = createSlice({
  name: "users",
  initialState: {
    user: [],
    error: null,
    loading: false,
  },
  reducers: {},
  extraReducers: () => {},
});

export default userSlice.reducer;
