const Sequelize = require('sequelize');
const slug = require('slug');
const shortid = require('shortid');

const db = require('../config/db')

const Tasks = db.define('tasks', {
    id : {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    name : Sequelize.STRING,
    url : Sequelize.STRING
}, {
    hooks: {
        beforeCreate(task) {
            const url = slug(task.name).toLowerCase();
            task.url = `${url}-${shortid.generate()}`;
        }
    }
});

module.exports = Tasks;