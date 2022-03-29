import { useRoutes } from 'react-router-dom';
import SignInContainer from '../Components/Auth/SignIn/SignInContainer';
import RegistrationContainer from '../Components/Auth/Registration/RegistrationContainer';
import NotFound from '../Components/NotFound';
import HomeContainer from '../Components/Home/HomeContainer';

export enum pagesPath {
  signIn = '/signIn',
  registration = '/registration',
  notFound = '*',
  home = '/'
}

const config = [
  { path: pagesPath.signIn, element: <SignInContainer /> },
  { path: pagesPath.registration, element: <RegistrationContainer /> },
  { path: pagesPath.home, element: <HomeContainer /> },
  { path: pagesPath.notFound, element: <NotFound /> }
];

export const useRouterConfig = () => {
  return useRoutes(config);
};
