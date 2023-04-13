// Описан в документации
import flatpickr from 'flatpickr';
// Дополнительный импорт стилей
import 'flatpickr/dist/flatpickr.min.css';

//Input to select a date
const inputDate = document.querySelector('#datetime-picker');

//Days digits selector
const daysDigits = document.querySelector('.value[data-days');

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
      window.alert('Please choose a date in the future');
    } else {
      console.log(selectedDate);
      startButton.disabled = false;
      options.defaultDate = selectedDate;
      const { day, hour, minute, second } = convertMs(selectedDate - new Date());
      
      daysDigits.textContent = addLeadingZero(Math.floor(diffMs / day));
    hoursDigits.textContent = addLeadingZero(Math.floor((diffMs % day) / hour));
    minutesDigits.textContent = addLeadingZero(
      Math.floor(((diffMs % day) % hour) / minute)
    );
    secondsDigits.textContent = addLeadingZero(
      Math.floor((((diffMs % day) % hour) % minute) / second)
    );
    }
  },
};

flatpickr(inputDate, options);

//function for timer
function convertMs(ms) {
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  const days = Math.floor(ms / day);
  const hours = Math.floor((ms % day) / hour);
  const minutes = Math.floor(((ms % day) % hour) / minute);
  const seconds = Math.floor((((ms % day) % hour) % minute) / second);
  if (ms <= 0) {
    clearInterval(intervalID);
    startButton.disabled = true;
  }

  if (!startButton.disabled) {
    const diffMs = selectedDate - new Date();

    daysDigits.textContent = addLeadingZero(Math.floor(diffMs / day));
    hoursDigits.textContent = addLeadingZero(Math.floor((diffMs % day) / hour));
    minutesDigits.textContent = addLeadingZero(
      Math.floor(((diffMs % day) % hour) / minute)
    );
    secondsDigits.textContent = addLeadingZero(
      Math.floor((((diffMs % day) % hour) % minute) / second)
    );

    return { days, hours, minutes, seconds };
  } else {
    return { days: 00, hours: 00, minutes: 00, seconds: 00 };
  }
}

console.log(convertMs(2000)); // {days: 0, hours: 0, minutes: 0, seconds: 2}
console.log(convertMs(140000)); // {days: 0, hours: 0, minutes: 2, seconds: 20}
console.log(convertMs(24140000)); // {days: 0, hours: 6 minutes: 42, seconds: 20}

//Start button event listener
startButton.addEventListener('click', () => {
  const diffMs = selectedDate - new Date();
  if (diffMs > 0) {
    intervalID = setInterval(() => {
      const remainingMs = selectedDate - new Date();
      convertMs(remainingMs);
    }, 1000);
  }
});

function addLeadingZero(value) {
  return value.toString().padStart(2, '0');
}
