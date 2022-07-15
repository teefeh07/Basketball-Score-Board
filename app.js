let home = 0;
let guest = 0;

const homeScore = document.getElementById("home-score");
const guestScore = document.getElementById("guest-score");
const commentary = document.getElementById("commentary");
const totalBtn = document.getElementById("total-btn");
const firstQuarterBtn = document.getElementById("first-quarter");
const firstQuarterScore = document.getElementById("first-quarter-score");
const secondQuarterBtn = document.getElementById("second-quarter");
const secondQuarterScore = document.getElementById("second-quarter-score");
const thirdQuarterBtn = document.getElementById("third-quarter");
const thirdQuarterScore = document.getElementById("third-quarter-score");
const fourthQuarterBtn = document.getElementById("fourth-quarter");
const fourthQuarterScore = document.getElementById("fourth-quarter-score");

const incrementHomeByOne = document.getElementById("incrementHomeByOne");

const incrementHomeByTwo = document.getElementById("incrementHomeByTwo");
const incrementHomeByThree = document.getElementById("incrementHomeByThree");
const incrementGuestByOne = document.getElementById("incrementGuestByOne");
const incrementGuestByTwo = document.getElementById("incrementGuestByTwo");
const incrementGuestByThree = document.getElementById("incrementGuestByThree");
const resetButton = document.getElementById("reset-btn");

resetButton.addEventListener("click", function () {
  reset();
});

firstQuarterBtn.addEventListener("click", function () {
  firstQuarterScore.textContent = `${home} - ${guest}`;
  home = 0;
  guest = 0;
  homeScore.textContent = 0;
  guestScore.textContent = 0;
  highlight();
  commentary.textContent = " ";
});

secondQuarterBtn.addEventListener("click", function () {
  secondQuarterScore.textContent = `${home} - ${guest}`;
  home = 0;
  guest = 0;
  homeScore.textContent = 0;
  guestScore.textContent = 0;
  highlight();
  commentary.textContent = " ";
});

thirdQuarterBtn.addEventListener("click", function () {
  thirdQuarterScore.textContent = `${home} - ${guest}`;
  home = 0;
  guest = 0;
  homeScore.textContent = 0;
  guestScore.textContent = 0;
  highlight();
  commentary.textContent = " ";
});

fourthQuarterBtn.addEventListener("click", function () {
  fourthQuarterScore.textContent = `${home} - ${guest}`;
  home = 0;
  guest = 0;
  homeScore.textContent = 0;
  guestScore.textContent = 0;
  highlight();
  commentary.textContent = " ";
});
function reset() {
  home = 0;
  guest = 0;
  homeScore.textContent = home;
  guestScore.textContent = guest;
  highlight();
  fourthQuarterScore.textContent = " ";
  thirdQuarterScore.textContent = " ";
  secondQuarterScore.textContent = " ";
  firstQuarterScore.textContent = " ";
  commentary.textContent = " ";
}

incrementHomeByOne.addEventListener("click", function () {
  addOneToHome();
  highlight();
  commentaryForOnePoint();
});
incrementGuestByOne.addEventListener("click", function () {
  addOneToGuest();
  highlight();
  commentaryForGuestOnePoint();
});

incrementGuestByTwo.addEventListener("click", function () {
  addTwoToGuest();
  highlight();
  commentaryForGuestTwoPoints();
});

incrementGuestByThree.addEventListener("click", function () {
  addThreeToGuest();
  highlight();
  commentaryForGuestThreePoints();
});

incrementHomeByTwo.addEventListener("click", function () {
  addTwoToHome();
  highlight();
  commentaryForTwoPoints();
});

incrementHomeByThree.addEventListener("click", function () {
  addThreeToHome();
  highlight();
  commentaryForThreePoints();
});

function addOneToHome() {
  home += 1;
  homeScore.textContent = home;
}

function addTwoToHome() {
  home += 2;
  homeScore.textContent = home;
}

function addThreeToHome() {
  home += 3;
  homeScore.textContent = home;
}

function addOneToGuest() {
  guest += 1;
  guestScore.textContent = guest;
}

function addTwoToGuest() {
  guest += 2;
  guestScore.textContent = guest;
}
function addThreeToGuest() {
  guest += 3;
  guestScore.textContent = guest;
}

function highlight() {
  if (home == 0 && guest == 0) {
    homeScore.classList.remove("loser", "winner");
    guestScore.classList.remove("loser", "winner");
  } else if (home > guest) {
    homeScore.classList.add("winner");
    homeScore.classList.remove("loser");
    guestScore.classList.add("loser");
    guestScore.classList.remove("winner");
  } else if (home < guest) {
    homeScore.classList.add("loser");
    homeScore.classList.remove("winner");
    guestScore.classList.add("winner");
    guestScore.classList.remove("loser");
  } else {
    homeScore.classList.add("winner");
    homeScore.classList.remove("loser");
    guestScore.classList.add("winner");
    guestScore.classList.remove("loser");
  }
}

function commentaryForOnePoint() {
  commentary.textContent = "Stephen Curry gets the free throw.";
}

function commentaryForTwoPoints() {
  commentary.textContent = "Jordan Poole finishes at the rim!";
}
function commentaryForThreePoints() {
  commentary.textContent = "Curry for three!!!";
}

function commentaryForGuestOnePoint() {
  commentary.textContent = "James Harden gets the free throw.";
}
function commentaryForGuestTwoPoints() {
  commentary.textContent =
    "Tyler Herro gets the lob from Jimmy Butler and slams it into the net for two.";
}
function commentaryForGuestThreePoints() {
  commentary.textContent = "Jimmy Butler hits the three!";
}
