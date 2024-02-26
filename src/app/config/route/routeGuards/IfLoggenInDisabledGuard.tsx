// react
import { FC } from "react";
import { Outlet, Navigate } from "react-router-dom";
// redux
import { useSelector } from "react-redux";
import { getUserState } from "@/enteties/user";
// constants
import { getDashboardRoute } from "@/shared/libs/constants/routes";

interface IfLoggenInDisabledGuardProps {}

export const IfLoggenInDisabledGuard: FC<
  IfLoggenInDisabledGuardProps
> = ({}) => {
  const { isLoggedIn } = useSelector(getUserState);

  return !isLoggedIn ? <Outlet /> : <Navigate to={getDashboardRoute()} />;
};
