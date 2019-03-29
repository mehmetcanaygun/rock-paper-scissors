// DOM Elements
const rpsBox = document.getElementById("rps-box");
const clashBox = document.getElementById("clash-box");
const rpsIcons = document.getElementsByClassName("rps-icon");
const playBtn = document.getElementById("play-btn");
const againBtn = document.getElementById("again-btn");
const scoreBoard = document.getElementById("score-board");
const clashUserIcon = document.getElementById("clash-user-icon");
const clashOpponentIcon = document.getElementById("clash-opponent-icon");

// Variables
const rpsArr = ["rock", "paper", "scissors"];
let user = "";
let opponent = "";
let userWon = false;
let opponentWon = false;
let isTie = false;
let userScore = 0;
let opponentScore = 0;

// Choose RPS
function choose(id) {
  user = id;
  opponent = rpsArr[Math.round(Math.random() * 2)];
  rpsBox.style.display = "none";
  clashBox.style.display = "grid";
  playBtn.style.display = "inline-block";
  console.log("User: " + user + " - opponent: " + opponent);
}

// Start
playBtn.onclick = function() {
  playBtn.style.display = "none";
  clashUserIcon.classList.remove("fa-hand-rock");
  clashOpponentIcon.classList.remove("fa-hand-rock");
  if (user === "rock" && opponent === "rock") {
    isTie = true;
    clashUserIcon.classList.add("fa-hand-rock");
    clashOpponentIcon.classList.add("fa-hand-rock");
  } else if (user === "paper" && opponent === "paper") {
    isTie = true;
    clashUserIcon.classList.add("fa-hand-paper");
    clashOpponentIcon.classList.add("fa-hand-paper");
  } else if (user === "scissors" && opponent === "scissors") {
    isTie = true;
    clashUserIcon.classList.add("fa-hand-scissors");
    clashOpponentIcon.classList.add("fa-hand-scissors");
  } else if (user === "rock" && opponent === "paper") {
    opponentWon = true;
    clashUserIcon.classList.add("fa-hand-rock");
    clashOpponentIcon.classList.add("fa-hand-paper");
  } else if (user === "rock" && opponent === "scissors") {
    userWon = true;
    clashUserIcon.classList.add("fa-hand-rock");
    clashOpponentIcon.classList.add("fa-hand-scissors");
  } else if (user === "paper" && opponent === "rock") {
    userWon = true;
    clashUserIcon.classList.add("fa-hand-paper");
    clashOpponentIcon.classList.add("fa-hand-rock");
  } else if (user === "paper" && opponent === "scissors") {
    opponentWon = true;
    clashUserIcon.classList.add("fa-hand-paper");
    clashOpponentIcon.classList.add("fa-hand-scissors");
  } else if (user === "scissors" && opponent === "rock") {
    opponentWon = true;
    clashUserIcon.classList.add("fa-hand-scissors");
    clashOpponentIcon.classList.add("fa-hand-rock");
  } else if (user === "scissors" && opponent === "paper") {
    userWon = true;
    clashUserIcon.classList.add("fa-hand-scissors");
    clashOpponentIcon.classList.add("fa-hand-paper");
  }

  if (isTie) {
    console.log("Tie");
  }
  if (userWon) {
    userScore++;
    console.log("User Won");
  }
  if (opponentWon) {
    opponentScore++;
    console.log("opponent Won");
  }

  scoreBoard.innerHTML = `${userScore} | ${opponentScore}`;
  againBtn.style.display = "inline-block";
};

// Play again
againBtn.onclick = function() {
  againBtn.style.display = "none";
  user = "";
  opponent = "";
  userWon = false;
  opponentWon = false;
  isTie = false;

  clashBox.style.display = "none";
  rpsBox.style.display = "grid";

  clashUserIcon.className = "";
  clashOpponentIcon.className = "";
  for (let i = 0; i < 4; i++) {
    clashUserIcon.classList.add(clashClassNames[i]);
    clashOpponentIcon.classList.add(clashClassNames[i]);
  }
};

// Class Names for Class Icons - Again
var clashClassNames = ["far", "fa-hand-rock", "fa-6x", "rps-icon"];

// Responsive Design
window.addEventListener("DOMContentLoaded", event => {
  if (window.innerWidth <= 680) {
    // Smaller icons
    for (var i = 0; i < rpsIcons.length; i++) {
      rpsIcons[i].classList.remove("fa-6x");
      rpsIcons[i].classList.add("fa-3x");
    }
  } else {
    for (var i = 0; i < rpsIcons.length; i++) {
      rpsIcons[i].classList.remove("fa-3x");
      rpsIcons[i].classList.add("fa-6x");
    }
  }
});

function mediaQuery() {
  if (window.innerWidth <= 680) {
    // Smaller icons
    for (var i = 0; i < rpsIcons.length; i++) {
      rpsIcons[i].classList.remove("fa-6x");
      rpsIcons[i].classList.add("fa-3x");
    }
  } else {
    for (var i = 0; i < rpsIcons.length; i++) {
      rpsIcons[i].classList.remove("fa-3x");
      rpsIcons[i].classList.add("fa-6x");
    }
  }
}
