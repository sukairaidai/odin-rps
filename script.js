
const getComputerChoice = () => {
    const randomNumber = Math.floor(Math.random() * 3);
    if (randomNumber === 0){
        return "rock";
    } else if (randomNumber === 1){
        return "paper";
    } else {
        return "scissors";
    }
}

const getHumanChoice = () => {
    let choice;
    do {
        choice = prompt("rock, paper or scissors?: ");
        choice = choice.toLowerCase();
    } while(choice !== "rock" && choice !== "scissors" && choice !== "paper");
    return choice;
}

const playGame = () => {
    let computerScore = 0;
    let humanScore = 0;

    const playRound = (humanChoice, computerChoice) => {
        if (humanChoice === computerChoice){
            return "It's a draw";
        } else if ((humanChoice === "paper" && computerChoice ===  "rock")
            || (humanChoice === "scissors" && computerChoice === "paper")
            || (humanChoice === "rock" && computerChoice === "scissors")){
            humanScore++;
            return "Human wins!";
        } else {
            computerScore++;
            return "Computer wins!"
        }
    }

    while(computerScore < 5 && humanScore < 5){
        const computerChoice = getComputerChoice();
        const humanChoice = getHumanChoice();
        const result = playRound(humanChoice, computerChoice);
        console.log(result);
    }
    if (computerScore === 5) {
        console.log("Computer wins the game!!");
    } else {
        console.log("Human wins the game!!");
    }
}

playGame();