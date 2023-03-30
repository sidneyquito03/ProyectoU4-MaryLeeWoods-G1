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