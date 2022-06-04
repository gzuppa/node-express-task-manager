const express = require('express');
const router = express.Router();
const  { body } = require('express-validator/check')

const controller = require('../controllers/controller')

module.exports = function () {
    router.get('/', controller.Home);
    router.get('/new-project', controller.taskForm);
    router.post('/new-project',
        body('name')
            .not()
            .isEmpty()
            .trim()
            .escape(),
        controller.newTask)
    return router;
}