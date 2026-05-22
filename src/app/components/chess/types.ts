export type PieceType = 'king' | 'queen' | 'rook' | 'bishop' | 'knight' | 'pawn';
export type PieceColor = 'white' | 'black';

export interface ChessPiece {
  type: PieceType;
  color: PieceColor;
  hasMoved?: boolean;
}

export interface Position {
  row: number;
  col: number;
}

export interface Move {
  from: Position;
  to: Position;
  piece: ChessPiece;
  capturedPiece?: ChessPiece;
  isEnPassant?: boolean;
  isCastling?: boolean;
  promotionPiece?: PieceType;
}

export type Board = (ChessPiece | null)[][];

export interface GameState {
  board: Board;
  currentPlayer: PieceColor;
  isGameOver: boolean;
  winner?: PieceColor | 'draw';
  isCheck: boolean;
  moveHistory: Move[];
  selectedSquare: Position | null;
  validMoves: Position[];
  lastMove: Move | null;
}