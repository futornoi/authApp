import { useState } from "react";
import Cookies from "js-cookie";

interface IUseAuth {
  isAuth: boolean,
  token: string | null,
}

export const useAuth = () => {
  const token = Cookies.get("apiToken") || null
  const [authInfo, setAuthInfo] = useState<IUseAuth>({
    isAuth: !!token,
    token: token
  });

  const handlerOnCookie = {
    setCookies: (token: string) => Cookies.set("apiToken", token),
    removeCookies: () => Cookies.remove("apiToken")
  }

  return {authInfo, setAuthInfo, handlerOnCookie};
}