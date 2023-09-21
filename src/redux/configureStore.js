import { configureStore } from '@reduxjs/toolkit';
import characterReducer from './characterSlice';
import detailReducer from './characterDetailSlice';
import { logger } from 'redux-logger';

const store = configureStore({
  reducer: {
    charactersData: characterReducer,
    details: detailReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware({
    serializableCheck: false,
  }).concat(logger),
});

export default store;