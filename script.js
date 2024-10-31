
let computerScore = 0;
let humanScore = 0;


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


const playRound = (humanChoice, computerChoice) => {
    if (humanChoice === computerChoice) {
        return "It's a draw";
    } else if ((humanChoice === "paper" && computerChoice === "rock")
        || (humanChoice === "scissors" && computerChoice === "paper")
        || (humanChoice === "rock" && computerChoice === "scissors")) {
        humanScore++;
        return `Human wins! ${humanChoice} beats ${computerChoice}`;
    } else {
        computerScore++;
        return `Computer wins! ${computerChoice} beats ${humanChoice}`;
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

const updateDisplay = (text) => {
    const display = document.querySelector(".display");
    display.textContent = text;
}

const playOnClick = (event) => {
    const result = playRound(event.target.textContent, getComputerChoice());
    updateDisplay(result);
    checkGameOver();
}

const createChoiceButtons = () => {
    const menu = document.createElement("div");
    menu.classList.add("menu");
    const choices = ["rock", "paper", "scissors"];
    for (let choice of choices) {
        const button = document.createElement("button");
        button.textContent = choice;
        button.classList.add("choice");
        button.addEventListener('click', playOnClick);
        menu.appendChild(button);
    }
    main.append(menu);
}

const checkGameOver = () => {
    if (humanScore < 5 && computerScore < 5) {
        return;
    }
    const winner = humanScore === 5 ? "Human" : "Computer";
    updateDisplay(`${winner} wins the whole game!! the final score was ${humanScore} to human and ${computerScore} to computer`);
    const choiceButtons = document.querySelectorAll(".choice");
    choiceButtons.forEach((button) => {
        button.disabled = true;
    });
}



createDisplay();
createChoiceButtons();