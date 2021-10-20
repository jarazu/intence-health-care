import React, { useState } from 'react';
import {GoogleAuthProvider, getAuth, signInWithPopup, createUserWithEmailAndPassword, signInWithEmailAndPassword, sendEmailVerification, sendPasswordResetEmail, updateProfile,} from 'firebase/auth';

import initializeAuthentication from '../../../Auth/firebase/firebase.init';

initializeAuthentication();
const Login2 = () => {
    const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [isLogin, setIsLogin] = useState(false);

const googleProvider = new GoogleAuthProvider();

    const auth = getAuth();
  const handleGoogleSignIn = () => {
    signInWithPopup(auth, googleProvider)
    .then(result => {
      const user = result.user;
      'user',user)
    })
  }
   
  const handleRegistration = e => {
    e.preventDefault();
    if (password.length<6) {
      setError('Password must be at 6 characters');
      return;
    }

    isLogin ? processLogin(email, password) : createNewUser(email, password);

  }

  const processLogin = (email, password) => {
    signInWithEmailAndPassword(auth, email, password)
      .then(result => {
        result.user)
      setError('');
      })
      .catch(error => {
        setError(error.message)
      })
  }

  const createNewUser = (email, password) => {
      createUserWithEmailAndPassword(auth, email, password)
      .then(result => {
        result)
        verifyEmail();
        setUserName();
      })
      .catch(error => {
        setError(error.message)
      })
  }

  const verifyEmail = () => {
    sendEmailVerification(auth.currentUser)
    .then(result => {
      result)
    })
  }

  const setUserName = () => {
    updateProfile(auth.currentUser, {
    displayName: name, photoURL: "https://example.com/jane-q-user/profile.jpg"
    }).then(() => {
      // Profile updated!
      // ...
    }).catch((error) => {
      // An error occurred
      // ...
    });
  }
  const handleName = e => {
    setName(e.target.value)
  }
  const handleEmail = e => {
    setEmail(e.target.value)
  }
  const handlePassword = e => {
    setPassword(e.target.value)
  }
  const toggleLogin = e => {
    setIsLogin(e.target.checked)
  }
  
  const handleResetPassword = () => {
    sendPasswordResetEmail(auth, email)
  .then(() => {
    // Password reset email sent!
    // ..
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    // ..
  });
  }
    return (
        <div className="App container">
      {/* <button onClick={handleGoogleSignIn}>Google Sign in</button> */}
      <form onSubmit={handleRegistration}>
        <h3 className="text-primary">Please {isLogin ? 'Please Login':'Register'}</h3>
        { !isLogin &&
          <div className="mb-3">
            <label htmlFor="exampleInputName" className="form-label">Name</label>
            <input type="text" className="form-control" aria-describedby="emailHelp" onBlur={handleName} />
            
          </div>
        }
        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
          <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" onBlur={handleEmail} />
          
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
          <input type="password" className="form-control" id="exampleInputPassword1"  onBlur={handlePassword} />
        </div>
        <div className="text-danger">{error}</div>
        <div className="form-check">
          <input type="checkbox" className="form-check-input" id="exampleCheck1" onChange={toggleLogin}/>
          <label className="form-check-label" htmlFor="exampleCheck1">Already Registered?</label>
        </div>
        <button type="submit" className="btn btn-primary">{isLogin ? 'Login':'Register'}</button>
        
        <button type="button" className="btn btn-primary" onClick={handleGoogleSignIn}>Google Signin</button>
        <button type="button" className="btn btn-secondary btn-sm" onClick={handleResetPassword}>Reset Password</button>
        
      </form>
       
    </div>
    );
};

export default Login2;