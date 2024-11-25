import { configureStore } from '@reduxjs/toolkit';
import chessBoardReducer from './chessBoardSlice';

export const store = configureStore({
  reducer: {
    chessBoard: chessBoardReducer,
  },
});
