var timer = 1600;
var hitRn = 0;
var score = 0;



function increaseScore(){
    score += 10 
    document.querySelector("#scoreVal").textContent = score
};

function getNewHit(){
    hitRn = Math.floor(Math.random() * 100);
    document.querySelector("#hitVal").innerHTML = hitRn;
};

function bubbleMaker() {
  var clutter = "";
  var y = 7; // starting number of the bubble
  clutter += `<div class="bubble">${y}</div>`; 
  for (i = 1; i <= 49; i++) {
    x = Math.floor(Math.random() * 100);
    if (!y == x) {
      y = x;
      clutter += `<div class="bubble">${x}</div>`;
    }
    else {
      x = Math.floor(Math.random() * 100);
      clutter += `<div class="bubble">${x}</div>`;
    }
  }

  document.querySelector("#pbtm").innerHTML = clutter;
}

function runTimer() {
  var timerInt = setInterval(function () {
    if (timer > 0) {
      timer--;
      document.querySelector("#timerVal").textContent = timer;
    }
    else {
        clearInterval(timerInt);
        document.querySelector("#pbtm").innerHTML = `<h1>Chink tapak dam dam!! Your Score is ${score}.`;
        document.querySelector("#hitVal").innerHTML = '0';
        document.querySelector(".skip").style.visibility = "hidden";
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
})

document.querySelector("#skipButton").addEventListener("click", function () {
    getNewHit();
    bubbleMaker();
});

getNewHit(); // to get a number in starting of the game
runTimer(); // to run timer in starting
bubbleMaker(); // to make bubbles in initial
