const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const User = require('../models/User');
require('dotenv').config();

const generateToken = (user) => {
    return jwt.sign({ id: user.UserID, userType: user.UserType }, process.env.JWT_SECRET, { expiresIn: '1h' });
};

exports.register = async (req, res) => {
    try {
        const { username, password, email, firstName, lastName, userType } = req.body;
        const hashedPassword = await bcrypt.hash(password, 10);
        const user = await User.create({
            Username: username,
            Password: hashedPassword,
            Email: email,
            FirstName: firstName,
            LastName: lastName,
            UserType: userType,
        });
        res.status(201).json({ message: 'User registered successfully', user });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Registration failed' });
    }
};

exports.login = async (req, res) => {
    try {
        const { username, password } = req.body;
        const user = await User.findOne({ where: { Username: username } });
        if (!user || !await bcrypt.compare(password, user.Password)) {
            return res.status(401).json({ message: 'Invalid credentials' });
        }
        const token = generateToken(user);
        res.status(200).json({ message: 'User logged in successfully', token });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Login failed' });
    }
};
