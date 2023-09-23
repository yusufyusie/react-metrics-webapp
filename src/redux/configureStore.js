import { configureStore } from '@reduxjs/toolkit';
import { logger } from 'redux-logger';
import charactersReducer from './characterSlice';
import detailReducer from './characterDetailSlice';

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
