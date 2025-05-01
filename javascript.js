
// Create a function to get the computer's choice
function getComputerChoice() { 
    let choices = ["rock", "paper", "scissors"];
    let choice = choices[Math.floor(Math.random()*3)];
    return choice;
}

// Create a function to make the game 5 rounds
let roundsPlayed = 0;
let humanScore = 0;
let computerScore = 0;
let matchEnded = false;
const title = document.querySelector('.title');

// Game result check and score reset after 5 rounds
function game() {
    if (roundsPlayed === 5) {
        if (humanScore > computerScore) {
            title.textContent = "YOU WIN THE GAME!";
        } else if (humanScore < computerScore) {
            title.textContent = "YOU LOSE THE GAME!";
        } else {
            title.textContent = "IT'S A TIE. TRY AGAIN?";
        }

        // Reset values but delay visible reset until next round
        roundsPlayed = 0;
        humanScore = 0;
        computerScore = 0;
        matchEnded = true; // Trigger visual reset next round
    } else {
        title.textContent = "ROCK PAPER SCISSORS GAME";
    }
}

// Reference for the display
let display = document.querySelector('.display');

// Event listeners for the buttons
const btnRock = document.querySelector('.rock');
const btnPaper = document.querySelector('.paper');
const btnScissors = document.querySelector('.scissors');

btnRock.addEventListener('click', function() {
    computerChoice = getComputerChoice();
    playRound('rock', computerChoice);
});

btnPaper.addEventListener('click', function() {
    computerChoice = getComputerChoice();
    playRound('paper', computerChoice);
});

btnScissors.addEventListener('click', function() {
    computerChoice = getComputerChoice();
    playRound('scissors', computerChoice);
});

// Create a function to compare the choices and determine the winner
function playRound(humanChoice, computerChoice) {
    // If the match has ended, reset display text before continuing
    if (matchEnded) {
        display.textContent = ""; // Clear the old message
        matchEnded = false; // Reset the flag
    }

    humanChoice = humanChoice.toLowerCase();
    let resultMessage = "";

    if (humanChoice === "rock" && computerChoice === "scissors") {
        humanScore++;
        resultMessage = "You win! Rock beats scissors.";
    } else if (humanChoice === "paper" && computerChoice === "rock") {
        humanScore++;
        resultMessage = "You win! Paper beats rock.";
    } else if (humanChoice === "scissors" && computerChoice === "paper") {
        humanScore++;
        resultMessage = "You win! Scissors beats paper.";
    } else if (humanChoice === "rock" && computerChoice === "paper") {
        computerScore++;
        resultMessage = "You lose! Paper beats rock.";
    } else if (humanChoice === "paper" && computerChoice === "scissors") {
        computerScore++;
        resultMessage = "You lose! Scissors beats paper.";
    } else if (humanChoice === "scissors" && computerChoice === "rock") {
        computerScore++;
        resultMessage = "You lose! Rock beats scissors.";
    } else if (humanChoice === computerChoice) {
        resultMessage = "It's a tie!";
    } else {
        resultMessage = "Invalid choice. Please try again.";
    }

    display.textContent = `${resultMessage} Your Score: ${humanScore} Computer Score: ${computerScore}`;

    roundsPlayed++;
    game(); // Check for game outcome after round 5
}
