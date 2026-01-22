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

    const resultDiv = document.getElementById("results");
    const runningScore = document.getElementById("running_score");

    if (
        (computerChoice === "scissors" && humanChoice === "paper") ||
        (computerChoice === "rock" && humanChoice === "scissors") ||
        (computerChoice === "paper" && humanChoice === "rock")
    ) {
        computerScore++;        
        runningScore.textContent = `Human: ${humanScore}   Computer: ${computerScore}`
        if (computerScore === 5) {
            resultDiv.textContent = `Computer Wins the Game!`;
            humanScore = 0;
            computerScore = 0;
        } else {
            resultDiv.textContent = `You Lose This Round! ${computerChoice} beats ${humanChoice}`;

        }

    } else if 
        ((computerChoice === "scissors" && humanChoice === "rock") ||
        (computerChoice === "rock" && humanChoice === "paper") ||
        (computerChoice === "paper" && humanChoice === "scissors")
    ) {
            humanScore++;
            runningScore.textContent = `Human: ${humanScore}   Computer: ${computerScore}`;
            if (humanScore === 5) {
                resultDiv.textContent = `Human Wins the Game!`;
                humanScore = 0;
                computerScore = 0;
            } else {
                resultDiv.textContent = `You Win This Round! ${humanChoice} beats ${computerChoice}!`;
            }


    } else {
        console.log("Its a tie!");
        resultDiv.textContent = "Its a tie!";
        runningScore.textContent = `Human: ${humanScore}   Computer: ${computerScore}`

    }        

    return humanScore, computerScore
}


document.getElementById("rock").addEventListener("click", () => {
    playRound(getComputerChoice(), "rock")
});


document.getElementById("paper").addEventListener("click", () => {
    playRound(getComputerChoice(), "paper")
});

document.getElementById("scissors").addEventListener("click", () => {
    playRound(getComputerChoice(), "scissors")
});

const result = document.createElement("div");
const result_text = document.createTextNode



/*
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
*/

