import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { toggleSquareColor } from '../redux/chessBoardSlice';

const ChessBoard = () => {
  const board = useSelector((state) => state.chessBoard);
  const dispatch = useDispatch();

  const handleSquareClick = (row, col, currentColor) => {
    dispatch(toggleSquareColor({ row, col, currentColor }));
  };

  return (
    <div className="flex flex-col items-center p-8">
      <div className="grid grid-cols-8 gap-0">
        {board.map((row, rowIndex) =>
          row.map((square, colIndex) => {
            const isBlack = (rowIndex + colIndex) % 2 !== 0;
            const squareColor =
              square.color !== 'white' && square.color !== 'black'
                ? square.color
                : isBlack
                ? 'black'
                : 'white';

            return (
              <div
                key={`${rowIndex}-${colIndex}`}
                className={`w-16 h-16 ${squareColor === 'white' ? 'bg-white' : ''} ${
                  squareColor === 'black' ? 'bg-black' : ''
                } ${squareColor === 'yellow' ? 'bg-yellow-400' : ''} ${
                  squareColor === 'red' ? 'bg-red-500' : ''
                } border border-gray-300`}
                onClick={() =>
                  handleSquareClick(rowIndex, colIndex, squareColor)
                }
              ></div>
            );
          })
        )}
      </div>
    </div>
  );
};

export default ChessBoard;
