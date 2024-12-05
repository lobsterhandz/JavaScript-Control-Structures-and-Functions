// Initial account balance
let balance = 1000;

// Function to update balance display
function updateBalanceDisplay() {
  document.getElementById('balance').textContent = `Current Balance: $${balance}`;
}

// Function to deposit money
function deposit(amount) {
  if (amount > 0) {
    balance += amount;
    alert(`Deposited $${amount}.`);
  } else {
    alert("Invalid deposit amount.");
  }
  updateBalanceDisplay();
}

// Function to withdraw money
function withdraw(amount) {
  if (amount > 0 && amount <= balance) {
    balance -= amount;
    alert(`Withdrew $${amount}.`);
  } else if (amount > balance) {
    alert("Insufficient funds.");
  } else {
    alert("Invalid withdrawal amount.");
  }
  updateBalanceDisplay();
}

// Function to check balance
function checkBalance() {
  alert(`Your current balance is: $${balance}`);
}

// Add event listeners to buttons
document.getElementById('depositButton').addEventListener('click', function () {
  const amount = parseFloat(document.getElementById('amount').value);
  deposit(amount);
});

document.getElementById('withdrawButton').addEventListener('click', function () {
  const amount = parseFloat(document.getElementById('amount').value);
  withdraw(amount);
});

document.getElementById('checkBalanceButton').addEventListener('click', function () {
  checkBalance();
});
