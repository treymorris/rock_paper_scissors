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
    
//collect input from user for their choice
let playerSelection = prompt("Rock, Paper, or Scissors?");

//create function that declares winner of the round
function game (computerSelection, playerSelection) {
    if (computerSelection == playerSelection) {
        return "It's a tie!";
    }

    if (playerSelection == "Rock") {
        if (computerSelection == "Scissors") {
            return "Computer Wins!";
        } else {
            return "Player Wins!";
        }
    }

    if (playerSelection == "Paper") {
        if (computerSelection == "Scissors") {
            return "Computer Wins!";
        } else {
            return "Player Wins!";
        }
    }

    if (playerSelection == "Scissors") {
        if (computerSelection == "Rock") {
        return "Computer Wins!";
        } else {
            return "Player Wins!";
        }
    }
}

game();

console.log(game(playerSelection,computerSelection))

//create function that collects win data to keep score and declare winner or loser of five games