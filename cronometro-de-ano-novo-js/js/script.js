/*
Variáveis de tempo:
- Vamos utilizar dos métodos de Date.
- Date retorna valores de tempo em ms (milissegundos)
- Necessário realizar o cálculo de conversão de ms para cada variável
*/
const second = 1000; /* 1 s == 1000 ms */
const minute = second * 60; /* 1 minuto tem 60 segundos */
const hour = minute * 60; /* 1 hora tem 60 minutos */
const day = hour * 24; /* 1 dia tem 24 horas */

const nextYear = new Date().getFullYear() + 1; /* Recebendo o ano atual do sistema (+ 1 para ter o próximo; utilizado no script) */
const newYear = new Date(`January 01 ${nextYear} 00:00:00`); /* Ajustando dinâmicamente o próximo ano do cálculo */

/* 
setInterval:
- Precisa ser instânciado (declarado).
- Faz chamadas de funções e métodos repetidamente com ajuste de intervalo.
- setInterval (<função>, <tempo>(second == 1000)).
- Na própria chamada é utilizado também o "array function".
*/

/*
Array Function:
- 
*/
let interval = setInterval(() => CountDown(), second);

window.document.getElementById('nextYear').innerText = nextYear; /* Apenas exibindo o próximo ano */

function CountDown() {
    let currentTime = new Date(); /* Tempo atual (millisegundos) */
    let difference = newYear - currentTime; /* Pegando em ms o tempo restante até o PRÓXIMO ANO */

    /* 
    Cálculos para as variáveis:
    - Lembrando que as variáveis em questão estão guardando valores em ms (milissegundos).
    - 
    */
    let currentDay = Math.floor(difference / day);
    let currentHour = Math.floor((difference % day) / hour);
    let currentMinute = Math.floor((difference % hour) / minute);
    let currentSecond = Math.floor((difference % minute) / second);

    /* 
    Exibindo o resultado:
    - Utilizando CONDICIONAL TERNÁRIO para melhorar a visualização.
    */
    window.document.getElementById('count_day').innerText = currentDay < 10 ? '0' + currentDay : currentDay;
    window.document.getElementById('count_hour').innerText = currentHour < 10 ? '0' + currentHour : currentHour;
    window.document.getElementById('count_min').innerText = currentMinute < 10 ? '0' + currentMinute : currentMinute;
    window.document.getElementById('count_sec').innerText = currentSecond < 10 ? '0' + currentSecond : currentSecond;
} 