  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.3/firebase-app.js";
  import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.12.3/firebase-analytics.js";
  import { getAuth, onAuthStateChanged, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from "https://www.gstatic.com/firebasejs/10.12.3/firebase-auth.js";
  
  const firebaseConfig = {
    apiKey: "AIzaSyCTmc0jCHrPeg6FKXZppE0G_XwiUCfwWG4",
    authDomain: "authentication-1st-project.firebaseapp.com",
    projectId: "authentication-1st-project",
    storageBucket: "authentication-1st-project.appspot.com",
    messagingSenderId: "1063860290631",
    appId: "1:1063860290631:web:9557c7dbe4f4f34b975d62",
    measurementId: "G-JMCN5PJP2B"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);
  const auth = getAuth(app);

  const email = document.getElementById("signupEmail");
  const password = document.getElementById("signupPass");
  const signupBtn = document.getElementById("signupBtn");

  const loginEmail = document.getElementById("loginEmail");
  const loginPass = document.getElementById("loginPass");
  const loginBtn = document.getElementById("loginBtn");

  const authContainer = document.getElementById("authContainer");
  const user_container = document.getElementById("user_container");

  const userEmail = document.getElementById("userEmail");
  const logoutBtn = document.getElementById("logoutBtn");

  signupBtn.addEventListener('click', createUserAccount);
  loginBtn.addEventListener('click', login);
  logoutBtn.addEventListener('click', logout);

onAuthStateChanged(auth, (user) => {
    if (user) {
      console.log("user is logged in!");
      const uid = user.uid;
      authContainer.style.display = "none";
      user_container.style.display = "block";
      userEmail.innerHTML = user.email;
    } else {
      console.log("user is not logged in!");
      authContainer.style.display = "block";
      user_container.style.display = "none";
    }
  });


function createUserAccount() {
  // console.log("email =>", signupEmail.value);
  // console.log("pass =>", signupPass.value);
  createUserWithEmailAndPassword(auth, signupEmail.value, signupPass.value)
  .then((userCredential) => {
    const user = userCredential.user;
    console.log("user =>", user);
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    alert(errorMessage);
    // ..
  });
}


function login() {
  // console.log("email =>", loginEmail.value);
  // console.log("pass =>", loginPass.value);
  signInWithEmailAndPassword(auth, loginEmail.value, loginPass.value)
  .then((userCredential) => {
    const user = userCredential.user;
    console.log("user =>", user);
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    alert(errorMessage);
  });
}

function logout() {
signOut(auth).then(() => {
  // Sign-out successful.
}).catch((error) => {
  // An error happened.
});

}