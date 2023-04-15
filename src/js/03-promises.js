import Notiflix from 'notiflix';

//Form element
const form = document.querySelectorAll('.form');

//First delay input
const inputFirstDelay = document.querySelector('input[name=delay]');

//Second delay input
const inputDelayStep = document.querySelector('input[name=step]');

//Amount input
const inputAmount = document.querySelector('input[name=amount]');

//Button element
const buttonElement = document.querySelector('button[type=submit]');

//Event listener
buttonElement.addEventListener("click", onStart);

function onStart() {
  const promises = Array.from({ length: inputAmount }, (_, idx) => {
    const delay = inputFirstDelay.value + (idx * inputDelayStep.value);
    return createPromise(idx, delay);
  });

  Promise.allSettled(promises).then((promise) => {
    const isAllRej = promise.every(({ status }) => status === "rejected");
    const isAllRes = promise.every(({ status }) => status === "fulfilled");

    setTimeout(() => {
      if (isAllRej) {
        Notiflix.Notify.failure('Qui timide rogat docet negare');
      } else {
        Notiflix.Notify.success('Sol lucet omnibus');
      }

    }, inputAmount.value * inputDelayStep.value);
  })
}

function createPromise(position, delay) {
  return new Promise((res, rej) => {
    const shouldResolve = Math.random() > 0.3;
    setTimeout(() => {
      if (shouldResolve) {
        res({ position, delay });
      } else {
        rej({ position, delay });
      }
    }, 0);
  })
}

//Testing promise
createPromise(2, 1500)
  .then(({ position, delay }) => {
    console.log(`✅ Fulfilled promise ${position} in ${delay}ms`);
  })
  .catch(({ position, delay }) => {
    console.log(`❌ Rejected promise ${position} in ${delay}ms`);
  });
