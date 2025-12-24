import React, { useEffect, useState } from 'react';
import { AuthContext } from './AuthContext';
import { auth } from '../../firebase/firebase.init';
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut } from 'firebase/auth';

const AuthProvider = ({children}) => {

   const [user,setUser] = useState(null);
   const [loading, setloading]  = useState(true);

   const signIn = (email,password) => {
      setloading(true);
      return signInWithEmailAndPassword(auth, email,password);
   }

   const signOutUser = () => {
      setloading(true)
      return signOut(auth)
   }

   const createUser = (email,password) => {
      setloading(true);
      return createUserWithEmailAndPassword(auth, email,password)
   }

   useEffect(() => {
      const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
        setloading(false);
      setUser(currentUser);
     })
     return() => {
      unSubscribe();
     }
   }, [])
   


   const authInfo = {
         createUser,
         signIn,
         signOutUser,
         loading,
         user,
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