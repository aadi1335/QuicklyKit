const express = require('express');
const authController = require('../controllers/authController');

const router = express.Router();

router.get('/Login', authController.loginPage);
router.post('/Login', authController.loginUser);
router.get('/Register', authController.registerPage);
router.post('/Register', authController.registerUser);
router.get('/Logout', authController.logoutUser);

module.exports = router;
