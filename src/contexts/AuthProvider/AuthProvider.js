import React from 'react';
import { createContext } from 'react';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, sendEmailVerification, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from 'firebase/auth'
import app from '../../firebase/firebase.config'
import { useState } from 'react';
import { useEffect } from 'react';

export const AuthContext = createContext();
const auth = getAuth(app);

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);

    const googleLogin = (provider) => {
        return signInWithPopup(auth, provider);
    }
    const createUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password);
    }
    const signIn = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password);
    }
    const addNameAndPhoto = (name, photo) => {
        return updateProfile(auth.currentUser, { displayName: name, photoURL: photo });
    }
    const verifyEmail = () => {
        return sendEmailVerification(auth.currentUser);
    }

    const logOut = () => {
        return signOut(auth);
    }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            console.log('Inside OnAuthStateChanged ', currentUser);
            setUser(currentUser);
        })
        return () => unsubscribe();

    }, [])

    const authInfo = {
        user,
        googleLogin,
        createUser,
        signIn,
        addNameAndPhoto,
        verifyEmail,
        logOut
    };
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;