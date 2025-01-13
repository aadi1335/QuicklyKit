const express = require('express');
const pageController = require('../controllers/pageController');
const router = express.Router();

// get request for renering pages
router.get('/Home', pageController.homePage);
router.get('/Dashboard', pageController.dashPage);
router.get('/Profile', pageController.profilePage);
router.get('/Settings', pageController.setPage);

// post request for pages
router.post('/api/post-feedback-data', pageController.postFeedback);

module.exports = router;
