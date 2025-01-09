const expess = require('express');

exports.getQr = (req, res) => {
    res.render('../views/tools/QrCode');
}

exports.getTinyUrl = (req, res) => {
    res.render('../views/tools/TinyUrl');
}

exports.getColorPicker = (req, res) => {
    res.render('../views/tools/ColorPicker');
}

exports.getIpFinder = (req, res) => {
    res.render('../views/tools/IPFinder');
}

