/**
 * Initialize your data structure here.
 * @param {number} n
 */
var TicTacToe = function (n) {
    this.rows = new Array(n).fill(0);
    this.cols = new Array(n).fill(0);
    this.diagonals = new Array(2).fill(0);
    this.size = n;
};

/**
 * Player {player} makes a move at ({row}, {col}).
        @param row The row of the board.
        @param col The column of the board.
        @param player The player, can be either 1 or 2.
        @return The current winning condition, can be either:
                0: No one wins.
                1: Player 1 wins.
                2: Player 2 wins. 
 * @param {number} row 
 * @param {number} col 
 * @param {number} player
 * @return {number}
 */
TicTacToe.prototype.move = function (row, col, player) {

    let playerType = player == 1 ? 1 : -1;
    this.rows[row] += playerType;
    this.cols[col] += playerType;
    if (row == col) this.diagonals[0] += playerType;
    if (row == this.size - col - 1) this.diagonals[1] += playerType;
    if (Math.abs(this.rows[row]) == this.size || Math.abs(this.cols[col]) == this.size || Math.abs(this.diagonals[0]) == this.size || Math.abs(this.diagonals[1]) == this.size) {
        return player;
    }

    return 0;


};

/**
 * Your TicTacToe object will be instantiated and called as such:
 * var obj = new TicTacToe(n)
 * var param_1 = obj.move(row,col,player)
 */