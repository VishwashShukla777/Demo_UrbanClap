import React, { useEffect, useState } from "react";
import { useHistory, unstable_HistoryRouter } from "react-router-dom";
 import { auth, signInWithEmailAndPassword, signInWithGoogle } from "../Registration/firebase";
 import { useAuthState } from "react-firebase-hooks/auth";
import 'bootstrap/dist/css/bootstrap.min.css';
import router, { Router } from "next/router";


const login = {
    "height": "100vh",
    "width": "100vw",
    "display": "flex",
    "alignItems": "center",
    "justify-content": "center"
}
const login__container = {
    "display": "flex",
    "flex-direction": "column",
    "textAlign": "center",
    "backgroundColor": "#dcdcdc",
    "padding": "30px"
}
const login__textBox = {
    "padding": "10px",
    "fontSize": "18px",
    "marginBottom": "10px"
}
const login__btn = {
    "padding": "10px",
    "fontSize": "18px",
    "marginBottom": "10px",
    "border": "none",
    "color": "white",
    "backgroundColor": "black"
}
const login__google = {
    "backgroundColor": "#4285f4"
}


function Login() {
    debugger
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
//    const [user, loading] = useAuthState(auth);
//     // const history = unstable_HistoryRouter();
    
//     useEffect(() => {
//         debugger
//         if (loading) {
//             // maybe trigger a loading screen
//             return;
//         }
//         if (user) router.push("/Dashboard/Dashboard");
//     }, [user, loading]);
    return (
        <>
            <div style={login}>
                <div style={login__container}>
                    <input
                        type="text"
                        style={login__textBox}
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="E-mail Address"
                    />
                    <input
                        type="password"
                        style={login__textBox}
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        placeholder="Password"
                    />
                    <button
                        style={login__btn}
                      onClick={() => signInWithEmailAndPassword(email, password)}
                    >
                        Login
                    </button>
                    <button className="login__btn login__google" onClick={signInWithGoogle}>
          Login with Google
        </button>
                    <div>
                        {/* <Link to="/reset">Forgot Password</Link> */}
                    </div>
                    <div>
                        {/* Don't have an account? <Link to="/register">Register</Link> now. */}
                    </div>
                </div>
            </div>
        </>
    );
}
export default Login;