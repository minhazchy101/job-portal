import { createContext, useEffect, useState } from "react";
import {createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { auth } from "../firebase/firebaase.init";


export const AuthContext = createContext();

const provider = new GoogleAuthProvider();

const AuthProvider = ({children}) => {

    const [loading, setLoading] = useState(true)
    const [user, setUser] = useState(null)
  
  
    const createUser=(email, password)=>{
        setLoading(true)
     return  createUserWithEmailAndPassword(auth, email, password)
    }
    const signIn=(email, password)=>{
     setLoading(true)
     return signInWithEmailAndPassword(auth, email, password)
    }
    const googleSignIn=()=>{
     setLoading(true)
     return signInWithPopup(auth, provider)
    }

    const logOut = () => {
        setLoading(true)
  return signOut(auth); 
};

   useEffect(() => {
  const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
    setUser(currentUser);
    setLoading(false);
  });

  return () => unSubscribe();
}, []);


  const authInfo ={
    loading,
    createUser,signIn,logOut,googleSignIn,
    user,
    }
  return (
    <AuthContext value={authInfo}>
      {children}
    </AuthContext>
  )
}

export default AuthProvider;
