// Описан в документации
import flatpickr from "flatpickr";
// Дополнительный импорт стилей
import "flatpickr/dist/flatpickr.min.css";

//Input to select a date
const inputDate = document.querySelector('#datetime-picker');

flatpickr(inputDate);