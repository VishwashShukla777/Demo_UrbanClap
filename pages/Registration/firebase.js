import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import router from 'next/router';

const firebaseConfig = {
  apiKey: "AIzaSyD85Y2q_DO0K7NAHXS-AiJIY4r3q3nWues",
  authDomain: "urbanclapreplica-auth.firebaseapp.com",
  projectId: "urbanclapreplica-auth",
  storageBucket: "urbanclapreplica-auth.appspot.com",
  messagingSenderId: "527532838564",
  appId: "1:527532838564:web:5b1d765c7aab5567e0a031",
  measurementId: "G-3FENVWRKYK"
};

const app = firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();
console.log("auth", auth)
const db = app.firestore();
const googleProvider = new firebase.auth.GoogleAuthProvider();
const signInWithGoogle = async () => {
  try {
    debugger
    const res = await auth.signInWithPopup(googleProvider);
    const user = res.user;
    const query = await db
      .collection("users")
      .where("uid", "==", user.uid)
      .get();
    if (query.docs.length === 0) {
      await db.collection("users").add({
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
const signInWithEmailAndPassword = async (email, password) => {
  try {
    debugger
    await auth.signInWithEmailAndPassword(email, password);
    console.log("login")
    router.push('/Dashboard/Dashboard')
  } catch (err) {
    console.error(err);
    alert(err.message);
  }
};
const registerWithEmailAndPassword = async (name, email, password) => {
  try {
    debugger
    const res = await auth.createUserWithEmailAndPassword(email, password);
    const user = res.user;
    await db.collection("users").add({
      uid: user.uid,
      name,
      authProvider: "local",
      email,
    });
    router.push('/Registration/Login')
  } catch (err) {
    console.error(err);
    alert(err.message);
    router.push('/Registration/Registration')
  }
};
const sendPasswordResetEmail = async (email) => {
  try {
    await auth.sendPasswordResetEmail(email);
    alert("Password reset link sent!");
  } catch (err) {
    console.error(err);
    alert(err.message);
  }
};
const logout = () => {
  auth.signOut();
};
export {
  auth,
  db,
  signInWithGoogle,
  signInWithEmailAndPassword,
  registerWithEmailAndPassword,
  sendPasswordResetEmail,
  logout,
};
