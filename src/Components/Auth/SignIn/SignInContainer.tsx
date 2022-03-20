import AuthLayout from "../AuthLayout";
import SignInForm from "./SignInForm";
import { useNavigate } from "react-router-dom";
import { pagesPath } from "../../../Hooks/useRouterConfig";
import { useFormik } from "formik";
import { signInValidSchema } from "../../Schemas/validations";
import { ISignInValues } from "../AuthTypes";
import { authApi } from "../../../Api/auth";
import Cookies from "js-cookie";

const SignInContainer = () => {
  const navigate = useNavigate();
  const goRedirect = () => navigate(pagesPath.registration);

  const handleOnSubmit = async (values: ISignInValues) => {
    try {
      const resData = await authApi.login(values);
      Cookies.set("apiToken", resData.token)
      navigate(pagesPath.home);
    } catch (e: any) {
      formik.setFieldError(e.key, e.msg);
    }
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