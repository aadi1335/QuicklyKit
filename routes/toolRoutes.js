const express = require('express');
const router = express.Router();
const toolController= require('../controllers/toolController.js');

router.get('/Tool/QrCode', toolController.getQr);
router.get('/Tool/TinyUrl', toolController.getTinyUrl);
router.get('/tools/color-picker', toolController.getColorPicker);
router.get('/tools/ip-finder', toolController.getIpFinder);

module.exports = router