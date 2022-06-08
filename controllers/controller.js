const Tasks = require('../models/Tasks');
const Subtasks = require('../models/Subtasks');

exports.Home = async (req, res) => {
    const tasks = await Tasks.findAll()
    res.render('index', {
        pageName: "Task manager",
        tasks
    });
}

exports.taskForm = async (req, res) => {
    const tasks = await Tasks.findAll();
    res.render('newTask', {
        pageName: "New Task",
        tasks
    });
}

exports.newTask = async (req, res) => {
    const tasks = await Tasks.findAll();
    const { name } = req.body;

    let errors = [];

    if(!name) {
        errors.push({'text': 'Add a task name'})
    }
    if(errors.length > 0) {
        res.render('newTask', {
            pageName : 'New Task',
            errors,
            tasks
        })
    } else {
        await Tasks.create({ name });
        res.redirect('/')
    }
}

exports.taskByUrl = async (req, res) => {
    const tasksPromise = Tasks.findAll();
    const taskPromise = Tasks.findOne({
        where: {
            url: req.params.url
        }
    })

    const [tasks, task] = await Promise.all([tasksPromise, taskPromise])
    
    const subtasks = await Subtasks.findAll({
        where: {
            taskId: task.id
        }
    })

    if(!task) return next();
    res.render('tasksList', {
        pageName: "Tasks List",
        task,
        tasks,
        subtasks
    } )
}

exports.editTask = async (req, res) => {
    const tasksPromise = Tasks.findAll();
    const taskPromise = Tasks.findOne({
        where: {
            id: req.params.id
        }
    })

    const [tasks, task] = await Promise.all([tasksPromise, taskPromise])

    res.render('newTask', {
        pageName : 'Edit Task',
        tasks,
        task
    })
}

exports.updateTask = async (req, res) => {
    const tasks = await Tasks.findAll();
    const { name } = req.body;

    let errors = [];

    if(!name) {
        errors.push({'text': 'Add a task name'})
    }
    if(errors.length > 0) {
        res.render('newTask', {
            pageName : 'New Task',
            errors,
            tasks
        })
    } else {
        await Tasks.update(
            { name: name },
            { where:
                {id: req.params.id}
            }
        );
        res.redirect('/')
    }
}

exports.deleteTask = async(req, res, next) => {
    const {urlTask} = req.query;

    const result = await Tasks.destroy(
        { where: {
            url: urlTask
        }}
    )
    if(!result) {
        return next();
    }
    res.send('Task deleted')
}