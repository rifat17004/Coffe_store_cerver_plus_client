import React from "react";
import { AuthContext } from "./AuthContext";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../Firebase/Firebase.init";

const AuthProvider = ({ children }) => {
  // sign in with email and pass
  const handleEmailPassSignin = (email, pass) => {
    return createUserWithEmailAndPassword(auth, email, pass);
  };

  const userInfo = {
    handleEmailPassSignin,
  };
  return <AuthContext value={userInfo}>{children}</AuthContext>;
};

export default AuthProvider;
