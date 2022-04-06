const second = 1000;
const minute = second * 60;
const hour = minute * 60;
const day = hour * 24;

const nextYear = new Date().getFullYear() + 1;
const newYear = new Date(`January 01 ${nextYear} 00:00:00`);

let interval = setInterval(() => CountDown(), second);

window.document.getElementById('nextYear').innerText = nextYear;

function CountDown() {
    let currentTime = new Date();
    let difference = newYear - currentTime;

    let currentDay = Math.floor(difference / day);
    let currentHour = Math.floor((difference % day) / hour);
    let currentMinute = Math.floor((difference % hour) / minute);
    let currentSecond = Math.floor((difference % minute) / second);

    window.document.getElementById('count_day').innerText = currentDay < 10 ? '0' + currentDay : currentDay;
    window.document.getElementById('count_hour').innerText = currentHour < 10 ? '0' + currentHour : currentHour;
    window.document.getElementById('count_min').innerText = currentMinute < 10 ? '0' + currentMinute : currentMinute;
    window.document.getElementById('count_sec').innerText = currentSecond < 10 ? '0' + currentSecond : currentSecond;
} 


/* BACKUP ESTÁTICO ------------------------------------------------------------------------------------------------ */
/* 
const second = 1000;
const minute = second * 60;
const hour = minute * 60;
const day = hour * 24;

const nextYear = new Date('01/01/2023 00:00:00').getTime();
const newYear = new Date(`January 01 ${nextYear} 00:00:00`);

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
*/