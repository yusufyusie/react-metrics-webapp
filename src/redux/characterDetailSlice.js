import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { getCharactersUrl } from './characterSlice'
import axios from "axios";

export const getCoinDetails = createAsyncThunk('details/characterDetails', async (id) => {
    const response = await axios.get(getCharactersUrl/{id});
    const { actor } = await response.json();
    return actor;
  });