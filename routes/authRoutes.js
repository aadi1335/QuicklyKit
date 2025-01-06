const express = require('express');
const authController = require('../controllers/authController.js');
const rateLimitor = require('../middleware/loginRateLimitor.js');

const router = express.Router();

router.get('/Login', authController.loginPage);
router.post('/Login', rateLimitor.limitor, authController.loginUser); // Apply middleware here
router.get('/Register', authController.registerPage);
router.post('/Register', authController.registerUser);
router.get('/Logout', authController.logoutUser);

module.exports = router;
