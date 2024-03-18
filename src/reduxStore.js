import { configureStore } from '@reduxjs/toolkit';
import usersReducer from './users/usersSlice';



export default configureStore({
    reducer: {
      users: usersReducer
    },
    middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
      immutableCheck: false,
    }),

  });