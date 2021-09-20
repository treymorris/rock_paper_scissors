//create game that plays against computer
//create function to select choice for computer

function computerPlay() {
    
    let choice = Math.floor(Math.random() * 4) + 1;

    if (choice == 1) {
        console.log("Rock");
    } else if (choice == 2) {
        console.log("Paper");
    } else {
        console.log("Scissors");
    }
}

computerPlay();

//collect input from user for their choice
//create function that declares winner of the round
//create function that collects win data to keep score and declare winner or loser of five games