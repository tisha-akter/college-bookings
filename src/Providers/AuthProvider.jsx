import { createContext, useEffect, useState } from "react";
import { GithubAuthProvider, GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import { app } from "../firebase/firebase.config";

export const  AuthContext = createContext(null);
const auth = getAuth(app);

// eslint-disable-next-line react/prop-types
const AuthProvider = ({children}) => {

    const [user, setUser] = useState(null); 
    const [loading, setLoading] = useState(true);

    const googleProvider = new GoogleAuthProvider();
    const githubProvider = new GithubAuthProvider();

    const createUser = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const login = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password)
    }

    const googleSignIn = () => {
        setLoading(true);
        return signInWithPopup(auth, googleProvider)
    }

    // const resetPassword = (email) => {
    //     setLoading(true);
    //     return sendPasswordResetEmail(auth, email)
    // }

    const singInWithGithub = () => {
        setLoading(true);
        return signInWithPopup(auth, githubProvider);
    }

    const logOut = () => {
        setLoading(true);
        return signOut(auth)
    }

    const updateUserProfile = (name, photo) => {
        return updateProfile(auth.currentUser, {
            displayName: name, photoURL: photo
          })
          
    }
    
    useEffect(() => {
        const unsubscribe = onAuthStateChanged( auth, currentUser => {
            setUser(currentUser);
            console.log('current user', currentUser)
            setLoading(false);
        });
        return () => {
            return unsubscribe();
        }
    },[])

    const authInfo = {
        user,
        loading,
        createUser,
        login,
        googleSignIn,
        singInWithGithub,
        logOut,
        updateUserProfile
    }

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;