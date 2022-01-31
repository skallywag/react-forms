import React from "react";
// import Formik from "formik";
import "./Login.css";

const Login = () => {
  return (
    <div className="login-con">
      <h1>Login</h1>
      <form>
        <div>
          <input id="email" type="text" />
        </div>
      </form>
    </div>
  );
};

export default Login;
