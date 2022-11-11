import React, { createContext, useEffect, useState } from 'react';
import {createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup} from 'firebase/auth';
import app from '../../firebase/firebase.config';

export const AuthContext = createContext();
const auth = getAuth(app)

const AuthProvider = ({children}) => {

    const [ user, setUser] = useState(null);

    
const createUser = (email, password) =>{
  return createUserWithEmailAndPassword(auth, email, password)
}

const logInUser = (email, password) =>{
    return signInWithEmailAndPassword(auth, email, password)
}
const googleLogin = (provider) =>{
    return signInWithPopup(auth, provider);
}

const githubLogin = (provider) =>{
    return signInWithPopup(auth, provider);
}

useEffect( () =>{
    const unsubscribe = onAuthStateChanged(auth, currentUser =>{
        console.log(currentUser);
        setUser(currentUser);
    });

    return () =>{
        return unsubscribe();
    }
}, []);
    const authInfo = {
        user,
        createUser,
        logInUser,
        googleLogin,
        githubLogin,
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;