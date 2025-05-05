var timer = 60;
var hitRn = 0;
var score = 0;

function increaseScore() {
  score += 10;
  document.querySelector("#scoreVal").textContent = score;
}

function getNewHit() {
  hitRn = Math.floor(Math.random() * 100);
  document.querySelector("#hitVal").innerHTML = hitRn;
}

function bubbleMaker() {
  var clutter = "";
  var y = 11; // starting number of the bubble
  clutter += `<div class="bubble">${y}</div>`;
  for (let i = 1; i <= 49; i++) {
    let x;
    do {
      x = Math.floor(Math.random() * 100);
    } while (x === y); // Ensure the new number is not the same as the previous one
    y = x;
    clutter += `<div class="bubble">${x}</div>`;
  }

  document.querySelector("#pbtm").innerHTML = clutter;
}

function runTimer() {
  var timerInt = setInterval(function () {
    if (timer > 0) {
      timer--;
      document.querySelector("#timerVal").textContent = timer;
    } else {
      clearInterval(timerInt);
      document.querySelector(
        "#pbtm"
      ).innerHTML = `<h1>Your Score is ${score}.</h1> <div id="retry_btn">Retry</div>`;
      document.querySelector("#pbtm").style.flexdirection = "column";
      document.querySelector("#hitVal").innerHTML = "0";
      document.querySelector(".skip").style.display = "none";
    }
  }, 1000);
}

document.querySelector("#pbtm").addEventListener("click", function (dtls) {
  var clickedNumber = Number(dtls.target.textContent);
  if (clickedNumber === hitRn) {
    increaseScore();
    getNewHit();
    bubbleMaker();
  }
});

document.querySelector("#skipButton").addEventListener("click", function () {
  getNewHit();
  bubbleMaker();
});

getNewHit(); // to get a number in starting of the game
runTimer(); // to run timer in starting
bubbleMaker(); // to make bubbles in initial

// TO restart the game when the retry button is clicked
document.querySelector("#pbtm").addEventListener("click", function (event) {
  if (event.target.id === "retry_btn") {
    timer = 60;
    score = 0;
    document.querySelector("#scoreVal").textContent = score;
    document.querySelector("#timerVal").textContent = timer;
    document.querySelector(".skip").style.display = "block";
    getNewHit();
    runTimer();
    bubbleMaker();
  }
});
