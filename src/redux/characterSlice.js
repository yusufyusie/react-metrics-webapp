import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
const getCharactersUrl = 'https://thronesapi.com/api/v2/Characters';

const initialState = { 
    charactersData: [], 
    loading: false, 
    error: '',
   };

   export const getAllCharacters = createAsyncThunk('characters/fetchCharacters', async () => {
          const response = await fetch(getCharactersUrl,
            {
                method: 'GET',
                headers: {
                    'content-Type': 'application/json; charset=utf-8',
                },
            });
            const result = await response.json();
             return result.characters;
   });

const characterSlice = createSlice({
    name: 'character',
    initialState,
    reducers: { },
    extraReducers() {},
});

export default characterSlice.reducer;