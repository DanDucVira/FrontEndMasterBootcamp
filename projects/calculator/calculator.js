let runnungTotal = 0;
let buffer = "0";
let previousOperator;

const screen = document.querySelector('.screen');


function buttonClick(value) {
    if (isNAN(value)) {
        //this is not a number
        handleSymbol(value);
    } else {
        //this is a number
        handleSymbol(value);
    }
}

function handleSymbol(symbol) {}

function handleNumber(numberString) {
    if (buffer === "0") {
        buffer = numberString;
    } else {
        buffer += numberString;
    }
}

function init() {
    document.querySelector('.calc-buttons')
        .addEventListener('click', function (event) {
            buttonClick(event.target.innerText);
        })
}
init();