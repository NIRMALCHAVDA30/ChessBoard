import React from 'react';
import ChessBoard from './components/ChessBoard';

const App = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-500 via-purple-600 to-pink-500 flex items-center justify-center p-4">
      <div className="bg-white shadow-2xl rounded-lg p-6 md:p-5 w-full max-w-4xl border-t-4 border-purple-500 overflow-auto">
        <div className="h-full flex flex-col items-center">
          <h1 className="text-3xl md:text-4xl font-extrabold text-gray-800 text-center mb-1">
            Chess Board
          </h1>
          <div className="w-full max-h-screen overflow-auto">
            <ChessBoard />
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
