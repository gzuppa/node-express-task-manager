const Tasks = require('../models/Tasks');

exports.Home = (req, res) => {
    res.render('index', {
        pageName: "Task manager"
    });
}

exports.taskForm = (req, res) => {
    res.render('newTask', {
        pageName: "New Task"
    });
}

exports.newTask = async (req, res) => {
    const { name } = req.body;

    let errors = [];

    if(!name) {
        errors.push({'text': 'Add a task name'})
    }

    if(errors.length > 0) {
        res.render('newTask', {
            pageName : 'New Task',
            errors
        })
    } else {
        const task = await Tasks.create({ name });
        res.redirect('/')
    }
}