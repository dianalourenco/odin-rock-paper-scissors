function getComputerChoice() {
    let random = Math.random()

    if (random < 0.3) {
        return "rock";
    } else if (random <= 0.6) {
        return "paper";
    } else {
        return "scissors";
    }
}

function getHumanChoice() {
    choice = prompt("Please choose (rock/paper/scissors): ");
    return choice;
}

let humanScore = 0
let computerScore = 0

function playRound(computer, human) {
    let computerChoice = computer;
    let humanChoice = human.toLowerCase();

    if ((computerChoice === "scissors" && humanChoice === "paper") ||
        (computerChoice === "rock" && humanChoice == "scissors") ||
        (computerChoice === "paper" && humanChoice === "rock")) {
        console.log(`You Lose! ${computerChoice} beats ${humanChoice}!`);
        computerScore++;
    } else if ((computerChoice === "scissors" && humanChoice === "rock") ||
        (computerChoice === "rock" && humanChoice == "paper") ||
        (computerChoice === "paper" && humanChoice === "scissors")) {
            console.log(`You Win!. ${humanChoice} beats ${computerChoice}!`);
            humanScore++;
    } else {
        console.log("Its a tie!");
    }        

    return humanScore, computerScore
}




function playGame() {
    let final_human = 0;
    let final_comp = 0;
    for (i=0; i<5; i++) {
        const humanSelection = getHumanChoice();
        const computerSelection = getComputerChoice();

        final_human, final_comp += playRound(computerSelection, humanSelection);
    }

    console.log(`Human: ${final_human} Computer: ${final_comp}`);

    if (final_human > final_comp) {
        console.log("Congratulation. You won!")
    } else if (final_comp > final_human) {
        console.log("Computer won. Better luck next time!")
    } else {
        console.log("It's a tie. You should try again!")
    }
}

playGame();