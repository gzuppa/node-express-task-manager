const express = require('express');
const router = express.Router();
const  { body } = require('express-validator')
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

    router.get('/tasks/:url', controller.taskByUrl)
    return router;
}