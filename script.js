//create game that plays against computer
//create function to select choice for computer
let computerSelection = Math.floor(Math.random() * 4) + 1;

if (computerSelection == 1) {
    computerSelection = "Rock";
} else if (computerSelection == 2) {
    computerSelection = "Paper";
} else  {
    computerSelection = "Scissors";
}
console.log(computerSelection);

//collect input from user for their choice
let playerSelection = prompt("Rock, Paper, or Scissors?");

//create function that declares winner of the round
function game (computerSelection, playerSelection) {

    if (computerSelection === playerSelection) 
        return "It's a tie!";

    else if (computerSelection == "Rock" && playerSelection == "Scissors")
        
            return "Rock smashes Scissors, Computer Wins!";

    else if (computerSelection == "Rock" && playerSelection == "Paper")
        
            return "Paper covers Rock, You win!";

    else if (computerSelection == "Paper" && playerSelection == "Rock")
        
            return "Paper covers Rock, Computer Wins!";

    else if (computerSelection == "Paper" && playerSelection == "Scissors")
        
            return "Scissors cut Paper, You win!";

    else if (computerSelection == "Scissors" && playerSelection == "Rock")
        
            return "Rock smashes Scissors, You win!";

    else if (computerSelection == "Scissors" && playerSelection == "Paper")
        
            return "Scissors cut Paper, Computer Wins!";
}

game();

console.log(game(computerSelection, playerSelection));

//create function that collects win data to keep score and declare winner or loser of five games