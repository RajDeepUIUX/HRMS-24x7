import { Board, ChessPiece, Move, PieceColor, PieceType } from './types';
import { getAllValidMoves, makeMove, isCheckmate, isInCheck } from './chessLogic';

// Simple piece values for evaluation
const PIECE_VALUES: Record<PieceType, number> = {
  pawn: 1,
  knight: 3,
  bishop: 3,
  rook: 5,
  queen: 9,
  king: 0 // King value is handled separately
};

// Position bonus tables for better piece placement
const PAWN_TABLE = [
  [0,  0,  0,  0,  0,  0,  0,  0],
  [5, 10, 10,-20,-20, 10, 10,  5],
  [5, -5,-10,  0,  0,-10, -5,  5],
  [0,  0,  0, 20, 20,  0,  0,  0],
  [5,  5, 10, 25, 25, 10,  5,  5],
  [10, 10, 20, 30, 30, 20, 10, 10],
  [50, 50, 50, 50, 50, 50, 50, 50],
  [0,  0,  0,  0,  0,  0,  0,  0]
];

const KNIGHT_TABLE = [
  [-50,-40,-30,-30,-30,-30,-40,-50],
  [-40,-20,  0,  5,  5,  0,-20,-40],
  [-30,  5, 10, 15, 15, 10,  5,-30],
  [-30,  0, 15, 20, 20, 15,  0,-30],
  [-30,  5, 15, 20, 20, 15,  5,-30],
  [-30,  0, 10, 15, 15, 10,  0,-30],
  [-40,-20,  0,  0,  0,  0,-20,-40],
  [-50,-40,-30,-30,-30,-30,-40,-50]
];

export class ChessAI {
  private difficulty: number;

  constructor(difficulty: number = 3) {
    this.difficulty = difficulty; // Depth of minimax search
  }

  public getBestMove(board: Board, color: PieceColor): Move | null {
    const validMoves = getAllValidMoves(board, color);
    if (validMoves.length === 0) return null;

    // For easier difficulty, sometimes make random moves
    if (this.difficulty <= 1 && Math.random() < 0.3) {
      return validMoves[Math.floor(Math.random() * validMoves.length)];
    }

    let bestMove: Move | null = null;
    let bestValue = color === 'black' ? Infinity : -Infinity;

    for (const move of validMoves) {
      const newBoard = makeMove(board, move);
      const value = this.minimax(newBoard, this.difficulty - 1, -Infinity, Infinity, color === 'white');
      
      if (color === 'black' && value < bestValue) {
        bestValue = value;
        bestMove = move;
      } else if (color === 'white' && value > bestValue) {
        bestValue = value;
        bestMove = move;
      }
    }

    return bestMove;
  }

  private minimax(board: Board, depth: number, alpha: number, beta: number, isMaximizing: boolean): number {
    if (depth === 0) {
      return this.evaluateBoard(board);
    }

    const currentColor: PieceColor = isMaximizing ? 'white' : 'black';
    
    // Check for checkmate or stalemate
    if (isCheckmate(board, currentColor)) {
      return isMaximizing ? -10000 : 10000;
    }

    const validMoves = getAllValidMoves(board, currentColor);
    if (validMoves.length === 0) {
      return 0; // Stalemate
    }

    if (isMaximizing) {
      let maxEval = -Infinity;
      for (const move of validMoves) {
        const newBoard = makeMove(board, move);
        const evaluation = this.minimax(newBoard, depth - 1, alpha, beta, false);
        maxEval = Math.max(maxEval, evaluation);
        alpha = Math.max(alpha, evaluation);
        if (beta <= alpha) break; // Alpha-beta pruning
      }
      return maxEval;
    } else {
      let minEval = Infinity;
      for (const move of validMoves) {
        const newBoard = makeMove(board, move);
        const evaluation = this.minimax(newBoard, depth - 1, alpha, beta, true);
        minEval = Math.min(minEval, evaluation);
        beta = Math.min(beta, evaluation);
        if (beta <= alpha) break; // Alpha-beta pruning
      }
      return minEval;
    }
  }

  private evaluateBoard(board: Board): number {
    let score = 0;

    for (let row = 0; row < 8; row++) {
      for (let col = 0; col < 8; col++) {
        const piece = board[row][col];
        if (!piece) continue;

        let pieceValue = PIECE_VALUES[piece.type];
        
        // Add positional bonuses
        pieceValue += this.getPositionalValue(piece, row, col);

        // Add mobility bonus (number of valid moves)
        const mobility = this.getMobility(board, { row, col });
        pieceValue += mobility * 0.1;

        if (piece.color === 'white') {
          score += pieceValue;
        } else {
          score -= pieceValue;
        }
      }
    }

    // Add bonus for king safety
    score += this.evaluateKingSafety(board, 'white') * 0.5;
    score -= this.evaluateKingSafety(board, 'black') * 0.5;

    // Penalty for being in check
    if (isInCheck(board, 'white')) score -= 50;
    if (isInCheck(board, 'black')) score += 50;

    return score;
  }

  private getPositionalValue(piece: ChessPiece, row: number, col: number): number {
    const adjustedRow = piece.color === 'white' ? 7 - row : row;
    
    switch (piece.type) {
      case 'pawn':
        return PAWN_TABLE[adjustedRow][col] / 100;
      case 'knight':
        return KNIGHT_TABLE[adjustedRow][col] / 100;
      case 'king':
        // Keep king safe in early/mid game
        return piece.color === 'white' && row > 5 ? 10 : 0;
      default:
        return 0;
    }
  }

  private getMobility(board: Board, pos: { row: number; col: number }): number {
    // This is a simplified mobility calculation
    // In a real implementation, you'd use the actual getValidMoves function
    return Math.random() * 5; // Placeholder
  }

  private evaluateKingSafety(board: Board, color: PieceColor): number {
    // Simple king safety evaluation
    let safety = 0;
    
    // Find king position
    for (let row = 0; row < 8; row++) {
      for (let col = 0; col < 8; col++) {
        const piece = board[row][col];
        if (piece && piece.type === 'king' && piece.color === color) {
          // Bonus for king being on back rank
          if ((color === 'white' && row === 7) || (color === 'black' && row === 0)) {
            safety += 10;
          }
          
          // Count friendly pieces around king
          let friendlyPieces = 0;
          for (let dr = -1; dr <= 1; dr++) {
            for (let dc = -1; dc <= 1; dc++) {
              const newRow = row + dr;
              const newCol = col + dc;
              if (newRow >= 0 && newRow < 8 && newCol >= 0 && newCol < 8) {
                const nearbyPiece = board[newRow][newCol];
                if (nearbyPiece && nearbyPiece.color === color) {
                  friendlyPieces++;
                }
              }
            }
          }
          safety += friendlyPieces * 5;
          break;
        }
      }
    }
    
    return safety;
  }
}