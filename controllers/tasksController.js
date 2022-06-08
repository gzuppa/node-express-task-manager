const Tasks = require('../models/Tasks');
const Subtasks = require('../models/Subtasks');

exports.addSubtask = async (req, res) => {
    const task = await Tasks.findOne({where: { url: req.params.url }});
    const {subtask} = req.body;
    const status = 0;
    const taskId = task.id;

    const result = await Subtasks.create({ subtask, status, taskId })

    if(!result) {
        return next();
    }
    res.redirect(`/tasks/${req.params.url}`)
}

exports.updateSubtaskStatus = async(req, res, next) => {
    const { id } = req.params;
    const subtask = await Subtasks.findOne({where: { id }})

    let status = 0;

    if(subtask.status === status) {
        status = 1;
    }

    subtask.status = status;

    const result = await subtask.save();

    if(!result) return next();
    res.status(200).send('Updated')
}

exports.deleteSubtask = async(req, res, next) => {
    const { id } = req.params;
    const result = await Subtasks.destroy({where: { id }})

    if(!result) return next();
    res.status(200).send('Deleting')
}