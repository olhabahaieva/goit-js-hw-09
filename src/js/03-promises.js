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

function onStart(){
 const promises = [...form].map((item, idx)=>{
  item.textContent = "";

  const promise = createPromise(idx);
  promise
  .then((value) => (item.textContent = value))
  .catch((err) => (item.textContent = err));
  return promise;
})
}

Promise.allSettled(promises).then((promise)=>{
  const isAllRej = promise.every(({ status }) => status === "rejected");
  const isAllRes = promise.every(({ status }) => status === "fulfilled");

  setTimeout(()=>{
    if(isAllRej){
      alert("Rejected");
    } else {
      alert("Success");
    }
    
  }, inputAmount);

})

function createPromise(position, delay) {
  return new Promise((res, rej)=>{
    const shouldResolve = Math.random() > 0.3;
    setTimeout(()=> {
      if (shouldResolve > 0.3) {
        res(`✅ Fulfilled promise ${position} in ${delay}ms`);
      } else {
        rej(`❌ Rejected promise ${position} in ${delay}ms`);
    }
   
  }, delay * 1000);
})
}

createPromise(2, 1500)
  .then(({ position, delay }) => {
    console.log(`✅ Fulfilled promise ${position} in ${delay}ms`);
  })
  .catch(({ position, delay }) => {
    console.log(`❌ Rejected promise ${position} in ${delay}ms`);
  });
