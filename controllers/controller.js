const Tasks = require('../models/Tasks');

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
    if(!task) return next();
    res.render('tasksList', {
        pageName: "Tasks List",
        task,
        tasks,
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