//Set the name field to be focues on page load
const name = document.getElementById('name');
name.focus();

//Select the other job role field and set it to be initially hidden
const otherJobRole = document.getElementById('other-title');
otherJobRole.style.visibility = 'hidden';

//Make the job role field visible if "Other" is selected
const jobField = document.getElementById('title');
jobField.addEventListener('change', () => {
    if (jobField[5].selected) {
        otherJobRole.style.visibility = 'visible';
    } else {
        otherJobRole.style.visibility = 'hidden';
    }
})

//Set the initial t-shirt color selection to be "Please Select T-shirt theme"
const tshirtDesign = document.getElementById('design');
const tshirtColor = document.getElementById('color');

window.addEventListener('load', () => {
    for (let i = 0; i < 6; i++) {
        tshirtColor[i].style.display = 'none'
    }
    const opt1 = document.createElement('option')
    opt1.selected = 'selected';
    opt1. text = 'Please select a T-shirt theme';
    tshirtColor.add(opt1, tshirtColor.options[0]);
})

//Ensuring that the proper colour options show up for the "JS Puns" tshirt

tshirtDesign.addEventListener('change', () => {
    color.style.display = 'block';
    if (tshirtDesign[1].selected) {
        for (let i = 1; i <= 3; i++) {
            tshirtColor[i].style.display = 'block';
        }
        for (let i = 4; i <= 6; i++) {
            tshirtColor[i].style.display = 'none';
        }
        tshirtColor[1].selected = 'selected';
        tshirtColor[0].style.display = 'none';

//This ensures that the proper colour options show up for "I love JS" shirts
    } else if (tshirtDesign[2].selected) {
        for (let i = 1; i <= 3; i++) {
            tshirtColor[i].style.display = 'none';
        }
        for (let i = 4; i <= 6; i++) {
            tshirtColor[i].style.display = 'block';
        }
        tshirtColor[4].selected = 'selected';
        tshirtColor[0].style.display = 'none';

//This ensures that if it goes back to "Select Theme" all colour options disappear
    } else {
        for (let i = 1; i <=6; i++) {
            tshirtColor[i].style.display = 'none';
        }
        tshirtColor.style.display = 'block';
        tshirtColor[0].selected = 'selected';
    }
})

//Create a new element that shows the total cost of 
const activities = document.querySelector('.activities');
const totalPrice = document.createElement('p');
let totalPriceValue = 0;
totalPrice.textContent = `Total Cost: $${totalPriceValue}`
activities.appendChild(totalPrice);

//Add event listener with a function to dynamically change the total cost of the events selected
activities.addEventListener('change', (e) => {
    const testing = e.target.name;
    const dataCost = +e.target.getAttribute('data-cost');
    if (e.target.checked) {
        totalPriceValue += dataCost;
        totalPrice.textContent = `Total Cost: $${totalPriceValue}`;
    } else {
        totalPriceValue -= dataCost;
        totalPrice.textContent = `Total Cost: $${totalPriceValue}`;
    }

//Disabling events if the time of the events are the same
    const eventDetails = e.target.getAttribute('data-day-and-time');
    const activityDetails = document.querySelectorAll('input[data-day-and-time]');
    
    for (let i = 0; i < activityDetails.length; i++) {
        if (eventDetails === activityDetails[i].getAttribute('data-day-and-time') && e.target.name !== activityDetails[i].name) {
            if (e.target.checked) {
                activityDetails[i].disabled = true;
            } else {
                activityDetails[i].disabled = false;
            }
        }
    }
})

//Hiding the "Select Payment Method" option from the dropdown
const paymentSelection = document.getElementById('payment');
const creditCard = document.getElementById('credit-card');
const payPal = document.getElementById('paypal');
payPal.style.display = 'none';
const bitcoin = document.getElementById('bitcoin');
bitcoin.style.display = 'none';
paymentSelection[0].style.display = 'none';
paymentSelection[1].selected = 'selected';

paymentSelection.addEventListener('change', () => {
    for (let i = 1; i < paymentSelection.length; i++) {
        if (paymentSelection[i].selected) {
            
        }
    }
    if (paymentSelection[1].selected) {
        payPal.style.display = 'none';
        bitcoin.style.display = 'none';
        creditCard.style.display = 'block';
    } else if (paymentSelection[2].selected) {
        payPal.style.display = 'block';
        bitcoin.style.display = 'none';
        creditCard.style.display = 'none';
    } else if (paymentSelection[3].selected) {
        payPal.style.display = 'none';
        bitcoin.style.display = 'block';
        creditCard.style.display = 'none';
    }
})

