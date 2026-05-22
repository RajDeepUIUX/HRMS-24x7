import { Board, ChessPiece, PieceColor, PieceType, Position, Move } from './types';

export function createInitialBoard(): Board {
  const board: Board = Array(8).fill(null).map(() => Array(8).fill(null));
  
  // Place pawns
  for (let col = 0; col < 8; col++) {
    board[1][col] = { type: 'pawn', color: 'black' };
    board[6][col] = { type: 'pawn', color: 'white' };
  }
  
  // Place other pieces
  const pieceOrder: PieceType[] = ['rook', 'knight', 'bishop', 'queen', 'king', 'bishop', 'knight', 'rook'];
  
  for (let col = 0; col < 8; col++) {
    board[0][col] = { type: pieceOrder[col], color: 'black' };
    board[7][col] = { type: pieceOrder[col], color: 'white' };
  }
  
  return board;
}

export function isValidPosition(pos: Position): boolean {
  return pos.row >= 0 && pos.row < 8 && pos.col >= 0 && pos.col < 8;
}

export function getPieceSymbol(piece: ChessPiece): string {
  const symbols = {
    white: {
      king: '♔',
      queen: '♕',
      rook: '♖',
      bishop: '♗',
      knight: '♘',
      pawn: '♙'
    },
    black: {
      king: '♚',
      queen: '♛',
      rook: '♜',
      bishop: '♝',
      knight: '♞',
      pawn: '♟'
    }
  };
  
  return symbols[piece.color][piece.type];
}

export function getValidMoves(board: Board, from: Position): Position[] {
  const piece = board[from.row][from.col];
  if (!piece) return [];
  
  const moves: Position[] = [];
  
  switch (piece.type) {
    case 'pawn':
      moves.push(...getPawnMoves(board, from, piece));
      break;
    case 'rook':
      moves.push(...getRookMoves(board, from, piece));
      break;
    case 'knight':
      moves.push(...getKnightMoves(board, from, piece));
      break;
    case 'bishop':
      moves.push(...getBishopMoves(board, from, piece));
      break;
    case 'queen':
      moves.push(...getQueenMoves(board, from, piece));
      break;
    case 'king':
      moves.push(...getKingMoves(board, from, piece));
      break;
  }
  
  // Filter out moves that would put own king in check
  return moves.filter(to => !wouldBeInCheck(board, { from, to, piece }));
}

function getPawnMoves(board: Board, from: Position, piece: ChessPiece): Position[] {
  const moves: Position[] = [];
  const direction = piece.color === 'white' ? -1 : 1;
  const startRow = piece.color === 'white' ? 6 : 1;
  
  // Move forward one square
  const oneForward = { row: from.row + direction, col: from.col };
  if (isValidPosition(oneForward) && !board[oneForward.row][oneForward.col]) {
    moves.push(oneForward);
    
    // Move forward two squares from starting position
    if (from.row === startRow) {
      const twoForward = { row: from.row + 2 * direction, col: from.col };
      if (isValidPosition(twoForward) && !board[twoForward.row][twoForward.col]) {
        moves.push(twoForward);
      }
    }
  }
  
  // Capture diagonally
  const captureLeft = { row: from.row + direction, col: from.col - 1 };
  const captureRight = { row: from.row + direction, col: from.col + 1 };
  
  [captureLeft, captureRight].forEach(pos => {
    if (isValidPosition(pos)) {
      const targetPiece = board[pos.row][pos.col];
      if (targetPiece && targetPiece.color !== piece.color) {
        moves.push(pos);
      }
    }
  });
  
  return moves;
}

function getRookMoves(board: Board, from: Position, piece: ChessPiece): Position[] {
  const moves: Position[] = [];
  const directions = [[0, 1], [0, -1], [1, 0], [-1, 0]];
  
  for (const [dr, dc] of directions) {
    for (let i = 1; i < 8; i++) {
      const pos = { row: from.row + dr * i, col: from.col + dc * i };
      if (!isValidPosition(pos)) break;
      
      const targetPiece = board[pos.row][pos.col];
      if (!targetPiece) {
        moves.push(pos);
      } else {
        if (targetPiece.color !== piece.color) {
          moves.push(pos);
        }
        break;
      }
    }
  }
  
  return moves;
}

function getKnightMoves(board: Board, from: Position, piece: ChessPiece): Position[] {
  const moves: Position[] = [];
  const knightMoves = [
    [-2, -1], [-2, 1], [-1, -2], [-1, 2],
    [1, -2], [1, 2], [2, -1], [2, 1]
  ];
  
  knightMoves.forEach(([dr, dc]) => {
    const pos = { row: from.row + dr, col: from.col + dc };
    if (isValidPosition(pos)) {
      const targetPiece = board[pos.row][pos.col];
      if (!targetPiece || targetPiece.color !== piece.color) {
        moves.push(pos);
      }
    }
  });
  
  return moves;
}

