import { ErrorMessage, useField } from "formik";

interface Props {
  label: string;
  name: string;
  placeholder?: string;
  [x: string]: any;
}

export const MySelectCom = ({ label, ...props }: Props) => {

  //Este hook retorna propiedades del campo de Formik, como la data el error, etc
  const [ field ] = useField(props);

  return (
    <>
      <label htmlFor={ props.id || props.name }>{ label }</label>
      <select {...field} {...props} />
      <ErrorMessage name={ props.name } component={'span'} />

    </>
  );
};