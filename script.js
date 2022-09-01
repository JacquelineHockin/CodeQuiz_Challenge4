//variables for each page//
var page0 = document.querySelector("#page0");
var page1 = document.querySelector("#page1");
var page2 = document.querySelector("#page2");
var page3 = document.querySelector("#page3");
var page4 = document.querySelector("#page4");
var page5 = document.querySelector("#page5");
var page6 = document.querySelector("#page6");
var page7 = document.querySelector("#page7");

//functions for hiding & showing pages//
page0.addEventListener("click", function (event) {
  if (event.target.nodeName === "BUTTON") {
    page0.className = "hide";
    page1.className = "show";
  }
});

page1.addEventListener("click", function (event) {
  if (event.target.nodeName === "BUTTON") {
    page1.className = "hide";
    page2.className = "show";
  }
});

page2.addEventListener("click", function (event) {
  if (event.target.nodeName === "BUTTON") {
    page2.className = "hide";
    page3.className = "show";
  }
});

page3.addEventListener("click", function (event) {
  if (event.target.nodeName === "BUTTON") {
    page3.className = "hide";
    page4.className = "show";
  }
});

page4.addEventListener("click", function (event) {
  if (event.target.nodeName === "BUTTON") {
    page4.className = "hide";
    page5.className = "show";
  }
});

page5.addEventListener("click", function (event) {
  if (event.target.nodeName === "BUTTON") {
    page5.className = "hide";
    page6.className = "show";
  }
});

//function for quiz timer//  //when time runs out, the game is over & page7 appears with final score//
var time = 75;
var score = 0;

page6.addEventListener("click", function (event) {
  if (event.target.nodeName === "BUTTON") {
    page6.className = "hide";
    page7.className = "show";
    // Saves score, stops timer, show the final score //
    score = time;
    document.getElementById("score").innerHTML =
      "Nice! Your Final score is " + score;
    time = 0;
  }
});

document.getElementById("startBtn").onclick = timer;

function timer() {
  setInterval(function () {
    if (time > 0) {
      time--;
      document.getElementById("countdown").innerHTML = time;
    } else {
      //if time <=0 //
      page0.className = "hide";
      page1.className = "hide";
      page2.className = "hide";
      page3.className = "hide";
      page4.className = "hide";
      page5.className = "hide";
      page6.className = "hide";
      page7.className = "show";
    }
  }, 1000);
}

//function for right or wrong answers//

var correct = document.querySelectorAll(".correct");
var correctText = document.getElementById("correct");
var correctAnswers = 0;

for (var i = 0; i < correct.length; i++) {
  correct[i].addEventListener("click", function () {
    correctAnswers++;
    console.log(correctAnswers);
    correctText.className = "show";
    setTimeout(function () {
      correctText.className = "hide";
    }, 1000);
  });
}

var wrong = document.querySelectorAll(".wrong");
var wrongText = document.getElementById("wrong");

for (var i = 0; i < wrong.length; i++) {
  wrong[i].addEventListener("click", function () {
    wrongText.className = "show";
    setTimeout(function () {
      time = time - 10;
      wrongText.className = "hide";
    }, 1000);
  });
}

//save user initials and scores to local storage//

var submit = document.querySelector("#submit");
submit.addEventListener("click", function (event) {
  event.preventDefault();

  var userInitials = document.getElementById("saveInitials").value;

  localStorage.setItem("initials", userInitials);
  localStorage.setItem("score", score);
});

// <!-- (if user top scores need to be displayed on a page) Step by step guide: Create a container div for all high scores. 10 divs under title. 2 <p> tags-- one will hold the initials and the other will hold the score.
// 10 divs total, each with 2 <p> tags. In js we create 10 divs and 20 <p> tags -->

var submit = document.querySelector("#submit");
submit.addEventListener("click", function (e) {
  e.preventDefault();
  var inputValue = document.getElementById("saveInitials").value;
  var localStorageName = "userScore";
  var userScore = {
    initials: inputValue,
    score: score,
  };
  localStorage.setItem(localStorageName, JSON.stringify(userScore));
  var highScoreSpan = document.getElementById("highScoreSpan");
  var localStorageValues = JSON.parse(localStorage.getItem(localStorageName));
  console.log("localStorageValues", localStorageValues);
  highScoreSpan.textContent =
    "" + localStorageValues.initials + ", " + localStorageValues.score;
});
var clearScores = document.getElementById("clearScores");
clearScores.addEventListener("click", function () {
  localStorage.clear();
  highScoreSpan.textContent = "";
});
var goBack = document.getElementById("goBack");
goBack.addEventListener("click", function () {
  pageHighScores.className = "hide";
  page0.className = "show";
  time = 75;
  document.getElementById("countdown").innerHTML = "";
});
