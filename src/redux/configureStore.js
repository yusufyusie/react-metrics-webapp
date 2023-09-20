import { configureStore } from '@reduxjs/toolkit';
import characterReducer from './characterSlice';
import { logger } from 'redux-logger';

const store = configureStore({
  reducer: {
    charactersData: characterReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware({
    serializableCheck: false,
  }).concat(logger),
});

export default store;