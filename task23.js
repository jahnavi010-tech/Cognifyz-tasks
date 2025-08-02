// server.js
const express = require('express');
const { check, validationResult } = require('express-validator');

const app = express();
app.use(express.json());

const validateFormData = [
    check('name').not().isEmpty().withMessage('Name is required'),
    check('email').isEmail().withMessage('Invalid email'),
    check('password').not().isEmpty().withMessage('Password is required'),
    check('terms').isIn(['on']).withMessage('Terms and conditions must be accepted'),
];

app.post('/submit', validateFormData, (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(422).json({ errors: errors.array() });
    }

    // Store validated data in temporary server-side storage
    const formData = req.body;
    // ...

    res.send('Form submitted successfully');
});

app.listen(3000, () => {
    console.log('Server listening on port 3000');
});
// server.js (continued)
const formDataStore = [];


