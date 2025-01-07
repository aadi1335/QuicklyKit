const express = require('express');
const router = express.Router();
const toolController= require('../controllers/toolController.js');

router.get('/Tool/QrCode', toolController.getQr);
router.get('/Tool/TinyUrl', toolController.getTinyUrl);

module.exports = router