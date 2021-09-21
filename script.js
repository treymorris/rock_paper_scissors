//create game that plays against computer
//create function to select choice for computer
let computerSelection = Math.floor(Math.random() * 4) + 1;

if (computerSelection == 1) {
    computerSelection = "rock";
} else if (computerSelection == 2) {
    computerSelection = "paper";
} else  {
    computerSelection = "scissors";
}
console.log(computerSelection);

//collect input from user for their choice
let playerSelection = prompt("Rock, Paper, or Scissors?");

playerSelection = playerSelection.toLowerCase()

//create function that declares winner of the round
function game (computerSelection, playerSelection) {

    if (computerSelection === playerSelection) 
        return "It's a tie!";

    else if (computerSelection == "rock" && playerSelection == "scissors")
        
            return "Rock smashes Scissors, Computer Wins!";

    else if (computerSelection == "rock" && playerSelection == "paper")
        
            return "Paper covers Rock, You win!";

    else if (computerSelection == "paper" && playerSelection == "rock")
        
            return "Paper covers Rock, Computer Wins!";

    else if (computerSelection == "paper" && playerSelection == "scissors")
        
            return "Scissors cut Paper, You win!";

    else if (computerSelection == "scissors" && playerSelection == "rock")
        
            return "Rock smashes Scissors, You win!";

    else if (computerSelection == "scissors" && playerSelection == "paper")
        
            return "Scissors cut Paper, Computer Wins!";
}

game();

console.log(game(computerSelection, playerSelection));

//create function that collects win data to keep score and declare winner or loser of five games