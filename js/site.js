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