function getBishopMoves(board: Board, from: Position, piece: ChessPiece): Position[] {
  const moves: Position[] = [];
  const directions = [[1, 1], [1, -1], [-1, 1], [-1, -1]];
  
  for (const [dr, dc] of directions) {
    for (let i = 1; i < 8; i++) {
      const pos = { row: from.row + dr * i, col: from.col + dc * i };
      if (!isValidPosition(pos)) break;
      
      const targetPiece = board[pos.row][pos.col];
      if (!targetPiece) {
        moves.push(pos);
      } else {
        if (targetPiece.color !== piece.color) {
          moves.push(pos);
        }
        break;
      }
    }
  }
  
  return moves;
}

function getQueenMoves(board: Board, from: Position, piece: ChessPiece): Position[] {
  return [...getRookMoves(board, from, piece), ...getBishopMoves(board, from, piece)];
}

function getKingMoves(board: Board, from: Position, piece: ChessPiece): Position[] {
  const moves: Position[] = [];
  const directions = [
    [-1, -1], [-1, 0], [-1, 1],
    [0, -1],           [0, 1],
    [1, -1],  [1, 0],  [1, 1]
  ];
  
  directions.forEach(([dr, dc]) => {
    const pos = { row: from.row + dr, col: from.col + dc };
    if (isValidPosition(pos)) {
      const targetPiece = board[pos.row][pos.col];
      if (!targetPiece || targetPiece.color !== piece.color) {
        moves.push(pos);
      }
    }
  });
  
  return moves;
}

export function makeMove(board: Board, move: Move): Board {
  const newBoard = board.map(row => [...row]);
  
  // Remove piece from source
  newBoard[move.from.row][move.from.col] = null;
  
  // Place piece at destination
  const movedPiece = { ...move.piece };
  movedPiece.hasMoved = true;
  newBoard[move.to.row][move.to.col] = movedPiece;
  
  return newBoard;
}

function wouldBeInCheck(board: Board, move: Move): boolean {
  const newBoard = makeMove(board, move);
  return isInCheck(newBoard, move.piece.color);
}

export function isInCheck(board: Board, color: PieceColor): boolean {
  const kingPos = findKing(board, color);
  if (!kingPos) return false;
  
  const opponentColor = color === 'white' ? 'black' : 'white';
  
  // Check if any opponent piece can attack the king
  for (let row = 0; row < 8; row++) {
    for (let col = 0; col < 8; col++) {
      const piece = board[row][col];
      if (piece && piece.color === opponentColor) {
        const moves = getValidMovesWithoutCheckTest(board, { row, col });
        if (moves.some(pos => pos.row === kingPos.row && pos.col === kingPos.col)) {
          return true;
        }
      }
    }
  }
  
  return false;
}

function getValidMovesWithoutCheckTest(board: Board, from: Position): Position[] {
  const piece = board[from.row][from.col];
  if (!piece) return [];
  
  switch (piece.type) {
    case 'pawn':
      return getPawnMoves(board, from, piece);
    case 'rook':
      return getRookMoves(board, from, piece);
    case 'knight':
      return getKnightMoves(board, from, piece);
    case 'bishop':
      return getBishopMoves(board, from, piece);
    case 'queen':
      return getQueenMoves(board, from, piece);
    case 'king':
      return getKingMoves(board, from, piece);
    default:
      return [];
  }
}

function findKing(board: Board, color: PieceColor): Position | null {
  for (let row = 0; row < 8; row++) {
    for (let col = 0; col < 8; col++) {
      const piece = board[row][col];
      if (piece && piece.type === 'king' && piece.color === color) {
        return { row, col };
      }
    }
  }
  return null;
}

export function isCheckmate(board: Board, color: PieceColor): boolean {
  if (!isInCheck(board, color)) return false;
  
  // Check if any piece of this color has valid moves
  for (let row = 0; row < 8; row++) {
    for (let col = 0; col < 8; col++) {
      const piece = board[row][col];
      if (piece && piece.color === color) {
        const validMoves = getValidMoves(board, { row, col });
        if (validMoves.length > 0) {
          return false;
        }
      }
    }
  }
  
  return true;
}

export function getAllValidMoves(board: Board, color: PieceColor): Move[] {
  const moves: Move[] = [];
  
  for (let row = 0; row < 8; row++) {
    for (let col = 0; col < 8; col++) {
      const piece = board[row][col];
      if (piece && piece.color === color) {
        const from = { row, col };
        const validMoves = getValidMoves(board, from);
        
        validMoves.forEach(to => {
          moves.push({
            from,
            to,
            piece,
            capturedPiece: board[to.row][to.col] || undefined
          });
        });
      }
    }
  }
  
  return moves;
}