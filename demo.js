function appendToDisplay(value) {
    document.getElementById("result").value += value;
}

function clearDisplay() {
    document.getElementById("result").value = "";
}

function deleteLast() {
    let currentValue = document.getElementById("result").value;
    document.getElementById("result").value = currentValue.substring(0, currentValue.length - 1);
}

function add() {
    document.getElementById("result").value += "+";
}

function sub() {
    document.getElementById("result").value += "-";
}

function mul() {
    document.getElementById("result").value += "*";
}

function div() {
    document.getElementById("result").value += "/";
}

function mod() {
    document.getElementById("result").value += "%";
}

function evaluateExpression() {
    let result = eval(document.getElementById("result").value);
    document.getElementById("result").value = result;
}


