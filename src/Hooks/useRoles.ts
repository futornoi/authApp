import { useContext } from "react";
import { AuthContext } from "../Context/authContext";
import { RolesList } from "../Api/enums";

export interface IUseRoles {
  admin: true | null;
  user: true | null;
}

export const useRoles = (): IUseRoles => {
  const {user} = useContext(AuthContext);
  const getRole = (role: RolesList) => user?.roles.includes(role) || null;

  return {
    admin: getRole(RolesList.ADMIN),
    user: getRole(RolesList.USER)
  };
};
