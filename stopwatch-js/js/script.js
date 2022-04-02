const second = 1000;
const minute = second * 60;
const hour = minute * 60;
const day = hour * 24;


const nextYear = new Date('01/01/2023 00:00:00').getTime();
const newYear = new Date(`January 01 ${nextYear} 00:00:00`); /* Alocar o proximo ano dinâmicamente (VERIFICAR) */

let interval = setInterval(() => CountDown(), second);

function CountDown() {
    let currentTime = new Date(Date.now()).getTime();
    let difference = nextYear - currentTime;

    let currentDay = Math.floor(difference / day);
    let currentHour = Math.floor(difference % day / hour);
    let currentMinute = Math.floor(difference % hour / minute);
    let currentSecond = Math.floor(difference % minute / second);

    window.document.getElementById('count_day').innerText = currentDay < 10 ? '0' + currentDay : currentDay;
    window.document.getElementById('count_hour').innerText = currentHour < 10 ? '0' + currentHour : currentHour;
    window.document.getElementById('count_min').innerText = currentMinute < 10 ? '0' + currentMinute : currentMinute;
    window.document.getElementById('count_sec').innerText = currentSecond < 10 ? '0' + currentSecond : currentSecond;
}

/* 

secondTimer_text.textContent = second < 10 ? '0' + second : second;

const second = 1000;
const minute = second * 60;
const hour = minute * 60;
const day = hour * 24;

let count_down = new Date('03/03/2025 00:00:00').getTime();
let x = setInterval(() => countDown(), second);

function countDown() {
  let now = new Date(Date.now()).getTime();
  let diff = count_down - now;

  document.getElementById('days').innerText = Math.floor(diff / day);
  document.getElementById('hours').innerText = Math.floor(diff % day / hour);
  document.getElementById('minutes').innerText = Math.floor(diff % hour / minute);
  document.getElementById('seconds').innerText = Math.floor(diff % minute / second);
}

function resetCountdown() {
  clearInterval(x);
  let date_end = document.form_main.date_end.value;
  count_down = new Date(`${date_end} 00:00:00`).getTime();
  x = setInterval(() => countDown(), second);
}

*/