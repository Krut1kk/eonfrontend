import { lazy } from "react";

export const DashboardSourcesPageLazy = lazy(
  () => import("./DashboardSourcesPage")
);
