import { useAuth } from "./useAuth";
import { RolesList } from "../Api/users";

export interface IUseRoles {
  admin: true | null,
  user: true | null,
}

export const useRoles = (): IUseRoles => {
  const { authInfo } = useAuth();
  const getRole = (role: RolesList) => authInfo.user?.roles.includes(role) || null

  return {
    admin: getRole(RolesList.ADMIN),
    user: getRole(RolesList.USER),
  }
}