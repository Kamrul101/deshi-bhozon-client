import React, { createContext, useEffect, useState } from 'react';
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged, signOut, GoogleAuthProvider, signInWithPopup, GithubAuthProvider } from "firebase/auth";
import app from '../../Firebase/firebase.config';
export const AuthContext = createContext(null);
const auth = getAuth(app);
const AuthProviders = ({children}) => {

    const [user,setUser] = useState(null);
    const [loading,setLoading] = useState(true);

    const googleProvider = new GoogleAuthProvider();
    const gitHubProvider = new GithubAuthProvider();

    const createUser = (email,password) =>{
        setLoading(true)
        return createUserWithEmailAndPassword(auth,email,password);
    }
    const signInUser = (email,password) =>{
        setLoading(true)
        return signInWithEmailAndPassword(auth,email,password);
    }
    const signInWithGoogle = () =>{
        setLoading(true)
        return signInWithPopup(auth,googleProvider);
    }
    const signInWithGitHub = () =>{
        setLoading(true);
        return signInWithPopup(auth, gitHubProvider);
    }
    const logOut = () =>{
        setLoading(true);
        return signOut(auth);
    }

    useEffect(()=>{
        const unSubscribe = onAuthStateChanged(auth,loggedUser=>{
             console.log("logged User",loggedUser);
             setUser(loggedUser);
             setLoading(false);
         })
         return()=>{
             unSubscribe();
         }
     },[])

    const authInformation = {
        user,
        createUser,
        signInUser,
        logOut,
        signInWithGoogle,
        signInWithGitHub,
        loading,
        
    };
    return (
        <AuthContext.Provider value={authInformation}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProviders;