/* INSERT */
function insert(num) {
    window.document.getElementById('result').innerHTML += num; /* exibindo cada valor/character concatenando-os */
}

/* CLEAn */
function clean() {
    window.document.getElementById('result').innerHTML = ""; /* deixando o espaço vazio */
}

/* BACKSPACE */
function backspace() {
    let result = window.document.getElementById('result').innerHTML;
    window.document.getElementById('result').innerHTML = result.substring(0, result.length - 1);

    /* 
    - exibindo uma parte específica da string (0 até o ultimo elemento - 1).
    - substring retorna uma parte de uma string (result).
    - .innerHTML não apenas é usado para escrever em elementos com tags HTML mas também para herdar os elementos
    filhos a variável que está se relacionando com o elemento (let result = .....innerHTML;).
    */
}

/* CALCULATE */
function calculate() {
    let number = window.document.getElementById('result').innerHTML; /* relacionando e herdando os child do elemento 'result' */

    /* SE existe valores */
    if (number) {
        window.document.getElementById('result').innerHTML = eval(number); /* eval retorna o resultado de uma expressão de dentro de uma string */

    } else {
        window.document.getElementById('result').innerHTML = `0`;
    }
}