import AuthLayout from "../AuthLayout";
import SignInForm from "./SignInForm";
import { useNavigate } from "react-router-dom";
import { pagesPath } from "../../../Hooks/useRouterConfig";
import { FormikValues, useFormik } from "formik";
import { signInValidSchema } from "../../Schemas/validations";

const SignInContainer = () => {
  const navigate = useNavigate();
  const goRedirect = () => navigate(pagesPath.registration);

  const handleOnSubmit = (values: FormikValues) => {
    console.log(values)
  }

  const formik = useFormik({
    initialValues: { email: '', password: '' },
    validationSchema: signInValidSchema,
    onSubmit: handleOnSubmit,
  })

  return (
    <AuthLayout>
      <SignInForm formik={formik} goRedirect={goRedirect}/>
    </AuthLayout>
  )
}

export default SignInContainer