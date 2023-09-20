import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
const getCharactersUrl = 'https://thronesapi.com/api/v2/Characters';

const initialState = { 
    charactersData: [], 
    loading: false, 
    error: '',
   };

   export const getAllCharacters = createAsyncThunk('characters/fetchCharacters', async (_name, thunkAPI) => {
    try {
         const response = await fetch(getCharactersUrl,
            {
                method: 'GET',
                headers: {
                    'content-Type': 'application/json; charset=utf-8',
                },
            });
            const result = await response.json();
             return result.characters;
            } catch (error) {
                return thunkAPI.rejectWithValue(error);
              }
   });

const characterSlice = createSlice({
    name: 'character',
    initialState,
    reducers: { },
    extraReducers: (builder) => {
        builder.addCase(getAllCharacters.pending, (state) => {
            const newState = { ...state, loading: true };
            return newState;
        });
        builder.addCase(getAllCharacters.fulfilled, (state, action) => {
            const newState = { ...state, charactersData: action.payload, loading: false };
            return newState;
        });
        builder.addCase(getAllCharacters.rejected, (state, action) => {
           const newState = { ...state, charactersData: [], error: action.error.message };
            return newState;
        });
    },
});

export default characterSlice.reducer;