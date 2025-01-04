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
