import { lazy } from "react";

export const DashboardProfilePageAsync = lazy(
  () => import("./DashboardProfilePage")
);
