"use strict";

class ChessPiece {
    constructor(piece, position) {
        this.piece = piece;
        this.position = position;
        this.rowAndColumn = { row: this.countRow(), column: this.countColumn() };
    }

    countRow() {
        let row = Math.floor(this.position / 8);
        if (this.position % 8 === 0) {
            row -= 1;
        }
        return row;
    }

    countColumn() {
        let column = this.position % 8 - 1;
        if (column === -1) {
            column = 7;
        }
        return column;
    }
}

class King extends ChessPiece {
    constructor(piece, position) {
        super(piece, position);
        this.range = [];
        this.range = this.countRange();
    }

    countRange() {
        let r = [];
        let differenceOnRowsAndColumns = [{ row: -1, column: -1 }, { row: -1, column: 0 }, { row: -1, column: 1 }, { row: 0, column: 1 }, { row: 1, column: 1 }, { row: 1, column: 0 }, { row: 1, column: -1 }, { row: 0, column: -1 },];
        for (const el of differenceOnRowsAndColumns) {
            let newRow = this.rowAndColumn.row + el.row;
            if (newRow < 0) {
                continue;
            } else if (newRow > 7) {
                continue;
            }
            let newColumn = this.rowAndColumn.column + el.column;
            if (newColumn < 0) {
                continue;
            } else if (newColumn > 7) {
                continue;
            }
            let positionRange = newColumn + 1 + newRow * 8;
            r.push(positionRange);
        }
        return r;
    }
}

class Queen extends ChessPiece {
    constructor(piece, position) {
        super(piece, position);
        this.range = this.countRange();
    }

    countRange() {
        let r = [];

        for (let i = 0; i < 64; i++) {
            if (i !== this.position) {
                r.push(i);
            }
        }
        return r;
    }
}

class Bishop extends ChessPiece {
    constructor(piece, position) {
        super(piece, position);
        this.range = this.countRange();
    }

    countRange() {
        let r = [];
        let differenceOnRowsAndColumns = [{ row: -1, column: -1 }, { row: -1, column: 1 }, { row: 1, column: -1 }, { row: 1, column: 1 }];

        for (const el of differenceOnRowsAndColumns) {
            let newRow = this.rowAndColumn.row;
            let newColumn = this.rowAndColumn.column;
            while (true) {
                newRow += el.row;
                if (newRow < 0) {
                    break;
                } else if (newRow > 7) {
                    break;
                }
                newColumn += el.column;
                if (newColumn < 0) {
                    break;
                } else if (newColumn > 7) {
                    break;
                }
                let positionRange = newColumn + 1 + newRow * 8;
                r.push(positionRange);
            }
        }
        return r;
    }
}

class Rook extends ChessPiece {
    constructor(piece, position) {
        super(piece, position);
        this.range = this.countRange();
    }

    countRange() {
        let r = [];
        for (let i = 1; i < 9; i++) {
            let positionRangeRow = this.rowAndColumn.row * 8 + i;
            let positionRangeColumn = this.rowAndColumn.column + 1 + (i - 1) * 8;
            if (positionRangeRow !== this.position) {
                r.push(positionRangeRow);
            }
            if (positionRangeColumn !== this.position) {
                r.push(positionRangeColumn);
            }
        }
        return r;
    }
}

class Knight extends ChessPiece {
    constructor(piece, position) {
        super(piece, position);
        this.range = this.countRange();
    }

    countRange() {
        let r = [];
        let differenceOnRowsAndColumns = [{ row: -2, column: -1 }, { row: -2, column: 1 }, { row: -1, column: 2 }, { row: 1, column: 2 }, { row: 2, column: -1 }, { row: 2, column: 1 }, { row: 1, column: -2 }, { row: -1, column: -2 },];
        for (const el of differenceOnRowsAndColumns) {
            let newRow = this.rowAndColumn.row + el.row;
            if (newRow < 0) {
                continue;
            } else if (newRow > 7) {
                continue;
            }
            let newColumn = this.rowAndColumn.column + el.column;
            if (newColumn < 0) {
                continue;
            } else if (newColumn > 7) {
                continue;
            }
            let positionRange = newColumn + 1 + newRow * 8;
            r.push(positionRange);
        }
        return r;
    }
}

module.exports = {
    ChessPiece,
    King,
    Queen,
    Bishop,
    Rook,
    Knight
};