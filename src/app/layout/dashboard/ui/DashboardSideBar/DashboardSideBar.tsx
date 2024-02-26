// react
import { FC } from "react";
// widgets
import { SideBar } from "@/widgets/sibebar";
// ui
import { DashboardNavMenu } from "../DashboardNavMenu/DashboardNavMenu";
// styles
import styles from "./DashboardSideBar.module.scss";

interface DashboardSideBarProps {}

export const DashboardSideBar: FC<DashboardSideBarProps> = ({}) => {
  return (
    <SideBar>
      <DashboardNavMenu />
    </SideBar>
  );
};
