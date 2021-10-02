import React, {useState} from 'react'
import './Login.css'
import './Home.js'
import {Link} from "react-router-dom";
import firebase from 'firebase';
import {auth} from './firebase.js';
import {useHistory} from 'react-router-dom';


function Login() {

    const [email, setEmail]= useState('');
    const history = useHistory('');
    const [password, setPassword] = useState('');

    const login = (event) =>{
        event.preventDefault();

        auth.signInWithEmailAndPassword(email,password)
        .then((auth) => {
            history.push("/");
        })
        .catch((e)=>{
            if(
                e.message ===
                "password is invalid."
            ){
                alert("please check your credentials again");
            }else if (
                e.message ===
                "there is no user record corresponding to this identifier. The user may have been deleted."
            ){
                history.push("/register");
                window.scrollTo({
                    top:document.body.scrollHeight,
                    left:0,
                    behavior:"smooth",
                });
            }else{
                alert(e.message);
            }
        })
    }

    return (
        <div className="login">
            <img src="http://static.xx.fbcdn.net/rsrc.php/y8/r/dF5SId3UHWd.svg" className="login_logo" />
            <div className="login_container">
                <h3>Log In To Facebook </h3>
                <form>
                    <center>
                        <input onChange={(e)=> setEmail(e.target.value)} type="email" placeholder="Email Address" />
                    </center>
                    <center>
                        <input onChange={(e)=> setPassword(e.target.value)} type="password" placeholder="Password" />
                    </center>
                    <center>
                        
                        <button type="submit" onClick={login} className="login_login">
                            Log In
                        </button>
                    </center>
                    <center>
                        <div className="sideinfo">
                            <h5>Forgotten Password ?</h5>
                            <h5 className="dot">.</h5>
                            <Link to="/register" style={{TextDecoration: 'none'}}>
                                <h5 className="rtd">Sign up For Facebook</h5>
                            </Link>
                        </div>
                    </center>
                </form>
            </div>
        </div>
    )
}

export default Login
