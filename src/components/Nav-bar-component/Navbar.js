import React from "react";
import { useState } from "react";
import Signup from "../Signup-component/Signup";
import "./Navbar.css";

const Navbar = () => {
  const [signupModal, setSignupModal] = useState(false);

  return (
    <div className="navBar">
      <div className="btn-con">
        <button className="acct-btns">Login</button>
        <button onClick={() => setSignupModal(true)} className="acct-btns">
          Sign-up
        </button>
      </div>
      <Signup show={signupModal} setSignupModal={setSignupModal} />
    </div>
  );
};

export default Navbar;
