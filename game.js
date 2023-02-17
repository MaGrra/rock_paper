
/*
-getComputerChoice - returns random slection from - "Rock" "Paper" "Scissors"
-playerSelection - asks for input - "Rock" "Papper" "Scissors"
-playRound - compares two inputs and declares a winner + explanation (Rock beats Scissors)
-game - playes five rounds and keeps score to declare the overall winner at the end

ASK for PROMPT from PLAYER
CHOOSE random option from the selection of 3 for the computer

 COMPARE the choices
 IF 

 var playerSelection = prompt("Chose ur shit:",gameOptions).toLowerCase();
 playerSelection = (playerSelection[0].toUpperCase() + playerSelection.slice(1));


 if ((randomComputerChoice == 'Rock') && (playerSelection == 'Paper')) {
        console.log(humanWin + paperWins);
    } else if ((randomComputerChoice == 'Rock') && (playerSelection == 'Scissors')) {
            console.log(computerWin + rockWins)
*/


/*Define computer options + empty string for the PC choice*/
let gameOptions = ["Rock", "Paper", "Scissors"];
let randomComputerChoice = "";

/*-getComputerChoice - returns random slection from - "Rock" "Paper" "Scissors"*/
function getComputerChoice() {
    return randomComputerChoice = gameOptions[Math.floor(Math.random()*gameOptions.length)];
}
getComputerChoice();

console.log(randomComputerChoice);
/*Get player input, and correct it to right format*/
playerSelection = '';
while ((playerSelection !='Rock') && (playerSelection !='Paper') && (playerSelection !='Scissors')){
    playerSelection = prompt("Chose ur shit:",gameOptions).toLowerCase();
    playerSelection = (playerSelection[0].toUpperCase() + playerSelection.slice(1));
}
const humanWin = 'Human WINS! ';
const computerWin = 'Human You LOST! ';
const tieGame = "It's a tie!";
const rockWins = 'Rock wins Scissors!';
const paperWins = 'Paper wins Rock!';
const scissorsWin = 'Scissors win Paper!';

function playRound() {
    if (playerSelection == 'Rock') {
        if (randomComputerChoice == 'Paper') {
            console.log(computerWin + paperWins);
        } else if(randomComputerChoice == 'Scissors') {
            console.log(humanWin + rockWins);
        } else console.log(tieGame);
    } else if (playerSelection == 'Paper') {
        if (randomComputerChoice == 'Rock') {
            console.log(humanWin + paperWins);
        } else if (randomComputerChoice == 'Scissors') {
            console.log (computerWin + scissorsWin);
        } else console.log(tieGame);
    } else {
        if (randomComputerChoice == 'Rock') {
            console.log(computerWin + rockWins);
        } else if (randomComputerChoice == 'Paper') {
            console.log(humanWin + scissorsWin);
        } else console.log(tieGame);
    }
}



playRound();
console.log(playerSelection);
