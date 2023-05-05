import React, { createContext, useEffect, useState } from 'react';
import { GithubAuthProvider, GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import app from '../Firebase/firebase.config';

export const AuthContext = createContext(null);

 
const auth=getAuth(app);
 
const AuthProvider = ({ children }) => {
    const [user,setUser]=useState(null);
    const [loading,setLoading]=useState(true);
    
    // const user={name:'Zubaer Jewel'};
 

    //email and password
    const createAccount=(email,password)=>{
        setLoading(true)
        return createUserWithEmailAndPassword(auth,email,password);
    }
    const login=(email,password)=>{
        setLoading(true);
        return signInWithEmailAndPassword(auth,email,password);
    }

    //github
    const githubProvider=new GithubAuthProvider();
    const signInGithub=()=>{
        setLoading(true);
        return signInWithPopup(auth,githubProvider);
    }


    //google
    const googleProvider = new GoogleAuthProvider();
    const signInGoogle=()=>{
        setLoading(true);
        return signInWithPopup(auth,googleProvider);
    }

    //logout
    const logout=()=>{
        setLoading(true);
        return signOut(auth);
    }
 

      //get currently logged i user
  useEffect(()=>{
     
    const unsubscribe=onAuthStateChanged(auth,currentUser=>{
        setUser(currentUser);
        setLoading(false);
    })
    return ()=>{
        unsubscribe();
    }
  } ,[])



    const authInfo={
        user,
        createAccount,
        login,
        signInGoogle,
        signInGithub,
        logout,
        loading,
    }

    return (
        <div>

            <AuthContext.Provider value={authInfo}>
                {children}
            </AuthContext.Provider>

        </div>
    );
};

export default AuthProvider;