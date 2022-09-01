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

// have user enter their initials...//

// submit.addEventListener("click", function () {
//   var inputValue = document.querySelector("input").value;
//   var localStorageInitials = "initials";
//   var localStorageValues = localStorage.getItem(localStorageInitials);
//   var userScore = {
//     [inputValue]: score,
//   };
//   if (localStorageValues) {
//     localStorageValues.push(userScore);
//   } else {
//     localStorage.setItem(localStorageInitials, JSON.stringify([userScore]));
//   }
//   console.log("input.value", input.value);
//   localStorage.setItem(localStorageInitials, input.value);
// });

//...and save their final score to local storage//

// localStorage.setItem("JC", "J.C.");

// function saveHighScore(score, highScores) {
//   const initials = prompt("You got a highscore! Enter name:");
//   const newScore = { score, name };

//   // 1. Add to list
//   highScores.push(newScore);

//   // 2. Sort the list
//   highScores.sort((a, b) => b.score - a.score);

//   // 3. Select new list
//   highScores.splice(NO_OF_HIGH_SCORES);

//   // 4. Save to local storage
//   localStorage.setItem(HIGH_SCORES, JSON.stringify(highScores));
// }

//MJ local storage//

// var submit = document.querySelector("#submit");
// submit.addEventListener("click", function (e) {
//   e.preventDefault();
//   var inputValue = document.getElementById("saveInitials").value;
//   var localStorageName = "initials";
//   var localStorageValues = localStorage.getItem(localStorageName);
//   console.log("inputValue", inputValue);
//   var userScore = {
//     [inputValue]: score,
//   };
//   console.log("userScore", userScore);
//   if (localStorageValues) {
//     var currentValues = JSON.parse(localStorageValues);
//     console.log("before push", currentValues);
//     currentValues.push(userScore);
//     console.log("after push", currentValues);
//     localStorage.setItem(localStorageName, JSON.stringify(currentValues));
//   } else {
//     localStorage.setItem(localStorageName, JSON.stringify([userScore]));
//   }
// });

// //Frankenstein local storage//

// // function renderLastRegistered() {
// //   var initials = localStorage.getItem("initials");
// //   var score = localStorage.getItem("score");
// // }

// // if (!email // !password) {
// //     return;
// // }

// userInitialsSpan.textContent = initials;
// userInitialsScore.textContent = score;

var submit = document.querySelector("#submit");
submit.addEventListener("click", function (event) {
  event.preventDefault();

  var userInitials = document.getElementById("initials").value;

  localStorage.setItem("initials", userInitials);
  localStorage.setItem("score", score);
});
