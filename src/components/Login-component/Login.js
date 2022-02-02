import React from "react";
import { useFormik } from "formik";
import "./Login.css";

const Login = (props) => {
  const validate = (values) => {
    const errors = {};

    if (!values.loginEmail) {
      errors.loginEmail = "Required";
    } else if (values.loginEmail.length < 2) {
      errors.loginEmail = "Please enter in a valid email";
    }

    if (!values.loginPassword) {
      errors.loginPassword = "Required";
    }

    return errors;
  };

  const formik = useFormik({
    initialValues: {
      loginEmail: "",
      loginPassword: "",
    },

    onSubmit: (values, { resetForm }) => {
      alert(JSON.stringify(values, null, 2));
      resetForm({ values: "" });
    },
    validate,
  });

  return (
    <div className={`overlay ${props.show ? "show" : "hide"}`}>
      <div className="login-con">
        <h1>Login</h1>
        <form onSubmit={formik.handleSubmit}>
          <span
            onClick={() => props.setLoginModal(false)}
            className="closeForm"
          >
            X
          </span>

          <div className="input-con">
            <input
              value={formik.values.loginEmail}
              onBlur={formik.handleBlur}
              onChange={formik.handleChange}
              id="loginEmail"
              type="email"
              placeholder="Email"
              name="loginEmail"
            />
            {formik.touched.loginEmail && formik.errors.loginEmail ? (
              <h3>{formik.errors.loginEmail}</h3>
            ) : null}
          </div>
          <div className="input-con">
            <input
              value={formik.values.loginPassword}
              onBlur={formik.handleBlur}
              onChange={formik.handleChange}
              id="loginPassword"
              type="password"
              placeholder="Password"
              name="loginPassword"
            />
            {formik.touched.loginPassword && formik.errors.loginPassword ? (
              <h3>{formik.errors.loginPassword}</h3>
            ) : null}
          </div>
          <button type="submit" className="submit-btn">
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
