let stripe = Stripe("sk_test_51Jgg8IBCWH0vidLh7kH3Tv3M0Fspel4GQi2L6GZqDVsqLL6m9OU3PKiV9gcgVmEEYWE6AWrynB1WM5EL7rM7dUqs0038RLpOYb");
let elements = stripe.elements();

let card = elements.create('card', { style: style });
card.mount('#card-element');

card.on('change', function (event) {
  displayError(event);
});
function displayError(event) {
  changeLoadingStatePrices(false);
  let displayError = document.getElementById('card-element-errors');
  if (event.error) {
    displayError.textContent = event.error.message;
  } else {
    displayError.textContent = '';
  }
}

