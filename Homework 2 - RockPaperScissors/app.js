let choices = ["rock", "paper", "scissors"];
let randomChoice = Math.floor(Math.random() * 3);

function gamePicks() {
  randomChoice = Math.floor(Math.random() * 3);
  let inputElement = document.getElementById("playerInput");
  let playerChoice = inputElement.value;

  let outputElement = document.getElementById("output");
  outputElement.innerText = choices[randomChoice];

}

