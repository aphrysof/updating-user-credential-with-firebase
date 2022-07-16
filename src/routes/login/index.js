import React, { useContext } from "react";
import "./login.css";
import { Navigate } from "react-router-dom";
import { SignInWithGoogle } from "../../firebase";
import { AuthContext } from "../../context/context";

const Index = () => {
  const { user } = useContext(AuthContext);

  const SignIn = () => {
    SignInWithGoogle();
  };
  return user ? (
    <Navigate to="/" />
  ) : (
    <div className="login_button">
      <button onClick={SignIn}>SignIn With Google</button>
    </div>
  );
};

export default Index;
