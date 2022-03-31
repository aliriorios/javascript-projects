function insert(num) {
    window.document.getElementById('result').innerHTML += num;
}

function clean() {
    window.document.getElementById('result').innerHTML = "";
}

function backspace() {
    let result = window.document.getElementById('result').innerHTML;
    window.document.getElementById('result').innerHTML = result.substring(0, result.length - 1);
}

function calculate() {
    let number = window.document.getElementById('result').innerHTML;

    if (number) {
        window.document.getElementById('result').innerHTML = eval(number);

    } else {
        window.document.getElementById('result').innerHTML = `0`;
    }
}