"use strict";

const lengthBoard = ["a", "b", "c", "d", "e", "f", "g", "h"];
const width = [1, 2, 3, 4, 5, 6, 7, 8];
const pieces = ['king', 'queen', 'rook', 'rook', 'bishop', 'bishop', 'knight', 'knight'];

const chessBoard = (function (width, lengthBoard) {
    let board = [];

    for (const elemet of lengthBoard) {

        for (const widthEl of width) {
            let boardNumber = String(elemet + widthEl);
            board.push(boardNumber);
        }
    }
    return board;
}(width, lengthBoard));

// console.log(chessBoard);

module.exports = {
    chessBoard: chessBoard,
    pieces: pieces
};