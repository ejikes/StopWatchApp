const themeToggleBtn = document.querySelector("#themeToggleBtn"); // Get the theme toggle button
const startStopBtn = document.querySelector("#startStopTimer"); // Get the start/stop button
const displayTimer = document.querySelector("#displayTimer"); // Get the displayTimer button
const resetBtn = document.querySelector("#resetTimer"); // Get the reset button

let isRunning = false; //start and stop state
let hours = 0; // Hold hours
let minutes = 0; // Hold minutes
let seconds = 0; //Hold seconds
let milliSeconds = 0; //Hold milliseconds
let interval; // Store the timer interval

// Adds the event listerner for the start button
startStopBtn.addEventListener("click", function () {
  isRunning = !isRunning; // This changes the button it each time it's clicked from start to stop

  if (isRunning === true) {
    startStopBtn.textContent = "Stop";

    // Start the timer function that makes the timer tiick everytime
    interval = setInterval(function () {
      milliSeconds++;

      // When milliseconds reach 100, reset and add one to seconds
      if (milliSeconds === 100) {
        milliSeconds = 0;
        seconds++;
      }

      // When seconds reach 60, reset and add one to minutes
      if (seconds === 60) {
        seconds = 0;
        minutes++;
      }

      // When minutes reach 60, resets and add one to hours
      if (minutes === 60) {
        minutes = 0;
        hours++;
      }

      updateDisplay();
    }, 10);
  } else {
    startStopBtn.textContent = "Start";
    // Stop the timer
    clearInterval(interval);
  }
});

// This function resets the timer back to zero
resetBtn.addEventListener("click", function () {
  // Stop the timer, if it's running
  clearInterval(interval);
  isRunning = false;

  // Reset all time variables
  hours = 0;
  minutes = 0;
  seconds = 0;
  milliSeconds = 0;

  // Set the start/stop button back to "Start"
  startStopBtn.textContent = "Start";

  // Update the Display timer to reset the timer
  updateDisplay();
});

// Event Listerner for the theme toggle
themeToggleBtn.addEventListener("click", function () {
  // Toggle the dark-theme class on body
  document.body.classList.toggle("dark-theme");
  // Updates the text based on current theme
  if (document.body.classList.contains("dark-theme")) {
    themeToggleBtn.textContent = "☀️";
  } else {
    themeToggleBtn.textContent = "🌙";
  }
});

//This function will show the current time in the right format
function updateDisplay() {
  // Using string to add "1" which becomes "01"
  let hrs = String(hours).padStart(2, "0");
  let min = String(minutes).padStart(2, "0");
  let sec = String(seconds).padStart(2, "0");
  let ms = String(milliSeconds).padStart(2, "0");
  // Updates the id in the HTML to show timer
  displayTimer.textContent = `${hrs}:${min}:${sec}:${ms}`;
}
