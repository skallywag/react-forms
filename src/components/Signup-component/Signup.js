import React from "react";
import { useFormik } from "formik";
import "./Signup.css";

const Signup = (props) => {
  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      email: "",
      password: "",
      repassword: "",
    },
    onSubmit: (values) => {
      alert(JSON.stringify(values));
    },
  });

  return (
    <div className={`overlay ${props.show ? "show-f" : "hide"}`}>
      <div className="signup-con">
        <h1>Signup</h1>
        <form onSubmit={formik.handleSubmit}>
          <span
            onClick={() => props.setSignupModal(false)}
            className="closeForm"
          >
            X
          </span>
          <div>
            <input
              className="input"
              id="firstName"
              name="firstName"
              type="text"
              placeholder="First Name"
              value={formik.values.firstName}
              onChange={formik.handleChange}
            />
          </div>
          <div>
            <input
              className="input"
              id="lastName"
              name="lastName"
              type="text"
              placeholder="Last Name"
              value={formik.values.lastName}
              onChange={formik.handleChange}
            />
          </div>
          <div>
            <input
              className="input"
              id="email"
              name="email"
              type="email"
              placeholder="Email"
              value={formik.values.email}
              onChange={formik.handleChange}
            />
          </div>
          <div>
            <input
              className="input"
              id="password"
              name="password"
              type="password"
              placeholder="Password"
              value={formik.values.password}
              onChange={formik.handleChange}
            />
          </div>
          <div>
            <input
              className="input"
              id="repassword"
              name="repassword"
              type="password"
              placeholder="Confirm password"
              value={formik.values.repassword}
              onChange={formik.handleChange}
            />
          </div>
          <button type="submit" className="submit-btn">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default Signup;