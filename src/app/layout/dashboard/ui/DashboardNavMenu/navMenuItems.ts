// routes
import {
  getDashboardAccountConnectRoute,
  getDashboardMonitoringRoute,
  getDashboardRoute,
  getDashboardSourcesRoute,
} from "@/shared/libs/constants/routes";

export const navMenuItems = [
  { text: "Profile", to: getDashboardRoute() },
  { text: "Account Connect", to: getDashboardAccountConnectRoute() },
  { text: "Sources", to: getDashboardSourcesRoute() },
  { text: "Monitoring", to: getDashboardMonitoringRoute() },
];
