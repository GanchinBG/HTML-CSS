const seven = document.getElementById("seven");
const eight = document.getElementById("eight");
const nine = document.getElementById("nine");
const multiplication = document.getElementById("multiplication");

const four = document.getElementById("four");
const five = document.getElementById("five");
const six = document.getElementById("six");
const subtraction = document.getElementById("subtraction");

const one = document.getElementById("one");
const two = document.getElementById("two");
const three = document.getElementById("three");
const addition = document.getElementById("addition");

const decimal = document.getElementById("decimal");
const zero = document.getElementById("zero");
const devide = document.getElementById("devide");
const equal = document.getElementById("equal");

const display = document.getElementById("display");
const clear = document.getElementById("clear");

seven.addEventListener("click", () => appendNumber("7"));
eight.addEventListener("click", () => appendNumber("8"));
nine.addEventListener("click", () => appendNumber("9"));

four.addEventListener("click", () => appendNumber("4"));
five.addEventListener("click", () => appendNumber("5"));
six.addEventListener("click", () => appendNumber("6"));

one.addEventListener("click", () => appendNumber("1"));
two.addEventListener("click", () => appendNumber("2"));
three.addEventListener("click", () => appendNumber("3"));

zero.addEventListener("click", () => appendNumber("0"));

clear.addEventListener("click", () => {
  display.value = "";
});

function appendNumber(num) {
  display.value += num;
}

function appendOperator(op) {
  const lastChar = display.value.slice(-1);

  
  if ("+-*/".includes(lastChar)) return;

  
  if (display.value === "") return;

  display.value += op;
}

addition.addEventListener("click", () => appendOperator("+"));
subtraction.addEventListener("click", () => appendOperator("-"));
multiplication.addEventListener("click", () => appendOperator("*"));
devide.addEventListener("click", () => appendOperator("/"));

equal.addEventListener("click", () => {
  try {
    display.value = eval(display.value);
  } catch (e) {
    display.value = "Error";
  }
});

