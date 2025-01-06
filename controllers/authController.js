const bcrypt = require('bcrypt');
const crypto = require('crypto');
const mongodb = require('../models/user');
const rateLimitor = require('../middleware/loginRateLimitor.js');

exports.loginPage = async (req, res) => {
    const authToken = req.cookies.AuthenticationString;

    if (authToken) {
        try {
            const user = await mongodb.findOne({ AuthToken: authToken });
            if (user) {
                return res.redirect('/Home');
            }
        } catch (error) {
            console.error('Error during authentication check:', error);
            return res.status(500).send('Server error');
        }
    }

    res.render('index');
};

exports.loginUser = async (req, res) => {
    const { email, password } = req.body;

    try {
        const user = await mongodb.findOne({ Email: email });
        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }

        const isMatch = await bcrypt.compare(password, user.Password);
        if (!isMatch) {
            return res.status(401).json({ message: 'Invalid credentials' });
        }

        res.cookie('AuthenticationString', user.AuthToken, {
            httpOnly: true,
            secure: true,
            maxAge: 7 * 24 * 60 * 60 * 1000 // 7 days
        });
        res.redirect('/Home');
    } catch (error) {
        console.error('Error during login:', error);
        res.status(500).json({ message: 'Server error' });
    }
};

exports.registerPage = async (req, res) => {
    const authToken = req.cookies.AuthenticationString;

    if (authToken) {
        try {
            const user = await mongodb.findOne({ AuthToken: authToken });
            if (user) {
                return res.redirect('/Home');
            }
        } catch (error) {
            console.error('Error during authentication check:', error);
            return res.status(500).send('Server error');
        }
    }

    res.render('Register');
};

exports.registerUser = async (req, res) => {
    const { username, email, password } = req.body;

    try {
        const ifexists = await mongodb.findOne({ Email: email });

        if (ifexists) {
            return res.status(409).json({ message: 'Account with this email already exists' });
        }

        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);
        const authToken = crypto.randomBytes(16).toString('hex');

        const newUser = await mongodb.create({
            UserName: username,
            Email: email,
            Password: hashedPassword,
            AuthToken: authToken
        });

        if (newUser) {
            console.log('Account Created');
            res.redirect('/Login');
        } else {
            res.status(500).json({ message: 'Unable to create account' });
        }
    } catch (error) {
        console.error('Error during account creation:', error);
        res.status(500).json({ message: 'Server error' });
    }
};

exports.logoutUser = (req, res) => {
    res.clearCookie('AuthenticationString');
    res.redirect('/Login');
};