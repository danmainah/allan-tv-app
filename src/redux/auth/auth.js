import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

// const url = 'https://allan-api.onrender.com/login'
const url2 = 'https://allan-api.onrender.com/signup'

const initialState = {
  isAuthenticated: false,
  user: null,
  loading: false,
};

export const login = createAsyncThunk(
  'auth/login',
  async (credentials, { rejectWithValue }) => {
    try {
      const response = await axios.post("https://allan-api.onrender.com/login", credentials);
      return response.data;
    } catch (err) {
     console.log( err)
      return rejectWithValue(err.response.data);
    }
  }
);

export const signup = createAsyncThunk(
  'auth/signup',
  async (credentials, { rejectWithValue }) => {
    try {
      const response = await axios.post(url2, credentials);
      return response.data;
    } catch (err) {
      return rejectWithValue(err.response.data);
    }
  }
);

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(login.pending, (state) => {
        state.loading = true;
      })
      .addCase(login.fulfilled, (state, action) => {
        state.isAuthenticated = true;
        state.user = action.payload;
        state.loading = false;
      })
      .addCase(login.rejected, (state) => {
        state.loading = false;
      })
      .addCase(signup.pending, (state) => {
        state.loading = true;
      })
      .addCase(signup.fulfilled, (state, action) => {
        state.isAuthenticated = true;
        state.user = action.payload;
        state.loading = false;
      })
      .addCase(signup.rejected, (state) => {
        state.loading = false;
      });
  },
});

export default authSlice.reducer;