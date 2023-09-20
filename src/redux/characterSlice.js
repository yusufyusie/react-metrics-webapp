import { createSlice } from "@reduxjs/toolkit";


const initialState = { 
    charactersData: [], 
    loading: false, 
    error: '' 
   };

const characterSlice = createSlice({
    name: 'character',
    initialState,
    reducers: { },
    extraReducers() {},
});

export default characterSlice.reducer;