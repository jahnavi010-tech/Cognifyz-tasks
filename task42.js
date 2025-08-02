// script.js
const passwordInput = document.getElementById('password');
const passwordStrengthMeter = document.createElement('div');

passwordInput.parentNode.appendChild(passwordStrengthMeter);

passwordInput.addEventListener('input', () => {
    const password = passwordInput.value;
    let strength = 0;

    if (password.length >= 8) strength++;
    if (/[A-Z]/.test(password)) strength++;
    if (/[a-z]/.test(password)) strength++;
    if (/[0-9]/.test(password)) strength++;

    if (strength === 4) {
        passwordStrengthMeter.textContent = 'Strong password';
        passwordStrengthMeter.style.color = 'green';
    } else if (strength >= 2) {
        passwordStrengthMeter.textContent = 'Medium password';
        passwordStrengthMeter.style.color = 'orange';
    } else {
        passwordStrengthMeter.textContent = 'Weak password';
        passwordStrengthMeter.style.color = 'red';
    }
});
