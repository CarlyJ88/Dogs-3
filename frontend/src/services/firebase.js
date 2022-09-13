import { initializeApp } from "firebase/app";
import {
  GoogleAuthProvider,
  getAuth,
  signInWithPopup,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  sendPasswordResetEmail,
  signOut,
} from "firebase/auth";
import {
  getFirestore,
  query,
  getDocs,
  collection,
  where,
  addDoc,
} from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDtWj9LOpz7iA3OttSkRKpgCCLu2JG61nU",
  authDomain: "dogs-6e824.firebaseapp.com",
  projectId: "dogs-6e824",
  storageBucket: "dogs-6e824.appspot.com",
  messagingSenderId: "740005804277",
  appId: "1:740005804277:web:1815c0ebc337debb3bedbc",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

const googleProvider = new GoogleAuthProvider();
const signInWithGoogle = async () => {
  try {
    const res = await signInWithPopup(auth, googleProvider);
    const user = res.user;
    const q = query(collection(db, "users"), where("uid", "==", user.uid));
    const docs = await getDocs(q);
    if (docs.docs.length === 0) {
      await addDoc(collection(db, "users"), {
        uid: user.uid,
        name: user.displayName,
        authProvider: "google",
        email: user.email,
      });
    }
  } catch (err) {
    console.error(err);
    alert(err.message);
  }
};

const logInWithEmailAndPassword = async (email, password) => {
  try {
    await signInWithEmailAndPassword(auth, email, password);
  } catch (err) {
    console.error(err);
    alert(err.message);
  }
};

const registerWithEmailAndPassword = async (name, email, password) => {
  try {
    const res = await createUserWithEmailAndPassword(auth, email, password);
    const user = res.user;
    await addDoc(collection(db, "users"), {
      uid: user.uid,
      name,
      authProvider: "local",
      email,
    });
  } catch (err) {
    console.error(err);
    alert(err.message);
  }
};

const sendPasswordReset = async (email) => {
  try {
    await sendPasswordResetEmail(auth, email);
    alert("Password reset link sent!");
  } catch (err) {
    console.error(err);
    alert(err.message);
  }
};

const logout = () => {
  signOut(auth);
};

export {
  auth,
  db,
  signInWithGoogle,
  logInWithEmailAndPassword,
  registerWithEmailAndPassword,
  sendPasswordReset,
  logout,
};

// ---------------------------------------------

// Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// // Initialize Firebase
// const app = initializeApp(firebaseConfig);
// // const analytics = getAnalytics(app);

// // import firebase from "firebase/compat/app";
// // import * as firebaseui from "firebaseui";
// import "firebaseui/dist/firebaseui.css";

// import {
//   GoogleAuthProvider,
//   getAuth,
//   signInWithRedirect,
//   getRedirectResult,
//   onAuthStateChanged,
// } from "firebase/auth";

// const provider = new GoogleAuthProvider();

// export function redirect() {
//   const auth = getAuth();
//   signInWithRedirect(auth, provider);
//   // onAuthStateChanged();
// }

// export async function user() {
//   const auth = getAuth();
//   try {
//     const result = await getRedirectResult(auth);
//     // This gives you a Google Access Token. You can use it to access Google APIs.
//     const credential = GoogleAuthProvider.credentialFromResult(result); // fail
//     const token = credential.accessToken;
//     // The signed-in user info.
//     const user = result.user;
//     return user;
//   } catch (error) {
//     console.log(error, "error");
//     redirect();
//     // Handle Errors here.
//     const errorCode = error.code;
//     const errorMessage = error.message;
//     // The email of the user's account used.
//     const email = error.email;
//     // The AuthCredential type that was used.
//     const credential_1 = GoogleAuthProvider.credentialFromError(error);
//   }
// }
