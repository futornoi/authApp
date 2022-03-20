import { useEffect, useState } from "react";
import Cookies from "js-cookie";
import { IUser, usersApi } from "../Api/users";

interface IUseAuth {
  token: string | null,
  user: IUser | null
}

export const useAuth = () => {
  const token = Cookies.get("apiToken") || null
  const [authInfo, setAuthInfo] = useState<IUseAuth>({
    token: token,
    user: null
  });

  useEffect(() => {
    const getAuthData = async () => {
      if (!!token) {
        const data = await usersApi.getAuthUser(token);
        setAuthInfo(prev => ({
          ...prev,
          user: data
        }))
      }
    }
    getAuthData()
  }, [])

  return { authInfo, setAuthInfo };
}