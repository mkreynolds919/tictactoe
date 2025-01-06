
const ticTacToe = (function () {
    const gameBoard = [0, 0, 0, 0, 0, 0, 0, 0, 0];

    const checkWin = function (gmBrd, tkn) {
        let win = false;
        if (gmBrd[0] == tkn && gmBrd[1] == tkn && gmBrd[2] == tkn) {
            win = true;
        }
        return win;
    }

    const player = function (inputName, inputToken) {
        const name = inputName;
        const token = inputToken;
        const placeToken = function (index) {
            gameBoard.splice(index-1, 1, token);
            if (checkWin(gameBoard, token)) {
                console.log(name + " has won the game!");
            }
        }
        return {name, token, placeToken};
    }

    const player1 = player("Player1", "X");
    const player2 = player("Player2", "O");

    return {gameBoard, player1, player2};
})();




