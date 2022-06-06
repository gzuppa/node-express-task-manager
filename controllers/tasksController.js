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