const multipleNumberOne = document.getElementById("multipleNumberOne");
const multipleNumberTwo = document.getElementById("multipleNumberTwo");
const multipleResult = document.getElementById("multipleResult");
const calcBtnMulti = document.getElementById("calcBtnMulti");

  calcBtnMulti.onclick = function calcMulti(){
  const numberOne = Number(multipleNumberOne.value);
  const numberTwo = Number(multipleNumberTwo.value);
  multipleResult.textContent = numberOne * numberTwo;
  }


const devideNumberOne = document.getElementById("devideNumberOne");
const devideNumberTwo = document.getElementById("devideNumberTwo");
const devideResult = document.getElementById("devideResult");
const calcBtnDevide = document.getElementById("calcBtnDevide");

  calcBtnDevide.onclick = function calcDevide(){
  const numberOne = Number(devideNumberOne.value);
  const numberTwo = Number(devideNumberTwo.value);
  devideResult.textContent = numberOne / numberTwo;
  }

const subtractionNumberOne = document.getElementById("subtractionNumberOne");
const subtractionNumberTwo = document.getElementById("subtractionNumberTwo");
const subtractionResult = document.getElementById("subtractionResult");
const calcBtnSubtraction = document.getElementById("calcBtnSubtraction");

  calcBtnSubtraction.onclick = function calcSubstrac(){
  const numberOne = Number(subtractionNumberOne.value);
  const numberTwo = Number(subtractionNumberTwo.value);
  subtractionResult.textContent = numberOne - numberTwo;
  }

const additionNumberOne = document.getElementById("additionNumberOne");
const additionNumberTwo = document.getElementById("additionNumberTwo");
const additionResult = document.getElementById("additionResult");
const calcBtnAddition = document.getElementById("calcBtnAddition");

   calcBtnAddition.onclick = function calcAddit(){
  const numberOne = Number(additionNumberOne.value);
  const numberTwo = Number(additionNumberTwo.value);
  additionResult.textContent = numberOne + numberTwo;
  }

const percentNumberOne = document.getElementById("percentNumberOne");
const percentNumberTwo = document.getElementById("percentNumberTwo");
const percentResult = document.getElementById("percentResult");
const calcBtnPercent = document.getElementById("calcBtnPercent");

  calcBtnPercent.onclick = function calcPercent(){
  const numberOne = Number(percentNumberOne.value);
  const numberTwo = Number(percentNumberTwo.value);
  percentResult.textContent = `${(numberOne * numberTwo) / 100} %`;
  }
