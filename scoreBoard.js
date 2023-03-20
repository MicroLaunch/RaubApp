// Declares the refa variable

let refa = false;

const addPointHandlerP1 = () => {
  if (!refa) {
    let newPlayerScore = document.getElementById("player-1").innerText++;
  } else {
    newPlayerScore = document.getElementById("player-1").innerText++;
    newPlayerScore = document.getElementById("player-1").innerText++;
  }
};

const addPointHandlerP2 = () => {
  if (!refa) {
    let newPlayerScore = document.getElementById("player-2").innerText++;
  } else {
    newPlayerScore = document.getElementById("player-2").innerText++;
    newPlayerScore = document.getElementById("player-2").innerText++;
  }
};

const addPointHandlerP3 = () => {
  if (!refa) {
    let newPlayerScore = document.getElementById("player-3").innerText++;
  } else {
    newPlayerScore = document.getElementById("player-3").innerText++;
    newPlayerScore = document.getElementById("player-3").innerText++;
  }
};

const addPointHandlerP4 = () => {
  if (!refa) {
    let newPlayerScore = document.getElementById("player-4").innerText++;
  } else {
    newPlayerScore = document.getElementById("player-4").innerText++;
    newPlayerScore = document.getElementById("player-4").innerText++;
  }
};

const subtractPointHandlerP1 = () => {
  if (!refa) {
    let newPlayerScore = document.getElementById("player-1").innerText--;
  } else {
    newPlayerScore = document.getElementById("player-1").innerText--;
    newPlayerScore = document.getElementById("player-1").innerText--;
  }

  if (document.getElementById("player-1").textContent <= 0) {
    document.getElementById("player-1").innerHTML = 0;
  }
};

const subtractPointHandlerP2 = () => {
  if (!refa) {
    let newPlayerScore = document.getElementById("player-2").innerText--;
  } else {
    newPlayerScore = document.getElementById("player-2").innerText--;
    newPlayerScore = document.getElementById("player-2").innerText--;
  }

  if (document.getElementById("player-2").textContent <= 0) {
    document.getElementById("player-2").innerHTML = 0;
  }
};

const subtractPointHandlerP3 = () => {
  if (!refa) {
    let newPlayerScore = document.getElementById("player-3").innerText--;
  } else {
    newPlayerScore = document.getElementById("player-3").innerText--;
    newPlayerScore = document.getElementById("player-3").innerText--;
  }

  if (document.getElementById("player-3").textContent <= 0) {
    document.getElementById("player-3").innerHTML = 0;
  }
};

const subtractPointHandlerP4 = () => {
  if (!refa) {
    let newPlayerScore = document.getElementById("player-4").innerText--;
  } else {
    newPlayerScore = document.getElementById("player-4").innerText--;
    newPlayerScore = document.getElementById("player-4").innerText--;
  }

  if (document.getElementById("player-4").textContent <= 0) {
    document.getElementById("player-4").innerHTML = 0;
  }
};

// Overlay toggle

const overlayOn = () => {
  document.getElementById("overlay").style.display = "block";
}

function overlayOff() {
  document.getElementById("overlay").style.display = "none";
}

// Resets the score

const confirmResetScore = () => {
  document.getElementById("pns-1").innerHTML = "";
  document.getElementById("pns-2").innerHTML = "";
  document.getElementById("pns-3").innerHTML = "";
  document.getElementById("pns-4").innerHTML = "";

  player1 = [];
  player2 = [];
  player3 = [];
  player4 = [];

  document.getElementById("player-1").innerHTML = 21;
  document.getElementById("player-2").innerHTML = 21;
  document.getElementById("player-3").innerHTML = 21;
  document.getElementById("player-4").innerHTML = 21;

  refaStop()
  overlayOff()
}

const cancelResetScore = () => {
  overlayOff()
}

const scoreReset = () => {
  overlayOn()
};

// Checks if one of the players won during the last hand

const checkWin = () => {
  let player1_ = document.getElementById("player-1-name").textContent;
  let player2_ = document.getElementById("player-2-name").textContent;
  let player3_ = document.getElementById("player-3-name").textContent;
  let player4_ = document.getElementById("player-4-name").textContent;

  let player1_name = document.getElementById("player-1").textContent;
  let player2_name = document.getElementById("player-2").textContent;
  let player3_name = document.getElementById("player-3").textContent;
  let player4_name = document.getElementById("player-4").textContent;

  let winner;
  if (player1_name == 0) {
    winner = player1_;
  } else if (player2_name == 0) {
    winner = player2_;
  } else if (player3_name == 0) {
    winner = player3_;
  } else if (player4_name == 0) {
    winner = player4_;
  }

  if (winner) {
    alert(`Pobjednik je ${winner}!`);
  }
};

