"use strict";

const ChooseRandom = require('./chooseRandom');
const PieceFactory = require('./pieceFactory');

class Game {
    constructor(chessBoard) {
        this.board = chessBoard;
        this.position;
        this.piece;
        this.newChessPiece;
        this.choosenPieces = [];
        this.posNewPiece;
        this.isReach;
    }


    positionOnBoard() {
        if (!this.position) {
            this.position = new ChooseRandom(this.board.chessBoard);
        }

        const randomPosition = this.position.randomPositionOrPiece().position;
        const randomPosValue = this.position.randomPositionOrPiece().positionValue;
        console.log('on ' + randomPosValue);
        return randomPosition;
    }
    pieceOfChess() {
        if (!this.piece) {
            this.piece = new ChooseRandom(this.board.pieces);
        }
        const randomPiece = this.piece.randomPositionOrPiece().positionValue;
        console.log(randomPiece);
        return randomPiece;
    }
    factory() {
        let factory;

        if (!factory) {
            factory = new PieceFactory();
        }
        do {
            let piece = this.pieceOfChess();
            let position = this.positionOnBoard();
            this.newChessPiece = factory.createPiece(piece, position);
            this.isReach = this.isReaching();
            this.choosenPieces.push(this.newChessPiece);
        } while (!this.isReach);
        const odp = 'End game: ' + this.isReach.win;
        return odp;
    }

    isReaching() {
        let win;

        if (!this.posNewPiece) {
            this.posNewPiece = this.newChessPiece.position;
            return;
        }
        this.posNewPiece = this.newChessPiece.position;
        this.choosenPieces.forEach(el => {
            let range = el.range;
            let isRangeWin = range.find(el2 => {
                if (el2 === this.posNewPiece) {

                    el.rowAndColumn = { row: this.newChessPiece.rowAndColumn.row, column: this.newChessPiece.rowAndColumn.column };
                    el.win = `${el.piece} on ${this.newChessPiece.piece} `;
                    win = el;
                    return win;
                }
                return;
            });
            if (isRangeWin) {
                return win;
            }
        });
        return win;
    }
    play() {
        let a = this.factory();
        return a;
    }
}

module.exports = Game;