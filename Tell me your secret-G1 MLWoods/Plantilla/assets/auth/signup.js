import { createUserWithEmailAndPassword, updateProfile } from 'https://www.gstatic.com/firebasejs/9.17.1/firebase-auth.js'
import { toast } from "./toast.js";
import { auth } from './firebase.js';


const signUpForm = document.querySelector("#signup-form");
signUpForm.addEventListener("submit", async (e) => {
  e.preventDefault();
  const email = signUpForm["signup-email"].value;
  const password = signUpForm["signup-password"].value;
  const usuario= signUpForm["signup-names"].value;    
  try {
    const userCredential = await createUserWithEmailAndPassword(auth, email, password)
    updateProfile(auth.currentUser, {
      displayName: usuario, photoURL: "assets/img/perfil.png"
    }).then(() => {
      console.log("Profile updated!")      
    });
    console.log(userCredential) 
    // reset the form
    signUpForm.reset();
    
    // show welcome message
    toast("Welcome " + usuario);

  } catch (error) {
    if (error.code === 'auth/email-already-in-use') {
      toast("Email en uso","error")
    } else if (error.code === 'auth/invalid-email') {
      toast("Invalido email","error")
    } else if (error.code === 'auth/weak-password') {
      toast("Password corto", "error")
    } else if (error.code) {
      toast("Algo salio mal", "error")
    }
  }

});
