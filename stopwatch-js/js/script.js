const secondTimer_text = window.document.getElementById('count_sec');
const minuteTimer_text = window.document.getElementById('count_min');
const hourTimer_text = window.document.getElementById('count_hour');
const dayTimer_text = window.document.getElementById('count_day');

const nextYear = new Date().getFullYear + 1;
const newYear = new Date(`January 01 ${nextYear} 00:00:00`);

const CountDown = () => {
    const currentTime = new Date();
    const diff = newYear - currentTime;

    const second = Math.floor(diff / 1000) % 60;
    const minute = Math.floor(diff / 1000 / 60) % 60;
    const hour = Math.floor(diff / 1000 / 60 / 60) % 24;
    const day = Math.floor(diff / 1000 / 60 / 60 / 24);

    secondTimer_text.textContent = second < 10 ? '0' + second : second;
}

setInterval(CountDown, 1000);