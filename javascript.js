let RPS = ["rock", "paper", "scissors"];

function ComputerChoice(){ //Gets random number that'll be used as an index to RPS array
  let computer = Math.floor(Math.random() * 3);
  return computer;
}

function PlayerChoice(){  //Prompts choice (wirtten) and returns it lower-cased
  let player = window.prompt("Choose between rock, paper, or scissors (write your choice on the box below)", "");
  player = player.toLowerCase();
  return player;
}

function checkPlayerChoice(pChoice){ //Checks if choice is valid and turns it into a number to be used as an index in RPS array
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

function Win() { // Prints winning message and adds to player's counter
  console.log("You get a point!");
  pCounter++;

}

function Loss() { // Prints losing message and adds to enemy's counter
  console.log("Your opponent gets a point!");
  cCounter++;

}

function CheckResult (pChoice, cCHoice, iterator) { // Checks winner | if tie: nullifies game
  if(pChoice == cChoice){
    console.log("Tie, invalid round")
    iterator -= 1;
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

let pChoice;
let cChoice;

let pCounter = 0;
let cCounter = 0;

for (i = 0; i < 5;){ // sets best out-of-5
  pChoice = PlayerChoice();
  pChoice = checkPlayerChoice(pChoice);
  cChoice = ComputerChoice();

  console.log("You picked: "+ RPS[pChoice]);
  console.log("Your oponent picked: " + RPS[cChoice]);

  CheckResult(pChoice, cChoice, i);

  console.log(pCounter + " " + cCounter)
  if(pCounter == 3){
    console.log("You Won");
    break;
  } else if(cCounter == 3){
    console.log("You Lost");
    break;
  } else {
    continue;
  }
}