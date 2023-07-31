import { useFormik } from "formik";
import * as Yup from "yup";
import "../styles/styles.css";

interface FormValues {
  firstName: string;
  lastName: string;
  email: string;
}

export const FormikYupPage = () => {
  const initialState: FormValues = {
    firstName: "",
    lastName: "",
    email: "",
  };

  const { handleSubmit, errors, touched, getFieldProps } =
    useFormik({
      initialValues: initialState,
      onSubmit: (values) => {
        console.log(values);
      },
      validationSchema: Yup.object({
        firstName: Yup.string()
          .max(15, "Should have less than 15 characters")
          .required("Required"),
        lastName: Yup.string()
          .max(15, "Should have less than 15 characters")
          .required("Required"),
        email: Yup.string().email("Wrong Email format").required("Required"),
      }),
    });

  return (
    <div>
      <h1>Formik Yup</h1>
      <form noValidate onSubmit={handleSubmit}>
        <label htmlFor="firstName"> First Name </label>
        <input
          type="text"
          placeholder="Name"
          //getFieldProps replace name - onblur - onchange - value
          {...getFieldProps('firstName')}
        />
        {touched.firstName && errors.firstName && (<span style={{ marginTop: "2px" }}>{errors.firstName}</span>)}
        <label style={{ marginTop: "10px" }} htmlFor="lastName">Last Name</label>
        <input
          type="text"
          placeholder="Last Name"
          {...getFieldProps('lastName')}
        />
        {touched.lastName && errors.lastName && ( <span style={{ marginTop: "2px" }}>{errors.lastName}</span>)}
        <label style={{ marginTop: "10px" }} htmlFor="email">Email</label>
        <input
          type="email"
          placeholder="Email"
          {...getFieldProps('email')}
        />
        {touched.email && errors.email && ( <span style={{ marginTop: "2px" }}>{errors.email}</span>)}
        <button style={{ cursor: "pointer" }} type="submit">Create</button>
      </form>
    </div>
  );
};