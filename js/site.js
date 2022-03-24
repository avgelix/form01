'use strict';

var newAccountFieldset = document.querySelector('fieldset[name="new"]');
var newAccountCheckbox = document.querySelector('#create');

if (newAccountFieldset !== null) {
    newAccountFieldset.setAttribute('disabled', 'disabled');
    newAccountFieldset.setAttribute('aria-hidden', 'true');

    newAccountCheckbox.addEventListener('change', function (event) {
    // Add logic to set values only on checked state
        if (event.target.checked) {
            newAccountFieldset.removeAttribute('disabled');
            newAccountFieldset.setAttribute('aria-hidden', 'false');
        } else {
            newAccountFieldset.setAttribute('disabled', 'disabled');
            newAccountFieldset.setAttribute('aria-hidden', 'true');
        }
    });
}


var creditCardPaymentFieldset = document.querySelector('fieldset[name="credit"]');
var creditCardCheckbox = document.querySelector('#credit-payment');
var cashPaymentFieldset = document.querySelector('fieldset[name="cash"]');
var cashPaymentCheckbox = document.querySelector('#cash-payment');

if (creditCardPaymentFieldset !== null) {

    creditCardPaymentFieldset.setAttribute('disabled', 'disabled');
    creditCardPaymentFieldset.setAttribute('aria-hidden', 'true');

    creditCardCheckbox.addEventListener('change', function (event) {
        if (event.target.checked) {
            creditCardPaymentFieldset.removeAttribute('disabled');
            creditCardPaymentFieldset.setAttribute('aria-hidden', 'false');
            cashPaymentCheckbox.setAttribute('disabled', 'disabled');
            cashPaymentCheckbox.setAttribute('aria-hidden', 'true');
        } else {
            creditCardPaymentFieldset.setAttribute('disabled', 'disabled');
            creditCardPaymentFieldset.setAttribute('aria-hidden', 'true');
            cashPaymentCheckbox.removeAttribute('disabled');
            cashPaymentCheckbox.setAttribute('aria-hidden', 'false');
        }
    });
}


if (cashPaymentFieldset !== null) {
    cashPaymentFieldset.setAttribute('disabled', 'disabled');
    cashPaymentFieldset.setAttribute('aria-hidden', 'true');

    cashPaymentCheckbox.addEventListener('change', function (event) {
        if (event.target.checked) {
            creditCardCheckbox.setAttribute('disabled', 'disabled');
            creditCardCheckbox.setAttribute('aria-hidden', 'true');
            cashPaymentFieldset.removeAttribute('disabled');
            cashPaymentFieldset.setAttribute('aria-hidden', 'false');
        } else {
            cashPaymentFieldset.setAttribute('disabled', 'disabled');
            cashPaymentFieldset.setAttribute('aria-hidden', 'true');
            creditCardCheckbox.removeAttribute('disabled');
            creditCardCheckbox.setAttribute('aria-hidden', 'false');
        }
    });
}

var newBillingFieldset = document.querySelector('fieldset[name="use-new"]');
var newBillingInfoCheckbox = document.querySelector('#new-info');
var sameShippingAndBillingCheckbox = document.querySelector('#shipping-info');

if (newBillingFieldset !== null) {
    newBillingFieldset.setAttribute('disabled', 'disabled');
    newBillingFieldset.setAttribute('aria-hidden', 'true');

    newBillingInfoCheckbox.addEventListener('change', function (event) {
        if (event.target.checked) {
            sameShippingAndBillingCheckbox.setAttribute('disabled', 'disabled');
            sameShippingAndBillingCheckbox.setAttribute('aria-hidden', 'true');
            newBillingFieldset.removeAttribute('disabled');
            newBillingFieldset.setAttribute('aria-hidden', 'false');
        } else {
            newBillingFieldset.setAttribute('disabled', 'disabled');
            newBillingFieldset.setAttribute('aria-hidden', 'true');
            sameShippingAndBillingCheckbox.removeAttribute('disabled');
            sameShippingAndBillingCheckbox.setAttribute('aria-hidden', 'false');
        }
    });
}


