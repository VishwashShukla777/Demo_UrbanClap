import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import firebase from 'firebase/compat/app';
//import { useHistory } from "react-router";
import 'bootstrap/dist/css/bootstrap.min.css';
//import "../../styles/Dashboard.css";
import { auth, db, logout } from '../Registration/firebase';
import { isEmpty } from 'lodash'
import Footer from "../Footer/Footer";
import router from "next/router";
export const StoreContext = React.createContext(null)

const dashboard = {
  height: '100vh',
  width: '100vw',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center'
}
const dashboard__container = {
  display: 'flex',
  flexDirection: 'column',
  textAlign: 'center',
  backgroundColor: '#dcdcdc',
  padding: '30px'
}
const dashboard__btn = {
  padding: '10px',
  fontSize: '18px',
  marginTop: '10px',
  border: 'none',
  color: 'white',
  backgroundColor: 'black'
}

// function onAuthStateChange(callback) {
//   return firebase.auth().onAuthStateChanged(user => {
//     if (user) {
//       console.log("The user is logged in");

//       setTokenExpire(user._delegate.stsTokenManager.isExpired)
//       setUid(user._delegate.uid)
//       setUserEmail(user._delegate.email)
//       setToken(user._delegate.stsTokenManager.accessToken)
//       fetchUserName(user._delegate.uid)

//       callback({ loggedIn: true, email: user.email });
//     } else {
//       callback({ loggedIn: false });
//     }
//   });
// }

function Dashboard() {
  console.log("test ,")
  // const [user, loading, error] = useAuthState(auth);
  const authData = useAuthState(auth);
  const [name, setName] = useState("");

  const [uid, setUid] = useState('')
  const [userEmail, setUserEmail] = useState('')
  const [token, setToken] = useState('')
  const [tokenExpire, setTokenExpire] = useState(true)
  const [userData, setUserData]=useState({});
  //const history = useHistory();
  const fetchUserName = async (uid) => {
    debugger
    try {
      const query = await db
        .collection("users")
        .where("uid", "==", uid)
        .get();
      const data = await query.docs[0].data();
      setName(data.name);
      setUserData({Name:data.name,Email:data.email},()=>{console.log(userData)})
    } catch (err) {
      console.error(err);
      alert("An error occured while fetching user data");
    }
  };
  function onAuthStateChange() {
    debugger
    return firebase.auth().onAuthStateChanged(user => {
      if (user) {
        console.log("The user is logged in");

        setTokenExpire(user._delegate.stsTokenManager.isExpired)
        setUid(user._delegate.uid)
        setUserEmail(user._delegate.email)
        setToken(user._delegate.stsTokenManager.accessToken)
        fetchUserName(user._delegate.uid)

      } else {
        console.log("The user is not logged in");
      }
    });
  }

  useEffect(() => {
    console.log("authData ", authData)
    console.log("auth1 ", auth)
    // let { accessToken, isExpired } = auth._delegate.currentUser.stsTokenManager
    // let { email, emailVerified } = auth._delegate.currentUser

    // if(isExpired === true){
    //   router.push('/Registration/Login')
    // }
    const unsubscribe = onAuthStateChange();
    return () => {
      unsubscribe();
    };
  }, [])

  return (
    <>
    <StoreContext.Provider value={userData}>
    <div style={dashboard}>
        <div style={dashboard__container}>
          Logged in as
          <div>{name}</div>
          <div>{!isEmpty(userEmail) && userEmail || "login first"}</div>
          <button style={dashboard__btn} onClick={logout}>
            Logout
          </button>
        </div>
      </div>
      <br />
      <Footer />
    </StoreContext.Provider>
     
    </>

  );
}
export default Dashboard;