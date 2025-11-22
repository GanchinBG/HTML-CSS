const myCheckBox = document.getElementById("myCheckBox");
const visaBtn = document.getElementById("visaBtn");
const masterCardBtn = document.getElementById("masterCardBtn");
const payPalBtn = document.getElementById("payPalBtn");
const mySubmit = document.getElementById("mySubmit");
const paymentResult = document.getElementById("paymentResult");
const subResult = document.getElementById("subResult");


mySubmit.onclick = function(){

  (myCheckBox.checked) ?  subResult.textContent = `You are subscribed!` :
                          subResult.textContent = `You are NOT subscribed!`;


  if(visaBtn.checked){
    paymentResult.textContent = `You are paying with Visa`;
  }else if(masterCardBtn.checked){
    paymentResult.textContent = `You are paying with MasterCard`;
  }else if(payPalBtn.checked){
    paymentResult.textContent = `You are paying with PayPal`;
  }else {
    paymentResult.textContent = `You must select payment method`;
  }
}