import { createUserWithEmailAndPassword } from 'https://www.gstatic.com/firebasejs/9.17.1/firebase-auth.js'
import { toast } from "./toast.js";
import { auth } from './firebase.js';

const signUpForm = document.querySelector("#signup-form");
export const usuarioN = signUpForm["signup-names"].value;
signUpForm.addEventListener("submit", async (e) => {
  e.preventDefault();
  const email = signUpForm["signup-email"].value;
  const password = signUpForm["signup-password"].value;
  const usuario = signUpForm["signup-names"].value;
  try {
    const userCredential = await createUserWithEmailAndPassword(auth, email, password)
    console.log(userCredential) //ponerlo como comentario para que no se vea en consola
    // reset the form
    signUpForm.reset();

    // show welcome message
    toast("¡Bienvenido!, nos alegra que te hayas unido, " + usuario);

  } catch (error) {
    if (error.code === 'auth/email-already-in-use') {
      toast("Este email ya ha sido registrado anteriormente", "error")
    } else if (error.code === 'auth/invalid-email') {
      toast("Email inválido, pruebe con otro", "error")
    } else if (error.code === 'auth/weak-password') {
      toast("Su contraseña es corta (6 dígitos o +) ", "error")
    } else if (error.code) {
      toast("Algo ha salido mal", "error")
    }
  }

});
