import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

 const getCharactersUrl = 'https://thronesapi.com/api/v2/Characters';

const initialState = { 
    characters: [], 
    loading: false, 
    error: '',
   };

   export const getAllCharacters = createAsyncThunk('characters/getAllCharacters', async (_name, thunkAPI) => {
    try {
         const response = await axios.get(`${getCharactersUrl}`,
            {
                method: 'GET',
                headers: {
                    Accept: "application/json",
                    "Content-Type": "application/json;charset=UTF-8",
                },
            });
             return response.data;
            } catch (error) {
                return thunkAPI.rejectWithValue(error);
              }
   });

const charactersSlice = createSlice({
    name: 'character',
    initialState,
    reducers: { },
    extraReducers: (builder) => {
        builder.addCase(getAllCharacters.pending, (state) => {
            const newState = { ...state, loading: true, error: false };
            return newState;
        });
        builder.addCase(getAllCharacters.fulfilled, (state, action) => {
            const newState = { ...state, characters: action.payload, loading: false, error: false };
            return newState;
        });
        builder.addCase(getAllCharacters.rejected, (state, action) => {
           const newState = { ...state, characters: [], error: action.error.message };
            return newState;
        });
    },
});

export default charactersSlice.reducer;