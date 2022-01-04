import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link, useHistory } from "react-router-dom";
import {
  auth,
  registerWithEmailAndPassword,
  signInWithGoogle,
} from "./firebase";
import 'bootstrap/dist/css/bootstrap.min.css';
import router from "next/router";
//import "../../styles/Register.css";

const register_= {
  height: '100vh',
  width: '100vw',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center'
}
const register__container ={
  display: 'flex',
  flexDirection: 'column',
  textAlign: 'center',
  backgroundColor: '#dcdcdc',
  padding: '30px'
}
const register__textBox ={
  padding: '10px',
  fontSize: '18px',
  marginBottom: '10px'
}
const register__btn ={
  padding: '10px',
  fontSize: '18px',
  marginBottom: '10px',
  border: 'none',
  color: 'white',
  backgroundColor: 'black'
}
const register__google ={
  backgroundColor: '#4285f4',
  padding: '10px',
  fontSize: '18px',
  marginBottom: '10px',
  border: 'none',
  color: 'white',
}
// const register div ={
//   marginTop: '7px'
// }

function Register() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
 // const [user, loading, error] = useAuthState(auth);
  //const history = useHistory();
  const register = () => {
    if (!name) alert("Please enter name");
    registerWithEmailAndPassword(name, email, password);
  };
  // useEffect(() => {
  //   if (loading) return;
  //   if (user) history.replace("/dashboard");
  // }, [user, loading]);
  return (
    <div style={register_}>
      <div style={register__container}>
        <input
          type="text"
          style={register__textBox}
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Full Name"
        />
        <input
          type="text"
          style={register__textBox}
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="E-mail Address"
        />
        <input
          type="password"
          style={register__textBox}
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password"
        />
        <button style={register__btn} onClick={register}>
          Register
        </button>
        <button
          style={register__google}
          onClick={signInWithGoogle}
        >
          Register with Google
        </button>
        <div>
          Already have an account? <a href={()=>router.push('/Registration/Login')} >Login</a> now.
        </div>
      </div>
    </div>
  );
}
export default Register;