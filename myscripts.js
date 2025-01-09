
//Initiates the ticTacToe class//
const ticTacToe = (function () {

    //Initiates gameBoard, uses IIFE//
    const gameBoard = (function () {
        var board = [0, 0, 0, 0, 0, 0, 0, 0, 0];
        const getBoard = () => board;

            //takes the current token of whomever's turn it is, places it at index//
        const placeToken = function (index) {
            //mutates the gameboard array by adding the currPlayer's token at index//
            board.splice(index-1, 1, currPlayer.token);

            //Outputs current state of the gameboard after the placement//
            console.log(board);

            //checks win conditions with method, gives output message if they won//
            if (checkWin(board, currPlayer.token)) {
                console.log(currPlayer.name + " has won the game!");
            } else if (checkTie(board)) {
                console.log("It's a tie!");
            } else {
        
                //Assigns currPlayer to the opposite of whomever just went//
                if (currPlayer.name == player1.name) {
                    currPlayer = player2;
                } else {
                    currPlayer = player1;
                }

                //Outputs message letting user know who's turn it is//
                console.log(currPlayer.name + ", it's your turn now!");
            }
        }

        //Is called after every placement, compares current gameboard status with potential winning three-in-a-rows//
        const checkWin = function (gmBrd, tkn) {

                //Used for checkWin, simply compares to same-size arrays to see if they are identical//
            const compareResults = function (arr1, arr2) {
                for (var i = 0; i < arr1.length; i++) {
                    if (arr1[i] != arr2[i]) return false;
                }
                return true;
            }

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

        //Checks game for potential tie after checkWin runs//
        const checkTie = function (gmBrd) {
            for (var i = 0; i < gmBrd.length; i++) {
                if (gmBrd[i] == 0) return false;
            }
            return true;
        }

        return {getBoard, placeToken};
    })();

    //Initiates displayController, uses IIFE//
    const displayController = (function () {

        //Identifies buttons in each gameboard div//
        const gameBoardSpaceButtons = document.querySelectorAll("button.gameBoardSpace");

        //Adds functionality to each button that runs the placeToken function, then eliminates button//
        gameBoardSpaceButtons.forEach(element => {
            element.addEventListener("click", () => {
                if (element.textContent != currPlayer.token) {
                    element.textContent = currPlayer.token;
                    gameBoard.placeToken(element.id);
                    element.disabled = true;
                }
            });

        });

        //Create inputs for custom names, hidden for now//
        const player1NameInput = document.createElement("input");
        player1NameInput.type = "text";
        player1NameInput.value = "Player 1";
        const player2NameInput = document.createElement("input");
        player2NameInput.type = "text";
        player2NameInput.value = "Player 2";

        //Identify current placeholder names//
        const player1Name = document.querySelector(".player1-name");
        const player2Name = document.querySelector(".player2-name");

        //Identifies edit-names button//
        const editNames = document.querySelector(".edit-names");

        //Replaces name divs with inputs for name editing//
        editNames.addEventListener("click", () => {
            player1Name.replaceWith(player1NameInput);
            player2Name.replaceWith(player2NameInput);
        });

        //Identifies start-game button//
        const startGame = document.querySelector(".start-game");

        //Starts the game by assigning playerNames to inputs//
        startGame.addEventListener("click", () => {
            player1.name = player1NameInput.value;
            player2.name = player2NameInput.value;

            player1Name.textContent = player1NameInput.value + ":";
            player2Name.textContent = player2NameInput.value + ":";

            player1NameInput.replaceWith(player1Name);
            player2NameInput.replaceWith(player2Name);
            
        });
    })();



    //Factory function for player, simply stores name and chosen token//
    const player = function (inputToken, inputName) {
        const token = inputToken;
        var name = inputName;
        
        return {name, token};
    }

    var player1 = player("X", "Player1");
    var player2 = player("O", "Player2");

    var currPlayer = player1;

    //returns these methods for mutabilitiy and access//
    return {gameBoard};
})();


