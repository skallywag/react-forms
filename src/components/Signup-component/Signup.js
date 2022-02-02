import React from "react";
import { useFormik } from "formik";
import "./Signup.css";

const Signup = (props) => {
  const validate = (values) => {
    const errors = {};
    let emailRegex = new RegExp(
      /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/g
    );
    let passRegex = new RegExp(/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/g);

    if (!values.firstName) {
      errors.firstName = "Required";
    } else if (values.firstName.length < 2) {
      errors.firstName = "Must be 3 characters or more";
    }
    if (!values.lastName) {
      errors.lastName = "Required";
    } else if (values.lastName.length < 2) {
      errors.lastName = "Must be 3 characters or more";
    }
    if (!values.email) {
      errors.email = "Required";
    } else if (!emailRegex.test(values.email)) {
      errors.email = "Please enter a valid email";
    }
    if (!values.password) {
      errors.password = "Required";
    } else if (!passRegex.test(values.password)) {
      errors.password = "Please enter a valid password";
    } else if (values.password !== values.repassword) {
      errors.password = "Passwords do not match";
    }
    if (!values.repassword) {
      errors.repassword = "Required";
    } else if (values.repassword !== values.password) {
      errors.repassword = "Passwords do not match";
    }

    return errors;
  };

  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      email: "",
      password: "",
      repassword: "",
    },

    onSubmit: (values, { resetForm }) => {
      alert(JSON.stringify(values));
      resetForm({ values: "" });
    },
    validate,
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
              onBlur={formik.handleBlur}
              onChange={formik.handleChange}
            />
            {formik.touched.firstName && formik.errors.firstName ? (
              <h3>{formik.errors.firstName}</h3>
            ) : null}
          </div>
          <div>
            <input
              className="input"
              id="lastName"
              name="lastName"
              type="text"
              placeholder="Last Name"
              value={formik.values.lastName}
              onBlur={formik.handleBlur}
              onChange={formik.handleChange}
            />
            {formik.touched.lastName && formik.errors.lastName ? (
              <h3>{formik.errors.lastName}</h3>
            ) : null}
          </div>
          <div>
            <input
              className="input"
              id="email"
              name="email"
              // type="email"
              placeholder="Email"
              value={formik.values.email}
              onChange={formik.handleChange}
            />
            {formik.touched.email && formik.errors.email ? (
              <h3>{formik.errors.email}</h3>
            ) : null}
          </div>
          <div>
            <input
              className="input"
              id="password"
              name="password"
              type="password"
              placeholder="Password"
              value={formik.values.password}
              onBlur={formik.handleBlur}
              onChange={formik.handleChange}
            />
            {formik.touched.password && formik.errors.password ? (
              <h3>{formik.errors.password}</h3>
            ) : null}
          </div>
          <div>
            <input
              className="input"
              id="repassword"
              name="repassword"
              type="password"
              placeholder="Confirm password"
              value={formik.values.repassword}
              onBlur={formik.handleBlur}
              onChange={formik.handleChange}
            />
            {formik.touched.repassword && formik.errors.repassword ? (
              <h3>{formik.errors.repassword}</h3>
            ) : null}
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
