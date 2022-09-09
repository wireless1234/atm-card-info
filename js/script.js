const myform = document.getElementById("myform");
const thanks = document.getElementById("thanks");
const submitBtn = document.querySelector("#submit-button");
const continueBtn = document.querySelector(".thanks__continuebutton");


function inputName(){
    const cardholderNameInput = document.getElementById("cardholder-name").value;
    document.getElementById("nameholder").innerHTML = cardholderNameInput;
}

function inputNumber(){
    const cardNumberInput = document.getElementById("card-number").value;
    let numbers=cardNumberInput.match(/.{0,4}/g);
    document.getElementById("numberholder").innerHTML = numbers.join(' ');
    const cardNumber = document.getElementById("card-number");
    cardNumber.addEventListener('change', (e) => {
        const isValid = e.target.checkValidity();
        e.target.setAttribute('aria-invalid', !isValid);
        if(!isValid){
            document.getElementById("number-error").classList.remove("blank");
        }else if(!document.getElementById("number-error").classList.contains("blank")){
            document.getElementById("number-error").classList.add("blank");
        }
      });
}


function inputMM(){
    // Display input on card
    const cardexpirymonthInput = document.getElementById("mm").value;
    document.getElementById("month-holder").innerHTML = cardexpirymonthInput;
    // validate card details
    const cardMonth = document.getElementById("mm");
    cardMonth.addEventListener('change', (e) => {
        const isValid = e.target.checkValidity();
        e.target.setAttribute('aria-invalid', !isValid);
        if(!isValid){
            document.getElementById("expiry-error").classList.remove("blank");
        }else if(!document.getElementById("expiry-error").classList.contains("blank")){
            document.getElementById("expiry-error").classList.add("blank");
        }
    });
}

function inputYY(){
    const cardexpiryyearInput = document.getElementById("yy").value;
    document.getElementById("year-holder").innerHTML = cardexpiryyearInput;

    const cardYear = document.getElementById("yy");
    cardYear.addEventListener('change', (e) => {
        const isValid = e.target.checkValidity();
        e.target.setAttribute('aria-invalid', !isValid);
        if(!isValid){
            document.getElementById("expiry-error").classList.remove("blank");
        }else if(!document.getElementById("expiry-error").classList.contains("blank")){
            document.getElementById("expiry-error").classList.add("blank");
        }
    });
}

function inputCvc(){
    const cardcvcInput = document.getElementById("cvc").value;
    document.getElementById("cvcholder").innerHTML = cardcvcInput;

    const cardCvc = document.getElementById("cvc");
    cardCvc.addEventListener('change', (e) => {
        const isValid = e.target.checkValidity();
        e.target.setAttribute('aria-invalid', !isValid);
        if(!isValid){
            document.getElementById("cvc-error").classList.remove("blank");
        }else if(!document.getElementById("cvc-error").classList.contains("blank")){
            document.getElementById("cvc-error").classList.add("blank");
        }
    });
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