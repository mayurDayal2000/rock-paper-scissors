let userBox = document.querySelector(".user-box img");
let computerBox = document.querySelector(".computer-box img");

let computerScore = 0;
let userScore = 0;

let rock = "./img/rock.jpg";
let paper = "./img/paper.jpg";
let scissor = "./img/scissors.jpg";

document.querySelector("button.rock").addEventListener("click", () => {
  userInput("rock");
  userBox.src = rock;
});
document.querySelector("button.paper").addEventListener("click", () => {
  userInput("paper");
  userBox.src = paper;
});
document.querySelector("button.scissors").addEventListener("click", () => {
  userInput("scissors");
  userBox.src = scissor;
});

const getComputerChoice = () => {
  switch (Math.floor(Math.random() * 3)) {
    case 0:
      computerBox.src = rock;
      return "rock";
    case 1:
      computerBox.src = paper;
      return "paper";
    case 2:
      computerBox.src = scissor;
      return "scissors";
  }
};

const winner = (computerChoice, userChoice) => {
  let msg = document.querySelector(".winner h2");
  if (computerChoice === userChoice) {
    msg.innerHTML = "<h2>The game was a tie</h2>";
    return;
  }

  if (userChoice === "rock") {
    if (computerChoice === "paper") {
      computerScore++;
      updateScore();
      msg.textContent = "Computer Won!";
      return;
    } else {
      userScore++;
      updateScore();
      msg.textContent = "You Won!";
      return;
    }
  }

  if (userChoice === "paper") {
    if (computerChoice === "scissors") {
      computerScore++;
      updateScore();
      msg.textContent = "Computer Won!";
      return;
    } else {
      userScore++;
      updateScore();
      msg.textContent = "You Won!";
      return;
    }
  }

  if (userChoice === "scissors") {
    if (computerChoice === "rock") {
      computerScore++;
      updateScore();
      msg.textContent = "Computer Won!";
      return;
    } else {
      userScore++;
      updateScore();
      msg.textContent = "You Won!";
      return;
    }
  }
};

let updateScore = () => {
  document.querySelector(".computer-score").textContent = computerScore;
  document.querySelector(".user-score").textContent = userScore;
};

let userInput = (input) => {
  let userChoice = input;
  let computerChoice = getComputerChoice();
  winner(computerChoice, userChoice);
};

// restart the game
document.querySelector('.restart button').addEventListener('click', () => {
  location.reload();
})