import { useRoutes } from "react-router-dom";
import SignInContainer from "../Components/Auth/SignIn/SignInContainer";
import RegistrationContainer from "../Components/Auth/Registration/RegistrationContainer";
import NotFound from "../Components/NotFound";

const notAuthConfig = [
  {path: '/signIn', element: <SignInContainer/>},
  {path: '/registration', element: <RegistrationContainer/>},
  {path: '*', element: <NotFound/>}
]
const authConfig = [
  ...notAuthConfig,
  {path: '/', element: <div>Home</div>},
];

export const useRouterConfig = (isAuth: boolean) => {
  return useRoutes(isAuth ? authConfig : notAuthConfig)
}