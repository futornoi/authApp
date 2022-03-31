import { createContext } from "react";
import { IUseAuth } from "../Hooks/useAuth";

interface IAuthContext extends IUseAuth{
  login: ((token: string) => void),
  logout: (() => void),
}


export const AuthContext = createContext<IAuthContext>({
  user: null,
  token: null,
  login: () => {},
  logout: () => {}
})