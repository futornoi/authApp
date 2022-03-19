import AuthLayout from "../AuthLayout";
import RegistrationForm from "./RegistrationForm";
import { useNavigate } from "react-router-dom";
import { pagesPath } from "../../../Hooks/useRouterConfig";
import { useFormik } from "formik";
import { registrationValidSchema } from "../../Schemas/validations";
import { IRegistrationValues } from "../AuthTypes";
import { authApi } from "../../../Api/auth";

const RegistrationContainer = () => {
  const navigate = useNavigate();
  const goRedirect = () => navigate(pagesPath.signIn);

  const handleOnSubmit = async (values: IRegistrationValues) => {
    try {
      await authApi.registration({
        name: values.name,
        email: values.email,
        password: values.confirmPassword
      });
      navigate(pagesPath.signIn);
    } catch (e: any) {
      formik.setFieldError(e.key, e.msg);
    }
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