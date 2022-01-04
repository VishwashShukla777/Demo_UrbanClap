import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
//import { useHistory } from "react-router";
import 'bootstrap/dist/css/bootstrap.min.css';
//import "../../styles/Dashboard.css";
import { auth, db, logout } from '../Registration/firebase';

const dashboard ={
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
function Dashboard() {
  console.log("test ,")
  const [user, loading, error] = useAuthState(auth);
  const [name, setName] = useState("");
  //const history = useHistory();
  const fetchUserName = async () => {
    try {
      const query = await db
        .collection("users")
        .where("uid", "==", user?.uid)
        .get();
      const data = await query.docs[0].data();
      setName(data.name);
    } catch (err) {
      console.error(err);
      alert("An error occured while fetching user data");
    }
  };
  useEffect(() => {
    if (loading) return;
    if (!user) return history.replace("/");
    fetchUserName();
  }, [user, loading]);
  return (
    <div style={dashboard}>
      <div style={dashboard__container}>
        Logged in as
        <div>{name}</div>
        <div>{user?.email}</div>
        <button style={dashboard__btn} onClick={logout}>
          Logout
        </button>
      </div>
    </div>
  );
}
export default Dashboard;