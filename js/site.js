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


//set required fields for new billing address information
var fullName = document.querySelector('#fullname');
var address = document.querySelector('#address');
var zip = document.querySelector('#zip');
var city = document.querySelector('#city');
var state = document.querySelector('#state');

if (newBillingInfoCheckbox !== null) {
newBillingInfoCheckbox.addEventListener('change', function(event) {
    if(event.target.checked){
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



var page = document.querySelector('html');

//create error if credit card number contains letters
if (page.id='payment') {
  if (cardNumber !== null) {
   if (typeof(cardNumber) === "string" ) {
     var errorText = 'Credit card number cannot contain letters';
     errorEl = document.createElement('p');
     errorEl.innerText = errorText;
   }
 }
}

// create error if credit card csc is less than 3 numbers
 if (page.id='payment') {
   if (cardCsc !== null) {
     if (cardCsc.length < 3) {
       var errorText = 'CVC must be 3 numbers long';
       errorElement = document.createElement('p');
       errorElement.innerText = errorText;
     }
   }
}


// add shipping cost to cost of order
var regularShip = document.querySelector('input[name="regular"]');
if (regularShip !== null) {
  regularShip.addEventListener('change', function(event) {
    if(event.target.checked){
      var shippingCost = document.createElement("li");
      shippingCost.id = "shippingCost";
      shippingCost.innerText= "Delivery: $7";
      document.querySelector('#costs').appendChild(shippingCost);
    } else {
      document.querySelector("#shippingCost").remove();
    }
  });
}


var fastShip = document.querySelector('input[name="fast"]');
if (fastShip !== null) {
  fastShip.addEventListener('change', function(event) {
    if(event.target.checked){
    var shippingCost = document.createElement("li");
    shippingCost.id = "shippingCost";
    shippingCost.innerText= "Delivery: $12";
    document.querySelector('#costs').appendChild(shippingCost);
    } else {
      document.querySelector("#shippingCost").remove();
    }
  });
}


var expShip = document.querySelector('input[name="express"]');
if (expShip !== null) {
  expShip.addEventListener('change', function(event) {
    if(event.target.checked){
    var shippingCost = document.createElement('li');
    shippingCost.id = "shippingCost";
    shippingCost.innerText= 'Delivery: $15'
    document.querySelector('#costs').appendChild(shippingCost);
    } else {
      document.querySelector("#shippingCost").remove();
    }
  });
}
