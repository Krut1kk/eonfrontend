// react
import { FC, Suspense } from "react";
import { Route, Routes } from "react-router-dom";
// route guards
import { IfLoggenInDisabledGuard } from "./routeGuards/IfLoggenInDisabledGuard";
import { AuthRequiredGuard } from "./routeGuards/AuthRequiredGuard";
// layouts
import { DashboardLayout } from "@/app/layout/dashboard";
// routes
import {
  getDashboardAccountConnectRoute,
  getDashboardMonitoringRoute,
  getDashboardRoute,
  getDashboardSourcesRoute,
  getHomeRoute,
} from "@/shared/libs/constants/routes";
// pages
import { HomePage } from "@/pages/home";
import { DashboardProfilePage } from "@/pages/dashboardProfile";
import { DashboardAccountConnectPage } from "@/pages/dashboardAccountConnect";
import { DashboardMonitoringPage } from "@/pages/dashboardMonitoring";
import { DashboardSourcesPage } from "@/pages/dashboardSources";

interface AppRouterProps {}

export const AppRouter: FC<AppRouterProps> = () => {
  return (
    // TODO fallback
    <Suspense fallback={<div>Loading...</div>}>
      <Routes>
        <Route element={<IfLoggenInDisabledGuard />}>
          <Route path={getHomeRoute()} element={<HomePage />} />
        </Route>
        <Route element={<AuthRequiredGuard />}>
          <Route element={<DashboardLayout />}>
            <Route
              path={getDashboardRoute()}
              element={<DashboardProfilePage />}
            />
            <Route
              path={getDashboardAccountConnectRoute()}
              element={<DashboardAccountConnectPage />}
            />
            <Route
              path={getDashboardMonitoringRoute()}
              element={<DashboardMonitoringPage />}
            />
            <Route
              path={getDashboardSourcesRoute()}
              element={<DashboardSourcesPage />}
            />
          </Route>
        </Route>
      </Routes>
    </Suspense>
  );
};
