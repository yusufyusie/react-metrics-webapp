import { configureStore } from '@reduxjs/toolkit';
import characterReducer from './characterSlice';
import characterDetailReducer from './characterDetailSlice'
import { logger } from 'redux-logger';

const store = configureStore({
  reducer: {
    charactersData: characterReducer,
    characterDetails: characterDetailReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware({
    serializableCheck: false,
  }).concat(logger),
});

export default store;