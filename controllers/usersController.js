const Users = require('../models/Users');

exports.createAccount = (req, res) => {
    res.render('createAccount', {
        pageName: 'Create Account'
    })
}

exports.newAccount = (req, res) => {
    const { email, password } = req.body;
    Users.create({
        email,
        password
    })
    .then(() => {
        res.redirect('/login')
    })
}