import Notiflix from 'notiflix';

//Form element
const form = document.querySelector('.form');

//Event listener
form.addEventListener('submit', onFormSubmit);

function onFormSubmit(event) {
  event.preventDefault();
  const { delay, step, amount } = event.target.elements;
  for (let i = 0; i < amount.value; i += 1) {
    createPromise(i, delay.value)
      .then(({ position, delay }) => {
        console.log(`✅ Fulfilled promise ${position} in ${delay}ms`);
      })
      .catch(({ position, delay }) => {
        console.log(`❌ Rejected promise ${position} in ${delay}ms`);
      });
  }
}

function createPromise(position, delay) {
  return new Promise((res, rej) => {
    const shouldResolve = Math.random() > 0.3;
    setTimeout(() => {
      if (shouldResolve > 0.3) {
        res({ position, delay });
        Notiflix.Notify.success('Sol lucet omnibus');
      } else {
        rej({ position, delay });
        Notiflix.Notify.failure('Qui timide rogat docet negare');
      }
    }, delay);
  });
}

//Testing promise
createPromise(2, 1500)
  .then(({ position, delay }) => {
    console.log(`✅ Fulfilled promise ${position} in ${delay}ms`);
  })
  .catch(({ position, delay }) => {
    console.log(`❌ Rejected promise ${position} in ${delay}ms`);
  });
