const express = require('express');
const pageController = require('../controllers/pageController');
const router = express.Router();

router.get('/Home', pageController.homePage);
router.get('/Dashboard', pageController.dashPage);
router.get('/Profile', pageController.profilePage);
router.get('/Settings', pageController.setPage);

module.exports = router;
