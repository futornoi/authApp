import { useEffect, useState } from "react";
import Cookies from "js-cookie";
import { IUser, usersApi } from "../Api/users";
import { useNavigate } from "react-router-dom";
import { pagesPath } from "./useRouterConfig";

interface IUseAuth {
  token: string | null,
  user: IUser | null
}

export const useAuth = () => {
  const token = Cookies.get("apiToken") || null
  const navigate = useNavigate();
  const [authInfo, setAuthInfo] = useState<IUseAuth>({
    token: token,
    user: null,
  });

  useEffect(() => {
    const getAuthData = async () => {
      try {
        if (!!token) {
          const data = await usersApi.getAuthUser(token);
          setAuthInfo(prev => ({
            ...prev,
            user: data
          }))
        }
      } catch {
        Cookies.remove("apiToken");
        navigate(pagesPath.signIn);
      }
    }
    getAuthData()
  }, [])

  return { authInfo, setAuthInfo };
}