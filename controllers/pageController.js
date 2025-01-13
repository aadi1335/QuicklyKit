const { request, response } = require("express");
const feedbackSchema = require('../models/userFeedback');
const userSchema = require('../models/user');

exports.homePage = (req, res) => {
    const authToken = req.cookies;
    const ispresent = 'AuthenticationString' in authToken;
    if(!ispresent) {
        return res.redirect('/Login');
    }
    res.render('Home')
};

exports.dashPage = (req, res) => {
    const authToken = req.cookies;
    const ispresent = 'AuthenticationString' in authToken;
    if(!ispresent) {
        return res.redirect('/Login');
    }
    res.render('DashBoard')
}

exports.profilePage = (req, res) => {
    const authToken = req.cookies;
    const ispresent = 'AuthenticationString' in authToken;
    if(!ispresent) {
        return res.redirect('/Login');
    }
    res.render('Profile')
}

exports.setPage = (req, res) => {
    const authToken = req.cookies;
    const ispresent = 'AuthenticationString' in authToken;
    if(!ispresent) {
        return res.redirect('/Login');
    }
    res.render('Settings')
}




// starting with post request for main pages
exports.postFeedback = async (request, response) => {
    const authToken = request.cookies.AuthenticationString;
    // finding the user email based on the authentication string
    const user = await userSchema.findOne({ AuthToken: authToken });

    const {review, rating} = request.body;
    const iscreated = await feedbackSchema.create({
        UserName: user.UserName,
        Email: user.Email,
        Review: review,
        Rating: rating
    })

    if(!iscreated) {
        return res.status(500).json({message: "Internal server error"});
    }

    return response.redirect('/Profile');
}
