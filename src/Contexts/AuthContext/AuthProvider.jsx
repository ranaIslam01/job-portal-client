import React, { useEffect, useState } from "react";
import { AuthContext } from "./AuthContext";
import { auth } from "../../firebase/firebase.init";
import {
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import axios from "axios";

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setloading] = useState(true);

  const signIn = (email, password) => {
    setloading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  const provider = new GoogleAuthProvider();
  const signInWithGoogle = () => {
    setloading(true);
    return signInWithPopup(auth, provider);
  };

  const signOutUser = () => {
    setloading(true);
    return signOut(auth);
  };

  const createUser = (email, password) => {
    setloading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      
      if (currentUser?.email) {
        const userEmail = { email: currentUser.email };
        // JWT টোকেন পাওয়ার জন্য সার্ভারে কল
        axios
          .post("https://job-portal-server-y6ck.onrender.com/jwt", userEmail, {
            withCredentials: true, // এটি কুকি সেট করতে সাহায্য করবে
          })
          .then((res) => {
            console.log("Login and JWT success:", res.data);
            setloading(false);
          })
          .catch((error) => {
            console.log("JWT Error:", error);
            setloading(false);
          });
      } else {
        // ইউজার লগআউট করলে কুকি ক্লিন করার জন্য কল
        axios
          .post("https://job-portal-server-y6ck.onrender.com/logout", {}, {
            withCredentials: true,
          })
          .then(() => {
            setloading(false);
          });
      }
    });

    return () => {
      unSubscribe();
    };
  }, []);

  const authInfo = {
    createUser,
    signIn,
    signInWithGoogle,
    signOutUser,
    loading,
    user,
  };

  return (
    <AuthContext.Provider value={authInfo}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;