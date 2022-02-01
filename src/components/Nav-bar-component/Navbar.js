import React from "react";
import { useState } from "react";
import Signup from "../Signup-component/Signup";
import Login from "../Login-component/Login";
import "./Navbar.css";

const Navbar = () => {
  const [signupModal, setSignupModal] = useState(false);
  const [loginModal, setLoginModal] = useState(false);

  return (
    <div className="navBar">
      <div className="btn-con">
        <button onClick={() => setLoginModal(true)} className="acct-btns">
          Login
        </button>
        <button onClick={() => setSignupModal(true)} className="acct-btns">
          Sign-up
        </button>
      </div>
      <Signup show={signupModal} setSignupModal={setSignupModal} />
      <Login show={loginModal} setLoginModal={setLoginModal} />
    </div>
  );
};

export default Navbar;
