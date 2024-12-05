README: Shopping and Banking System
Project Overview
This project is divided into two parts: a shopping experience and a banking system, each with its own HTML and JavaScript files. The project demonstrates modular programming principles by keeping the shopping and banking logic in separate scripts and providing distinct interfaces for each functionality.

Features
Shopping Experience
Login/Logout System:

A button toggles between "Login" and "Logout".
When logged in, users can view their shopping cart.
When logged out, the cart is cleared, and users are prompted to log in.
View Cart:

Displays the items in the shopping cart if the user is logged in.
Shows a message prompting the user to log in if they are logged out.
Banking System
Deposit Money:

Allows users to add money to their account.
Updates the balance dynamically.
Withdraw Money:

Enables users to withdraw money if sufficient funds are available.
Prevents overdrawing and handles invalid withdrawal attempts.
Check Balance:

Displays the current account balance to the user.
File Structure
bash
Copy code
/project
├── /js
│   ├── shopping.js    # Contains the shopping cart functionality
│   ├── banking.js     # Contains the banking system functionality
├── shopping.html      # HTML for the shopping experience
└── banking.html       # HTML for the banking system
How to Use
Shopping Experience
Open shopping.html in a web browser.
Click Login to log in and access the shopping cart.
Click View Cart to display the cart items.
Click Logout to clear the cart and log out.
Banking System
Open banking.html in a web browser.
Enter an amount in the input field for banking operations.
Use the Deposit button to add money to your account.
Use the Withdraw button to take money out of your account.
Use the Check Balance button to display your current account balance.
Expected Behavior
Shopping Experience:
Logged Out:
The shopping cart is not accessible, and a message prompts the user to log in.
Logged In:
The cart items are displayed, and the login button toggles to Logout.
Banking System:
Valid Operations:
Depositing or withdrawing money updates the account balance dynamically.
Invalid Operations:
Attempts to withdraw more money than available or invalid amounts are handled gracefully with alerts.
Key Notes
Each functionality (shopping and banking) is self-contained and independent.
The project follows a modular design for ease of testing, debugging, and future expansion.
