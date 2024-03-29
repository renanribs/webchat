import React from "react";
import { auth, provider } from "../../services/firebase";
import * as C from "./styles";
import Logo from "./logo.svg";

const Login = () => {
  const handleSignin = () => {
    auth.signInWithPopup(provider).catch(alert);
  };
  return (
    <C.Container>
      <img src={Logo} alt="Logo" />

      <C.Button onClick={handleSignin}>Login com Google</C.Button>
    </C.Container>
  );
};

export default Login;
