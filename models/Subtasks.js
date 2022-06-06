const Sequelize = require('sequelize');
const db = require('../config/db');
const Tasks = require('./Tasks')

const Subtasks = db.define('subtasks', {
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    subtask: Sequelize.STRING(100),
    status: Sequelize.INTEGER
})
Subtasks.belongsTo(Tasks);

module.exports = Subtasks;