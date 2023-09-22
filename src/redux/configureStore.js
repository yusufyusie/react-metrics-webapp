import { configureStore } from '@reduxjs/toolkit';
import charactersReducer from './characterSlice';
import detailReducer from './characterDetailSlice';
import { logger } from 'redux-logger';

const store = configureStore({
  reducer: {
    character: charactersReducer,
    details: detailReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware({
    serializableCheck: false,
  }).concat(logger),
});

export default store;