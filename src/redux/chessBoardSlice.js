import { createSlice } from '@reduxjs/toolkit';

const initialState = Array(8)
    .fill(null)
    .map(() => Array(8).fill(null).map(() => ({ color: 'white' })));

const chessBoardSlice = createSlice({
    name: 'chessBoard',
    initialState,
    reducers: {
        toggleSquareColor: (state, action) => {
            const { row, col, currentColor } = action.payload;
            state[row][col].color = currentColor === 'white' ? 'yellow' :
                currentColor === 'black' ? 'red' :
                    currentColor === 'yellow' ? 'white' : 'black';
        },
    },
});

export const { toggleSquareColor } = chessBoardSlice.actions;
export default chessBoardSlice.reducer;
