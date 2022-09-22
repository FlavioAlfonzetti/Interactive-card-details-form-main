const form = document.getElementById('form')
const cardholderName = document.getElementById('cardholder-name')
const cardNumber = document.getElementById('card-number')
const month = document.getElementById('month')
const year = document.getElementById('year')
const ccv = document.getElementById('ccv')

form.addEventListener('submit', e => {
    e.preventDefault();

    validateInputs();
});

const setError = (element, message) => {
    const inputControl = element.parentElement.parentElement;
    const errorDisplay = inputControl.querySelector('.error');

    errorDisplay.innerText = message;
    inputControl.classList.add('error');
}

const setError2 = (element, message) => {
    const inputControl = element.parentElement.parentElement.parentElement;
    const errorDisplay = inputControl.querySelector('.error');
    const errorDisplay2 = inputControl.querySelector('.error-fix');

    errorDisplay.innerText = message;
    errorDisplay2.innerText = message;
    inputControl.classList.add('error');
}

const validateInputs = () => {
    const cardholderNameValue = cardholderName.value.trim();
    const cardNumberValue = cardNumber.value.trim();
    const monthValue = month.value.trim();
    const yearValue = year.value.trim();
    const ccvValue = ccv.value.trim();

    if(cardholderNameValue === '') {
        setError(cardholderName, 'Cardholder name is required');
    } /* elif (cardNumberValue) */

    if(cardNumberValue === '') {
        setError(cardNumber, 'Card number is required');
    } 

    if(monthValue === '') {
        setError2(month, "Can't be blank");
    } else if (monthValue.length < 2 ) {
        setError2(month, 'Invalid month')
    } 

    if(yearValue === '') {
        setError2(year, "Can't be blank");
    } else if (yearValue.length < 2 ) {
        setError2(year, 'Invalid year')
    } 
    
    if(ccvValue === '') {
        setError2(ccv, "Can't be blank");
    } else if (ccvValue.length < 3 ) {
        setError2(ccv, 'Invalid year')
    } 
};

/* ========================================================================================== */

const cleaveCC = new Cleave("#card-number", {
    creditCard: true,
    delimiter: " ",
    onCreditCardTypeChanged: function (type) {
        console.log(type);
    }
})


const cleaveMonth = new Cleave("#month", {
    date: true,
    datePattern: ["m"],
})

const cleaveYear = new Cleave("#year", {
    date: true,
    datePattern: ["y"],
})

const cleaveCCV = new Cleave("#ccv", {
    blocks: [3],
})

$("#card-number").keyup(function() {
    $("#info-numbers").text(this.value)
})

$("#ccv").keyup(function() {
    $("#card-ccv").text(this.value)
})

$("#month").keyup(function() {
    $("#info-month").text(this.value)
})

$("#year").keyup(function() {
    $("#info-year").text(this.value)
})

$("#cardholder-name").keyup(function() {
    $("#info-name").text(this.value)
})


