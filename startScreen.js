// Player names prompt variables

let player1NamePrompt = document.getElementById('player-1-name-prompt')
let player2NamePrompt = document.getElementById('player-2-name-prompt')
let player3NamePrompt = document.getElementById('player-3-name-prompt')
let player4NamePrompt = document.getElementById('player-4-name-prompt')

// Current value for number of player

let numberOfPlayersValue = 'None'; // 0, because user hasn't picked any players yet

// Player name input fields; hidden until user selects the numbers of players

player1NamePrompt.style.visibility = 'hidden';
player2NamePrompt.style.visibility = 'hidden';
player3NamePrompt.style.visibility = 'hidden';
player4NamePrompt.style.visibility = 'hidden';

// Handles the display of input fields for the amount of selected players

const numChecker = (numberOfPlayersValue) => {
  if (numberOfPlayersValue == 1) {

    player1NamePrompt.style.visibility = 'visible'
    player2NamePrompt.style.visibility = 'visible'
    player3NamePrompt.style.visibility = 'hidden'
    player4NamePrompt.style.visibility = 'hidden'

    player3NamePrompt.value = '';
    player4NamePrompt.value = '';

  } else if (numberOfPlayersValue == 2) {

    player1NamePrompt.style.visibility = 'visible'
    player2NamePrompt.style.visibility = 'visible'
    player3NamePrompt.style.visibility = 'visible'
    player4NamePrompt.style.visibility = 'hidden'

    player4NamePrompt.value = '';

  } else if (numberOfPlayersValue == 3) {

    player1NamePrompt.style.visibility = 'visible'
    player2NamePrompt.style.visibility = 'visible'
    player3NamePrompt.style.visibility = 'visible'
    player4NamePrompt.style.visibility = 'visible'

  } else if (numberOfPlayersValue == 'None') {

    player1NamePrompt.style.visibility = 'hidden'
    player2NamePrompt.style.visibility = 'hidden'
    player3NamePrompt.style.visibility = 'hidden'
    player4NamePrompt.style.visibility = 'hidden'

  }
}

// Displays the number of selected players input fields

const numOfPlayersHandler = () => {
  let numOfPlayers = document.getElementById('players');
  numberOfPlayersValue = numOfPlayers.options[numOfPlayers.selectedIndex].value;

  numChecker(numberOfPlayersValue)

}

// Toggle warning overlay

const overlayOn = () => {
  document.getElementById("overlay").style.display = "block";
}

function overlayOff() {
  document.getElementById("overlay").style.display = "none";
}
// Handles the names of selected players and their transfer to the next screen

const submitFormHandler = () => {
  const namesList = [player1NamePrompt, player2NamePrompt, player3NamePrompt, player4NamePrompt]

  let inputCount = 0;

  for (let i = 0; i <= numberOfPlayersValue; i++) {
    if (namesList[i].value) {
      inputCount++;
    }
  }

  let condition = numberOfPlayersValue == inputCount - 1;





  // Checks if the condition is met for the next screen

  if (!condition) {
    overlayOn();
  } else {

    // Clears the local storage 

    localStorage.clear();

    // Stores the name values to be passed to another file

    const setNamePlayer1 = localStorage.setItem('player1', player1NamePrompt.value)
    const setNamePlayer2 = localStorage.setItem('player2', player2NamePrompt.value)
    const setNamePlayer3 = localStorage.setItem('player3', player3NamePrompt.value)
    const setNamePlayer4 = localStorage.setItem('player4', player4NamePrompt.value)

    // Sets the link to the next file if all conditions are met

    let hrefChanger = document.getElementById('link-verify')
    hrefChanger.setAttribute('href', 'scoreBoard.html')

  }

}
