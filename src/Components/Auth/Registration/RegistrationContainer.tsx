import AuthLayout from "../AuthLayout";
import RegistrationForm from "./RegistrationForm";
import { useNavigate } from "react-router-dom";
import { pagesPath } from "../../../Hooks/useRouterConfig";

const RegistrationContainer = () => {
  const navigate = useNavigate();
  const goRedirect = () => navigate(pagesPath.signIn)

  return (
    <AuthLayout>
      <RegistrationForm goRedirect={goRedirect}/>
    </AuthLayout>
  )
}

export default RegistrationContainer