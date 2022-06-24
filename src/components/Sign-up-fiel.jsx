import React from "react";
import { useFormik } from "formik";

const SignUpField = (props) => {

const formik = useFormik;

  const { type, id, name, values, onChange, placeholder } = props;

  return (
    <div>
      <label>{`Enter your ${name}`}</label>
      <input
        type={type}
        id={name}
        name={name}
        value = {values}
        onChange={onChange}
        placeholder={placeholder}
      />
      {formik.errors.name && (
        <p className="errorMsg">{formik.errors.name}</p>
      )}
    </div>
  );
};

export default SignUpField;
