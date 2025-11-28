import { initializeApp } from "https://www.gstatic.com/firebasejs/12.6.0/firebase-app.js";
import { getAuth, GoogleAuthProvider, signInWithPopup, GithubAuthProvider, fetchSignInMethodsForEmail, onAuthStateChanged, signOut } from "https://www.gstatic.com/firebasejs/12.6.0/firebase-auth.js";
import { getDatabase, ref, set, onValue } from "https://www.gstatic.com/firebasejs/12.6.0/firebase-database.js";

const firebaseConfig = {
    apiKey: "AIzaSyAHHQF8VL1n9mpFccL8G8hZYf_GeNh7i54",
    authDomain: "eautech-1a52c.firebaseapp.com",
    databaseURL: "https://eautech-1a52c-default-rtdb.firebaseio.com",
    projectId: "eautech-1a52c",
    storageBucket: "eautech-1a52c.firebasestorage.app",
    messagingSenderId: "666883701744",
    appId: "1:666883701744:web:5be8a7cb6511f91c5fbb35"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();
const provider2 = new GithubAuthProvider();
const database = getDatabase(app);


// onAuthStateChanged(auth, (user) => {
//         if (user) {
//             console.log(user);
//             show.innerHTML += `<h2>User Details</h2>
//             <p> Name: ${user.displayName} </p>
//             <img src="${user.photoURL}" alt="DP" width="" </img>`
//         } else {
//             setTimeout(() => {
//                 window.location.href = "../public/index.html"
//             }, 1000)
//         }
//     });

const signIn = () => {
    signInWithPopup(auth, provider)
        .then((result) => {
            const user = result.user;
            console.log(user)
            if (user) setTimeout(() => {
                window.location.href = "../dashboard/dashboard.html"
            }, 1000);
            else {
                window.location.href = ".index.html"
            }
        })
        .catch((error) => {
            const errorCode = error.code;
            console.log(errorCode);
        })
}

const github = () => {
    signInWithPopup(auth, provider2)
        .then((result) => {
            const user = result.user;
            console.log(user)
            if (user) setTimeout(() => {
                window.location.href = "..dashboard/dashboard.html"
            }, 1000);
            else {
                window.location.href = ".index.html"
            }
        })
        .catch((error) => {
            const errorCode = error.code;
            console.log(errorCode);
        })
}

window.signIn = signIn
window.github = github