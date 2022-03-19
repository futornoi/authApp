import { FormikProps } from "formik";

export interface IAuthForms<T> {
  goRedirect: () => void;
  formik: FormikProps<T>;
}

export interface ISignInValues {
  email: string,
  password: string,
}
export interface IRegistrationValues {
  name: string,
  email: string,
  password: string,
  confirmPassword: string,
}