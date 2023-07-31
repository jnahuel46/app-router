import { FormikErrors, useFormik } from "formik";
import "../styles/styles.css";

interface FormValues {
    firstName: string;
    lastName: string;
    email: string;
}

export const FormikBasicPage = () => {
    const initialState: FormValues = {
        firstName: "",
        lastName: "",
        email: "",
    };

    const validate = (values: FormValues) => {
        //<FormValues> se usas para definir un generico, lo que va a retornar
        const errors: FormikErrors<FormValues> = {};

        if (!values.firstName) {
            errors.firstName = 'Required'
        } else if (values.firstName.length > 15) {
            errors.firstName = 'Must have less than 15 characters'
        }

        if (!values.lastName) {
            errors.lastName = 'Required'
        } else if (values.lastName.length > 10) {
            errors.lastName = 'Must have less than 10 characters'
        }

        if (!values.email) {
            errors.email = 'Required';
        } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
            errors.email = 'Invalid email address';
        }

        return errors;
    };

    const { handleChange, values, handleSubmit, errors, touched, handleBlur } = useFormik({
        initialValues: initialState,
        onSubmit: (values) => {
            console.log(values);
        },
        validate: validate
    });

    return (
        <div>
            <h1>Formik</h1>
            <form noValidate onSubmit={handleSubmit}>
                <label htmlFor="firstName"> First Name </label>
                <input
                    type="text"
                    placeholder="Name"
                    name="firstName"
                    onBlur={handleBlur}
                    value={values.firstName}
                    onChange={handleChange}
                />
                {touched.firstName && errors.firstName && <span style={{ marginTop: '2px' }}>{errors.firstName}</span>}
                <label style={{ marginTop: '10px' }} htmlFor="lastName"> Last Name </label>
                <input
                    type="text"
                    placeholder="Last Name"
                    name="lastName"
                    onBlur={handleBlur}
                    value={values.lastName}
                    onChange={handleChange}
                />
                {touched.lastName && errors.lastName && <span style={{ marginTop: '2px' }}>{errors.lastName}</span>}
                <label style={{ marginTop: '10px' }} htmlFor="email"> Email </label>
                <input
                    type="email"
                    placeholder="Email"
                    name="email"
                    onBlur={handleBlur}
                    value={values.email}
                    onChange={handleChange}
                />
                {touched.email && errors.email && <span style={{ marginTop: '2px' }}>{errors.email}</span>}
                <button style={{ cursor: 'pointer' }} type="submit">Create</button>
            </form>
        </div>
    );
};
