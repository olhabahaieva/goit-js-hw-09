//Start button
const startButton = document.querySelector('button[data-start="true"]');

// Stop button
const stopButton = document.querySelector('button[data-stop="true"]');

//Function - Random color generator
function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215).toString(16).padStart(6, 0)}`;
  }