// react
import { FC } from "react";
// items
import { navMenuItems } from "./navMenuItems";
// ui
import { NavLink } from "@/shared/ui/NavLink";
// styles
import styles from "./DashboardNavMenu.module.scss";

interface DashboardNavMenuProps {}

export const DashboardNavMenu: FC<DashboardNavMenuProps> = ({}) => {
  return (
    <div className={styles.DashboardNavMenu}>
      {navMenuItems.map((item) => (
        <NavLink key={item.text} to={item.to}>
          {item.text}
        </NavLink>
      ))}
    </div>
  );
};
