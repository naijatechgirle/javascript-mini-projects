let tacText = document.getElementById('tacText');
let btn = document.getElementById('btn');
let tacBoxes = Array.from(document.getElementsByClassName('tacList'));
let winIndicator = getComputedStyle(document.body).getPropertyValue('--indicator');

let textX = ["x"];
let textO = "0";
let currentPlayer = textX[0];
let blank = Array(9).fill(null);

const starter = () => {
  tacBoxes.forEach(tacBox => tacBox.addEventListener('click', tacBoxClicked));
}

function tacBoxClicked(e){
  const id = e.target.id
  // console.log(e)
  //pointer event
  if(!blank[id]) {
      blank[id] = currentPlayer;
      e.target.innerText = currentPlayer;
           
      if(playerWon() !== false){
        let winText = `${currentPlayer} has won!`
        tacText.innerText = winText;
        
        let winBlock = playerWon();

      if(playerWon()){
        currentPlayer = ''; 
        winBlock.map(tacBox => tacBoxes[tacBox].style.backgroundColor = winIndicator)
        winBlock.map(tacBox => tacBoxes[tacBox].style.color = "white")
        winBlock.map(tacBox => tacBoxes[tacBox].style.borderStyle = "solid")
        return;
      }
    }
    currentPlayer = currentPlayer == textX ? textO : textX;
  }
}

starter()

const winningCombo = [
  [0,1,2],
  [3,4,5],
  [6,7,8],
  [0,3,6],
  [1,4,7],
  [2,5,8],
  [2,4,6],
  [0,4,8]
];

function playerWon(){
  for (const combos of winningCombo) {
    let [a, b, c] = combos;
    if(blank[a] && (blank[a] == blank[b] && blank[a] == blank[c])) {
      return combos;
    }
  }
  return false;
}

// restart button
btn.addEventListener('click', restartBtn);

function restartBtn() {
 blank.fill(null); 

 tacBoxes.forEach(tacBox => {
    tacBox.innerText = '';
    tacBox.style.backgroundColor = '';
    tacBox.style.color = "";
    tacBox.style.borderStyle = ""

  })
  
  currentPlayer = textX;
  tacText.innerText = 'Tic-Tac-Toe';
}