import tasks from './modules/tasks'
import subtasks from './modules/subtasks'
import {updateProgress} from './functions/progress'

document.addEventListener('DOMContentLoaded', () => {
    updateProgress();
})