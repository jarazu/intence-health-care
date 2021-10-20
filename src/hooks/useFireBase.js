import React, { useEffect, useState } from 'react';
import initializeAuthentication from '../Auth/firebase/firebase.init';
import { getAuth, signInWithPopup, GoogleAuthProvider, signOut, onAuthStateChanged,signInWithEmailAndPassword,createUserWithEmailAndPassword,updateProfile } from "firebase/auth";
import { useHistory } from 'react-router';

;

initializeAuthentication();
const useFireBase = () => {
    const [users, setUsers] = useState();
    const [isLoading, setIsLoading] = useState(true);
    const [registerSuccess, setRegisterSuccess] = useState(false);
    const history = useHistory();
    
    const auth = getAuth();
    const googleProvider = new GoogleAuthProvider();
    const signInUsingGoogle = ()=>{
        setIsLoading(true)
         return signInWithPopup(auth, googleProvider)
    }
    

  const processLogin = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password)
  }
  
const logOut = () => {
    setIsLoading(true)
    signOut(auth)
    .then(() => {}).finally(()=>{
            setIsLoading(false)
        }).finally(()=>{
            setIsLoading(false)
        })
}

    // observe user state changed
useEffect(()=>{
    const unsubscribed = onAuthStateChanged(auth, (user) => {
        if (user) {
            setUsers(user);
        } else {
            setUsers({});
        }
        setIsLoading(false)
    });
    return () => unsubscribed;;
},[]);


  const createNewUser = (email, password, name) => {
      createUserWithEmailAndPassword(auth, email, password)
      .then(result => {
        setUserName(name);
        setRegisterSuccess(true)
        history.push('/');
      })
      .catch(error => {
        // setError(error.message)
      })
  }
    const setUserName = (name) => {
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
  const signInAfterGoogle = (result)=>{
        setUsers(result.user);
        setIsLoading(false)
  }
  
  const signInAfteremailLogin = (result)=>{
        setUsers(result.user);
  }
    return{
        users,
        signInUsingGoogle,
        logOut,
        isLoading,
        processLogin,
        createNewUser,
        signInAfterGoogle,
        signInAfteremailLogin,
        registerSuccess
    }
};

export default useFireBase;