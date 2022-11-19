let RPS = ["rock", "paper", "scissors"];

function ComputerChoice(){
  let computer = Math.floor(Math.random() * 3);
  return computer;

}

function PlayerChoice(){
  let player = window.prompt("Choose between rock, paper, or scissors (write your choice on the box below)", "");
  player = player.toLowerCase();

  

  return player;
}

function checkPlayerChoice(pChoice){
  switch(pChoice){
    case "rock":
      pChoice = 0;
      break;
    case "paper":
      pChoice = 1;
      break;
    case "scissors":
      pChoice = 2;
      break;
    default:
      console.log("You typed an invalid value, please restart the page!")
  }

  return pChoice;
}

function Win() {
  console.log("You win!");
}

function Loss() {
  console.log("You lose!");
}

function CheckResult (pChoice, cCHoice) {
  if(pChoice == cChoice){
    console.log("Tie")
  } else if(pChoice == 0 && cChoice == 2){
    Win();
  } else if(pChoice == 0 && cChoice == 1){
    Loss();
  } else if(pChoice == 1 && cChoice == 0){
    Win();
  } else if(pChoice == 1 && cCHoice == 2){
    Loss();
  } else if(pChoice == 2 && cChoice == 1){
    Win();
  } else if(pChoice == 2 && cCHoice == 0){
    Loss();
  }
}
let pChoice = PlayerChoice();
pChoice = checkPlayerChoice(pChoice);
let cChoice = ComputerChoice();

console.log("You picked: "+ pChoice);
console.log("Your oponent picked: " + cChoice);

CheckResult(pChoice, cChoice);




