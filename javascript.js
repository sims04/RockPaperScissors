var list = ["rock", "paper", "scissor"];

function getComputerChoice(list) {
    return list[Math.floor(Math.random() * list.length)];
}

function playingrounds(playerSelection, computerSelection) {
    let result;
    if (computerSelection === "paper" && playerSelection === "rock") {
        result = "You Lose! Paper beats Rock";
        computer++;
    } else if (computerSelection === "scissor" && playerSelection === "paper") {
        result = "You Lose! Scissor beats paper";
        computer++;
    } else if (computerSelection === "rock" && playerSelection === "scissor") {
        result = "You Lose! Rock beats Scissor";
        computer++;
    } else if (computerSelection === "rock" && playerSelection === "paper") {
        result = "You Won! Paper beats Rock";
        player++;
    } else if (computerSelection === "paper" && playerSelection === "scissor") {
        result = "You Won! Scissor beats Paper";
        player++;
    } else if (computerSelection === "scissor" && playerSelection === "rock") {
        result = "You Won! Rock beats Scissor";
        player++;
    } else if (computerSelection === playerSelection) {
        result = "It's a tie";
    }

    return "Player answer: " + playerSelection + " . Computer answer: " + computerSelection + " = " + result;
}

// Initialize game state variables
let round = 0;
const maxRounds = 5;
let player = 0;
let computer = 0;

// Get the results div
const resultsDiv = document.getElementById("results");

// Event listeners for buttons
document.getElementById("Paper").addEventListener("click", function() {
    playGame("paper");
});

document.getElementById("Rock").addEventListener("click", function() {
    playGame("rock");
});

document.getElementById("Scissor").addEventListener("click", function() {
    playGame("scissor");
});

function playGame(playerSelection) {
    let computerSelection = getComputerChoice(list);
    const result = playingrounds(playerSelection, computerSelection);
    displayResult(result);

    round++;
    if (round >= maxRounds) {
        const finalScore = "Game over. Final score - Player: " + player + ", Computer: " + computer;
        displayResult(finalScore);
        // Optionally, reset the game here
        round = 0;
        player = 0;
        computer = 0;
    }
}

function displayResult(message) {
    const p = document.createElement("p");
    p.className = "result";
    p.textContent = message;
    resultsDiv.appendChild(p);
}