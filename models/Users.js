const Sequelize = require('sequelize');
const db = require('../config/db');
const Tasks = require('./Tasks')

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
})

Users.hasMany(Tasks);

module.exports = Users;