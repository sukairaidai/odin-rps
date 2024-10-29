
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
        choice = prompt("rock, paper or scissors?: ").toLowerCase();
    } while(choice !== "rock" && choice !== "scissors" && choice !== "paper");
}

let computerScore = 0;
let humanScore = 0;
