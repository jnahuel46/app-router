import { ErrorMessage, useField } from "formik";

interface Props {
  label: string;
  name: string;
  type: "text" | "email" | "password";
  placeholder?: string;
  [x: string]: any;
}

export const MyTextInput = ({ label, ...props }: Props) => {

  //Este hook retorna propiedades del campo de Formik, como la data el error, etc
  const [ field ] = useField(props);

  return (
    <>
      <label htmlFor={ props.id || props.name }>{ label }</label>
      <input className="text-input" {...field} {...props} />
      <ErrorMessage name={ props.name } component={'span'} />
    </>
  );
};