//If required fields are not properly completed, do not allow the form to submit
const submitButton = document.getElementsByTagName('button');
submitButton[0].addEventListener('click', (e) => {
    if (!masterFunction()) {
        e.preventDefault();
    } 
})

//A function to validate the "Name" field
function nameValidation() {
    if (name.value == '') {
        name.style.border = '1px solid red';
        return false;
    } else {
        name.style.border = '';
        return true;
    }
}

const email = document.getElementById('mail');
//A function to validate the "Email" field
function emailValidation() {
    const emailContent = email.value;
    const emailTest = /^[^@]+@[^@.]+\.[a-z]+$/i.test(emailContent);
    if (emailTest) {
        email.style.border = '';
        newP.style.display = 'none';
        return true;
    } else {
        email.style.border = '1px solid red';
        return false;
    }
}

//A function to validate the selection of at least one activity
function activityValidation() {
    const checkboxes = document.querySelectorAll('input[type=checkbox]');
    const selected = [];
    for (let i = 0; i < checkboxes.length; i++) {
        if (checkboxes[i].checked) {
            selected.push(checkboxes[i].value);
        }
    }
    if (selected.length > 0) {
        activities.style.border = '';
        return true;
    } else {
        activities.style.border = '1px solid red';
        return false;
    }
}

//A function to validate the credit card number
const cardNumber = document.getElementById('cc-num');
function creditCardNumber() {
    const ccNumberValid = /^\d{13,16}$/.test(cardNumber.value);
    if (ccNumberValid) {
        cardNumber.style.border = '';
        return true;
    } else {
        cardNumber.style.border = '1px solid red';
        return false;
    }
}

//A function to validate the zipcode for the credit card field

function creditCardZip() {
    const zipCode = document.getElementById('zip');
    const ccZipValid = /^\d{5}$/.test(zipCode.value);
    if (ccZipValid) {
        zipCode.style.border = '';
        return true;
    } else {
        zipCode.style.border = '1px solid red';
        return false;
    }
}

//A function to validate the CVV for the credit card field

function creditCardCVV() {
    const cvv = document.getElementById('cvv');
    const ccCVVValid = /^\d{3}$/.test(cvv.value);
    if (ccCVVValid) {
        cvv.style.border = '';
        return true;
    } else {
        cvv.style.border = '1px solid red';
        return false;
    }
}
//Ensures that all of the credit card fields are valid
function creditCardValidation() {
    creditCardNumber();
    creditCardZip();
    creditCardCVV();
    if (creditCardNumber() && creditCardZip() && creditCardCVV()){
        return true;
    } else {
        return false;
    }
}
//This is the master function that ultimately checks to see if all of the fields have been filled in properly
function masterFunction() {
    if (paymentSelection[1].selected) {
        nameValidation();
        emailValidation();
        activityValidation();
        conditionalError();
        creditCardValidation();
        if (nameValidation() && emailValidation() && activityValidation() && conditionalError() && creditCardValidation()) {
            return true;
        } else {
            return false;
        }
    } else {
        nameValidation();
        emailValidation();
        activityValidation();
        if (nameValidation() && emailValidation() && activityValidation()) {
            return true;
        } else {
            return false;
        }
    }
}

//Exceeds Expectations

const newP = document.createElement('p');
newP.textContent = 'Please input a proper email address (ex. david@treehouse.com)';
newP.style.color = 'red';

email.addEventListener('keydown', invalidEmail);

function invalidEmail () {
    if (!emailValidation()) {
        if (mail.parentNode.children[3].children.length !== 1) {
            mail.parentNode.children[3].appendChild(newP);
        }
        newP.style.display = 'block';
    } else {
        newP.style.display = 'none';
    }
}

//Initially hides the tshirt color options until a design is selected
const color = document.getElementById('colors-js-puns');
color.style.display = 'none';

//Create a conditional error message for the credit card form
const newP1 = document.createElement('p');
newP1.textContent = 'Please enter a valid credit card number';
const newP2 = document.createElement('p');
newP2.textContent = 'Please enter a credit card number between 13 and 16 digits';
newP1.style.color = 'red';
newP2.style.color = 'red';

function conditionalError() {
    if (!creditCardNumber()) {
        if (cardNumber.value == '' || cardNumber.value == null) {
            cardNumber.parentElement.appendChild(newP1);
            newP1.style.display = 'block';
            newP2.style.display = 'none';
            return false;
        } else {
            cardNumber.parentElement.appendChild(newP2);
            newP1.style.display = 'none';
            newP2.style.display = 'block';
            return false;
        }
    } else {
        newP2.style.display = 'none';
        newP1.style.display = 'none';
        return true;
    }
}