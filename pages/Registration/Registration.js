import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link, useHistory } from "react-router-dom";
import styles from '../../styles/Home.module.css'
import { isEmpty } from 'lodash';
import {
  auth,
  registerWithEmailAndPassword,
  signInWithGoogle,
} from "./firebase";
import 'bootstrap/dist/css/bootstrap.min.css';
import router from "next/router";
import Header from '../Navbar/Header'
import Nav from '../Navbar/Nav'
//import Img_H from '../Image/imageHR.png' 
//import "../../styles/Register.css";
<style>
  input[type=text]:focus {{
    backgroundColor: 'lightblue'
  }}

</style>

const register_ = {
 // height: '100vh',
 // width: '100vw',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center'
}
const register__container = {
 
  textAlign: 'center',
  
  padding: '30px',


  background: 'linear-gradient(91.41deg,hsl(221deg 100% 50%) .15%,hsl(221deg 100% 65%) 99.82%)',
        boxShadow: '0 6px 8px rgb(0 80 255 / 15%)',
        borderRadius: '12px',
        padding: '30px',
        color:'hsl(39deg 77% 83%)'
}
const register__textBox = {
  padding: '10px',
  fontSize: '18px',
  marginBottom: '10px',
  marginRight: '20px',
  border: '1px solid hsl(0deg 0% 88%)',
  borderRadius: '6px',
  background: 'hsl(0deg 0% 100% / 20%)',
  height: '50px',
  padding: '15px',
  color: 'hsl(0deg 0% 100%)'
}
const register__btn = {

  background:'hsl(0deg 0% 100%)',
    border: 'none',
    borderRadius: '4px',
    fontStyle: 'normal',
    fontWeight: '700',
    fontSize: '18px',
    lineHeight: '25px',
    textAlign: 'center',
    color: 'hsl(221deg 100% 50%)',
    padding: '0 10px',
    height: '50px',
}
const register__google = {
  background:'hsl(222deg 73% 88%)',
  border: 'none',
  borderRadius: '4px',
  fontStyle: 'normal',
  fontWeight: '700',
  fontSize: '18px',
  lineHeight: '25px',
  textAlign: 'center',
  color: 'hsl(11deg 100% 50%)',
  padding: '0 30px',
  height: '50px',
}
const ul_Row={
  display: 'flex',
  justifyContent: 'space-evenly',
  marginTop: '50px'
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
  const [location, setLocation] = useState('');

  const handleLocation = (e) => {
    setLocation(e.target.value)
  }
  const register = () => {
    if (!name) alert("Please enter name");
    registerWithEmailAndPassword(name, email, password);
  };
  // useEffect(() => {
  //   if (loading) return;
  //   if (user) history.replace("/dashboard");
  // }, [user, loading]);
  return (
    <>
      {
        !isEmpty(location) ? <><Nav style={styles} />
          <div class="bg-img" style={{background:'#dcf0fb80',padding:'100px'}}>
          <div className="row" >
          <div className="col-6">
            <h1>Earn More. Earn Respect. Safety Ensured.</h1>
            <p>Join 30,000+ partners across India, Australia, Singapore and the UAE</p>
          </div>
          <div className="col-6">
            <img src="pages/Image/imageHR.png" />
          </div>

        </div>
        <div style={register_}>
         
        <div className="row" style={register__container} >
        <h4>Start earning straight away. Share your details and we’ll reach out with next steps.</h4>
                <div className="col-md-2 mr-2">
                <input
                  type="text"
                  style={register__textBox}
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Full Name"
                  className="form-control"
                />
                </div>
                <div className="col-md-3 mr-2">
                <input
                  type="text"
                  style={register__textBox}
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="E-mail Address"
                  className="form-control"
                />
                </div>
                <div className="col-md-3 mr-2">
                <input
                  type="password"
                  style={register__textBox}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Password"
                  className="form-control"
                />
                </div>
                <div className="col-md-2">
                <button style={register__btn} className="form-control" onClick={register}>
                  Register
                </button>
                </div>
                <div className="col-md-2">
                <button
                  style={register__google}
                  className="form-control"
                  onClick={signInWithGoogle}
                >
                  Register with Google
                </button>
                </div>
        </div>
        </div>
<br />
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
                  Already have an account? <a href={() => router.push('/Registration/Login')} >Login</a> now.
                </div>
              </div>
            </div>
          </div>
          <div>
            <div className="row">
              <div className="col-sm-12">
<h2>Join UrbanCompany to change your life</h2>
<p>Urban Company is an app-based marketplace that empowers professionals like you to become your own boss</p>
<ul style={ul_Row}>
  <li>
    <h3>30,000+</h3>
    <p>Partners already on board</p>
  </li>
  <li>
  <h3>30,000+</h3>
    <p>Partners already on board</p>
  </li>
  <li>
  <h3>30,000+</h3>
    <p>Partners already on board</p>
  </li>
</ul>
              </div>
            </div>
            <div className="row">
              <div className="col-sm-12">
                
              </div>
            </div>
          </div>

        </> :
          <Header
            location={location}
            handleLocation={handleLocation}
            style={styles}
          />
      }
    </>

  );
}
export default Register;