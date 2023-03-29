import { signInWithEmailAndPassword } from 'https://www.gstatic.com/firebasejs/9.17.1/firebase-auth.js'
import { auth } from './firebase.js'
import { toast } from './toast.js'

const signInForm = document.querySelector("#login-form");
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
    toast(" ¡Hola , " + userCredential.user.email + "! , que tengas una agradable estadía en nuestra página");

  } catch (error) {
    if (error.code === 'auth/wrong-password') {
      toast("La Contraseña que ingresó es incorrecta", "error")
    } else if (error.code === 'auth/user-not-found') {
      toast("Usuario no encontrado", "error")
    } else {
      toast("Algo ha salido mal", "error")
    }
  }

});
