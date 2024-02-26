// react
import { FC } from "react";
import { Outlet } from "react-router-dom";
// ui
import { DashboardSideBar } from "../DashboardSideBar/DashboardSideBar";
// styles
import styles from "./DashboardLayout.module.scss";

interface DashboardLayoutProps {}

export const DashboardLayout: FC<DashboardLayoutProps> = ({}) => {
  return (
    <div className={styles.DashboardLayout}>
      <DashboardSideBar />
      <Outlet />
    </div>
  );
};