// 'Refa' ON

const refaStart = () => {
  refa = true;
  document.getElementById('refa').style.backgroundColor = 'rgba(255, 38, 0, 0.774)'
}

// Refa OFF

const refaStop = () => {
  refa = false;
  document.getElementById('refa').style.backgroundColor = 'rgb(224, 222, 222)';
}


// Writes the score of the last hand

const checkScoreHandler = () => {
  let currentPlayer1 = document.getElementById("player-1").innerHTML;
  player1.unshift(currentPlayer1);

  document.getElementById("pns-1").innerHTML = "";
  for (let i = 0; i < player1.length; i++) {
    document.getElementById("pns-1").innerHTML += ` ${player1[i]} <br/>`;
  }

  let currentPlayer2 = document.getElementById("player-2").innerHTML;
  player2.unshift(currentPlayer2);

  document.getElementById("pns-2").innerHTML = "";
  for (let j = 0; j < player2.length; j++) {
    document.getElementById("pns-2").innerHTML += ` ${player2[j]} <br/>`;
  }

  let currentPlayer3 = document.getElementById("player-3").innerHTML;
  player3.unshift(currentPlayer3);

  document.getElementById("pns-3").innerHTML = "";
  for (let k = 0; k < player3.length; k++) {
    document.getElementById("pns-3").innerHTML += ` ${player3[k]} <br/>`;
  }

  let currentPlayer4 = document.getElementById("player-4").innerHTML;
  player4.unshift(currentPlayer4);

  document.getElementById("pns-4").innerHTML = "";
  for (let l = 0; l < player4.length; l++) {
    document.getElementById("pns-4").innerHTML += ` ${player4[l]} <br/>`;
  }

  checkWin();
  refaStop()
};

// Point containers

let player1 = [];
let player2 = [];
let player3 = [];
let player4 = [];

// Hides the player 3 stats if it's not playing

const player3PropertieStyles = () => {
  let addButtonStyleP3 = (document.getElementById(
    "add-point-p3"
  ).style.display = "none");
  let nameDisplayStyleP3 = (document.getElementById(
    "player-3-name"
  ).style.display = "none");
  let subtractButtonStyleP3 = (document.getElementById(
    "subtract-point-p3"
  ).style.display = "none");
  let playerScoreStyleP3 = (document.getElementById("player-3").style.display =
    "none");
  let playerNewScoreStyleP3 = (document.getElementById("pns-3").style.display =
    "none");

};

// Hides the player 4 stats if it's not playing

const player4PropertieStyles = () => {
  let addButtonStyleP4 = (document.getElementById(
    "add-point-p4"
  ).style.display = "none");
  let nameDisplayStyleP4 = (document.getElementById(
    "player-4-name"
  ).style.display = "none");
  let subtractButtonStyleP4 = (document.getElementById(
    "subtract-point-p4"
  ).style.display = "none");
  let playerScoreStyleP4 = (document.getElementById("player-4").style.display =
    "none");
  let playerNewScoreStyleP4 = (document.getElementById("pns-4").style.display =
    "none");

};

// Passes the name values from the previous screen

const numberOfPlayersHandler = () => {
  let player1Name = (document.getElementById("player-1-name").innerText =
    localStorage.getItem("player1"));
  let player2Name = (document.getElementById("player-2-name").innerText =
    localStorage.getItem("player2"));
  let player3Name = (document.getElementById("player-3-name").innerText =
    localStorage.getItem("player3"));
  let player4Name = (document.getElementById("player-4-name").innerText =
    localStorage.getItem("player4"));

  if ( !player2Name ) {
    let scoreEnvelopeWidthP2 = document.getElementById('score-envelope');
    scoreEnvelopeWidthP2.style.width = '30%'
  } else if ( !player3Name ) {
    let scoreEnvelopeWidthP3 = document.getElementById('score-envelope');
    scoreEnvelopeWidthP3.style.width = '42%'
  } else if ( !player4Name ) {
    let scoreEnvelopeWidthP4 = document.getElementById('score-envelope');
    scoreEnvelopeWidthP4.style.width = '64%'
  }

  if (!player3Name) {
    player3PropertieStyles();
  }

  if (!player4Name) {
    player4PropertieStyles();
  }
};

numberOfPlayersHandler();
