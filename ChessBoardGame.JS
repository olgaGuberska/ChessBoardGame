"use strict";

const chessBoard = require('./chessBoard');

const Game = require('./game');


const game = new Game(chessBoard);
const play = game.play();
console.log(play);

