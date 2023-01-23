import { createContext, useContext, useEffect, useState } from "react";
import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, sendPasswordResetEmail, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import { auth } from "../firebase.js";

export const authContext = createContext();

export const useAuth = () => {
    const context = useContext(authContext);
    
    if (!context) throw new Error('There is no context provider!')

    return context;
}

export function AuthProvider({children}) {

    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    const signUp = (email, password) => createUserWithEmailAndPassword(auth, email, password);
    const login = (email, password) => signInWithEmailAndPassword(auth, email, password);
    const loginWithGoogle = () => {
        const googleProvider = new GoogleAuthProvider();
        return signInWithPopup(auth, googleProvider);
    }
    const logout = () => signOut(auth);
    const resetPassword = (email) => {
        sendPasswordResetEmail(auth, email)
    }

    useEffect(() => {
        const unsuscribe = onAuthStateChanged(auth, currentUser => {
            setUser(currentUser);
            setLoading(false);
        })
        return () => unsuscribe();
    }, [])
    

    return (
        <authContext.Provider value={{signUp, login, loginWithGoogle, logout, loading, user, resetPassword}}>
            {children}
        </authContext.Provider>
    )
}
