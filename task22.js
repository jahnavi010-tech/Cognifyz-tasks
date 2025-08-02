// script.js
const form = document.getElementById('myForm');

form.addEventListener('submit', (e) => {
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const terms = document.getElementById('terms').checked;

    if (name === '' || email === '' || password === '') {
        alert('Please fill in all fields');
        e.preventDefault();
    } else if (!terms) {
        alert('Please agree to the terms and conditions');
        e.preventDefault();
    }
});
