import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut, updateProfile } from "firebase/auth";
import React, { createContext, useEffect, useState } from 'react';
import app from '../firebase/firebase.config';

export const AuthContext = createContext(null);
const auth = getAuth(app)

const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null);
    const [loading, setloading] = useState(true);

    const createUser = (email, password) => {
        setloading(true)
      return  createUserWithEmailAndPassword(auth, email, password);
    }
    const loginUser = (email, password) => {
        setloading(true)
        return signInWithEmailAndPassword(auth, email, password);
    }

    const profileUpdat = (name, photo) => {
        setloading(true)
       return updateProfile(auth.currentUser, {
            displayName: name,
            photoURL: photo,
        });
    }

    const logOut = () => {
        setloading(true)
       return signOut(auth);
    }


    useEffect(() => {
      const unsubscribe =  onAuthStateChanged(auth, loggedUser => {
            setUser(loggedUser);
            setloading(false);
        });
        return () => {
            unsubscribe();
        } 
    },[])

    

    const authInfo = {
        user,
        loading,
        createUser,
        loginUser,
        profileUpdat,
        logOut
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;