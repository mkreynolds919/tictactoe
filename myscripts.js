
const ticTacToe = (function () {
    const gameBoard = (function () {
        var board = [0, 0, 0, 0, 0, 0, 0, 0, 0];
        const getBoard = () => board;
        return {getBoard};
    })();

    const compareResults = function (arr1, arr2) {
        for (var i = 0; i < arr1.length; i++) {
            if (arr1[i] != arr2[i]) return false;
        }
        return true;
    }

    const checkWin = function (gmBrd, tkn) {
        let win = false;
        if (compareResults([gmBrd[0], gmBrd[1], gmBrd[2]], [tkn, tkn, tkn])) win = true;
        if (compareResults([gmBrd[3], gmBrd[4], gmBrd[5]], [tkn, tkn, tkn])) win = true;
        if (compareResults([gmBrd[6], gmBrd[7], gmBrd[8]], [tkn, tkn, tkn])) win = true;
        if (compareResults([gmBrd[0], gmBrd[3], gmBrd[6]], [tkn, tkn, tkn])) win = true;
        if (compareResults([gmBrd[1], gmBrd[4], gmBrd[7]], [tkn, tkn, tkn])) win = true;
        if (compareResults([gmBrd[2], gmBrd[5], gmBrd[8]], [tkn, tkn, tkn])) win = true;
        if (compareResults([gmBrd[0], gmBrd[4], gmBrd[8]], [tkn, tkn, tkn])) win = true;
        if (compareResults([gmBrd[2], gmBrd[4], gmBrd[6]], [tkn, tkn, tkn])) win = true;
        return win;
    }

    const player = function (inputName, inputToken) {
        const name = inputName;
        const token = inputToken;
        const placeToken = function (index) {
            gameBoard.getBoard().splice(index-1, 1, token);
            if (checkWin(gameBoard.getBoard(), token)) {
                console.log(name + " has won the game!");
            }
        }
        return {name, token, placeToken};
    }

    const player1 = player("Player1", "X");
    const player2 = player("Player2", "O");

    return {gameBoard, player1, player2};
})();

ticTacToe.player1.placeToken(1);
console.log(ticTacToe.gameBoard.getBoard());


