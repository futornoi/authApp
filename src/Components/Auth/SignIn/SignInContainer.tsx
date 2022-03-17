import AuthLayout from "../AuthLayout";
import SignInForm from "./SignInForm";
import { useNavigate } from "react-router-dom";
import { pagesPath } from "../../../Hooks/useRouterConfig";

const SignInContainer = () => {
  const navigate = useNavigate();
  const goRedirect = () => navigate(pagesPath.registration)

  return (
    <AuthLayout>
      <SignInForm
        goRedirect={goRedirect}
      />
    </AuthLayout>
  )
}

export default SignInContainer