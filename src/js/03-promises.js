import Notiflix from 'notiflix';
const form = document.querySelector('form')
form.addEventListener('submit', onSubmitBtnClick)


function onSubmitBtnClick(event) {
 event.preventDefault()


 const formElements = event.target.elements


 let delay = parseInt(formElements.delay.value)
 const step = parseInt(formElements.step.value)
 const amount = parseInt(formElements.amount.value)


 for (let position = 1; position <= amount; position += 1) {
   createPromise(position, delay)
   .then(({ position, delay }) => {
     Notiflix.Notify.success(`✅ Fulfilled promise ${position} in ${delay}ms`);
   })
   .catch(({ position, delay }) => {
     Notiflix.Notify.failure(`❌ Rejected promise ${position} in ${delay}ms`);
   });

   delay += step
 }
}




function createPromise(position, delay) {
 const shouldResolve = Math.random() > 0.3;
 return new Promise((resolve, reject) => {
   setTimeout(() => {
     if (shouldResolve) {
       resolve({ position, delay })


     } else {
       reject({ position, delay })
     }
   }, delay);
 })
};



