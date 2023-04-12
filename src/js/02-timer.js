// Описан в документации
import flatpickr from "flatpickr";
// Дополнительный импорт стилей
import "flatpickr/dist/flatpickr.min.css";

//Input to select a date
const inputDate = document.querySelector('#datetime-picker');

//Start button
const startButton = document.querySelector('.button-start');
startButton.disabled = true;

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

