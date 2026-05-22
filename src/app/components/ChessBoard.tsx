import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Board, ChessPiece, Position, GameState, Move } from './chess/types';
import { 
  createInitialBoard, 
  getValidMoves, 
  makeMove, 
  isCheckmate, 
  isInCheck,
  getPieceSymbol 
} from './chess/chessLogic';
import { ChessAI } from './chess/ChessAI';

export default function ChessBoard() {
  const [gameState, setGameState] = useState<GameState>(() => ({
    board: createInitialBoard(),
    currentPlayer: 'white',
    isGameOver: false,
    isCheck: false,
    moveHistory: [],
    selectedSquare: null,
    validMoves: [],
    lastMove: null,
  }));

  const [ai] = useState(new ChessAI(3));
  const [isThinking, setIsThinking] = useState(false);

  // Handle computer moves
  useEffect(() => {
    if (gameState.currentPlayer === 'black' && !gameState.isGameOver) {
      setIsThinking(true);
      
      // Add delay to show AI is "thinking"
      setTimeout(() => {
        const aiMove = ai.getBestMove(gameState.board, 'black');
        if (aiMove) {
          makeAIMove(aiMove);
        }
        setIsThinking(false);
      }, 1000);
    }
  }, [gameState.currentPlayer, gameState.isGameOver]);

  const makeAIMove = (move: Move) => {
    const newBoard = makeMove(gameState.board, move);
    const nextPlayer = 'white';
    const inCheck = isInCheck(newBoard, nextPlayer);
    const inCheckmate = isCheckmate(newBoard, nextPlayer);

    setGameState(prev => ({
      ...prev,
      board: newBoard,
      currentPlayer: nextPlayer,
      isCheck: inCheck,
      isGameOver: inCheckmate,
      winner: inCheckmate ? 'black' : undefined,
      moveHistory: [...prev.moveHistory, move],
      lastMove: move,
      selectedSquare: null,
      validMoves: [],
    }));
  };

  const handleSquareClick = (row: number, col: number) => {
    if (gameState.isGameOver || gameState.currentPlayer === 'black' || isThinking) return;

    const clickedPiece = gameState.board[row][col];
    const clickedPos = { row, col };

    // If no square is selected
    if (!gameState.selectedSquare) {
      if (clickedPiece && clickedPiece.color === gameState.currentPlayer) {
        const validMoves = getValidMoves(gameState.board, clickedPos);
        setGameState(prev => ({
          ...prev,
          selectedSquare: clickedPos,
          validMoves
        }));
      }
      return;
    }

    // If same square is clicked, deselect
    if (gameState.selectedSquare.row === row && gameState.selectedSquare.col === col) {
      setGameState(prev => ({
        ...prev,
        selectedSquare: null,
        validMoves: []
      }));
      return;
    }

    // If clicking on another piece of same color, select it
    if (clickedPiece && clickedPiece.color === gameState.currentPlayer) {
      const validMoves = getValidMoves(gameState.board, clickedPos);
      setGameState(prev => ({
        ...prev,
        selectedSquare: clickedPos,
        validMoves
      }));
      return;
    }

    // Try to make a move
    const isValidMove = gameState.validMoves.some(
      move => move.row === row && move.col === col
    );

    if (isValidMove) {
      const selectedPiece = gameState.board[gameState.selectedSquare.row][gameState.selectedSquare.col]!;
      const move: Move = {
        from: gameState.selectedSquare,
        to: clickedPos,
        piece: selectedPiece,
        capturedPiece: clickedPiece || undefined
      };

      const newBoard = makeMove(gameState.board, move);
      const nextPlayer = 'black';
      const inCheck = isInCheck(newBoard, nextPlayer);
      const inCheckmate = isCheckmate(newBoard, nextPlayer);

      setGameState(prev => ({
        ...prev,
        board: newBoard,
        currentPlayer: nextPlayer,
        isCheck: inCheck,
        isGameOver: inCheckmate,
        winner: inCheckmate ? 'white' : undefined,
        moveHistory: [...prev.moveHistory, move],
        lastMove: move,
        selectedSquare: null,
        validMoves: [],
      }));
    } else {
      // Invalid move, deselect
      setGameState(prev => ({
        ...prev,
        selectedSquare: null,
        validMoves: []
      }));
    }
  };

  const resetGame = () => {
    setGameState({
      board: createInitialBoard(),
      currentPlayer: 'white',
      isGameOver: false,
      isCheck: false,
      moveHistory: [],
      selectedSquare: null,
      validMoves: [],
      lastMove: null,
    });
  };

  const isSquareSelected = (row: number, col: number) => {
    return gameState.selectedSquare?.row === row && gameState.selectedSquare?.col === col;
  };

  const isValidMoveSquare = (row: number, col: number) => {
    return gameState.validMoves.some(move => move.row === row && move.col === col);
  };

  const isLastMoveSquare = (row: number, col: number) => {
    if (!gameState.lastMove) return false;
    return (
      (gameState.lastMove.from.row === row && gameState.lastMove.from.col === col) ||
      (gameState.lastMove.to.row === row && gameState.lastMove.to.col === col)
    );
  };

  return (
    <div className="flex flex-col items-center gap-6 p-8 bg-gradient-to-br from-amber-50 to-amber-100 min-h-screen">
      {/* Game Status */}
      <div className="text-center">
        <h1 className="text-4xl mb-4 text-amber-900">Chess Game</h1>
        
        <div className="flex items-center gap-4 justify-center mb-4">
          <div className="bg-white/80 backdrop-blur-sm rounded-lg px-4 py-2 border border-amber-200">
            <span className="text-lg">
              Current Player: {gameState.currentPlayer === 'white' ? '♔ White (You)' : '♛ Black (Computer)'}
            </span>
          </div>
          
          {isThinking && (
            <motion.div
              className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm"
              animate={{ opacity: [0.5, 1, 0.5] }}
              transition={{ duration: 1, repeat: Infinity }}
            >
              AI is thinking...
            </motion.div>
          )}
        </div>

        {gameState.isCheck && !gameState.isGameOver && (
          <motion.div
            className="bg-red-100 text-red-800 px-4 py-2 rounded-lg mb-4"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            Check!
          </motion.div>
        )}

        {gameState.isGameOver && (
          <motion.div
            className="bg-green-100 text-green-800 px-6 py-3 rounded-lg mb-4"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            Game Over! {gameState.winner === 'white' ? 'You Win!' : 'Computer Wins!'}
          </motion.div>
        )}
      </div>

      {/* Chess Board */}
      <div className="relative">
        {/* Board border and coordinates */}
        <div className="bg-amber-800 p-4 rounded-lg shadow-2xl">
          {/* Row coordinates (8-1) */}
          <div className="flex">
            <div className="w-8 flex flex-col justify-around text-amber-100 text-sm">
              {[8, 7, 6, 5, 4, 3, 2, 1].map(num => (
                <div key={num} className="h-16 flex items-center justify-center">
                  {num}
                </div>
              ))}
            </div>
            
            {/* Main board */}
            <div className="grid grid-cols-8 gap-0 border-2 border-amber-900">
              {gameState.board.map((row, rowIndex) =>
                row.map((piece, colIndex) => {
                  const isLight = (rowIndex + colIndex) % 2 === 0;
                  const isSelected = isSquareSelected(rowIndex, colIndex);
                  const isValidMove = isValidMoveSquare(rowIndex, colIndex);
                  const isLastMove = isLastMoveSquare(rowIndex, colIndex);
                  
                  return (
                    <motion.div
                      key={`${rowIndex}-${colIndex}`}
                      className={`
                        w-16 h-16 flex items-center justify-center cursor-pointer relative text-4xl
                        ${isLight ? 'bg-amber-100' : 'bg-amber-600'}
                        ${isSelected ? 'ring-4 ring-blue-500' : ''}
                        ${isLastMove ? 'ring-2 ring-yellow-400' : ''}
                        hover:brightness-110 transition-all duration-200
                      `}
                      onClick={() => handleSquareClick(rowIndex, colIndex)}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      {/* Valid move indicator */}
                      {isValidMove && (
                        <motion.div
                          className={`absolute inset-0 flex items-center justify-center
                            ${piece ? 'ring-4 ring-green-500 ring-inset rounded-full' : ''}
                          `}
                          initial={{ scale: 0 }}
                          animate={{ scale: 1 }}
                          transition={{ type: "spring", stiffness: 400 }}
                        >
                          {!piece && (
                            <div className="w-4 h-4 bg-green-500 rounded-full opacity-70" />
                          )}
                        </motion.div>
                      )}
                      
                      {/* Chess piece */}
                      <AnimatePresence mode="wait">
                        {piece && (
                          <motion.div
                            key={`${rowIndex}-${colIndex}-${piece.type}-${piece.color}`}
                            className="select-none"
                            initial={{ scale: 0, rotate: -180 }}
                            animate={{ scale: 1, rotate: 0 }}
                            exit={{ scale: 0, rotate: 180 }}
                            transition={{ type: "spring", stiffness: 300, damping: 20 }}
                          >
                            {getPieceSymbol(piece)}
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </motion.div>
                  );
                })
              )}
            </div>
          </div>
          
          {/* Column coordinates (a-h) */}
          <div className="flex ml-8">
            {['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'].map(letter => (
              <div key={letter} className="w-16 h-6 flex items-center justify-center text-amber-100 text-sm">
                {letter}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Controls */}
      <div className="flex gap-4">
        <motion.button
          className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg transition-colors"
          onClick={resetGame}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          New Game
        </motion.button>
      </div>

      {/* Move History */}
      <div className="bg-white/80 backdrop-blur-sm rounded-lg p-4 border border-amber-200 max-w-md w-full">
        <h3 className="text-lg mb-2 text-amber-900">Move History</h3>
        <div className="max-h-32 overflow-y-auto text-sm">
          {gameState.moveHistory.length === 0 ? (
            <p className="text-amber-600">No moves yet</p>
          ) : (
            <div className="grid grid-cols-2 gap-2">
              {gameState.moveHistory.map((move, index) => (
                <div key={index} className="text-amber-800">
                  {index + 1}. {getPieceSymbol(move.piece)} 
                  {String.fromCharCode(97 + move.from.col)}{8 - move.from.row} → 
                  {String.fromCharCode(97 + move.to.col)}{8 - move.to.row}
                  {move.capturedPiece ? ` (${getPieceSymbol(move.capturedPiece)})` : ''}
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}