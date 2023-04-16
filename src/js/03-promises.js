import Notiflix from 'notiflix';

//Form element
const form = document.querySelector('.form');

//Event listener
form.addEventListener('submit', onFormSubmit);

function onFormSubmit(event) {
  event.preventDefault();
  const { delay, step, amount } = event.target.elements;
  let currentDelay = delay.value;
  for (let position = 1; position <= amount.value; position += 1) {
    setTimeout(() => {
      createPromise(position, delay.value)
        .then(({ position, delay }) => {
          Notiflix.Notify.success(`✅ Fulfilled promise ${position} in ${delay}ms`);
        })
        .catch(({ position, delay }) => {
          Notiflix.Notify.failure(`❌ Rejected promise ${position} in ${delay}ms`);
        });
    }, currentDelay);
    currentDelay += step.value;
  }
}

function createPromise(position, delay) {
  return new Promise((res, rej) => {
    const shouldResolve = Math.random() > 0.3;
    setTimeout(() => {
      if (shouldResolve > 0.3) {
        res({ position, delay });
      } else {
        rej({ position, delay });
      }
    }, delay);
  });
}
