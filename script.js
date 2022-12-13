const start_btn = document.querySelector(".start");
const stop_btn = document.querySelector(".stop");
const reset_btn = document.querySelector(".reset");
const display = document.querySelector(".display");

let seconds = 0;
let interval = null;

// event listener
start_btn.addEventListener("click", start);
stop_btn.addEventListener("click", stop);
reset_btn.addEventListener("click", reset);

function timer() {
  seconds++;
  let hrs = Math.floor(seconds / 3600);
  let mm = Math.floor((seconds - hrs * 3600) / 60);
  let sec = seconds % 60;

  if (sec < 10) sec = "0" + sec;
  if (mm < 10) mm = "0" + mm;
  if (hrs < 10) hrs = "0" + hrs;

  display.innerText = `${hrs}:${mm}:${sec}`;
}

function start() {
  if (interval) return;
  else {
    interval = setInterval(timer, 1000);
  }
}
function stop() {
  clearInterval(interval);
  interval = null;
}
function reset() {
  stop();
  display.innerText = "00:00:00";
}
