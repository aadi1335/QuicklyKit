const expess = require('express');

const getQr = (req, res) => {
    const authToken = req.cookies;
    const ispresent = 'AuthenticationString' in authToken;
    if(!ispresent) {
        return res.redirect('/Login');
    }
    res.render('../views/tools/QrCode');
}

const getTinyUrl = (req, res) => {
    const authToken = req.cookies;
    const ispresent = 'AuthenticationString' in authToken;
    if(!ispresent) {
        return res.redirect('/Login');
    }
    res.render('../views/tools/TinyUrl');
}

const getColorPicker = (req, res) => {
    const authToken = req.cookies;
    const ispresent = 'AuthenticationString' in authToken;
    if(!ispresent) {
        return res.redirect('/Login');
    }
    res.render('../views/tools/ColorPicker');
}

const getIpFinder = (req, res) => {
    const authToken = req.cookies;
    const ispresent = 'AuthenticationString' in authToken;
    if(!ispresent) {
        return res.redirect('/Login');
    }
    res.render('../views/tools/IPFinder');
}

const getTextToSpeech = (req, res) => {
    const authToken = req.cookies;
    const ispresent = 'AuthenticationString' in authToken;
    if(!ispresent) {
        return res.redirect('/Login');
    }
    res.render('../views/tools/textToSpeech');
}

const getSpeechToText = (req, res) => {
    const authToken = req.cookies;
    const ispresent = 'AuthenticationString' in authToken;
    if(!ispresent) {
        return res.redirect('/Login');
    }
    res.render('../views/tools/speechToText');
}

const getBmiCalc = (req, res) => {
    const authToken = req.cookies;
    const ispresent = 'AuthenticationString' in authToken;
    if(!ispresent) {
        return res.redirect('/Login');
    }
    res.render('../views/tools/bmiCalc');
}

const getPdfTool = (req, res) =>{
    const authToken = req.cookies;
    const ispresent = 'AuthenticationString' in authToken;
    if(!ispresent) {
        return res.redirect('/Login');
    }
    res.status(404).json({message: "Page Not found...Maybe its under development"});
}

const getImageResizer = (req, res) =>{
    const authToken = req.cookies;
    const ispresent = 'AuthenticationString' in authToken;
    if(!ispresent) {
        return res.redirect('/Login');
    }
    res.status(404).json({message: "Page Not found...Maybe its under development"});
}

const getCurrencyConverter = (req, res) =>{
    const authToken = req.cookies;
    const ispresent = 'AuthenticationString' in authToken;
    if(!ispresent) {
        return res.redirect('/Login');
    }
    res.status(404).json({message: "Page Not found...Maybe its under development"});
}

const getMassConverter = (req, res) =>{
    const authToken = req.cookies;
    const ispresent = 'AuthenticationString' in authToken;
    if(!ispresent) {
        return res.redirect('/Login');
    }
    res.status(404).json({message: "Page Not found...Maybe its under development"});
}

const getRandomWheel = (req, res) =>{
    const authToken = req.cookies;
    const ispresent = 'AuthenticationString' in authToken;
    if(!ispresent) {
        return res.redirect('/Login');
    }
    res.status(404).json({message: "Page Not found...Maybe its under development"});
}


module.exports = {
    getRandomWheel,
    getMassConverter,
    getCurrencyConverter,
    getImageResizer,
    getPdfTool,
    getBmiCalc,
    getSpeechToText,
    getTextToSpeech,
    getIpFinder,
    getColorPicker,
    getQr,
    getTinyUrl
}