//remove placeholder from elements when in focus
var cscInput = document.querySelector('#card-csc');
if (cscInput !== null) {
    cscInput.addEventListener('focus', function () {
        this.removeAttribute('placeholder');
    });
}

var cardExp = document.querySelector('#card-expires');
if (cardExp !== null) {
    cardExp.addEventListener('focus', function () {
        this.removeAttribute('placeholder');
    });
}

var address = document.querySelector('#address');
if (address !== null) {
    address.addEventListener('focus', function () {
        this.removeAttribute('placeholder');
    });
}

var email = document.querySelector('#email');
if (email !== null) {
    email.addEventListener('focus', function () {
        this.removeAttribute('placeholder');
    });
}



//set required fields for credit card paymentoption
var cardType = document.querySelector('#card-type');
var cardNumber = document.querySelector('#card-number');
var cardCsc = document.querySelector('#card-csc');
var cardExp = document.querySelector('#card-expires');

if (creditCardCheckbox !== null) {
    creditCardCheckbox.addEventListener('change', function (event) {
        if (event.target.checked) {
            cardType.setAttribute('required', '');
            cardNumber.setAttribute('required', '');
            cardCsc.setAttribute('required', '');
            cardExp.setAttribute('required', '');
        } else {
            cardType.removeAttribute('required');
            cardNumber.removeAttribute('required');
            cardCsc.removeAttribute('required');
            cardExp.removeAttribute('required');
        }
    });
}


//set required field for cash paymentoption
var acknowledgement = document.querySelector('#cash-acknowledge');
if (cashPaymentCheckbox !== null) {
    cashPaymentCheckbox.addEventListener('change', function (event) {
        if (event.target.checked) {
            acknowledgement.setAttribute('required', '');
        } else {
            acknowledgement.removeAttribute('required');
        }
    });
}


//set required fields for new billing address information
var fullName = document.querySelector('#fullname');
var address = document.querySelector('#address');
var zip = document.querySelector('#zip');
var city = document.querySelector('#city');
var state = document.querySelector('#state');

if (newBillingInfoCheckbox !== null) {
    newBillingInfoCheckbox.addEventListener('change', function (event) {
        if (event.target.checked) {
            fullName.setAttribute('required', '');
            address.setAttribute('required', '');
            zip.setAttribute('required', '');
            city.setAttribute('required', '');
            state.setAttribute('required', '');
        } else {
            fullName.removeAttribute('required');
            address.removeAttribute('required');
            zip.removeAttribute('required');
            city.removeAttribute('required');
            state.removeAttribute('required');
        }
    });
}

// add shipping cost to cost of order
var regularShip = document.querySelector('input[name="regular"]');
if (regularShip !== null) {
    regularShip.addEventListener('change', function (event) {
        if (event.target.checked) {
            var shippingCost = document.createElement("li");
            shippingCost.id = "shippingCost";
            shippingCost.innerText = "Delivery: $7";
            document.querySelector('#costs').appendChild(shippingCost);
        } else {
            document.querySelector("#shippingCost").remove();
        }
    });
}


var fastShip = document.querySelector('input[name="fast"]');
if (fastShip !== null) {
    fastShip.addEventListener('change', function (event) {
        if (event.target.checked) {
            var shippingCost = document.createElement("li");
            shippingCost.id = "shippingCost";
            shippingCost.innerText = "Delivery: $12";
            document.querySelector('#costs').appendChild(shippingCost);
        } else {
            document.querySelector("#shippingCost").remove();
        }
    });
}


var expShip = document.querySelector('input[name="express"]');
if (expShip !== null) {
    expShip.addEventListener('change', function (event) {
        if (event.target.checked) {
            var shippingCost = document.createElement('li');
            shippingCost.id = "shippingCost";
            shippingCost.innerText = 'Delivery: $15';
            document.querySelector('#costs').appendChild(shippingCost);
        } else {
            document.querySelector("#shippingCost").remove();
        }
    });
}



//LAST TRY at localStorage
var page = document.querySelector('html');
page.classList.add('js');

//repeat for every page
if (page.id === 'login') {
    var form = document.querySelector('form[name="login"]');
    restoreFormDataFromLocalStorage(form.name);
    if (document.forms[formName].elements !== null) {
        form.addEventListener('submit', handleFormSubmission);
    }    
}

