import axios from "axios";
import Swal from "sweetalert2"

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
        if(e.target.classList.contains('fi-br-cross')) {
            const subtaskHTML = e.target.parentElement.parentElement;
                const idSubtask = subtaskHTML.dataset.subtask;
                Swal.fire({
                    title: 'Do you want to delete this subtask?',
                    text: "You won't be able to revert this!",
                    icon: 'warning',
                    showCancelButton: true,
                    confirmButtonColor: '#3085d6',
                    cancelButtonColor: '#d33',
                    confirmButtonText: 'Yes, delete it!'
                  }).then((result) => {
                    if (result.value) {
                        const url = `${location.origin}/subtasks/${idSubtask}`;
                        axios.delete(url, { params: idSubtask })
                            .then(function(response) {
                                if(response.status === 200) {
                                    subtaskHTML.parentelement.removeChild(subtaskHTML);
                                    Swal.fire(
                                        'Deleted Task',
                                        response.data,
                                        'success'
                                    )
                                }
                            })
                }
            })
        }
    })
}

export default subtasks;