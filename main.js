const previousNumber = document.querySelector(".previousNumber");
const mathSign = document.querySelector(".mathSign");
const currentNumber = document.querySelector(".currentNumber");

const numberButtons = document.querySelectorAll(".number");
const operatorButtons = document.querySelectorAll(".operator");

const equalBtn = document.querySelector(".equal");
const clearBtn = document.querySelector(".clear");
const history = document.querySelector(".history__results");
const historyBtn = document.querySelector(".history__button");

let result = "";

function displayNumber() {
  if (this.textContent === "." && currentNumber.innerHTML.includes(".")) return;
  if (this.textContent === "." && currentNumber.innerHTML === "")
    return (currentNumber.innerHTML = "0.");
  currentNumber.innerHTML += this.textContent;
}

function operate() {
  if (this.textContent === "-" && currentNumber.innerHTML === "") {
    currentNumber.innerHTML = "-";
    return;
  } else if (currentNumber.innerHTML === "") {
    return;
  }
  if (mathSign !== "") {
    showresult();
  }
  previousNumber.innerHTML = currentNumber.innerHTML;
  mathSign.innerHTML = this.textContent;
  currentNumber.innerHTML = "";
}

function showresult() {
  if (previousNumber.innerHTML === "" || currentNumber.innerHTML === "") return;

  let a = Number(currentNumber.innerHTML);
  let b = Number(previousNumber.innerHTML);
  let operator = mathSign.innerHTML;

  switch (operator) {
    case "+":
      result = a + b;
      break;
    case "-":
      result = b - a;
      break;
    case "*":
      result = a * b;
      break;
    case "/":
      if (a === 0) {
        result = 0;
      } else {
        result = b / a;
      }
      break;
    case "^":
      result = b ** a;
      break;
  }

  addToHistory();
  historyBtn.classList.add("history__button--active");

  currentNumber.innerHTML = result;
  previousNumber.innerHTML = "";
  mathSign.innerHTML = "";
}

function addToHistory() {
  const newHisoryItem = document.createElement("li");
  newHisoryItem.innerHTML = `${previousNumber.innerHTML} ${mathSign.innerHTML} ${currentNumber.innerHTML} = ${result}`;
  newHisoryItem.classList.add("history__results__item");
  history.appendChild(newHisoryItem);
}

function clearHistory() {
  history.innerHTML = "";
  if (history.innerHTML === "") {
    historyBtn.classList.remove("history__button--active");
  }
}

function clearScreen() {
  result = "";
  currentNumber.innerHTML = "";
  mathSign.innerHTML = "";
  previousNumber.innerHTML = "";
}

operatorButtons.forEach((button) => button.addEventListener("click", operate));
numberButtons.forEach((button) =>
  button.addEventListener("click", displayNumber)
);
equalBtn.addEventListener("click", showresult);
clearBtn.addEventListener("click", clearScreen);
historyBtn.addEventListener("click", clearHistory);
