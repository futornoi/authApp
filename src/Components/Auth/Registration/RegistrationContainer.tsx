import AuthLayout from "../AuthLayout";
import RegistrationForm from "./RegistrationForm";
import { useNavigate } from "react-router-dom";
import { pagesPath } from "../../../Hooks/useRouterConfig";
import { FormikValues, useFormik } from "formik";
import { registrationValidSchema } from "../../Schemas/validations";

const RegistrationContainer = () => {
  const navigate = useNavigate();
  const goRedirect = () => navigate(pagesPath.signIn);

  const handleOnSubmit = (values: FormikValues) => {
    console.log(values)
  }

  const formik = useFormik({
    initialValues: { name: '', email: '', confirmPassword: '', password: '' },
    validationSchema: registrationValidSchema,
    onSubmit: handleOnSubmit,
  });

  return (
    <AuthLayout>
      <RegistrationForm formik={formik} goRedirect={goRedirect}/>
    </AuthLayout>
  )
}

export default RegistrationContainer