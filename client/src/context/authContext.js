import { createContext, useContext, useEffect, useState } from "react";
import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, sendPasswordResetEmail, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile, sendEmailVerification } from "firebase/auth";
import { auth } from "../firebase.js";

export const authContext = createContext();

export const useAuth = () => {
    const context = useContext(authContext);
    
    if (!context) throw new Error('There is no context provider!')

    return context;
}

export function AuthProvider({children}) {

    const [userCredentials, setUserCredentials] = useState(null);
    const [loading, setLoading] = useState(true);

    const signUp = async (email, password) => {
        const userCredentials = await createUserWithEmailAndPassword(auth, email, password);
        await sendEmailVerification(userCredentials.user)
        return userCredentials;
    }
    const login = (email, password) => signInWithEmailAndPassword(auth, email, password);
    const loginWithGoogle = () => {
        const googleProvider = new GoogleAuthProvider();
        return signInWithPopup(auth, googleProvider);
    }
    const logout = () => signOut(auth);
    const resetPassword = (email) => {
        sendPasswordResetEmail(auth, email)
    }
    const update = (name) => updateProfile(auth.currentUser, { displayName: name }).then(r => { console.log(r); }).catch(e => console.log(e))

    useEffect(() => {
        const unsuscribe = onAuthStateChanged(auth, currentUser => {
            setUserCredentials(currentUser);
            setLoading(false);
        })
        return () => unsuscribe();
    }, [])
    

    return (
        <authContext.Provider value={{signUp, login, loginWithGoogle, logout, loading, userCredentials, resetPassword, update}}>
            {children}
        </authContext.Provider>
    )
}
