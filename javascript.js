
//pseudo code
// Create a function to get the computer's choice

function getComputerChoice() { // function to get the computer's choice
    let choices = ["rock", "paper", "scissors"];
    let choice = choices[Math.floor(Math.random()*3)];
    return choice;
}

// console.log(getComputerChoice()); 

// Create a function to get the human's choice

function getHumanChoice() { // function to get the human's choice
    let choice = prompt("Enter your choice (rock, paper, scissors): ");
    return choice;
}

// console.log(getHumanChoice()); 

// global variables to keep track of the score

let hunmanScore =0;
let computerScore =0;

// Create a function to compare the choices and determine the winner

function playRound(humanChoice, computerChoice) { //function to play a round
    humanChoice = humanChoice.toLowerCase();
    if (humanChoice === "rock" && computerChoice === "scissors") {
        console.log("You win! Rock beats scissors.");
        hunmanScore++;
    } else if (humanChoice === "paper" && computerChoice === "rock") {
        console.log("You win! Paper beats rock.");
        hunmanScore++;
    } else if (humanChoice === "scissors" && computerChoice === "paper") {
        console.log("You win! Scissors beats paper.");
        hunmanScore++;
    } else if (humanChoice === "rock" && computerChoice === "paper") {
        console.log("You lose! Paper beats rock.");
        computerScore++;
    } else if (humanChoice === "paper" && computerChoice === "scissors") {
        console.log("You lose! Scissors beats paper.");
        computerScore++;
    } else if (humanChoice === "scissors" && computerChoice === "rock") {
        console.log("You lose! Rock beats scissors.");
        computerScore++;
    } else if (humanChoice === computerChoice) {
        console.log("It's a tie!");
    } else {
        console.log("Invalid choice. Please try again.");
    }
    
    
}

// create a function to check if player has won the round



// Create a function to play the game

function playGame() { // function to play the game
    for (let i = 0; i < 5; i++) {
        const humanSelection = getHumanChoice();
        const computerSelection = getComputerChoice();
        playRound(humanSelection, computerSelection);
        console.log("Round " + (i+1) + ": Your score: " + hunmanScore + " Computer score: " + computerScore);
    }
    if (hunmanScore > computerScore) {
        console.log("You win the game!");
    } else if (hunmanScore < computerScore) {
        console.log("You lose the game!");
    } else {
        console.log("It's a tie!");
    }
}

playGame();