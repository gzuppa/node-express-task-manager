import axios from "axios";

const subtasks = document.querySelector('.pending-list');

if(subtasks) {
    subtasks.addEventListener('click', e => {
        if(e.target.classList.contains('fi-br-check')){
            const icon = e.target;
            const idSubtask = icon.parentElement.parentElement.dataset.subtask;
            const url = `${location.origin}/subtasks/${idSubtask}`;
            axios.patch(url, { idSubtask })
                .then(function(response){
                    if(response.status === 200){
                        icon.classList.toggle('complete');
                }
            })
        }
    })
}

export default subtasks;