import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import "../styles/styles.css";

interface FormValues {
  firstName: string;
  lastName: string;
  email: string;
  terms: boolean;
  jobType: string;
}

export const FormikComponents = () => {
  const initialState: FormValues = {
    firstName: "",
    lastName: "",
    email: "",
    terms: false,
    jobType: ''
  };

  return (
    <div>
      <h1>Formik Components</h1>

      <Formik
        initialValues={initialState}
        onSubmit={(values) => {
          console.log(values);
        }}
        validationSchema={Yup.object({
          firstName: Yup.string()
            .max(15, "Should have less than 15 characters")
            .required("Required"),
          lastName: Yup.string()
            .max(15, "Should have less than 15 characters")
            .required("Required"),
          email: Yup.string().email("Wrong Email format").required("Required"),
          terms: Yup.boolean().oneOf([true], 'Should accept terms and conditions'),//one needs to be true
          job: Yup.string().notOneOf([''], 'You must select an option').required('Required')

        })}
      >
        {(formik) => (
          <Form>
            <label htmlFor="firstName"> First Name </label>
            <Field name='firstName' type='text' />
            <ErrorMessage name='firstName' component={'span'} ></ErrorMessage>

            <label style={{ marginTop: "10px" }} htmlFor="lastName"> Last Name </label>
            <Field name='lastName' type='text' />
            <ErrorMessage name='lastName' component={'span'}></ErrorMessage>

            <label style={{ marginTop: "10px" }} htmlFor="email">Email</label>
            <Field name='email' type='email' />
            <ErrorMessage name='email' component={'span'}></ErrorMessage>

            <label style={{ marginTop: "10px" }} >Job type</label>
            <Field name='job' as='select'> 
              <option value={''}>Choose one</option>
              <option value={'developer'}>Developer</option>
              <option value={'ux/ui'}>UX/UI</option>
              <option value={'devops'}>DevOps</option>
            </Field>
            <ErrorMessage name='job' component={'span'}></ErrorMessage>

            <label style={{ marginTop: "10px" }} ><Field name='terms' type='checkbox' />Terms and conditions</label>
            <ErrorMessage name='terms' component={'span'}></ErrorMessage>

            <button style={{ cursor: "pointer" }} type="submit">
              Create
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
};
