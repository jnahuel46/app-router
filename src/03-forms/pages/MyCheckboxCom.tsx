import { ErrorMessage, useField } from "formik";

interface Props {
  label: string;
  name: string;
  [x: string]: any;
}

export const MyCheckboxCom = ({ label, ...props }: Props) => {

  //Este hook retorna propiedades del campo de Formik, como la data el error, etc
  const [ field ] = useField({...props, type: 'checkbox'});

  return (
    <>
      <label>
      <input type="checkbox" {...field} {...props} />
        { label }
      </label>
      <ErrorMessage name={ props.name } component={'span'} />
    </>
  );
};