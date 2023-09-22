import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from "axios";

export const getCharacter = createAsyncThunk('details/getCharacter', async (id) => {
    const response = await axios.get(`https://thronesapi.com/api/v2/Characters/${id}`);
    const { actor } = await response.json();
    return actor;
  });

  const initialState = { 
    loading: false, 
    characterDetails: [], 
    error: null, 
  };  

  const characterDetailSlice = createSlice({
    name: 'details',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
      builder.addCase(getCharacter.pending, (state) => {
        const newState = { ...state, loading: true };
        return newState;
      });

      builder.addCase(getCharacter.fulfilled, (state, action) => {
        const newState = { ...state, characterDetails: action.payload, loading: false };
        return newState;
      });

      builder.addCase(getCharacter.rejected, (state, action) => {
        const newState = { ...state, characterDetails: [], error: action.error.message };
        return newState;
      });
    },
  });
  
  export default characterDetailSlice.reducer;
  