import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import Signup from "../Signup-component/Signup";
import Login from "../Login-component/Login";
import "./Navbar.css";

const Navbar = () => {
  const [signupModal, setSignupModal] = useState(false);
  const [loginModal, setLoginModal] = useState(false);

  return (
    <div className="navBar">
      <nav>
        <ul className="nav-links">
          <Link className="link" to="/">
            {" "}
            Home{" "}
          </Link>
          <Link className="link" to="/moreapps">
            More Apps
          </Link>
          <Link className="link" to="/movies">
            Movie List
          </Link>
        </ul>
      </nav>
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
