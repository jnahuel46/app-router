import { Form, Formik } from "formik";
import formJSON from "../data/custom-form.json";
import { MySelectCom, MyTextInput } from "../components";
import * as Yup from "yup";

const initialValues: { [key: string]: any } = {};
const requiredFields: { [key: string]: any } = {};

for (const input of formJSON) {
  initialValues[input.name] = input.value;
  if (!input.validations) continue;
  let schema = Yup.string();
  for (const rule of input.validations) {
    if (rule.type === "required") {
      schema = schema.required("Required field");
    }
    if (rule.type === "minLength") {
      schema = schema.min((rule as any).value, `Should have more than ${(rule as any).value} characters`);
    }
    if (rule.type === "email") {
      schema = schema.email("Wrong format");
    }
  }

  requiredFields[input.name] = schema;
}
const validationSchema = Yup.object({ ...requiredFields });

export const DynamicFormPage = () => {
  return (
    <div>
      <h1>DynamicFormPage</h1>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={(values) => {
          console.log(values);
        }}
      >
        {(formik) => (
          <Form>
            {formJSON.map((data) => {
              if (data.type !== "select") {
                return (
                  <MyTextInput
                    key={data.name}
                    label={data.label}
                    name={data.name}
                    type={data.type as any}
                    placeholder={data.placeholder}
                  />
                );
              } else if (data.type === "select") {
                return (
                  <MySelectCom
                    key={data.name}
                    label={data.label}
                    name={data.name}
                    type={data.type as any}
                  >
                    <option value={""}>Select an option</option>
                    {data.options?.map(({ id, label }) => (
                      <option key={id} value={id}>
                        {label}
                      </option>
                    ))}
                  </MySelectCom>
                );
              }
            })}
            <button type="submit">Create</button>
          </Form>
        )}
      </Formik>
    </div>
  );
};
