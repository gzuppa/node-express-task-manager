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
        const task = await Tasks.create({ name });
        res.redirect('/')
    }
}

exports.taskByUrl = async (req, res) => {
    const tasks = await Tasks.findAll();

    const task = await Tasks.findOne({
        where: {
            url: req.params.url
        }
    })
    if(!task) return next();
    res.render('tasksList', {
        pageName: "Tasks List",
        task,
        tasks,
    } )
}