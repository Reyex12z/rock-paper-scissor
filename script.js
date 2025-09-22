let rock = "rock";
let paper = "paper";
let scissor = "scissor";

function getComputerChoice() {
    let random = Math.floor(Math.random() * 3);

    if (random === 0) {
        return "rock";
    }

    else if (random === 1) {
        return "paper";
    }

    else {
        return "scissor";
    }

 }

function getHumanChoice() {

    let userInput = prompt("Enter your choice: ").toLowerCase()

    while (userInput != "rock" && userInput != "paper" && userInput != "scissor") {
        console.log("only rock, paper or scissor ")
        userInput = prompt("Please enter again: ").toLowerCase()
    }

    return userInput;
}

let humanScore = 0;
let computerScore = 0;

function playRound() {

    let computer = getComputerChoice();
    let person = getHumanChoice();

    if (computer === "rock" && person === "scissor") {
        console.log("You lost! ", "Rock beats Pepper");
        computerScore += 1;
    }

    else if (computer === "paper" && person === "rock") {
        console.log("You lost! ", "Paper beats Rock");
        computerScore += 1;
    }

    else if (computer === "scissor" && person === "paper") {
        console.log("You lost! ", "Scissor beats Paper");
        computerScore += 1;
    }

    else if (person  === "rock" && computer === "scissor") {
        console.log("Person Wins! ", "Rock beats scissor");
        humanScore += 1;
    }

    else if (person  === "paper" && computer === "rock") {
        console.log("Person wins! ", "Paper beats Rock");
        humanScore += 1;
    }

    else if (person  === "scissor" && computer === "paper") {
        console.log("Person wins! ", "Scissor beats Paper");
        humanScore += 1;
    }

    else {
        console.log("Draw! ")
    }

}


const div = document.querySelector('#dv')
let p1 = document.createElement('p')
let p2 = document.createElement('p')

function playGame() {
    for (let i = 0; i < 5; i++) {

        playRound()

    }
        if (humanScore > computerScore) {
            p1.textContent = "YOU WON! "
            p2.textContent = `Total number of wins:  ${humanScore}.  Total losses:  ${computerScore}`;
        }
        else if (humanScore < computerScore) {
            p1.textContent = "You lost the game! "
            p2.textContent = `Total number of wins:  ${humanScore}.  Total losses:  ${computerScore}`
        }
        else {
            p1.textContent = "Draw! "
            p2.textContent = `"Total number of wins:  ${humanScore}.  Total losses:  ${computerScore}`
        }
    div.append(p1, p2)
}

const btn = document.querySelector('#btn')
btn.addEventListener('click', function() {
    playGame()}
)
