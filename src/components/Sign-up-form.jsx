import React from "react";

import { useFormik } from "formik";
import * as Yup from "yup";

import "./sign-up-form.css";
import SignUpField from "./Sign-up-fiel";

const SignUpForm = () => {
  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      password: "",
      confirmPassword: "",
      phone: "",
    },
    validationSchema: Yup.object({
      name: Yup.string()
        .required("Required")
        .min(4, "Must be 4 characters or more"),
      email: Yup.string()
        .required("Required")
        .matches(
          /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/,
          "Please enter a valid email address"
        ),
      password: Yup.string()
        .required("Required")
        .matches(
          /^(?=.*[a-zA-Z])(?=.*\d)(?=.*[!@#$%^&*()_+])[A-Za-z\d][A-Za-z\d!@#$%^&*()_+]{7,19}$/,
          "Password must be 7-19 characters and contain at least one letter, one number and a special character"
        ),
      confirmPassword: Yup.string()
        .required("Required")
        .oneOf([Yup.ref("password"), null], "password must match"),
      phone: Yup.string()
        .required("Required")
        .matches(
          /^(\+\d{1,2}\s)?\(?\d{3}\)?[\s.-]?\d{3}[\s.-]?\d{4}$/,
          "Must be a valid phone number"
        ),
    }),
    onSubmit: (values) => {
      console.log(values);
    },
  });

  return (
    <div>
      <section>
        <form className="information" onSubmit={formik.handleSubmit}>
          <SignUpField
            type="text"
            id="name"
            name="name"
            values={formik.values.name}
            onChange={formik.handleChange}
            placeholder=" `Enter your ${name}` "
          />
          <SignUpField
            type="text"
            id="email"
            name="email"
            values={formik.values.email}
            onChange={formik.handleChange}
            placeholder=" `Enter your ${email}` "
          />
          ,
          <SignUpField
            type="text"
            id="password"
            name="password"
            values={formik.values.password}
            onChange={formik.handleChange}
            placeholder=" `Enter your ${password}` "
          />
          <SignUpField
            type="text"
            id="confirmPassword"
            name="confirmPassword"
            values={formik.values.confirmPassword}
            onChange={formik.handleChange}
            placeholder=" `Enter your ${confirmPassword}` "
          />
          <SignUpField
            type="text"
            id="phone"
            name="phone"
            values={formik.values.phone}
            onChange={formik.handleChange}
            placeholder=" `Enter your ${phone}` "
          />

          <button type="submit">Submit</button>
        </form>
      </section>
    </div>
  );
};

export default SignUpForm;
