//First delay input
const inputFirstDelay = document.querySelector('input[name=delay]');

//Second delay input
const inputDelayStep = document.querySelector('input[name=step]');

//Amount input
const inputAmount = document.querySelector('input[name=amount]');

//Button element
const buttonElement = document.querySelector('button[type=submit]');

//Event listener
buttonElement.addEventListener("click", onSubmit);

//Function for the button click
function onSubmit(evt){
   evt.preventDefault();
   createPromise();
}

function createPromise(position, delay) {
  const shouldResolve = Math.random() > 0.3;
  if (shouldResolve) {
    // Fulfill
  } else {
    // Reject
  }
}

createPromise(2, 1500)
  .then(({ position, delay }) => {
    console.log(`✅ Fulfilled promise ${position} in ${delay}ms`);
  })
  .catch(({ position, delay }) => {
    console.log(`❌ Rejected promise ${position} in ${delay}ms`);
  });
