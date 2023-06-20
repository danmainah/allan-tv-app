import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import axios from "axios";

const initialState = []
const URL = 'https://allan-api.onrender.com/';

export const username = '';
export const email = '';
export const password = '';

const axiosConfig = {
  headers: {
    'Content-Type': 'application/x-www-form-urlencoded',
  },
  Authorization: {
    username,
    password,
  },
};

// add method to add new user
export const register = createAsyncThunk('user/register', async () => {
  try {
    const response = await axios.post(URL, axiosConfig);
    return response.data;
  } catch (error) {
    return error.message;
  }
});

export const authentication = createSlice({
    name: 'counter',
    initialState,
    reducers: {
      register: (state,action) => {
        
      },
      login: (state, action) => {
        state.value -= 1
      },
      logout: (state, action) => {
        state.value += action.payload
      },
    },
  })
  