if (page.id === 'shipping') {
    var form = document.querySelector('form[name="shipping-form"]');
    restoreFormDataFromLocalStorage(form.name);
    form.addEventListener('submit', handleFormSubmission);
}

if (page.id === 'delivery') {
    var form = document.querySelector('form[name="delivery-form"]');
    restoreFormDataFromLocalStorage(form.name);
    form.addEventListener('submit', handleFormSubmission);
}

if (page.id === 'payment') {
    var form = document.querySelector('form[name="payment-form"]');
    restoreFormDataFromLocalStorage(form.name);
    form.addEventListener('submit', handleFormSubmission);
}

if (page.id === 'billing') {
    var form = document.querySelector('form[name="billing-form"]');
    restoreFormDataFromLocalStorage(form.name);
    form.addEventListener('submit', handleFormSubmission);
}


//function to submit data and proceed to next page
function handleFormSubmission (event) {
    var targetElement = event.target; //action on the page
    event.preventDefault(); // STOP the default browser behavior
    writeFormDataToLocalStorage(targetElement.name); // STORE all the form data
    window.location.href = form.action; // PROCEED to the URL referenced by the form action
}


function writeFormDataToLocalStorage (formName, inputElement) {
    var formData = findOrCreateLocalStorageObject (formName);

    if (inputElement) {
        formData[inputElement.name] = inputElement.value;
    } else {
        var formElements = document.forms[formName].elements;
        for (var i = 0; i < formElements.length; i++) {
            if (formElements[i].value !== "") {
                formData[formElements[i].name] = formElements[i].value;
            }
        }
    }

    writeJsonToLocalStorage(formName, formData);
}



function findOrCreateLocalStorageObject(keyName) {
    var jsObject = readJsonFromLocalStorage(keyName);

    if (Object.keys(jsObject).length === 0) {
        writeJsonToLocalStorage(keyName, jsObject);
    }

    return jsObject;
}




function writeJsonToLocalStorage(keyName, jsObject) {
    localStorage.setItem(keyName, JSON.stringify(jsObject));
}



function destroyFormDataInLocalStorage(formName) {
    localStorage.removeItem(formName);
}



//function to KEEP entered data when returning to a page
function restoreFormDataFromLocalStorage(formName) {
    var jsObject = readJsonFromLocalStorage(formName);
    var formValues = Object.entries(jsObject);
    if (formValues.length === 0) {
        return; // nothing to restore
    }
  //list to write all form elements to local
    var formElements = document.forms[formName].elements;
    for (var i = 0; i < formValues.length; i++) {
        console.log('Form input key:', formValues[i][0], 'Form input value:', formValues[i][1]);
        //take entered data from local storage and assign to element
        formElements[formValues[i][0]].value = formValues[i][1];
    }
}




function readJsonFromLocalStorage(keyName){
    var jsonObject = localStorage.getItem(keyName);
    var jsObject = {};

    if (!jsonObject) {
        jsObject = {};
    } else {
        try {
            jsObject = JSON.parse(jsonObject);
        } catch (e) {
            console.error(e);
            jsObject = {};
        }
    }

    return jsObject;
}


function debounce(callback, delay) {
    var timer; // function-scope timer to debounce()
    return function () {
        var context = this; // track function-calling context
        // See https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/this
        var args = arguments; // hold onto arguments object
        // See https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/arguments

        // Reset the timer
        clearTimeout(timer);

        // Set the new timer
        timer = setTimeout(function () {
            // See https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function/apply
            callback.apply(context, args);
        }, delay);
    }
}


// throttle to slow execution to a certain amount of elapsed time (limit)
function throttle(callback, limit) {
    var throttling; // function-scope boolean for testing throttle state
    return function() {
        var context = this; // track function-calling context
        // See https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/this
        var args = arguments; // hold onto arguments object
        // See https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/arguments

        // Run the function if not currently throttling
        if (!throttling) {
            // See https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function/apply
            callback.apply(context, args);
            throttling = true;
            setTimeout(function() {
                throttling = false;
            }, limit);
        }
    }
}
