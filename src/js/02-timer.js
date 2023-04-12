// Описан в документации
import flatpickr from "flatpickr";
// Дополнительный импорт стилей
import "flatpickr/dist/flatpickr.min.css";

//Input to select a date
const inputDate = document.querySelector('#datetime-picker');

//Start button
const startButton = document.querySelector('.button-start');
startButton.disabled = true;

//Start button event listener
startButton.addEventListener('click', convertMs());

//Date today
const today = new Date();

//Options for the date and time for flatpikr
const options = {
    enableTime: true,
    time_24hr: true,
    defaultDate: new Date(),
    minuteIncrement: 1,
    onClose(selectedDates) {
        const selectedDate = selectedDates[0];
        if(selectedDate < today){
            startButton.disabled = true;
            window.alert("Please choose a date in the future");
          } else{
            console.log(selectedDates[0]);
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
  
  console.log(convertMs(2000)); // {days: 0, hours: 0, minutes: 0, seconds: 2}
  console.log(convertMs(140000)); // {days: 0, hours: 0, minutes: 2, seconds: 20}
  console.log(convertMs(24140000)); // {days: 0, hours: 6 minutes: 42, seconds: 20}

