import { useForm } from "../hooks/useForm";
import "../styles/styles.css";

export const RegisterPage = () => {
  const initialState = {
    name: "jeremias",
    email: "jeremias.muriette@test.com",
    password: "123456",
    password2: "123456",
  };

  const { onChange, formData, resetForm, isValidEmail } = useForm(initialState);

  const { name, email, password, password2 } = formData;

  const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log(formData);
  };

  return (
    <div>
      <h1>Register Page</h1>
      <form noValidate onSubmit={onSubmit}>
        <input
          type="text"
          placeholder="Name"
          name="name"
          value={name}
          onChange={onChange}
          className={`${name.trim().length <= 0 && "has-error"}`}
        />
        {name.trim().length <= 0 && <span>Required Field</span>}
        <input
          type="email"
          placeholder="Email"
          name="email"
          value={email}
          onChange={onChange}
          className={`${!isValidEmail(email) && "has-error"}`}
        />
        {!isValidEmail(email) && <span>Format Incorrect</span>}
        <input
          type="password"
          placeholder="Password"
          name="password"
          value={password}
          onChange={onChange}
          className={`${password.trim().length <= 0 && "has-error"}`}
        />
        {password.trim().length <= 0 && <span>Required Field</span>}
        {password.trim().length < 6 && <span>Password must contain more than 6 characters</span>}

        <input
          type="password"
          placeholder="Repeat Password"
          name="password2"
          value={password2}
          onChange={onChange}
          className={`${password.trim().length <= 0 && "has-error"}`}
        />
        {password2 !== password && <span>Password needs to be equals</span>}
        <button type="submit">Create</button>
        <button onClick={resetForm} type="submit">
          Reset
        </button>
      </form>
    </div>
  );
};