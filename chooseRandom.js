"use strict";

class ChooseRandom {
    constructor(board) {
        this.avaialblePositions = [...board];
    }

    randomPositionOrPiece() {
        let randPos = Math.floor(Math.random(this.avaialblePositions) * this.avaialblePositions.length - 1);
        if (randPos === -1) {
            randPos = 0;
        }
        //aby wykozystac jedna funkcje random dla losowania figury i pozycji
        let valRandPos = {
            position: randPos,
            positionValue: this.avaialblePositions[randPos]
        };
        this.updatePositionAvailable(this.avaialblePositions, randPos);
        return valRandPos;
    }

    updatePositionAvailable(availablePosition, randomPosition) {
        availablePosition.splice(randomPosition, 1);
        return availablePosition;
    }
}

module.exports = ChooseRandom;