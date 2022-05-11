"use strict";

const chessPiece = require('./chessPiece');

class PieceFactory {
    createPiece(piece, position) {
        if (piece === 'king') {
            return new chessPiece.King(piece, position);
        } else if (piece === 'queen') {
            return new chessPiece.Queen(piece, position);
        } else if (piece === 'rook') {
            return new chessPiece.Rook(piece, position);
        } else if (piece === 'bishop') {
            return new chessPiece.Bishop(piece, position);
        } else if (piece === 'knight') {
            return new chessPiece.Knight(piece, position);
        }
    }
}

module.exports = PieceFactory;