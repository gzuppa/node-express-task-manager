const Users = require('../models/Users');

exports.createAccount = (req, res) => {
    res.render('createAccount', {
        pageName: 'Create Account'
    })
}

exports.newAccount = async (req, res) => {
    const { email, password } = req.body;
    
    try {
        await  Users.create({
            email,
            password
        });
        res.redirect('/login')
    } catch (error) {
        req.flash('error', error.errors.map(error => error.message));
        res.render('createAccount', {
            messages: req.flash(),
            pageName: 'Create Account',
            email,
            password
        }) 
    }
}