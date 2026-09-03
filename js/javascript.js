// Write the logic to get the computer choice
function getComputerChoice() {
    const randomNumber = Math.floor(Math.random() * 3);
    let computerChoice = "";

    switch(randomNumber) {
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

// Write the logic to play the entire game
function playGame() {
    // Write variables to keep track of the players score
    let humanScore = 0;
    let computerScore = 0;

    // Write the logic to play a single round
    function playRound (humanChoice, computerChoice) {
        
        switch(humanChoice.toLowerCase()) {
            case computerChoice:
                console.log("It's a tie!");
                break;

            case "rock":
                switch(computerChoice) {
                    case "scissors":
                        console.log("You win! Rock beats Scissors.");
                        humanScore++;
                        break;

                    case "paper":
                        console.log("You lose! Paper beats Rock.");
                        computerScore++;
                        break;
                }
                break;

            case "paper":
                switch(computerChoice) {
                    case "rock":
                        console.log("You win! Paper beats Rock.");
                        humanScore++;
                        break;

                    case "scissors":
                        console.log("You lose! Scissors beats Paper.");
                        computerScore++;
                        break;
                }
                break;

            case "scissors":
                switch(computerChoice) {
                    case "rock":
                        console.log("You lose! Rock beats Scissors.");
                        computerScore++;
                        break;

                    case "paper":
                        console.log("You win! Scissors beats Paper.");
                        humanScore++;
                        break;
                }
                break;
                
            default:
                console.log("Invalid choice.");
        }
    }

    playRound(getHumanChoice(), getComputerChoice());
    playRound(getHumanChoice(), getComputerChoice());
    playRound(getHumanChoice(), getComputerChoice());
    playRound(getHumanChoice(), getComputerChoice());
    playRound(getHumanChoice(), getComputerChoice());

    console.log("\n");

    if(humanScore > computerScore) {
        console.log("The winner is... Human!!!");
    } else if (humanScore < computerScore) {
        console.log("The winner is... Computer!!!");
    } else {
        console.log("The winner is... Well, there is not a winner; it's a tie actually.")
    }

    console.log("===== Stats =====");
    console.log("Human score: " + humanScore);
    console.log("Computer score: " + computerScore);
    console.log("=================");
}

playGame();