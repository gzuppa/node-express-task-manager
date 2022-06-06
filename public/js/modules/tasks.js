import Swal from 'sweetalert2';
import axios from 'axios';

const btnDelete = document.querySelector('#delete-task');

if (btnDelete) {
    btnDelete.addEventListener('click', e => {
        const urlTask = e.target.dataset.taskUrl;

        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
          }).then((result) => {
            if (result.value) {
              const url = `${location.origin}/tasks/${urlTask}`;
              axios.delete(url, { params: {urlTask}})
                .then(function(response){
                    console.log(response)
                });
              Swal.fire(
                'Deleted!',
                response.data,
                'success'
              );
              setTimeout(() => {
                  window.location.href = '/'
              }, 3000)
            }
        })
    })
}

export default btnDelete