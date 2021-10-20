import React, { useState } from 'react';
import useAuth from '../../../context/useAuth';
    import { useLocation, useHistory } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoffee } from '@fortawesome/free-solid-svg-icons'
import { faGoogle } from '@fortawesome/free-brands-svg-icons'

import './Login.css'

const Login = () => {
    
    const {signInUsingGoogle, processLogin, createNewUser, signInAfterGoogle, signInAfteremailLogin, logOut, registerSuccess} = useAuth();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [name, setName] = useState('');
    const [showRegisterBtn, setShowRegisterBtn] = useState(false);
    const [showLoginBtn, setshowLoginBtn] = useState(true);
    
    const history = useHistory();
    const location = useLocation();
    const redirect_uri = location.state?.from || '/'
    
    const handleName = e => {
        setName(e.target.value)
    }
    const handleEmail = e => {
        setEmail(e.target.value)
    }
    const handlePassword = e => {
        setPassword(e.target.value)
    }
      
  const handleRegistration = e => {
    e.preventDefault();
    if (password.length<6) {
      return;
    }
    createNewUser(email, password, name);
  }
  
  
  const processEmailLogin = e => {
    e.preventDefault();
    if (password.length<6) {
      return;
    }
    processLogin(email, password)
      .then(result => {
        history.push(redirect_uri)
        signInAfteremailLogin(result);
      })
      .catch(error => {
      })
  }
  const showSignUp = ()=>{
    setShowRegisterBtn(true)
    setshowLoginBtn(false)
  }

  const showLogin = ()=>{
    setShowRegisterBtn(false)
    setshowLoginBtn(true)
  }
  
  const handleGoogleSignIn = () => {
    signInUsingGoogle()
    .then((result) => {
            signInAfterGoogle(result, false);
            history.push(redirect_uri)
        }).finally(()=>{
        })
  }
  
    return (
        <div className="container login-area my-5">
            <form onSubmit={handleRegistration}>
              {showRegisterBtn?<div className="mb-3">
                    <label htmlFor="exampleInputName" className="form-label">Name</label>
                    <input type="text" className="form-control" aria-describedby="emailHelp" onBlur={handleName} />
                </div>:''}
                

                <div className="mb-3">
                <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" onBlur={handleEmail} />
                
                </div>
                <div className="mb-3">
                <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                <input type="password" className="form-control" id="exampleInputPassword1"  onBlur={handlePassword} />
                </div>
                <div className="btn-area">
                  {showRegisterBtn? <span><button type="submit" className="btn btn-primary">Register</button><p className="fw-bold mt-2 pointer" onClick={showLogin}>Already Registered? Login Now</p> </span> :''}
                  
                  {showLoginBtn?<span>
                  <button type="button" className="btn btn-primary" onClick={processEmailLogin}>Login</button>
                  <button type="button" className="btn btn-primary" onClick={handleGoogleSignIn}><FontAwesomeIcon icon={faGoogle} /> Google Signin</button>
                  <br/>
                  <p className="fw-bold mt-2 pointer" onClick={showSignUp}>Don't have any account? Please Sign Up</p> 
                  </span> :''}
                  {registerSuccess? <p className="text-success fw-bold pointer after-reg-success-btn" onClick={showLogin}>Congratulation Your Registration is Successfull, Please Login now</p>:''}
                  
                </div>
            </form>
        </div>
    );
};

export default Login;