const expess = require('express');

exports.getQr = (req, res) => {
    const authToken = req.cookies;
    const ispresent = 'AuthenticationString' in authToken;
    if(!ispresent) {
        return res.redirect('/Login');
    }
    res.render('../views/tools/QrCode');
}

exports.getTinyUrl = (req, res) => {
    const authToken = req.cookies;
    const ispresent = 'AuthenticationString' in authToken;
    if(!ispresent) {
        return res.redirect('/Login');
    }
    res.render('../views/tools/TinyUrl');
}

exports.getColorPicker = (req, res) => {
    const authToken = req.cookies;
    const ispresent = 'AuthenticationString' in authToken;
    if(!ispresent) {
        return res.redirect('/Login');
    }
    res.render('../views/tools/ColorPicker');
}

exports.getIpFinder = (req, res) => {
    const authToken = req.cookies;
    const ispresent = 'AuthenticationString' in authToken;
    if(!ispresent) {
        return res.redirect('/Login');
    }
    res.render('../views/tools/IPFinder');
}

exports.getTextToSpeech = (req, res) => {
    const authToken = req.cookies;
    const ispresent = 'AuthenticationString' in authToken;
    if(!ispresent) {
        return res.redirect('/Login');
    }
    res.render('../views/tools/textToSpeech');
}

exports.getSpeechToText = (req, res) => {
    const authToken = req.cookies;
    const ispresent = 'AuthenticationString' in authToken;
    if(!ispresent) {
        return res.redirect('/Login');
    }
    res.render('../views/tools/speechToText');
}

exports.getBmiCalc = (req, res) => {
    const authToken = req.cookies;
    const ispresent = 'AuthenticationString' in authToken;
    if(!ispresent) {
        return res.redirect('/Login');
    }
    res.render('../views/tools/bmiCalc');
}

exports.getPdfTool = (req, res) =>{
    const authToken = req.cookies;
    const ispresent = 'AuthenticationString' in authToken;
    if(!ispresent) {
        return res.redirect('/Login');
    }
    res.status(404).json({message: "Page Not found...Maybe its under development"});
}

exports.getImageResizer = (req, res) =>{
    const authToken = req.cookies;
    const ispresent = 'AuthenticationString' in authToken;
    if(!ispresent) {
        return res.redirect('/Login');
    }
    res.status(404).json({message: "Page Not found...Maybe its under development"});
}

exports.getCurrencyConverter = (req, res) =>{
    const authToken = req.cookies;
    const ispresent = 'AuthenticationString' in authToken;
    if(!ispresent) {
        return res.redirect('/Login');
    }
    res.status(404).json({message: "Page Not found...Maybe its under development"});
}

exports.getMassConverter = (req, res) =>{
    const authToken = req.cookies;
    const ispresent = 'AuthenticationString' in authToken;
    if(!ispresent) {
        return res.redirect('/Login');
    }
    res.status(404).json({message: "Page Not found...Maybe its under development"});
}

exports.getRandomWheel = (req, res) =>{
    const authToken = req.cookies;
    const ispresent = 'AuthenticationString' in authToken;
    if(!ispresent) {
        return res.redirect('/Login');
    }
    res.status(404).json({message: "Page Not found...Maybe its under development"});
}
