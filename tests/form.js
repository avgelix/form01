describe ('Login Page', function() {

    it('the form should exist', function(browser) {
      browser
        .url('http://localhost:8080/')
        .assert
          .elementPresent('form[name="login"]');
    });

    it('if the form is empty it is not submittable', function(browser) {
      browser
        .url('http://localhost:8080/')
        .click('button.forward')
        .assert
          .urlEquals('http://localhost:8080/');

    });

});

describe ('Delivery Page', function() {

  it('the added delivery cost should match the user preference (regular)', function(browser) {
    browser
      .url('http://localhost:8080/delivery')
      .click('input#regular')
      .assert.containsText('#shippingCost', 'Delivery: $7')
  });

  it('the added delivery cost should match the user preference (fast)', function(browser) {
    browser
      .url('http://localhost:8080/delivery')
      .click('input#fast')
      .assert.containsText('#shippingCost', 'Delivery: $12')
  });

  it('the added delivery cost should match the user preference (express)', function(browser) {
    browser
      .url('http://localhost:8080/delivery')
      .click('input#express')
      .assert.containsText('#shippingCost', 'Delivery: $15')
  });

});
