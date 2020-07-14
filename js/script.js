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
    if (tshirtDesign[1].selected) {
        for (let i = 1; i <= 3; i++) {
            tshirtColor[i].style.display = 'block';
        }
        for (let i = 4; i <= 6; i++) {
            tshirtColor[i].style.display = 'none';
        }
        tshirtColor[1].selected = 'selected';

//This ensures that the proper colour options show up for "I love JS" shirts
    } else if (tshirtDesign[2].selected) {
        for (let i = 1; i <= 3; i++) {
            tshirtColor[i].style.display = 'none';
        }
        for (let i = 4; i <= 6; i++) {
            tshirtColor[i].style.display = 'block';
        }
        tshirtColor[4].selected = 'selected';

//This ensures that if it goes back to "Select Theme" all colour options disappear
    } else {
        for (let i = 1; i <=6; i++) {
            tshirtColor[i].style.display = 'none';
        }
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
    if (nameValidation() && emailValidation() && activityValidation() && creditCardValidation()) {
        e.preventDefault();
    }
})

//A function to validate the "Name" field
function nameValidation() {
    if (name.value == '') {
        return false
    } else {
        return true
    }
}

//A function to validate the "Email" field
function emailValidation() {
    const email = document.getElementById('mail').value;
    return /^[^@]+@[^@.]+\.[a-z]+$/i.test(email);
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
        return true;
    } else {
        return false;
    }
}

//A function to validate the credit card number

function creditCardNumber() {
    const cardNumber = document.getElementById('cc-num').value;
    return /^\d{13,16}$/.test(cardNumber);
}

//A function to validate the zipcode for the credit card field

function creditCardZip() {
    const zipCode = document.getElementById('zip').value;
    return /^\d{5}$/.test(zipCode);
}

//A function to validate the CVV for the credit card field

function creditCardCVV() {
    const cvv = document.getElementById('cvv').value;
    return /^\d{3}$/.test(cvv);
}

function creditCardValidation() {
    if (paymentSelection[1].selected) {
        if (creditCardNumber() && creditCardZip() && creditCardCVV()) {
            return true;
        } else {
            return false;
        }
    } else {
        return true;
    }
}
