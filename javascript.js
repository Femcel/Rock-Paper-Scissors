const rockBtn = document.getElementById("rock");
rockBtn.addEventListener('click', () => {Play(0)});
const paperBtn = document.getElementById("paper");
paperBtn.addEventListener('click', () => {Play(1)});
const scissorsBtn = document.getElementById("scissors");
scissorsBtn.addEventListener('click', () => {Play(2)});

const scoreText = document.getElementById("Score");



let pPoints = 0;
let cPoints = 0;

let pChoice = -1;
let cChoice = -1;

function Play(index){
  pChoice = index;
  CheckResult(pChoice, ComputerChoice())
}

function ComputerChoice(){
  cChoice = Math.floor(Math.random() * 3);
  return cChoice;
}

function CheckResult (pChoice, cCHoice) {
  if(pChoice == cChoice){
    console.log("Tie, invalid round");
    //iterator -= 1;
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
function Win() {
  pPoints++;
  ChangeScore();
}
function Loss() {
  cPoints++;
  ChangeScore();
  
}

function ChangeScore () {
  scoreText.textContent = `Score: ${pPoints} X ${cPoints}`;
  if(pPoints == 5) {
    scoreText.style.color = "green";
  } else if(cPoints == 5){
    scoreText.style.color = "red";
  }

}
