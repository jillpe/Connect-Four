let board = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,];
let currentPlayer = 1;
let winner = null;
const winArray = [
    [0, 1, 2, 3, 4, 5, 6],
    [7, 8, 9, 10, 11, 12, 13],
    [14, 15, 16, 17, 18, 19, 20],
    [21, 22, 23, 24, 25, 26, 27],
    [28, 29, 30, 31, 32, 33, 34],
    [35, 36, 37, 38, 39, 40, 41,],

    [0, 7, 14, 21, 28, 35],
    [1, 8, 15, 22, 29, 36],
    [2, 9, 16, 23, 30, 37],
    [3, 10, 17, 24, 31, 38],
    [4, 11, 18, 25, 32, 39],
    [5, 12, 19, 26, 33, 40],
    [6, 13, 20, 27, 34, 41],

    [3, 9, 15, 21],
    [4, 10, 16, 22, 28],
    [5, 11, 17, 23, 29, 35],
    [6, 12, 18, 24, 30, 36],
    [13, 19, 25, 31, 37],
    [20, 26, 32, 38],
    [14, 22, 30, 38],
    [7, 15, 23, 31, 39],
    [0, 8, 16, 24, 32, 40],
    [1, 9, 17, 25, 33, 41],
    [2, 10, 18, 26, 34],
    [3, 11, 19, 27]
]

const newGameEl = document.querySelector('button');
const boardEl = document.querySelector('.board');
let playerTurnEl = document.querySelector('.player-turn');
let winnerStatement = document.querySelector('.winner-output');

boardEl.addEventListener('click', handleClick);
newGameEl.addEventListener('click', initialize);


function initialize() {
    board = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,];
    currentPlayer = 1;
    winner = null;
    render();
}

function handlePlayer() {
    if (currentPlayer === 1) {
        return 1;
    } else {
        return 2;
    }
}

function render() {
    board.forEach((boardEl, idx) => {
        document.querySelector(`#c${idx}`).style.background = handleColor(boardEl);
    })
    playerTurnEl.innerHTML = handlePlayer();
    checkWinner();
    if (winner === 'player1') {
        winnerStatement.innerHTML = 'Player One Wins!';
    } else if (winner === 'player2') {
        winnerStatement.innerHTML = 'Player Two Wins!'
    }
}

function handleColor(playerSelect) {
    if (playerSelect === 1) {
        return 'red';
    } else if (playerSelect === -1) {
        return 'yellow';
    } else {
        return 'white';
    }
}

function handleClick(evt) {
    evtNum = evt.target.id;
    evtNumber = parseInt(evtNum.substr(1, 2));
    board[evtNumber] = currentPlayer;
    currentPlayer *= -1;
    render();
}

function checkWinner() {
    for (let i = 0; i < winArray.length; i++) {
        for (let j = 0; j < winArray[i].length; j++) {
            if (board[winArray[i][j]] + board[winArray[i][j + 1]] + board[winArray[i][j + 2]] + board[winArray[i][j + 3]] === 4) {
                winner = 'player1';
            } else if (board[winArray[i][j]] + board[winArray[i][j + 1]] + board[winArray[i][j + 2]] + board[winArray[i][j + 3]] === -4) {
                winner = 'player2';
            }
        }
    }
}

initialize();