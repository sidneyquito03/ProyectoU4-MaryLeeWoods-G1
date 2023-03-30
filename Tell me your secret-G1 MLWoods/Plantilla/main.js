import { onAuthStateChanged } from "https://www.gstatic.com/firebasejs/9.10.0/firebase-auth.js"


import "./assets/auth/logout.js"
import "./assets/auth/signup.js"
import "./assets/auth/signin.js"
import "./assets/auth/toast.js"
import { loginCheck } from "./assets/auth/loginCheck.js"
import { auth, getTasks, saveTasks, onGetTasks, deleteTask, getTask, updateTask } from "./assets/auth/firebase.js"
import './assets/auth/googleLogin.js'
import './assets/auth/facebookLogin.js'
import './assets/auth/githubLogin.js'
import './assets/js/home.js'
import './assets/auth/postlist.js'
  /*
let editStatus = false;
let id = '';
onAuthStateChanged(auth, async (user) => {
  if (user) {
    loginCheck(user);
   const correo = user.email;
   //console.log(correo)

    try {

      //Ingresa titulo, descripcion y usuario a firesetore:
      const taskForm = document.getElementById("task-form");
      taskForm.addEventListener("submit", (e) => {
        e.preventDefault();
        const title = taskForm["task-title"];
        const description = taskForm["task-description"];
       
        
        if(editStatus){
            updateTask(id, {
              title: title.value,
              description: description.value,
              userMail: user.email
            });
            editStatus = false;
            id = "";
          taskForm["btn-task-form"].innerText = "Guardar";

        }else{
          saveTasks(title.value, description.value, user.email);
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
          <h5>${task.title}</h5>
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
       taskForm2['task-title'].value = task.title;
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



*/


