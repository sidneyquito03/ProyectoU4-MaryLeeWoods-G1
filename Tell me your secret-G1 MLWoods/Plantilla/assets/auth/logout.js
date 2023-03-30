import { signOut  } from 'https://www.gstatic.com/firebasejs/9.17.1/firebase-auth.js'
import { toast } from "./toast.js";
import { auth } from './firebase.js';
/*
const logOut=document.querySelector("#logout");
logOut.addEventListener("click", async(e)=>{
    e.preventDefault();
    try {
    await signOut(auth);
    console.log("sign out");
    toast("Cerraste sesión");
    } catch (error) {
        toast("error","error")
    }
})*/
