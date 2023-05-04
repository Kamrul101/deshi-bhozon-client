import React, { createContext } from 'react';
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import app from '../../Firebase/firebase.config';
export const AuthContext = createContext(null);
const auth = getAuth(app);
const AuthProviders = ({children}) => {

    const user = null;
    const createUser = (email,password) =>{
        return createUserWithEmailAndPassword(auth,email,password);
    }

    const authInformation = {
        user,
        createUser,
    };
    return (
        <AuthContext.Provider value={authInformation}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProviders;