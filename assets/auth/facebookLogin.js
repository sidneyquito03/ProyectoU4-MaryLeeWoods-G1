import { FacebookAuthProvider, signInWithPopup } from 'https://www.gstatic.com/firebasejs/9.17.1/firebase-auth.js'
import { auth } from './firebase.js'
import { toast } from './toast.js';

const btnFacebook= document.querySelector("#btnFacebook");
btnFacebook.addEventListener('click', async ()=> {
    const provider= new FacebookAuthProvider()
    try{
    const credentials= await signInWithPopup(auth, provider)
    console.log(credentials)
        toast("Welcome "+credentials.user.displayName,"success")
    }catch (error){
        toast(error, "error");
    }
})