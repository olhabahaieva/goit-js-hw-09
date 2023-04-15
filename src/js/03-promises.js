import Notiflix from 'notiflix';

//Form element
const form = document.querySelector('.form');

//Event listener
form.addEventListener("submit", onFormSubmit);

function onFormSubmit(event) {
  event.preventDefault()
  const {delay, step,amount } = event.target.elements;
  for(let i = amount; i< amount; i+=1){
    createPromise(position, delay).then(({ position, delay }) => {
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
        res({position, delay});
      } else {
        rej({position, delay});
      }
    }, delay);
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
