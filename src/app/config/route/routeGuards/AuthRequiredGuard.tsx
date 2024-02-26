// react
import { FC } from "react";
import { Outlet, Navigate } from "react-router-dom";
// redux
import { useSelector } from "react-redux";
import { getUserState } from "@/enteties/user";
// constants
import { getHomeRoute } from "@/shared/libs/constants/routes";

interface AuthRequiredGuardProps {}

export const AuthRequiredGuard: FC<AuthRequiredGuardProps> = ({}) => {
  const { isLoggedIn } = useSelector(getUserState);

  return isLoggedIn ? <Outlet /> : <Navigate to={getHomeRoute()} />;
};
