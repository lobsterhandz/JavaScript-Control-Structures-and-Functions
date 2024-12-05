# Shopping and Banking System

---

## Project Overview
This project is divided into two parts: a **shopping experience** and a **banking system**, each with its own HTML and JavaScript files. The project demonstrates modular programming principles by separating the shopping and banking logic into distinct scripts while providing unique interfaces for each functionality.

---

## Features

### Shopping Experience
1. **Login/Logout System**:
   - A button toggles between **"Login"** and **"Logout"**.
   - When logged in, users can view their shopping cart.
   - When logged out, the cart is cleared, and users are prompted to log in.

2. **View Cart**:
   - Displays items in the shopping cart if the user is logged in.
   - Shows a message prompting the user to log in if they are logged out.

---

### Banking System
1. **Deposit Money**:
   - Allows users to add money to their account.
   - Updates the balance dynamically.

2. **Withdraw Money**:
   - Enables users to withdraw money if sufficient funds are available.
   - Prevents overdrawing and handles invalid withdrawal attempts.

3. **Check Balance**:
   - Displays the current account balance to the user.

---

## File Structure
/project ├── /js │ ├── shopping.js # Contains the shopping cart functionality │ ├── banking.js # Contains the banking system functionality ├── shopping.html # HTML for the shopping experience └── banking.html # HTML for the banking system

---

## How to Use

### Shopping Experience
1. Open `shopping.html` in a web browser.
2. Click **Login** to log in and access the shopping cart.
3. Click **View Cart** to display the cart items.
4. Click **Logout** to clear the cart and log out.

### Banking System
1. Open `banking.html` in a web browser.
2. Enter an amount in the input field for banking operations.
3. Use the **Deposit** button to add money to your account.
4. Use the **Withdraw** button to take money out of your account.
5. Use the **Check Balance** button to display your current account balance.

---

## Expected Behavior

### Shopping Experience
- **Logged Out**:
  - The shopping cart is not accessible, and a message prompts the user to log in.
- **Logged In**:
  - The cart items are displayed, and the login button toggles to **Logout**.

### Banking System
- **Valid Operations**:
  - Depositing or withdrawing money updates the account balance dynamically.
- **Invalid Operations**:
  - Attempts to withdraw more money than available or invalid amounts are handled gracefully with alerts.

---

## Key Notes
- Each functionality (shopping and banking) is self-contained and independent.
- The project follows a modular design for ease of testing, debugging, and future expansion.
- This structure ensures scalability for additional features, such as persistent storage or user accounts.

--Jose Murillo
