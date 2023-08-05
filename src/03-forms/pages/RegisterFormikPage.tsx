import { Form, Formik } from "formik";
import * as Yup from "yup";

import "../styles/styles.css";
import { MyTextInput } from "../components";

interface FormValues {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  password2: string;
}

export const RegisterFormikPage = () => {
  const initialState: FormValues = {
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    password2: "",
  };

  return (
    <div>
      <h1>Register Page</h1>
      <Formik
        initialValues={initialState}
        onSubmit={(values) => {
          console.log(values);
        }}
        validationSchema={Yup.object({
          firstName: Yup.string()
            .max(15, "Should have less than 15 characters")
            .min(2, "Should have more than 2 characters")
            .required("Required"),
          lastName: Yup.string()
            .max(15, "Should have less than 15 characters")
            .required("Required"),
          email: Yup.string().email("Wrong Email format").required("Required"),
          password: Yup.string()
            .min(6, "Should have more than 6 characters")
            .required("Required"),
          password2: Yup.string()
            .oneOf([Yup.ref("password")], "Passwords needs to be equals")
            .required("Required"),
        })}
      >
        {({ handleReset }) => (
          <Form>
            <MyTextInput
              label={"First Name"}
              name={"firstName"}
              type={"text"}
              placeholder="First name"
            />
            <MyTextInput
              label={"Email"}
              name={"email"}
              type={"email"}
              placeholder="Email"
            />

            <MyTextInput
              label={"Password"}
              name={"password"}
              type={"password"}
              placeholder="******"
            />
            <MyTextInput
              label={"Repeat Password"}
              name={"password2"}
              type={"password"}
              placeholder="********"
            />
            <button type="submit">Create</button>
            <button onClick={handleReset} type="submit">
              Reset
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
};
