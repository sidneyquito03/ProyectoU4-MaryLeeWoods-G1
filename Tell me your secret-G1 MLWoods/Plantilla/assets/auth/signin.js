import { signInWithEmailAndPassword } from 'https://www.gstatic.com/firebasejs/9.17.1/firebase-auth.js'
import { auth } from './firebase.js'
import { toast } from './toast.js'
import { header, main } from '../js/home.js';
if(window.location.href=="index.html"){
const signInForm = document.querySelector("#login-form");
const headerHo= document.querySelector("#header");
const formLogin = document.querySelector(".card-login")
const formSignUp = document.querySelector(".card-signUp")
const mainHome= document.querySelector("#main");
signInForm.addEventListener("submit", async (e) => {
  e.preventDefault();
  const email = signInForm["email"].value;
  const password = signInForm["password"].value;

  try {
    const userCredential = await signInWithEmailAndPassword(auth, email, password)
    console.log(userCredential) //ponerlo como comentario para que no se vea en consola



    // reset the form
    signInForm.reset();
    // show welcome message
    toast("Welcome " + userCredential.user.email+" Iniciaste sesion");
    headerHo.innerHTML=header;
    const nameUser=document.getElementById("nombre-user");
    nameUser.innerHTML=`<a class="navbar-brand" href="#" id="nombre-user">      
    <img id="img-user" src="" alt="img" width="30" height="30" class="d-inline-block align-text-top">
    ${credentials.user.displayName}
    </a>`;
    const imgUser=document.getElementById("img-user");
    imgUser.src="assets/img/user.jpg";
    formLogin.style.display = 'none';
    formSignUp.style.display = 'none';
    mainHome.innerHTML=main;
    $(document).ready(function() {
        setTimeout(function() {
            // Declaramos la capa mediante una clase para ocultarlo
            $(".charging").fadeOut(1500);
        },3000);
    });
    postlist();
  } catch (error) {
    if (error.code === 'auth/wrong-password') {
      toast("Contraseña incorrecta","error")
    } else if (error.code === 'auth/user-not-found') {
      toast("Usuario no encontrado","error")
    } else {
      toast("Algo salio mal", "error")
    }
  }

});}
