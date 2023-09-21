import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { getCharactersUrl } from './characterSlice'
import axios from "axios";

export const getCharacterDetails = createAsyncThunk('details/characterDetails', async (id) => {
    const response = await axios.get(getCharactersUrl/{id});
    const { actor } = await response.json();
    return actor;
  });

  const initialState = { loading: false, characterDetails: [], error: '' };  

  const characterDetailSlice = createSlice({
    name: 'characterDetails',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
      builder.addCase(getCharacterDetails.pending, (state) => {
        const newState = { ...state, loading: true };
        return newState;
      });
      builder.addCase(getCharacterDetails.fulfilled, (state, action) => {
        const newState = { ...state, characterDetails: action.payload, loading: false };
        return newState;
      });
      builder.addCase(getCharacterDetails.rejected, (state, action) => {
        const newState = { ...state, characterDetails: [], error: action.error.message };
        return newState;
      });
    },
  });
  
  export default characterDetailSlice.reducer;
  