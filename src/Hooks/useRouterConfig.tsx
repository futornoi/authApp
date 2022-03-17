import { useRoutes } from "react-router-dom";
import SignInContainer from "../Components/Auth/SignIn/SignInContainer";
import RegistrationContainer from "../Components/Auth/Registration/RegistrationContainer";
import NotFound from "../Components/NotFound";
import HomeContainer from "../Components/Home/HomeContainer";

export enum pagesPath {
  signIn = '/signIn',
  registration = '/registration',
  notFound = '*',
  home = '/',
}

const notAuthConfig = [
  {path: pagesPath.signIn, element: <SignInContainer/>},
  {path: pagesPath.registration, element: <RegistrationContainer/>},
  {path: pagesPath.notFound, element: <NotFound/>}
]
const authConfig = [
  ...notAuthConfig,
  {path: pagesPath.home , element: <HomeContainer/>},
];

export const useRouterConfig = (isAuth: boolean) => {
  return useRoutes(isAuth ? authConfig : notAuthConfig)
}