const express = require('express');
const router = express.Router();
const  { body } = require('express-validator')
const controller = require('../controllers/controller')
const tasksController = require('../controllers/tasksController')
const usersController = require('../controllers/usersController')

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

    router.get('/task/edit/:id', controller.editTask)

    router.post('/new-project/:id',
        body('name')
            .not()
            .isEmpty()
            .trim()
            .escape(),
        controller.updateTask)

    router.delete('/tasks/:url', controller.deleteTask)

    router.post('/tasks/:url', tasksController.addSubtask)

    router.patch('/subtasks/:id', tasksController.updateSubtaskStatus)

    router.delete('/subtasks/:id', tasksController.deleteSubtask)

    router.get('/create-account', usersController.createAccount)

    router.post('/create-account', usersController.newAccount)
    return router;
}