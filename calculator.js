let num1 = "";
let num2 = "";
let operator = "";
let result = "";
let operatorCount = 0;

function resetNums() {
  num1 = "";
  num2 = "";
  operator = "";
  result = "";
  operatorCount = 0;
}

const clear = document.querySelector("#clear");
const equal = document.querySelector("#equal");
const sum = document.querySelector("#sum");
const sub = document.querySelector("#sub");
const mul = document.querySelector("#mul");
const div = document.querySelector("#div");
const dot = document.querySelector("#dot");
const resultShow = document.querySelector("#result");
const operatorButtons = document.querySelectorAll(".pros");
const numbers = document.querySelectorAll(".btnum");
const calscreen = document.querySelector("#histext");

numbers.forEach((number) => {
  number.addEventListener("click", () => {
    if (operatorCount === 0) {
      num1 += number.textContent;
      resultShow.textContent = num1;
    } else if (operatorCount === 1) {
      num2 += number.textContent;
      resultShow.textContent = num2;
    } else {
      num2 += number.textContent;
      resultShow.textContent = num2;
    }
  });
});

operatorButtons.forEach((operatorButton) => {
  operatorButton.addEventListener("click", () => {
    operatorCount++;
    if (operatorCount == 2) {
      firstCalculate();

      num2 = "";
    } else if (operatorCount > 2) {
      nextCalculate();

      num2 = "";
    }

    operator = operatorButton.textContent;
    if (operatorCount === 1) {
      calscreen.textContent = num1 + " " + operator;
    } else {
      if (Number.isInteger(result)) {
        calscreen.textContent = result + " " + operator;
      } else {
        calscreen.textContent = parseFloat(result).toFixed(2) + " " + operator;
      }
    }
  });
});

function firstCalculate() {
  if (operator === "+") {
    result = parseFloat(num1) + parseFloat(num2);
  } else if (operator === "-") {
    result = parseFloat(num1) - parseFloat(num2);
  } else if (operator === "*") {
    result = parseFloat(num1) * parseFloat(num2);
  } else if (operator === "/") {
    result = parseFloat(num1) / parseFloat(num2);
  }
  if (Number.isInteger(result)) {
    resultShow.textContent = result;
  } else {
    resultShow.textContent = parseFloat(result).toFixed(2);
  }
}

function nextCalculate() {
  switch (operator) {
    case "+":
      result = parseFloat(result) + parseFloat(num2);
      break;
    case "-":
      result = parseFloat(result) - parseFloat(num2);
      break;
    case "*":
      result = parseFloat(result) * parseFloat(num2);
      break;
    case "/":
      result = parseFloat(result) / parseFloat(num2);
      break;
  }
  if (Number.isInteger(result)) {
    resultShow.textContent = result;
  } else {
    resultShow.textContent = parseFloat(result).toFixed(2);
  }
}

equal.addEventListener("click", () => {
  calscreen.textContent = "";
  if (operatorCount === 1) {
    firstCalculate();
    resetNums();
  } else if (operatorCount > 1) {
    nextCalculate();
    resetNums();
  }
});

clear.addEventListener("click", () => {
  resetNums();
  resultShow.textContent = "";
  calscreen.textContent = "";
});
