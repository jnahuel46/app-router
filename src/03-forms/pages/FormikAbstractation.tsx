import { Formik, Form } from "formik";
import * as Yup from "yup";
import "../styles/styles.css";
import {MyTextInput, MySelectCom, MyCheckboxCom} from "../components";

interface FormValues {
  firstName: string;
  lastName: string;
  email: string;
  terms: boolean;
  jobType: string;
}

export const FormikAbstractation = () => {
  const initialState: FormValues = {
    firstName: "",
    lastName: "",
    email: "",
    terms: false,
    jobType: "",
  };

  return (
    <div>
      <h1>Formik Abstractation</h1>

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
          terms: Yup.boolean().oneOf(
            [true],
            "Should accept terms and conditions"
          ), //one needs to be true
          job: Yup.string()
            .notOneOf([""], "You must select an option")
            .required("Required"),
        })}
      >
        {(formik) => (
          <Form>
            <MyTextInput
              label={"First Name"}
              name={"firstName"}
              type={"text"}
              placeholder="First name"
            />
            <MyTextInput
              label={"Last Name"}
              name={"lastName"}
              type={"text"}
              placeholder="Last name"
            />
            <MyTextInput
              label={"Email"}
              name={"email"}
              type={"email"}
              placeholder="Email"
            />

            {/* Se transforma en un HOC y renderiza todos los hijos */}
            <MySelectCom label={"Job type"} name="job">
              <option value={""}>Choose one</option>
              <option value={"developer"}>Developer</option>
              <option value={"ux/ui"}>UX/UI</option>
              <option value={"devops"}>DevOps</option>
            </MySelectCom>

            <MyCheckboxCom label={"Terms and conditions"} name={"terms"} />
            
            <button style={{ cursor: "pointer" }} type="submit">
              Create
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
};
