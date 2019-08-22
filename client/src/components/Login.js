import React from "react";
import LoginForm from "./LoginForm";

function Login(props) {
  return (
    <div className= 'logincontainer'>
      <h1>Login</h1>
      <LoginForm {...props} />
    </div>
  );
}

export default Login;
