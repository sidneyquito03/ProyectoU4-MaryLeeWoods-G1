import { GoogleAuthProvider, signInWithPopup } from 'https://www.gstatic.com/firebasejs/9.17.1/firebase-auth.js'
import { auth } from './firebase.js'
import { toast } from './toast.js';

const btnGoogle = document.querySelector("#btnGoogle");
btnGoogle.addEventListener('click', async () => {
  const provider = new GoogleAuthProvider()
  try {
    const credentials = await signInWithPopup(auth, provider)
    console.log(credentials)
    toast("Welcome " + credentials.user.displayName, "success")
  } catch (error) {
    toast(error, "error");
  }
})