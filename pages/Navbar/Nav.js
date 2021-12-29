import react from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import Router from "next/router";
import router from "next/router";


// import style from '../styles/nav.css'

export default function Nav(props) {
    const { style } = props;
    return (
        <>
            <div className={style.navbar}>
                <a onClick={()=>Router.push('/')}>Home</a>
                <a href="#" className={style.right}>Blog</a>
                <a href="#" className={style.right}>Register as a Professional</a>
                <a onClick={()=>router.push('/Registration/Login','/Login')} className={style.right}>Login / Sign Up</a>
            </div>
        </>
    )

}