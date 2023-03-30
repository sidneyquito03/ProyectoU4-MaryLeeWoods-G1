import { GithubAuthProvider, signInWithPopup } from 'https://www.gstatic.com/firebasejs/9.17.1/firebase-auth.js'
import { auth } from './firebase.js'
import { toast } from './toast.js';
import { header, main } from '../js/home.js';
const btnGithub= document.querySelector("#btngithub");
const headerHo= document.querySelector("#header");
const formLogin = document.querySelector(".card-login")
const formSignUp = document.querySelector(".card-signUp")
const mainHome= document.querySelector("#main");
btnGithub.addEventListener('click', async ()=> {
    const provider= new GithubAuthProvider()
    try{
    const credentials= await signInWithPopup(auth, provider)
    console.log(credentials)

    toast("¡Bienvenido(a) "+credentials.user.displayName," disfruta de las lecturas y que encuentres la solución a tu código!");
    headerHo.innerHTML=header;
    const nameUser=document.getElementById("nombre-user");
    nameUser.innerHTML=`<a class="navbar-brand" href="#" id="nombre-user">      
    <img id="img-user" src="" alt="img" width="30" height="30" class="d-inline-block align-text-top">
    ${credentials.user.displayName}
    </a>`;
    const imgUser=document.getElementById("img-user");
    imgUser.src=credentials.user.photoURL;
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
}catch (error){
    toast(error, "error");
}
})