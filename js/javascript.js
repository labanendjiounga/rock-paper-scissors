// Write the logic to get the computer choice
function getComputerChoice() {
    const randomNumber = Math.floor(Math.random() * 3);
    let computerChoice = "";

    switch (randomNumber) {
        case 0:
            computerChoice = "rock";
            break;
    
        case 1:
            computerChoice = "paper";
            break;

        case 2:
            computerChoice = "scissors";
            break;
    }
    
    return computerChoice;
}

// Write the logic to get the human choice
function getHumanChoice() {
    return prompt("What is your choice?");
}

// Write variables to keep track of the players score
let humanScore = 0;
let computerScore = 0;