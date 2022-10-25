const previousNumber = document.querySelector(".previousNumber");
const mathSign = document.querySelector("mathSign");
const currentNumber = document.querySelector("currentNumber");

const numberButtons = document.querySelectorAll(".number");
const operatorButtons = document.querySelectorAll(".operator");

const equalBtn = document.querySelector(".equal");
const clearBtn = document.querySelector(".clear");
const history = document.querySelector(".history");
const historyBtn = document.querySelector("history__button");

let result = "";




operatorButtons.forEach((button) => button.addEventListener("click", operate));
numberButtons.forEach((button) =>
  button.addEventListener("click", displayNumber)
);
equalBtn.addEventListener("click", showresult);
clearBtn.addEventListener("click", clearScreen);
historyBtn.addEventListener("click", clearHistory);
