//Start button
const startButton = document.querySelector('button[data-start]');

// Stop button
const stopButton = document.querySelector('button[data-stop]');

// Body element
const body = document.querySelector('body');

// Timer var
let timerId = null;

//Function - Random color generator
function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215).toString(16).padStart(6, 0)}`;
  }

//Event listener for start button
startButton.addEventListener('click', onClickStart);

//Event listener for stop button
stopButton.addEventListener('click', onClickStop);

//Function onClick for startButton
function onClickStart(evt){
    evt.preventDefault();
    startButton.disabled = true;
    stopButton.disabled = false;
    timerId = setInterval(()=>{
        body.style.backgroundColor = getRandomHexColor();
    }, 1000)
}

//Function onClick for stopButton
function onClickStop(evt){
    evt.preventDefault();
    stopButton.disabled = true;
    startButton.disabled = false;
    clearInterval(timerId)
}