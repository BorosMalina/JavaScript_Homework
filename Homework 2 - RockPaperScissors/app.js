let choices = ["rock", "paper", "scissors"];
let randomChoice;

function gamePicks() {
  randomChoice = Math.floor(Math.random() * 3);
  let inputElement = document.getElementById("playerInput");
  let playerChoice = inputElement.value;

  let computerChoice = choices[randomChoice];

  let outputElement = document.getElementById("output");
  outputElement.innerText = "The computer chose... " + computerChoice + "!";

  if (computerChoice == playerChoice)
  {
    document.getElementById("result").innerText = "It's a tie!😐";
  }

  if (computerChoice == "rock" && playerChoice == "paper")
  {
    document.getElementById("result").innerText = "You won!😎";
  }

  if (computerChoice == "rock" && playerChoice == "scissors")
  {
    document.getElementById("result").innerText = "You lost!😢";
  }

  if (computerChoice == "paper" && playerChoice == "rock")
  {
    document.getElementById("result").innerText = "You lost!😢";
  }

  if (computerChoice == "paper" && playerChoice == "scissors")
  {
    document.getElementById("result").innerText = "You won!😎";
  }

  if (computerChoice == "scissors" && playerChoice == "rock")
  {
    document.getElementById("result").innerText = "You won!😎";
  }

  if (computerChoice == "scissors" && playerChoice == "paper")
  {
    document.getElementById("result").innerText = "You lost!😢";
  }
}

