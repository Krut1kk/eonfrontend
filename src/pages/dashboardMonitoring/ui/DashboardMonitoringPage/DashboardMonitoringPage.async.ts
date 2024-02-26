import { lazy } from "react";

export const DashboardMonitoringPageAsync = lazy(
  () => import("./DashboardMonitoringPage")
);
