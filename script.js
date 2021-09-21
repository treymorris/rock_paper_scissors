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
function playRound (computerSelection, playerSelection) {

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



//playRound();

//console.log(playRound(computerSelection, playerSelection));

//create function that collects win data to keep score and declare winner or loser of five games
let playerScore = 0;
let computerScore = 0;
let tie = 0;

function game() {

    playRound();
    
    console.log(playRound(computerSelection, playerSelection));

    let result = playRound(computerSelection, playerSelection);

    if (result === "It's a tie!") {
        tie++;
    }   else if (result === "Rock smashes Scissors, Computer Wins!") {
        computerScore++;
    }   else if (result === "Paper covers Rock, You win!") {
        playerScore++;
    }   else if (result === "Paper covers Rock, Computer Wins!") {
        computerScore++;
    }   else if (result === "Scissors cut Paper, You win!") {
        playerScore++;
    }   else if (result ==="Rock smashes Scissors, You win!") {
        playerScore++;
    }   else if(result === "Scissors cut Paper, Computer Wins!") {
        computerScore++;
    }
console.log(computerScore);
console.log(playerScore);
console.log(tie);

    }
    

    
    


game();