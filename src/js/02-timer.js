import Notiflix from 'notiflix';
// Описан в документации
import flatpickr from 'flatpickr';
// Дополнительный импорт стилей
import 'flatpickr/dist/flatpickr.min.css';

//Input to select a date
const inputDate = document.querySelector('#datetime-picker');

//Days digits selector
const daysDigits = document.querySelector('.value[data-days]');

//Hours digits selector
const hoursDigits = document.querySelector('.value[data-hours]');

//Minutes digits selector
const minutesDigits = document.querySelector('.value[data-minutes]');

//Seconds digits selector
const secondsDigits = document.querySelector('.value[data-seconds]');

//Start button
const startButton = document.querySelector('.button-start');
startButton.disabled = true;

//Interval var
let intervalID;

//// Declare selectedDate variable outside of functions
let selectedDate;

//Options for the date and time for flatpikr
const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    selectedDate = selectedDates[0];
    if (selectedDate < new Date()) {
      startButton.disabled = true;
      Notiflix.Notify.warning('Please choose a date in the future');
    } else {
      startButton.disabled = false;
    }
  },
};

flatpickr(inputDate, options);

//function for timer
function convertMs(ms) {
  // Number of milliseconds per unit of time
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  // Remaining days
  const days = Math.floor(ms / day);
  // Remaining hours
  const hours = Math.floor((ms % day) / hour);
  // Remaining minutes
  const minutes = Math.floor(((ms % day) % hour) / minute);
  // Remaining seconds
  const seconds = Math.floor((((ms % day) % hour) % minute) / second);

  return { days, hours, minutes, seconds };
}


//Timer digits update
function updateTimerDisplay({ days, hours, minutes, seconds }) {
  daysDigits.textContent = addLeadingZero(days);
  hoursDigits.textContent = addLeadingZero(hours);
  minutesDigits.textContent = addLeadingZero(minutes);
  secondsDigits.textContent = addLeadingZero(seconds);
}

//Start button event listener
startButton.addEventListener('click', () => {
  let diffMs = selectedDate - new Date();
  if (diffMs > 0) {
    intervalID = setInterval(() => {
      const timeObj = convertMs(diffMs);
      updateTimerDisplay(timeObj);
      diffMs -= 1000;
      if(diffMs < 0) {
        clearInterval(intervalID);
      }
    }, 1000);
  }
   
});


function addLeadingZero(value) {
  return value.toString().padStart(2, '0');
}
