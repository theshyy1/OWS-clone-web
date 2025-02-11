import { useFormik } from "formik";
import React, { useId } from "react";

const validate = (values: { email: string; password: string }) => {
  const errors: any = {};

  if (!values.password) {
    errors.password = "Required";
  } else if (values.password.length > 15) {
    errors.password = "Must be 15 characters or less";
  }

  if (!values.email) {
    errors.email = "Required";
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = "Invalid email address";
  }

  return errors;
};

const RegisterForm = () => {
  const id = useId();
  const { handleSubmit, handleChange, handleBlur, values, errors } = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validate,
    onSubmit: (values) => {
      console.log(values);
    },
  });
  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor={id}>Email </label>

      <input
        id={id}
        name="email"
        type="email"
        onChange={handleChange}
        onBlur={handleBlur}
        value={values.email}
      />
      {errors.email ? <div>{errors.email}</div> : null}
      <label htmlFor="password">Password</label>

      <input
        id="password"
        name="password"
        type="password"
        onChange={handleChange}
        onBlur={handleBlur}
        value={values.password}
      />
      {errors.password ? <div>{errors.password}</div> : null}

      <button type="submit">Submit</button>
    </form>
  );
};

export default RegisterForm;
