
/*
-getComputerChoice - returns random slection from - "Rock" "Paper" "Scissors"
-playerSelection - asks for input - "Rock" "Papper" "Scissors"
-playRound - compares two inputs and declares a winner + explanation (Rock beats Scissors)
-game - playes five rounds and keeps score to declare the overall winner at the end
*/

/*Define computer options + empty string for the PC choice and some other global variables*/
const humanWin = 'Human WINS! ';
const computerWin = 'Human You LOST! ';
const tieGame = "It's a tie!";
const rockWins = 'Rock wins Scissors!';
const paperWins = 'Paper wins Rock!';
const scissorsWin = 'Scissors win Paper!';
let gameOptions = ["Rock", "Paper", "Scissors"];
text = '';



/*-getComputerChoice - returns random slection from - "Rock" "Paper" "Scissors"*/
function getComputerChoice() {
    return gameOptions[Math.floor(Math.random()*gameOptions.length)];
}


/*Get player input, and correct it to right format + wipe it for the loop
function playerInput() {
    text = '';
while ((text !='Rock') && (text !='Paper') && (text !='Scissors')){
    text = prompt("Chose ur shit:",gameOptions).toLowerCase();
    if (text == null) {
        alert('Refresh the page bro!' + text);
        
    }
    text = (text[0].toUpperCase() + text.slice(1));
    if ((text == 'Rock') || (text == 'Paper') || (text == 'Scissors')) {
        return text;
        
    }
}
}*/

/*Plays one round and returns rounds result*/
function playRound(text) {

    let playerSelection = text;
    let randomComputerChoice = getComputerChoice();

    if (playerSelection == 'Rock') {
        if (randomComputerChoice == 'Paper') {
            return computerWin + paperWins;
        } else if(randomComputerChoice == 'Scissors') {
            return humanWin + rockWins;
        } else return tieGame;
    } else if (playerSelection == 'Paper') {
        if (randomComputerChoice == 'Rock') {
            return humanWin + paperWins;
        } else if (randomComputerChoice == 'Scissors') {
            return computerWin + scissorsWin;
        } else return tieGame;
    } else {
        if (randomComputerChoice == 'Rock') {
            return computerWin + rockWins;
        } else if (randomComputerChoice == 'Paper') {
            return humanWin + scissorsWin;
        } else return tieGame;
        
    }
}

/*A game of x rounds, keeps score and returns the winner*/
function game() {

    let playerWins = 0;
    let botWin = 0;

    for (let round = 0; round < 5; round++) {
    let roundResult = playRound();
    console.log(roundResult);

    if (roundResult.includes(humanWin)) {
        playerWins++;
    } else if (roundResult.includes(computerWin)) {
        botWin++;
    }
    }
    console.log(playerWins);
    console.log(botWin);      
    if (playerWins > botWin) {
        console.warn('Human WINS the game! Good job human!');
    } else if (playerWins < botWin) {
        console.warn('Computer proves its supremacy! You LOST!');
    } else console.warn('The game is TIE! What are the odds huh.?');
}   

/*Register buttons and make them do the round*/
const btnRock = document.querySelector(".rock");
btnRock.addEventListener('click', () => {
    playRound('Rock');
});
const btnPaper = document.querySelector('.paper');
btnPaper.addEventListener('click', () => {
    game('Paper');
});
const btnScissors = document.querySelector('.scissors');
btnScissors.addEventListener('click', () => {
    game('Scissors');
});

/*
const playerScore = document.querySelector('.playerScore');
console.log(humanWin);
const botScore = document.querySelector('botScore');

let playerWins = 0;
let botWin = 0;
if (roundResult.includes(humanWin)) {
    playerWins++;
} else if (roundResult.includes(computerWin)) {
    botWin++;
}
playerScore.innerHTML = playerWins;
*/