
const ticTacToe = (function () {
    const gameBoard = [0, 0, 0, 0, 0, 0, 0, 0, 0];

    const player = function (inputName, inputToken) {
        const name = inputName;
        const token = inputToken;
        const placeToken = function (index) {
            gameBoard.splice(index-1, 1, token);
        }
        return {name, token, placeToken};
    }
    return {gameBoard, player};
})();

const player1 = ticTacToe.player("Player1", "X");
const player2 = ticTacToe.player("Player2", "O");

player1.placeToken(1);
player2.placeToken(4);

console.log(ticTacToe.gameBoard);

