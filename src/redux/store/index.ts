import { configureStore, getDefaultMiddleware, Action } from '@reduxjs/toolkit';
import { ThunkAction } from 'redux-thunk';
import { setupListeners } from '@reduxjs/toolkit/query/react';
import { pokemonApi } from '@/services/api';
import { modalReducer } from '../slices';

export const store = configureStore({
  reducer: {
    [pokemonApi.reducerPath]: pokemonApi.reducer,
    modalSlice: modalReducer, // Add the custom modal reducer to the store
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(pokemonApi.middleware),
});

// Set up listeners for query actions
setupListeners(store.dispatch);

// Define RootState type
export type RootState = ReturnType<typeof store.getState>;

// Define AppThunk type for thunk actions
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
