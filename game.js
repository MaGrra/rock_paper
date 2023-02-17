console.log('Hello everyone');

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
*/


/*Define computer options + empty string for the PC choice*/
let gameOptions = ["Rock", "Paper", "Scissors"];
let randomComputerChoice = "";

/*-getComputerChoice - returns random slection from - "Rock" "Paper" "Scissors"*/
function getComputerChoice() {
    return randomComputerChoice = gameOptions[Math.floor(Math.random()*gameOptions.length)];
}

/*Get player input, and correct it to right format*/
playerSelection = '';
while ((playerSelection !='Rock') && (playerSelection !='Paper') && (playerSelection !='Scissors')){
    playerSelection = prompt("Chose ur shit:",gameOptions).toLowerCase();
    playerSelection = (playerSelection[0].toUpperCase() + playerSelection.slice(1));
}
console.log(playerSelection);
