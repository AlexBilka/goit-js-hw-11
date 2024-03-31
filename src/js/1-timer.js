// ================ import modules ================

import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';

import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

// ================ global variables ================

const inputDate = document.querySelector('#datetime-picker');
const startBtn = document.querySelector('[data-start]');
const timerValue = document.querySelectorAll('.value');

startBtn.disabled = true;
let userSelectedDate;

// ================ flatpickr module initialization ================

flatpickr(inputDate, {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    userSelectedDate = selectedDates[0];
    checkDate();
  },
});

// ================ selected date VALIDATION ================

function checkDate() {
  const validDate = userSelectedDate.getTime() - Date.now();
  if (validDate < 1) {
    iziToast.error({
      position: 'topRight',
      message: 'Please choose a date in the future',
    });
    startBtn.disabled = true;
  } else {
    startBtn.disabled = false;
  }
}

// ================ 'START' button event ================

startBtn.addEventListener('click', startTimer);

function startTimer() {
  const intervalId = setInterval(() => {
    let timeInterval = userSelectedDate.getTime() - Date.now();
    if (timeInterval < 1) {
      clearInterval(intervalId);
      return;
    }

    // if (timeInterval >= 60 * 1000 * 10) {
    //   timeInterval += 60 * 60 * 1000; // compensation for the lost hour
    // }

    startBtn.disabled = true; // elements is disabled
    if (timeInterval > 1000) {
      inputDate.disabled = true;
    } else {
      inputDate.disabled = false;
    }

    const timerToMs = convertMs(timeInterval);

    for (let i = 0; i < timerValue.length; i += 1) {
      timerValue[i].textContent = addLeadingZero(
        timerToMs[Object.keys(timerToMs)[i]] // add values to the markup
      );
    }
  }, 1000);
}

// ================ formating values to '00' ================

function addLeadingZero(value) {
  return value.toString().padStart(2, '0');
}

// ================ convert DATE to MS ================

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
