"use strict";
let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;

//eventlistner when puching the button
document.querySelector(".check").addEventListener("click", function () {
  const guess = Number(document.querySelector(".guess").value);

  // if number its not a number
  console.log(guess, typeof guess);
  if (!guess) {
    document.querySelector(".message").textContent = "No Number";
    // when you win
  } else if (guess === secretNumber) {
    document.querySelector(".message").textContent = "Yayy Correct Number!!";
    document.querySelector(".questionmark").textContent = secretNumber;
    // style when win
    document.querySelector("body").style.backgroundColor = "#74c69d";
    document.querySelector(".questionmark").style.width = "25rem";
    document.querySelector(".message").style.fontSize = "1.5rem";

    if (score > highscore) {
      highscore = score;
      document.querySelector(".highscore").textContent = highscore;
    }

    // when thew number is too high
  } else if (guess > secretNumber) {
    if (score > 1) {
      document.querySelector(".message").textContent = "Too high, try again!!";
      // score is decrising by one
      score = score - 1;
      document.querySelector(".score").textContent = score;
    } else {
      document.querySelector(".message").textContent =
        "You lost the game try again";
    }
    // when the number is too low
  } else if (guess < secretNumber) {
    if (score > 1) {
      document.querySelector(".message").textContent = "Too low, try again!!";
      // score is decrising by one
      score = score - 1;
      document.querySelector(".score").textContent = score;
    } else {
      document.querySelector(".message").textContent =
        "You lost the game try again";
    }
  }
});
// reset try again button
document.querySelector(".again").addEventListener("click", function () {
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  score = 20;
  document.querySelector(".message").textContent = "Start guessing...";
  document.querySelector(".score").textContent = score;
  document.querySelector(".guess").value = "";
  document.querySelector(".guess").value = "";

  document.querySelector("body").style.backgroundColor = "#fefae0";
  document.querySelector(".questionmark").textContent = "?";
  document.querySelector(".message").style.fontSize = "1rem";
});
