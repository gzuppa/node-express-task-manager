import Swal from "sweetalert2";

export const updateProgress = () => {
    const subtasks = document.querySelectorAll('li.subtask')

    if(subtasks.length) {
        const completeSubtasks = document.querySelectorAll('i.complete')
        const progress = Math.round((completeSubtasks.length / subtasks.length) * 100)
        const percentage = document.querySelector('#percentage');
        percentage.style.width = progress+'%'

        if(progress === 100) {
            Swal.fire(
                'Task completed',
                'Congrats!',
                'success'
            )
        }
    }
}