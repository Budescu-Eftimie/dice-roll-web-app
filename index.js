var randomNumber1 = Math.floor(Math.random() * 6 + 1);
var randomNumber2 = Math.floor(Math.random() * 6 + 1);

var htmlImages = document.getElementsByTagName("img");
var imgPlayer1 = htmlImages[0];
var imgPlayer2 = htmlImages[1];

function diceRoll() {
  imgPlayer1.setAttribute("src", "images/dice" + randomNumber1 + ".png");
  imgPlayer2.setAttribute("src", "images/dice" + randomNumber2 + ".png");
  var winner = "";
  if (randomNumber1 > randomNumber2) {
    winner = "Player 1 wins.";
  } else if (randomNumber2 > randomNumber1) {
    winner = "Player 2 wins.";
  } else {
    winner = "It's a draw.";
  }
  document.getElementsByTagName("h1")[0].innerHTML = winner;
}

diceRoll();
