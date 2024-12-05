// Initial login status
let loggedIn = false;

// Items in the shopping cart
let cart = [
  'Shirts',
  'Shoes',
  'Bread',
  'Cell Phone',
  'Candy Corn',
  'The Pragmatic Programmer: Your Journey To Mastery, 20th Anniversary Edition (2nd Edition)',
  'Tomato'
];

// Get DOM elements
const loginButton = document.getElementById('loginButton');
const viewCartButton = document.getElementById('viewCart');
const cartList = document.getElementById('cartList');

// Update the login button's text and functionality
function updateLoginButton() {
  if (loggedIn) {
    loginButton.textContent = 'Logout';
  } else {
    loginButton.textContent = 'Login';
  }
}

// Toggle login/logout functionality
loginButton.addEventListener('click', function () {
  loggedIn = !loggedIn; // Toggle the login status
  if (loggedIn) {
    alert('You are now logged in.');
  } else {
    alert('You are now logged out.');
    cartList.innerHTML = ''; // Clear cart display when logged out
  }
  updateLoginButton();
});

// View cart functionality
viewCartButton.addEventListener('click', function () {
  cartList.innerHTML = ''; // Clear the list before adding items

  if (loggedIn) {
    cart.forEach(item => {
      const li = document.createElement('li');
      li.textContent = item;
      cartList.appendChild(li);
    });
  } else {
    cartList.innerHTML = '<li>Please log in to view your cart.</li>';
  }
});

// Initialize the login button text
updateLoginButton();
