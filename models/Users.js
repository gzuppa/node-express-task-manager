const Sequelize = require('sequelize');
const db = require('../config/db');
const Tasks = require('./Tasks')
const bcrypt = require('bcryptjs');

const Users = db.define('users', {
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    email: {
        type: Sequelize.STRING(60),
        allowNull: false
    },
    password: {
        type: Sequelize.STRING(60),
        allowNull: false
    }
}, {
    hooks: {
        beforeCreate(user) {
            user.password = bcrypt.hashSync(user.password, bcrypt.genSaltSync(10))
        }
    }
})

Users.hasMany(Tasks);

module.exports = Users;