const previousNumber = document.querySelector(".previousNumber");
const mathSign = document.querySelector(".mathSign");
const currentNumber = document.querySelector(".currentNumber");

const numberButtons = document.querySelectorAll(".number");
const operatorButtons = document.querySelectorAll(".operator");

const equalBtn = document.querySelector(".equal");
const clearBtn = document.querySelector(".clear");
const history = document.querySelector(".history");
const historyBtn = document.querySelector("history__button");

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
  if (previousNumber.innerHTML) {
  }
}

operatorButtons.forEach((button) => button.addEventListener("click", operate));
numberButtons.forEach((button) =>
  button.addEventListener("click", displayNumber)
);
// equalBtn.addEventListener("click", showresult);
//clearBtn.addEventListener("click", clearScreen);
//historyBtn.addEventListener("click", clearHistory);
