import React from "react";
import { createContext } from "react";
import app from "./FirebaseConfig";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup,
  onAuthStateChanged,
  signOut,
  updateProfile,
} from "firebase/auth";
import { useEffect } from "react";
import { useState } from "react";
import Swal from "sweetalert2";

export const AuthContex = createContext(null);

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loader, setLoader] = useState(true);

  const auth = getAuth(app);

  //   email registration
  const registerEmail = (email, password) => {
    setLoader(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };
  const loginUser = (email, password) => {
    setLoader(true);
    return signInWithEmailAndPassword(auth, email, password);
  };
  const googleProvider = new GoogleAuthProvider();
  const googleSignUp = () => {
    signInWithPopup(auth, googleProvider)
      .then((result) => {
        const user = result.user;
        setLoader(true);
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "google log in successfully",
          showConfirmButton: false,
          timer: 1500,
        });
      })
      .catch((error) => {
        const errorMessage = error.message;
      });
  };

  const userUpdate = (name, photoURL) => {
    updateProfile(auth.currentUser, {
      displayName: name,
      photoURL: photoURL,
    })
      .then(() => {})
      .catch((error) => {
        // An error occurred
        // ...
      });
  };
  const logOut = () => {
    setLoader(true);
    return signOut(auth);
  };
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoader(false);
      console.log(user);
    });
    return () => {
      return unsubscribe();
    };
  }, []);

  const info = {
    registerEmail,
    userUpdate,
    loginUser,
    logOut,
    user,
    loader,
    googleSignUp,
  };
  return <AuthContex.Provider value={info}>{children}</AuthContex.Provider>;
};

export default AuthProvider;
