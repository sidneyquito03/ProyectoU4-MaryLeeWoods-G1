import { onAuthStateChanged } from "https://www.gstatic.com/firebasejs/9.10.0/firebase-auth.js"
import { auth, getTasks, saveTasks, onGetTasks, deleteTask, getTask, updateTask } from "./firebase.js"

export function postlist(){
    let editStatus = false;
    let id = '';
    onAuthStateChanged(auth, async (user) => {
    if (user) {
    const correo = user.email;
    //console.log(correo)

        try {

        //Ingresa titulo, descripcion y usuario a firesetore:
        const taskForm = document.getElementById("task-form");
        taskForm.addEventListener("submit", (e) => {
            e.preventDefault();
            
            const description = taskForm["task-description"];
        
            
            if(editStatus){
                updateTask(id, {
                description: description.value,
                userMail: user.email
                });
                editStatus = false;
                id = "";
            taskForm["btn-task-form"].innerText = "Guardar";

            }else{
            saveTasks(description.value, user.email);
            }   
            taskForm.reset()
        });


        } catch (error){
        console.log(error)
        }

        console.log(correo)
        
        const tasksContainer = document.getElementById("posts");
        //
        onGetTasks((querySnapshot)=>{
        let html = '';   
        querySnapshot.forEach(doc => {
        //console.log(doc.data()); 
        const task = doc.data();   
        if (task.userMail == correo){
        html += `
            <li class="list-group-item list-group-item-action mt-2">
            
            <p>${task.description}</p>
            <div>
            <button class="btn btn-primary btn-delete" data-id="${doc.id}">
            Delete
            </button>
            <button class="btn btn-secondary btn-edit" data-id="${doc.id}">
                Edit
            </button>
            </div>

            </li>
            `;
        }  
        });
        tasksContainer.innerHTML = html;
    
    //eliminar
        const btnsDelete = tasksContainer.querySelectorAll('.btn-delete');
        //console.log(btnsDelete); //se uso para probar
        btnsDelete.forEach(btn =>{
            btn.addEventListener('click', (event) =>{
            deleteTask(event.target.dataset.id)
            })

        })

        //editar:
        const btnsEdit = tasksContainer.querySelectorAll(".btn-edit");
        btnsEdit.forEach(btn =>{
        //console.log(btn)
        btn.addEventListener('click', async (event) =>{ 
        const doc = await getTask(event.target.dataset.id);
        const task = doc.data()
        const taskForm2 = document.getElementById("task-form");
        taskForm2['task-description'].value = task.description; 
        editStatus = true;
        //console.log(editStatus);
        id = doc.id
        taskForm2['btn-task-form'].innerText = 'Update';
        })

        })  
    });


    }else{
        const vacio = "";
        //setupPosts(vacio);
        const tasksContainer = document.getElementById("posts");
        tasksContainer.innerHTML = '<h3 class="text-white">Inicia sesion para ver tus publicaciones</h1>'
        loginCheck(user);
    }

    });


}