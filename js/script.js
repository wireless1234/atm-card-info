const myform = document.getElementById("myform");
const thanks = document.getElementById("thanks");
const submitBtn = document.querySelector("#submit-button");
const continueBtn = document.querySelector(".thanks__continuebutton");


function inputName(){
    const cardholderNameInput = document.getElementById("cardholder-name").value;
    document.getElementById("nameholder").innerHTML = cardholderNameInput;
}

function inputNumber(){
    const cardNumberInput = document.getElementById("cardholder-phone").value;
    document.getElementById("numberholder").innerHTML = cardNumberInput;
}

function inputMM(){
    const cardexpirymonthInput = document.getElementById("mm").value;
    document.getElementById("month-holder").innerHTML = cardexpirymonthInput;
}

function inputYY(){
    const cardexpiryyearInput = document.getElementById("yy").value;
    document.getElementById("year-holder").innerHTML = cardexpiryyearInput;
}

function inputCvc(){
    const cardcvcInput = document.getElementById("cvc").value;
    document.getElementById("cvcholder").innerHTML = cardcvcInput;
}



submitBtn.addEventListener("click", () => {
    myform.classList.add('blank')
    thanks.classList.remove('blank')
    thanks.classList.add("flex")
});

continueBtn.addEventListener("click", () => {
    thanks.classList.add('blank')
    thanks.classList.remove('flex')
    myform.classList.remove('blank')

});