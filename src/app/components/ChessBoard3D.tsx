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

export default function ChessBoard3D() {
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
  const [cameraAngle, setCameraAngle] = useState(0);

  // Handle computer moves
  useEffect(() => {
    if (gameState.currentPlayer === 'black' && !gameState.isGameOver) {
      setIsThinking(true);
      
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

    if (gameState.selectedSquare.row === row && gameState.selectedSquare.col === col) {
      setGameState(prev => ({
        ...prev,
        selectedSquare: null,
        validMoves: []
      }));
      return;
    }

    if (clickedPiece && clickedPiece.color === gameState.currentPlayer) {
      const validMoves = getValidMoves(gameState.board, clickedPos);
      setGameState(prev => ({
        ...prev,
        selectedSquare: clickedPos,
        validMoves
      }));
      return;
    }

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
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 p-8">
      {/* 3D Scene Container */}
      <div className="flex flex-col items-center gap-8">
        {/* Game Status */}
        <div className="text-center">
          <motion.h1 
            className="text-5xl mb-6 text-white/90"
            animate={{ 
              textShadow: [
                '0 0 20px rgba(255,255,255,0.3)',
                '0 0 30px rgba(255,255,255,0.5)',
                '0 0 20px rgba(255,255,255,0.3)'
              ]
            }}
            transition={{ duration: 3, repeat: Infinity }}
          >
            3D Chess Arena
          </motion.h1>
          
          <div className="flex items-center gap-6 justify-center mb-6">
            <motion.div 
              className="bg-white/10 backdrop-blur-md rounded-xl px-6 py-3 border border-white/20"
              whileHover={{ scale: 1.05 }}
            >
              <span className="text-xl text-white/90">
                {gameState.currentPlayer === 'white' ? '♔ Your Turn' : '♛ AI Thinking...'}
              </span>
            </motion.div>
            
            {isThinking && (
              <motion.div
                className="bg-blue-500/20 text-blue-300 px-4 py-2 rounded-full backdrop-blur-sm border border-blue-400/30"
                animate={{ 
                  opacity: [0.5, 1, 0.5],
                  scale: [0.95, 1.05, 0.95]
                }}
                transition={{ duration: 1.5, repeat: Infinity }}
              >
                Computing...
              </motion.div>
            )}

            {/* Camera Control */}
            <motion.button
              className="bg-white/10 hover:bg-white/20 text-white/80 px-4 py-2 rounded-lg backdrop-blur-sm border border-white/20 transition-all"
              onClick={() => setCameraAngle(prev => prev + 90)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Rotate View
            </motion.button>
          </div>

          {gameState.isCheck && !gameState.isGameOver && (
            <motion.div
              className="bg-red-500/20 text-red-300 px-6 py-3 rounded-xl mb-6 backdrop-blur-sm border border-red-400/30"
              initial={{ scale: 0.8, opacity: 0, y: -20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              ⚠ CHECK! King is under attack!
            </motion.div>
          )}

          {gameState.isGameOver && (
            <motion.div
              className="bg-green-500/20 text-green-300 px-8 py-4 rounded-xl mb-6 backdrop-blur-sm border border-green-400/30"
              initial={{ scale: 0.8, opacity: 0, y: -20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              🎉 {gameState.winner === 'white' ? 'Victory! You defeated the AI!' : 'Game Over! AI wins this round!'}
            </motion.div>
          )}
        </div>

        {/* 3D Chess Board */}
        <motion.div 
          className="relative"
          style={{ 
            perspective: "1200px",
            perspectiveOrigin: "center center"
          }}
          animate={{ rotateY: cameraAngle }}
          transition={{ duration: 1, ease: "easeInOut" }}
        >
          {/* Board Container with 3D Transform */}
          <motion.div
            className="relative preserve-3d"
            style={{
              transform: "rotateX(25deg) rotateY(0deg)",
            }}
            animate={{
              rotateY: [0, 2, 0, -2, 0],
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            {/* Board Base/Shadow */}
            <div 
              className="absolute inset-0 bg-black/40 rounded-2xl blur-xl"
              style={{
                transform: "translateY(40px) translateZ(-20px) scale(1.1)",
              }}
            />

            {/* Main 3D Board */}
            <div className="relative bg-gradient-to-br from-amber-200 to-amber-400 p-6 rounded-2xl border-4 border-amber-600 shadow-2xl">
              {/* Board Edges for 3D Effect */}
              <div 
                className="absolute inset-0 bg-gradient-to-r from-amber-700 to-amber-800 rounded-2xl"
                style={{
                  transform: "translateZ(-20px)",
                }}
              />
              
              {/* Board Surface */}
              <div 
                className="relative grid grid-cols-8 gap-1 p-2 bg-amber-100 rounded-lg"
                style={{
                  transform: "translateZ(5px)",
                }}
              >
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
                          relative w-14 h-14 cursor-pointer preserve-3d
                          ${isLight ? 'bg-amber-50' : 'bg-amber-800'}
                          hover:brightness-110 transition-all duration-200
                          ${isSelected ? 'ring-4 ring-blue-400' : ''}
                          ${isLastMove ? 'ring-2 ring-yellow-400' : ''}
                        `}
                        style={{
                          transform: "translateZ(2px)",
                          boxShadow: `
                            0 4px 8px rgba(0,0,0,0.1),
                            inset 0 1px 0 rgba(255,255,255,0.2)
                          `,
                        }}
                        onClick={() => handleSquareClick(rowIndex, colIndex)}
                        whileHover={{ 
                          scale: 1.05,
                          rotateX: -10,
                          transition: { duration: 0.2 }
                        }}
                        whileTap={{ scale: 0.95 }}
                      >
                        {/* Square Base for 3D Effect */}
                        <div 
                          className={`absolute inset-0 ${isLight ? 'bg-amber-200' : 'bg-amber-900'}`}
                          style={{
                            transform: "translateZ(-8px)",
                          }}
                        />

                        {/* Valid move indicator */}
                        {isValidMove && (
                          <motion.div
                            className="absolute inset-0 flex items-center justify-center"
                            style={{ transform: "translateZ(15px)" }}
                            initial={{ scale: 0, rotateY: 0 }}
                            animate={{ scale: 1, rotateY: 360 }}
                            transition={{ type: "spring", stiffness: 400 }}
                          >
                            {piece ? (
                              <div className="w-12 h-12 border-4 border-green-400 rounded-full animate-pulse" />
                            ) : (
                              <motion.div 
                                className="w-6 h-6 bg-green-400 rounded-full shadow-lg"
                                animate={{ 
                                  scale: [1, 1.2, 1],
                                  boxShadow: [
                                    '0 4px 8px rgba(34, 197, 94, 0.3)',
                                    '0 6px 12px rgba(34, 197, 94, 0.5)',
                                    '0 4px 8px rgba(34, 197, 94, 0.3)'
                                  ]
                                }}
                                transition={{ duration: 1, repeat: Infinity }}
                              />
                            )}
                          </motion.div>
                        )}
                        
                        {/* Chess piece */}
                        <AnimatePresence mode="wait">
                          {piece && (
                            <motion.div
                              key={`${rowIndex}-${colIndex}-${piece.type}-${piece.color}`}
                              className="absolute inset-0 flex items-center justify-center select-none text-4xl preserve-3d"
                              style={{
                                transform: "translateZ(20px)",
                                textShadow: `
                                  2px 2px 4px rgba(0,0,0,0.5),
                                  0 0 10px rgba(255,255,255,0.3)
                                `,
                                filter: "drop-shadow(0 8px 16px rgba(0,0,0,0.3))"
                              }}
                              initial={{ 
                                scale: 0, 
                                rotateY: -180,
                                y: -50
                              }}
                              animate={{ 
                                scale: 1, 
                                rotateY: 0,
                                y: 0
                              }}
                              exit={{ 
                                scale: 0, 
                                rotateY: 180,
                                y: 50
                              }}
                              transition={{ 
                                type: "spring", 
                                stiffness: 300, 
                                damping: 20 
                              }}
                              whileHover={{
                                scale: 1.2,
                                rotateY: 10,
                                z: 30,
                                transition: { duration: 0.2 }
                              }}
                            >
                              <motion.span
                                animate={{
                                  rotateY: isSelected ? [0, 10, 0, -10, 0] : 0,
                                }}
                                transition={{
                                  duration: 2,
                                  repeat: isSelected ? Infinity : 0,
                                }}
                              >
                                {getPieceSymbol(piece)}
                              </motion.span>
                            </motion.div>
                          )}
                        </AnimatePresence>

                        {/* Square highlights with 3D glow */}
                        {isSelected && (
                          <motion.div
                            className="absolute inset-0 bg-blue-400/30 rounded-sm"
                            style={{
                              transform: "translateZ(1px)",
                              boxShadow: "0 0 20px rgba(59, 130, 246, 0.5)"
                            }}
                            animate={{
                              opacity: [0.3, 0.6, 0.3],
                            }}
                            transition={{
                              duration: 1,
                              repeat: Infinity,
                            }}
                          />
                        )}

                        {isLastMove && (
                          <motion.div
                            className="absolute inset-0 bg-yellow-400/20 rounded-sm"
                            style={{
                              transform: "translateZ(1px)",
                              boxShadow: "0 0 15px rgba(251, 191, 36, 0.4)"
                            }}
                          />
                        )}
                      </motion.div>
                    );
                  })
                )}
              </div>

              {/* 3D Board Labels */}
              <div className="absolute -bottom-2 left-8 right-8 flex justify-between text-amber-900 text-sm">
                {['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'].map(letter => (
                  <div key={letter} className="w-14 text-center">
                    {letter}
                  </div>
                ))}
              </div>
              
              <div className="absolute top-8 -left-6 bottom-8 flex flex-col justify-between text-amber-900 text-sm">
                {[8, 7, 6, 5, 4, 3, 2, 1].map(num => (
                  <div key={num} className="h-14 flex items-center">
                    {num}
                  </div>
                ))}
              </div>
            </div>

            {/* Ambient lighting effects */}
            <motion.div
              className="absolute -inset-8 rounded-3xl opacity-20 pointer-events-none"
              style={{
                background: 'radial-gradient(circle at 30% 30%, rgba(59, 130, 246, 0.3) 0%, transparent 50%)',
                transform: "translateZ(-30px)",
              }}
              animate={{
                rotate: [0, 360],
              }}
              transition={{
                duration: 30,
                repeat: Infinity,
                ease: "linear",
              }}
            />
          </motion.div>
        </motion.div>

        {/* Controls */}
        <div className="flex gap-6">
          <motion.button
            className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-4 rounded-xl transition-all backdrop-blur-sm border border-white/20"
            onClick={resetGame}
            whileHover={{ 
              scale: 1.05,
              boxShadow: "0 10px 25px rgba(0,0,0,0.2)"
            }}
            whileTap={{ scale: 0.95 }}
            style={{
              boxShadow: "0 8px 20px rgba(0,0,0,0.1)"
            }}
          >
            New Game
          </motion.button>
        </div>

        {/* Enhanced Move History */}
        <motion.div 
          className="bg-white/5 backdrop-blur-xl rounded-2xl p-6 border border-white/10 max-w-lg w-full"
          style={{
            boxShadow: `
              0 20px 40px rgba(0,0,0,0.1),
              inset 0 1px 0 rgba(255,255,255,0.1)
            `
          }}
        >
          <h3 className="text-xl mb-4 text-white/90">Battle Log</h3>
          <div className="max-h-40 overflow-y-auto">
            {gameState.moveHistory.length === 0 ? (
              <p className="text-white/60">The battle awaits your first move...</p>
            ) : (
              <div className="space-y-2">
                {gameState.moveHistory.map((move, index) => (
                  <motion.div 
                    key={index} 
                    className="flex items-center gap-3 text-white/80 bg-white/5 rounded-lg p-2"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <span className="text-white/60 text-sm w-8">
                      {Math.floor(index / 2) + 1}.
                    </span>
                    <span className="text-2xl">
                      {getPieceSymbol(move.piece)}
                    </span>
                    <span className="text-sm">
                      {String.fromCharCode(97 + move.from.col)}{8 - move.from.row} → 
                      {String.fromCharCode(97 + move.to.col)}{8 - move.to.row}
                    </span>
                    {move.capturedPiece && (
                      <span className="text-red-400 text-lg">
                        ×{getPieceSymbol(move.capturedPiece)}
                      </span>
                    )}
                  </motion.div>
                ))}
              </div>
            )}
          </div>
        </motion.div>
      </div>

      {/* Ambient particles */}
      {[...Array(12)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-2 h-2 bg-white/20 rounded-full pointer-events-none"
          style={{
            left: `${10 + (i * 8)}%`,
            top: `${20 + (i * 6)}%`,
          }}
          animate={{
            y: [-20, 20, -20],
            opacity: [0.2, 0.6, 0.2],
            scale: [0.5, 1, 0.5],
          }}
          transition={{
            duration: 4 + (i * 0.5),
            repeat: Infinity,
            ease: "easeInOut",
            delay: i * 0.3,
          }}
        />
      ))}
    </div>
  );
}