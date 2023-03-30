const Registrar = document.querySelector("#Registrar");
const InicioSesion=document.querySelector("#InicioSesion");
const formLogin = document.querySelector(".card-login")
const formSignUp = document.querySelector(".card-signUp")

Registrar.onclick= function(){

   formLogin.style.display = 'none';
   formSignUp.style.display = 'block';
}
InicioSesion.onclick= function(){

    formLogin.style.display = 'block';
    formSignUp.style.display = 'none';
 }