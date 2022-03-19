import * as yup from "yup";
import { AnyObject } from "yup/es/types";

enum errorMessages {
  REQUIRED = 'Required',
  SMALL = 'Too small',
  INCORRECT = 'Incorrect format',
  MATCHED = 'Passwords must match',
}

const definedSchema = (obj: AnyObject) => yup.object().shape(obj);

export const registrationValidSchema = definedSchema({
  name: yup.string().min(4, errorMessages.SMALL).required(errorMessages.REQUIRED),
  email: yup.string().email(errorMessages.INCORRECT).required(errorMessages.REQUIRED),
  password :yup.string().min(8, errorMessages.SMALL).required(errorMessages.REQUIRED),
  confirmPassword: yup.string()
    .oneOf([yup.ref('password'), null], errorMessages.MATCHED)
    .min(8, errorMessages.SMALL)
    .required(errorMessages.REQUIRED),
})

export const signInValidSchema = registrationValidSchema.omit(['confirmPassword', 'name']);
