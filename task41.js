<!-- index.html -->
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Complex Form Validation</title>
    <link rel="stylesheet" href="styles.css">
</head>
<body>
    <form id="myForm">
        <label for="username">Username:</label>
        <input type="text" id="username" name="username"><br><br>
        <label for="password">Password:</label>
        <input type="password" id="password" name="password"><br><br>
        <label for="confirmPassword">Confirm Password:</label>
        <input type="password" id="confirmPassword" name="confirmPassword"><br><br>
        <button type="submit">Submit</button>
    </form>

    <script src="script.js"></script>
</body>
</html>



// script.js
const form = document.getElementById('myForm');

form.addEventListener('submit', (e) => {
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirmPassword').value;

    if (username.length < 3) {
        alert('Username must be at least 3 characters long');
        e.preventDefault();
    } else if (password.length < 8 || !/[A-Z]/.test(password) || !/[a-z]/.test(password) || !/[0-9]/.test(password)) {
        alert('Password must be at least 8 characters long and contain at least one uppercase letter, one lowercase letter, and one number');
        e.preventDefault();
    } else if (password !== confirmPassword) {
        alert('Passwords do not match');
        e.preventDefault();
    }
});
