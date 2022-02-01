import React from "react";
import { useFormik, yupToFormErrors } from "formik";
import * as Yup from "yup";
import "./Login.css";

const Login = (props) => {
  const formik = useFormik({
    initialValues: {
      loginEmail: "",
      loginPassword: "",
    },

    validationSchema: Yup.object({}),

    onSubmit: (values, { resetForm }) => {
      alert(JSON.stringify(values, null, 2));
      resetForm({ values: "" });
    },
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
              onChange={formik.handleChange}
              id="loginEmail"
              type="email"
              placeholder="Email"
              name="loginEmail"
            />
          </div>
          <div className="input-con">
            <input
              value={formik.values.loginPassword}
              onChange={formik.handleChange}
              id="loginPassword"
              type="password"
              placeholder="Password"
              name="loginPassword"
            />
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
