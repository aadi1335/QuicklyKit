const express = require('express');
const router = express.Router();
const toolController= require('../controllers/toolController.js');

router.get('/Tool/QrCode', toolController.getQr);
router.get('/Tool/TinyUrl', toolController.getTinyUrl);
router.get('/tools/color-picker', toolController.getColorPicker);
router.get('/tools/ip-finder', toolController.getIpFinder);
router.get('/tools/text-to-speech', toolController.getTextToSpeech);
router.get('/tools/speech-to-text', toolController.getSpeechToText);
router.get('/tools/bmi-calculator', toolController.getBmiCalc);
router.get('/tools/pdf-tools', toolController.getPdfTool);
router.get('/tools/image-compressor', toolController.getImageResizer);
router.get('/tools/currency-converter', toolController.getCurrencyConverter);
router.get('/tools/mass-converter', toolController.getMassConverter);
router.get('/tools/random-wheel', toolController.getRandomWheel);

module.exports = router