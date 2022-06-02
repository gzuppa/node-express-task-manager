const Sequelize = require('sequelize');

const db = require('../config/db')

const Proyectos = db.define('proyectos', {
    id : {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    nombre : Sequelize.INTEGER,
    url: Sequelize.INTEGER,
});

module.exports = Proyectos;