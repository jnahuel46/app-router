import {
  BrowserRouter,
  NavLink,
  Navigate,
  Route,
  Routes,
} from "react-router-dom";
import logo from "../logo.svg";
import { DynamicFormPage, RegisterPage, FormikBasicPage, FormikYupPage, FormikAbstractation, FormikComponents, RegisterFormikPage } from "../03-forms/pages";

export const Navigation = () => {
  return (
    <BrowserRouter>
      <div className="main-layout">
        <nav>
          <img src={logo} alt="logo" />
          <ul>
            <li>
              <NavLink
                to={"/register"}
                className={({ isActive }) => (isActive ? "nav-active" : "")}
              >
                Register Page
              </NavLink>
            </li>
            <li>
              <NavLink
                to={"/formik-page"}
                className={({ isActive }) => (isActive ? "nav-active" : "")}
              >
                Formik Page
              </NavLink>
            </li>
            <li>
              <NavLink
                to={"/formik-yup-page"}
                className={({ isActive }) => (isActive ? "nav-active" : "")}
              >
                Formik Yup
              </NavLink>
            </li>
            <li>
              <NavLink
                to={"/formik-components"}
                className={({ isActive }) => (isActive ? "nav-active" : "")}
              >
                Formik Components
              </NavLink>
            </li>
            <li>
              <NavLink
                to={"/formik-abstractation"}
                className={({ isActive }) => (isActive ? "nav-active" : "")}
              >
                Formik Abstractation
              </NavLink>
            </li>
            <li>
              <NavLink
                to={"/register-formik-page"}
                className={({ isActive }) => (isActive ? "nav-active" : "")}
              >
                Register Formik Page
              </NavLink>
            </li>
            <li>
              <NavLink
                to={"/dynamic-form"}
                className={({ isActive }) => (isActive ? "nav-active" : "")}
              >
                Dynamic From Page
              </NavLink>
            </li>
            <li>
              <NavLink
                to={"/about"}
                className={({ isActive }) => (isActive ? "nav-active" : "")}
              >
                About
              </NavLink>
            </li>
            <li>
              <NavLink
                to={"/users"}
                className={({ isActive }) => (isActive ? "nav-active" : "")}
              >
                Users
              </NavLink>
            </li>
          </ul>
        </nav>
        <Routes>
          <Route path="register" element={<RegisterPage />} />
          <Route path="formik-page" element={<FormikBasicPage />} />
          <Route path="formik-yup-page" element={<FormikYupPage />} />
          <Route path="formik-components" element={<FormikComponents />} />
          <Route path="formik-abstractation" element={<FormikAbstractation />} />
          <Route path="register-formik-page" element={<RegisterFormikPage />} />
          <Route path="dynamic-form" element={<DynamicFormPage />} />
          <Route path="about" element={<h1> About Page </h1>} />
          <Route path="users" element={<h1> Users Page </h1>} />
          <Route path="/*" element={<Navigate to={"/home"} replace />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
};
