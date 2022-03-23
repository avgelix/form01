'use strict';

var newAccountFieldset = document.querySelector('fieldset[name="new"]');
var newAccountCheckbox = document.querySelector('#create');

if (newAccountFieldset !== null) {
  newAccountFieldset.setAttribute('disabled', 'disabled');
  newAccountFieldset.setAttribute('aria-hidden', 'true');

  newAccountCheckbox.addEventListener('change', function(event) {
    // Add logic to set values only on checked state
    if(event.target.checked) {
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


if (creditCardPaymentFieldset !== null) {

  creditCardPaymentFieldset.setAttribute('disabled', 'disabled');
  creditCardPaymentFieldset.setAttribute('aria-hidden', 'true');

  creditCardCheckbox.addEventListener('change', function(event) {
    if(event.target.checked) {
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


var cashPaymentFieldset = document.querySelector('fieldset[name="cash"]');
var cashPaymentCheckbox = document.querySelector('#cash-payment');

if (cashPaymentFieldset !== null) {
  cashPaymentFieldset.setAttribute('disabled', 'disabled');
  cashPaymentFieldset.setAttribute('aria-hidden', 'true');

  cashPaymentCheckbox.addEventListener('change', function(event) {
    if(event.target.checked) {
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
  
  newBillingInfoCheckbox.addEventListener('change', function(event) {
    if(event.target.checked) {
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
cscInput.addEventListener('focus', function() {
  this.removeAttribute('placeholder');
});
}

var cardExp = document.querySelector('#card-expires');
if (cardExp !== null) {
cardExp.addEventListener('focus', function() {
  this.removeAttribute('placeholder');
});
}

var address = document.querySelector('#address');
if (address !== null) {
address.addEventListener('focus', function() {
  this.removeAttribute('placeholder');
});
}

var email = document.querySelector('#email');
if (email !== null) {
email.addEventListener('focus', function() {
  this.removeAttribute('placeholder');
});
}

  if (jsonObject) {
    try {
      jsObject = JSON.parse(jsonObject);
    } catch(e) {
      console.error(e);
      jsObject = {};
    }
  }

  return jsObject;
}

//set required fields for credit card paymentoption
var cardType = document.querySelector('#card-type');
var cardNumber = document.querySelector('#card-number');
var cardCsc = document.querySelector('#card-csc');
var cardExp = document.querySelector('#card-expires');

if (creditCardCheckbox !== null) {
  creditCardCheckbox.addEventListener('change', function(event) {
    if(event.target.checked){
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
cashPaymentCheckbox.addEventListener('change', function(event) {
  if(event.target.checked) {
    acknowledgement.setAttribute('required', '');
  } else {
    acknowledgement.removeAttribute('required');
  }
});
}



//remove element from local storage
function destroyFormDataInLocalStorage(formName) {
  localStorage.removeItem(formName);
}


// recover info from local storage
function restoreFormDataFromLocalStorage(formName) {
  var jsObject = readJsonFromLocalStorage(formName);
  var formValues = Object.entries(jsObject);
  if (formValues.length === 0) {
    return; // nothing to restore
  }




//index.html login page
if(page.id === 'login'){
  var form = document.querySelector("form");
  restoreFormDataFromLocalStorage(form.name);
  form.addEventListener('submit', submitForm);
}


//shipping
if(page.id === 'shipping'){
  var form = document.querySelector("form");
  restoreFormDataFromLocalStorage(form.name);
  form.addEventListener('submit', submitForm);
}

//payment
if(page.id === 'payment'){
  var form = document.querySelector("form");
  restoreFormDataFromLocalStorage(form.name);
  form.addEventListener('submit', submitForm);
}

//billing
if(page.id === 'billing'){
  var form = document.querySelector("form");
  restoreFormDataFromLocalStorage(form.name);
  form.addEventListener('submit', submitForm);
}











// create error if credit card expiration year is before 2022
var errorClass = targetElement.name + '-error';
var errorEl = document.querySelector('.' + errorClass);

  if (targetElement.value.lenght < 3) {
    // Don't add duplicate errors
    if (!errorEl) {
      var errorText = 'CVC must be 3 numbers long';
      errorEl = document.createElement('p');
      errorEl.className = errorClass
      errorEl.innerText = errorText;
      targetElement.before(errorEl);
    }
  } else {
    if (errorEl) {
      errorEl.remove();
    }
  }
}
