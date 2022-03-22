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












//-------------LOCAL STORAGE---------------//

var page = document.querySelector('html');


// form submission button
function submitForm(event) {
  var targetElement = event.target;
  event.preventDefault();
  writeFormDataToLocalStorage(targetElement.name); // STORE all the form data
  window.location.href = targetElement.action;
}


// create new local storage object or find existing one
function findOrCreateLocalStorageObject(keyName) {
  var jsObject = readJsonFromLocalStorage(keyName);

  if (Object.keys(jsObject).length === 0) {
    writeJsonToLocalStorage(keyName, jsObject);
  }
  return jsObject;
}


// read from local storage
function readJsonFromLocalStorage(keyName) {
  var jsonObject = localStorage.getItem(keyName);
  var jsObject = {};

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


// write to local storage
function writeJsonToLocalStorage(keyName, jsObject) {
  localStorage.setItem(keyName, JSON.stringify(jsObject));
}


function writeFormDataToLocalStorage(formName, inputElement) {
  var formData = findOrCreateLocalStorageObject(formName);

  // Set just a single input value
  if (inputElement) {
    formData[inputElement.name] = inputElement.value;
  } else {
    // Set all form input values, e.g., on a submit event
    var formElements = document.forms[formName].elements;
    for (var i = 0; i < formElements.length; i++) {
      // Don't store empty elements, like the submit button
      if (formElements[i].value !== "") {
        formData[formElements[i].name] = formElements[i].value;
      }
    }
  }

  writeJsonToLocalStorage(formName, formData);
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
