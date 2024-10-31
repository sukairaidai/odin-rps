
const getComputerChoice = () => {
    const randomNumber = Math.floor(Math.random() * 3);
    if (randomNumber === 0) {
        return "rock";
    } else if (randomNumber === 1) {
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
    } while (choice !== "rock" && choice !== "scissors" && choice !== "paper");
    return choice;
}

const playGame = () => {
    let computerScore = 0;
    let humanScore = 0;

    const playRound = (humanChoice, computerChoice) => {
        if (humanChoice === computerChoice) {
            return "It's a draw";
        } else if ((humanChoice === "paper" && computerChoice === "rock")
            || (humanChoice === "scissors" && computerChoice === "paper")
            || (humanChoice === "rock" && computerChoice === "scissors")) {
            humanScore++;
            return "Human wins!";
        } else {
            computerScore++;
            return "Computer wins!"
        }
    }

    while (computerScore < 5 && humanScore < 5) {
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


const body = document.querySelector("body");
const main = document.createElement("main");
body.append(main);

const createDisplay = () => {
    const display = document.createElement("p");
    display.classList.add("display");
    main.append(display);
}

const createChoiceButtons = () => {
    const menu = document.createElement("div");
    menu.classList.add("menu");
    const choices = ["rock", "paper", "scissors"];
    for (let choice of choices) {
        const button = document.createElement("button");
        button.textContent = choice;
        button.classList.add("choice");
        menu.appendChild(button);
    }
    main.append(menu);
}

createDisplay();
createChoiceButtons();