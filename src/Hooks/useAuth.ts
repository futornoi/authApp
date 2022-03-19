import { useEffect, useState } from "react";
import { useCookies } from "react-cookie";

interface IUseAuth {
  isAuth: boolean,
  token: string | null,
}

export const useAuth = () => {
  const [cookies, setCookies, removeCookies] = useCookies(["apiToken"]);
  const token = cookies["apiToken"] || null
  const [authInfo, setAuthInfo] = useState<IUseAuth>({
    isAuth: false,
    token: null
  });

  useEffect(() => {
    setAuthInfo({
      isAuth: !!token,
      token: token,
    });
  }, [])

  return {authInfo, setAuthInfo, setCookies, removeCookies};
}